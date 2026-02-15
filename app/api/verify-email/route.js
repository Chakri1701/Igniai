import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { users, emailVerificationCodes } from '@/lib/db/schema'
import { eq, and, gt } from 'drizzle-orm'
import { sendWelcomeEmail } from '@/lib/email'

export async function POST(request) {
  try {
    const { email, code } = await request.json()

    const db = getDb()

    // Find verification code
    const verificationRecord = await db.select()
      .from(emailVerificationCodes)
      .where(
        and(
          eq(emailVerificationCodes.email, email),
          eq(emailVerificationCodes.code, code),
          gt(emailVerificationCodes.expiresAt, new Date())
        )
      )
      .limit(1)

    if (verificationRecord.length === 0) {
      return NextResponse.json(
        { error: 'Invalid or expired verification code' },
        { status: 400 }
      )
    }

    // Update user as verified
    await db.update(users)
      .set({ emailVerified: new Date() })
      .where(eq(users.email, email))

    // Delete used verification code
    await db.delete(emailVerificationCodes)
      .where(eq(emailVerificationCodes.email, email))

    // Get user details
    const user = await db.select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1)

    // Send welcome email
    if (user.length > 0) {
      await sendWelcomeEmail(email, user[0].name)
    }

    return NextResponse.json(
      { message: 'Email verified successfully!' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Verification error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}
