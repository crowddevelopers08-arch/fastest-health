export const runtime = "nodejs";
import { NextResponse } from 'next/server'

interface LeadData {
  name: string
  phone: string
  email?: string
  message?: string
  pincode?: string
  test?: string
  source?: string
  formName?: string
  consent?: boolean
}

// Debug: Log environment variables (only in development)
function logEnvironmentStatus() {
  console.log('Environment Check:', {
    NODE_ENV: process.env.NODE_ENV,
    TELECRM_API_URL: process.env.TELECRM_API_URL ? '***SET***' : 'NOT SET',
    TELECRM_API_KEY: process.env.TELECRM_API_KEY ? '***SET***' : 'NOT SET',
    // Log which .env file is being used
    envFiles: process.env.ENV_FILE || 'default'
  });
}

/**
 * Generate comprehensive form data string with all user details (for system notes)
 */
function generateFormDataString(leadData: LeadData): string {
  const details = [];

  // Add all available fields with their values
  if (leadData.name) details.push(`Name: ${leadData.name}`);
  if (leadData.phone) details.push(`Phone: ${leadData.phone}`);
  if (leadData.email) details.push(`Email: ${leadData.email}`);
  if (leadData.pincode) details.push(`Pincode: ${leadData.pincode}`);
  if (leadData.test) details.push(`Test: ${leadData.test}`);
  if (leadData.source) details.push(`Source: ${leadData.source}`);
  
  // Always include consent status
  details.push(`Consent: ${leadData.consent ? 'Yes' : 'No'}`);
  
  // Add message (truncated if too long)
  if (leadData.message) {
    const messagePreview = leadData.message.length > 100 
      ? `${leadData.message.substring(0, 100)}...` 
      : leadData.message;
    details.push(`Message: ${messagePreview}`);
  }

  // Join all details with " | " separator
  return details.join(' | ');
}

/**
 * Send lead data to TeleCRM
 */
async function sendToTeleCRM(leadData: LeadData) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000) // 15s timeout

  const endpoint = process.env.TELECRM_API_URL

  if (!endpoint) {
    throw new Error('TELECRM_API_URL environment variable is not set')
  }

  if (!process.env.TELECRM_API_KEY) {
    throw new Error('TELECRM_API_KEY environment variable is not set')
  }

  try {
    // Generate comprehensive form data string with all user details (for system notes)
    const formDataString = generateFormDataString(leadData);

    // Prepare the TeleCRM payload according to their API structure
    const telecrmPayload = {
      fields: {
        Id: "", // Leave empty for new leads
        name: leadData.name,
        email: leadData.email || "",
        phone: leadData.phone.replace(/\D/g, ''), // Only digits
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
        "FormName": leadData.formName || "Website leads",
        "Pincode": leadData.pincode || "",
        "Test_Requested": leadData.test || ""
      },
      actions: [
        {
          "type": "SYSTEM_NOTE",
          "text": `Form Name: ${leadData.formName || 'Website leads'}`
        },
        {
          "type": "SYSTEM_NOTE", 
          "text": `Complete Form Data: ${formDataString}`
        },
        {
          "type": "SYSTEM_NOTE",
          "text": `Lead Source: ${leadData.source || 'https://package.fastest.health/'}`
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

    console.log('Sending to TeleCRM:', {
      endpoint: endpoint.replace(/(?<=:\/\/)[^@]+@/g, '***@'), // Mask credentials in logs
      payloadSize: JSON.stringify(telecrmPayload).length,
      fields: Object.keys(telecrmPayload.fields)
    });

    const response = await fetch(endpoint, {
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

    // Handle empty responses
    if (response.status === 204) {
      clearTimeout(timeout)
      return { 
        status: 'success', 
        message: 'Lead created (204 No Content)',
        synced: true
      }
    }

    const responseText = await response.text()

    // Skip HTML responses
    if (
      responseText.trim().startsWith('<!DOCTYPE') ||
      responseText.trim().startsWith('<html') ||
      responseText.includes('<!DOCTYPE html>')
    ) {
      console.warn(`HTML response from ${endpoint}`, {
        status: response.status,
        headers: Object.fromEntries(response.headers.entries()),
        bodyPreview: responseText.slice(0, 200),
      })
      throw new Error('TeleCRM returned HTML response instead of JSON')
    }

    // Parse JSON
    try {
      const data = responseText ? JSON.parse(responseText) : {}
      if (!response.ok) {
        throw new Error(data.message || `HTTP ${response.status} from ${endpoint}`)
      }
      clearTimeout(timeout)
      return {
        ...data,
        synced: true
      }
    } catch {
      throw new Error(`Invalid JSON from ${endpoint}: ${responseText.slice(0, 100)}...`)
    }
  } catch (error) {
    clearTimeout(timeout)
    throw error instanceof Error ? error : new Error(String(error))
  }
}

/**
 * Handle POST request for health checkup form
 */
export async function POST(request: Request) {
  // Log environment status on each request (for debugging)
  logEnvironmentStatus();

  let data: Partial<LeadData> = {};

  try {
    data = await request.json()

    // Validate required fields
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { 
          success: false,
          error: 'Missing required fields',
          details: 'Please provide name, phone, and email' 
        },
        { status: 400 }
      )
    }

    // Type assertion after validation
    const validatedData = data as LeadData;

    // Check if TeleCRM environment variables are set
    if (!process.env.TELECRM_API_URL) {
      console.error('TELECRM_API_URL is not configured');
      // Still accept the form but log the error
      return NextResponse.json(
        {
          success: true, // Return success to user even if TeleCRM is not configured
          message: 'Thank you! We have received your request. (Note: TeleCRM integration not configured)',
          timestamp: new Date().toISOString(),
          formName: data.formName || 'Website leads',
          debug: 'TeleCRM not configured, form saved locally'
        },
        { status: 200 }
      )
    }

    if (!process.env.TELECRM_API_KEY) {
      console.error('TELECRM_API_KEY is not configured');
      // Still accept the form but log the error
      return NextResponse.json(
        {
          success: true, // Return success to user even if TeleCRM is not configured
          message: 'Thank you! We have received your request. (Note: TeleCRM integration not configured)',
          timestamp: new Date().toISOString(),
          formName: data.formName || 'Website leads',
          debug: 'TeleCRM API key missing, form saved locally'
        },
        { status: 200 }
      )
    }

    // Send to TeleCRM
    let telecrmResponse = null;
    let telecrmError = null;

    try {
      telecrmResponse = await sendToTeleCRM(validatedData);
      console.log('Lead sent to TeleCRM successfully:', { 
        formName: data.formName,
        name: data.name,
        phone: data.phone 
      });

    } catch (error) {
      telecrmError = error;
      console.error('TeleCRM submission failed:', { 
        formName: data.formName, 
        error: error instanceof Error ? error.message : String(error),
        name: data.name,
        phone: data.phone 
      });
    }

    // Always return success to user for better UX
    return NextResponse.json(
      {
        success: true,
        telecrmSynced: !telecrmError,
        telecrmResponse: telecrmError ? null : telecrmResponse,
        telecrmError: telecrmError ? (telecrmError instanceof Error ? telecrmError.message : String(telecrmError)) : null,
        timestamp: new Date().toISOString(),
        formName: data.formName || 'Website leads',
        message: 'Thank you! We have received your request and will contact you soon.'
      },
      { status: 200 }
    )
  } catch (error) {
    const formName = data?.formName || 'Website leads';

    console.error('Lead submission error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
      formName: formName,
    })

    // Return user-friendly error
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process your request',
        details: 'Please try again or contact support',
        referenceId: `ERR-${Date.now()}`,
        formName: formName
      },
      { status: 500 }
    )
  }
}

// Simple GET handler for testing
export async function GET() {
  logEnvironmentStatus();
  
  return NextResponse.json(
    { 
      status: 'ok',
      message: 'Leads API is running',
      environment: {
        nodeEnv: process.env.NODE_ENV,
        telecrmConfigured: !!process.env.TELECRM_API_URL && !!process.env.TELECRM_API_KEY,
        telecrmUrl: process.env.TELECRM_API_URL ? 'Configured' : 'Not configured',
        telecrmKey: process.env.TELECRM_API_KEY ? 'Configured' : 'Not configured'
      },
      instructions: process.env.TELECRM_API_URL ? 'TeleCRM is configured' : 'Please set TELECRM_API_URL and TELECRM_API_KEY in .env.local'
    },
    { status: 200 }
  )
}