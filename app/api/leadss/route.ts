import { NextRequest, NextResponse } from 'next/server'

interface LeadData {
  name: string
  phone: string
  email?: string
  procedure?: string
  date?: string
  time?: string
  message?: string
  city?: string
  age?: string
  treatment?: string
  preferredDate?: string
  consent?: boolean
  source?: string
}

/**
 * Send lead data to TeleCRM
 */
async function sendToTeleCRM(leadData: LeadData) {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 15000) // 15s timeout

  const endpoint = process.env.TELECRM_API_URL || 'https://api.telecrm.in/api/v1/leadss'

  if (!process.env.TELECRM_API_KEY) {
    throw new Error('TELECRM_API_KEY environment variable is not set')
  }

  try {
    // Prepare the TeleCRM payload according to their API structure
    const telecrmPayload = {
      name: leadData.name,
      email: leadData.email || "",
      phone: leadData.phone.replace(/\D/g, ''), // Only digits
      source: leadData.source || "website-form",
      custom_fields: {
        city: leadData.city || "",
        preferred_time: leadData.time || leadData.preferredDate || "",
        preferred_date: leadData.date || leadData.preferredDate || "",
        message: leadData.message || "",
        procedure: leadData.procedure || leadData.treatment || "",
        age: leadData.age || "",
        consent: leadData.consent ? "Yes" : "No"
      }
    }

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.TELECRM_API_KEY}`,
        'Accept': 'application/json',
      },
      body: JSON.stringify(telecrmPayload),
      signal: controller.signal,
    })

    clearTimeout(timeout)

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`TeleCRM API error: ${response.status} ${response.statusText} - ${errorText}`)
    }

    return await response.json()
  } catch (error) {
    clearTimeout(timeout)
    throw error instanceof Error ? error : new Error(String(error))
  }
}

/**
 * Handle POST request
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Validate required fields
    if (!data.name || !data.phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone' },
        { status: 400 }
      )
    }

    // Attempt TeleCRM submission
    const telecrmResponse = await sendToTeleCRM(data)

    return NextResponse.json(
      {
        success: true,
        telecrmResponse,
        timestamp: new Date().toISOString(),
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('TeleCRM submission error:', {
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    })

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to submit to TeleCRM',
        details: error instanceof Error ? error.message : 'Unknown error',
        referenceId: `ERR-${Date.now()}`,
      },
      { status: 500 }
    )
  }
}