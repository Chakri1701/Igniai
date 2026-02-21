import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Resend } from 'resend'
import { getAdminNotificationEmail, getUserAcknowledgmentEmail } from '@/lib/email-templates'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, company, service, message } = body

    console.log('📧 Contact form submission:', { name, email })

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required' },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      )
    }

    // Save to database
    const contact = await prisma.contact.create({
      data: {
        name,
        email,
        phone: phone || null,
        company: company || null,
        service: service || null,
        message,
      },
    })

    console.log('✅ Contact saved to database:', contact.id)

    // Send email to admin
    try {
      const adminEmail = getAdminNotificationEmail(body)
      await resend.emails.send({
        from: 'IgniAI Contact <onboarding@resend.dev>',
        to: process.env.ADMIN_EMAIL,
        subject: adminEmail.subject,
        html: adminEmail.html,
      })
      console.log('✅ Admin notification sent')
    } catch (emailError) {
      console.error('⚠️ Failed to send admin email:', emailError)
    }

    // Send acknowledgment email to user
    try {
      const userEmail = getUserAcknowledgmentEmail(name)
      await resend.emails.send({
        from: 'IgniAI Technologies <onboarding@resend.dev>',
        to: email,
        subject: userEmail.subject,
        html: userEmail.html,
      })
      console.log('✅ User acknowledgment sent to:', email)
    } catch (emailError) {
      console.error('⚠️ Failed to send user email:', emailError)
    }

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your message has been received. Check your email for confirmation.',
      data: { id: contact.id }
    })

  } catch (error) {
    console.error('❌ Contact form error:', error)
    return NextResponse.json(
      { success: false, error: 'Failed to send message. Please try again.' },
      { status: 500 }
    )
  }
}