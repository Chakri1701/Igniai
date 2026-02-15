import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { contactMessages } from '@/lib/db/schema'

export async function POST(request) {
  try {
    const { name, email, phone, message } = await request.json()

    const db = getDb()

    await db.insert(contactMessages).values({
      name,
      email,
      phone,
      message,
    })

    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    )
  }
}