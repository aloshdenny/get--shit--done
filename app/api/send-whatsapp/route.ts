import { NextResponse } from 'next/server'
import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER
const toNumber = process.env.YOUR_WHATSAPP_NUMBER

const client = twilio(accountSid, authToken)

export async function POST(request: Request) {
  const { email, task } = await request.json()

  try {
    await client.messages.create({
      body: `New task from ${email}: ${task}`,
      from: `whatsapp:${fromNumber}`,
      to: `whatsapp:${toNumber}`
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    return NextResponse.json({ success: false, error: 'Failed to send message' }, { status: 500 })
  }
}

