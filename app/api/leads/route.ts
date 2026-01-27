import { NextRequest, NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface LeadData {
  name: string
  phone: string
  email?: string
  treatment?: string
  procedure?: string
  message?: string
  city?: string
  age?: string
  pincode?: string
  test?: string
  source?: string
  formName?: string
  consent?: boolean
  status?: string
}

// Debug: Log environment status
function logEnvironmentStatus() {
  console.log('🔍 Environment Check:', {
    NODE_ENV: process.env.NODE_ENV,
    DATABASE_URL: process.env.DATABASE_URL ? '***SET***' : '❌ NOT SET',
    TELECRM_API_URL: process.env.TELECRM_API_URL ? '***SET***' : '❌ NOT SET',
    TELECRM_API_KEY: process.env.TELECRM_API_KEY ? '***SET***' : '❌ NOT SET',
  });
}

/**
 * Save lead to database using Prisma
 */
async function saveLeadToDatabase(leadData: LeadData, telecrmResult?: any) {
  try {
    console.log('💾 Saving lead to database:', {
      name: leadData.name,
      phone: leadData.phone,
      email: leadData.email,
      treatment: leadData.treatment || leadData.test
    });

    const lead = await prisma.lead.create({
      data: {
        name: leadData.name,
        phone: leadData.phone,
        email: leadData.email || null,
        treatment: leadData.treatment || leadData.test || null,
        procedure: leadData.procedure || leadData.test || null,
        message: leadData.message || null,
        pincode: leadData.pincode || null,
        consent: leadData.consent || false,
        source: leadData.source || null,
        formName: leadData.formName || 'Health Checkup Form',
        status: leadData.status || 'new',
        telecrmSynced: telecrmResult?.synced || false,
        telecrmId: telecrmResult?.leadId || telecrmResult?.id || null,
      }
    });

    console.log('✅ Lead saved to database:', {
      id: lead.id,
      name: lead.name,
      phone: lead.phone,
      createdAt: lead.createdAt
    });

    return lead;
  } catch (error) {
    console.error('❌ Failed to save lead to database:', error);
    throw error;
  }
}

/**
 * Send lead data to TeleCRM (optional)
 */
async function sendToTeleCRM(leadData: LeadData) {
  // Only send to TeleCRM if configured
  if (!process.env.TELECRM_API_URL || !process.env.TELECRM_API_KEY) {
    console.log('ℹ️ TeleCRM not configured, skipping external sync');
    return null;
  }

  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000)

  try {
    const telecrmPayload = {
      fields: {
        Id: "",
        name: leadData.name,
        email: leadData.email || "",
        phone: leadData.phone.replace(/\D/g, ''),
        city_1: leadData.pincode || "",
        message: leadData.message || "",
        select_the_procedure: leadData.test || "",
        Country: "",
        LeadID: "",
        "CreatedOn": new Date().toLocaleString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        }),
        "Lead Stage": "",
        "Lead Status": "new",
        "Lead Request Type": "health_checkup",
        "PageName": leadData.source || "https://package.fastest.health/",
        "State": "",
        "Age": "",
        "FormName": leadData.formName || "Health Checkup Form",
        "Pincode": leadData.pincode || "",
        "Test_Requested": leadData.test || ""
      },
      actions: [
        {
          "type": "SYSTEM_NOTE",
          "text": `Form Name: ${leadData.formName || 'Health Checkup Form'}`
        },
        {
          "type": "SYSTEM_NOTE", 
          "text": `Test Requested: ${leadData.test || 'Not specified'}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Pincode: ${leadData.pincode || 'Not specified'}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Consent Given: ${leadData.consent ? 'Yes' : 'No'}`
        }
      ]
    }

    console.log('📤 Sending to TeleCRM:', {
      endpoint: process.env.TELECRM_API_URL.replace(/(?<=:\/\/)[^@]+@/g, '***@'),
    });

    const response = await fetch(process.env.TELECRM_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TELECRM_API_KEY}`,
        'X-Client-ID': 'nextjs-website-integration',
        'Accept': 'application/json',
      },
      body: JSON.stringify(telecrmPayload),
      signal: controller.signal,
    })

    if (response.status === 204) {
      clearTimeout(timeout)
      return { 
        status: 'success', 
        message: 'Lead created (204 No Content)',
        synced: true
      }
    }

    const responseText = await response.text()
    
    if (responseText.trim().startsWith('<!DOCTYPE') || responseText.trim().startsWith('<html')) {
      console.warn('⚠️ HTML response from TeleCRM');
      return null;
    }

    try {
      const data = responseText ? JSON.parse(responseText) : {}
      if (!response.ok) {
        console.warn('⚠️ TeleCRM returned error:', data.message);
        return null;
      }
      clearTimeout(timeout)
      return {
        ...data,
        synced: true
      }
    } catch {
      console.warn('⚠️ Invalid JSON from TeleCRM');
      return null;
    }
  } catch (error) {
    clearTimeout(timeout)
    console.warn('⚠️ TeleCRM submission failed:', error instanceof Error ? error.message : String(error));
    return null;
  }
}

/**
 * Handle POST request for lead submission
 */
export async function POST(request: NextRequest) {
  logEnvironmentStatus();

  let data: Partial<LeadData> = {};

  try {
    data = await request.json()
    console.log('📨 Received lead submission:', {
      name: data.name,
      phone: data.phone,
      formName: data.formName
    });

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields',
          details: 'Please provide name and phone number' 
        },
        { status: 400 }
      )
    }

    const validatedData = data as LeadData;

    // Step 1: Try to send to TeleCRM (optional)
    let telecrmResponse = null;
    if (process.env.TELECRM_API_URL && process.env.TELECRM_API_KEY) {
      telecrmResponse = await sendToTeleCRM(validatedData);
    }

    // Step 2: Save to database (MANDATORY)
    let dbLead = null;
    try {
      dbLead = await saveLeadToDatabase(validatedData, telecrmResponse);
    } catch (error) {
      console.error('❌ CRITICAL: Database save failed:', error);
      // Even if database fails, we should try to at least log the lead
      return NextResponse.json(
        {
          success: false,
          error: 'Failed to save your request',
          details: 'Please contact support directly',
          referenceId: `ERR-${Date.now()}`,
        },
        { status: 500 }
      );
    }

    // Success response
    return NextResponse.json(
      {
        success: true,
        leadId: dbLead?.id,
        databaseSaved: true,
        telecrmSynced: !!telecrmResponse?.synced,
        telecrmResponse: telecrmResponse,
        timestamp: new Date().toISOString(),
        formName: data.formName || 'Health Checkup Form',
        message: 'Thank you! We have received your request and will contact you soon.'
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('❌ Lead submission error:', error)

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your request',
        details: 'Please try again or contact support',
        referenceId: `ERR-${Date.now()}`,
        formName: data?.formName || 'Health Checkup Form'
      },
      { status: 500 }
    )
  }
}

/**
 * Handle GET request to fetch all leads
 */
export async function GET(request: NextRequest) {
  try {
    // Parse query parameters
    const { searchParams } = new URL(request.url);
    const search = searchParams.get('search') || '';
    const status = searchParams.get('status');
    const formName = searchParams.get('formName');
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '100');
    const skip = (page - 1) * limit;

    // Build where clause
    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: 'insensitive' } },
        { phone: { contains: search, mode: 'insensitive' } },
        { email: { contains: search, mode: 'insensitive' } },
        { treatment: { contains: search, mode: 'insensitive' } },
        { message: { contains: search, mode: 'insensitive' } },
        { pincode: { contains: search, mode: 'insensitive' } },
      ];
    }

    if (status && status !== 'all') {
      where.status = status;
    }

    if (formName && formName !== 'all') {
      where.formName = formName;
    }

    // Fetch leads with pagination
    const [leads, total] = await Promise.all([
      prisma.lead.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
      }),
      prisma.lead.count({ where }),
    ]);

    return NextResponse.json({
      success: true,
      leads: leads.map((lead: any) => ({
        id: lead.id,
        name: lead.name,
        phone: lead.phone,
        email: lead.email,
        treatment: lead.treatment,
        procedure: lead.procedure,
        message: lead.message,
        city: lead.city,
        age: lead.age,
        pincode: lead.pincode,
        consent: lead.consent,
        source: lead.source,
        formName: lead.formName,
        status: lead.status,
        telecrmSynced: lead.telecrmSynced,
        telecrmId: lead.telecrmId,
        createdAt: lead.createdAt.toISOString(),
        updatedAt: lead.updatedAt.toISOString(),
      })),
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    }, { status: 200 });
  } catch (error) {
    console.error('Error fetching leads:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch leads',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}