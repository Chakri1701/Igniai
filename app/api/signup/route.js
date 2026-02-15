import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { users, emailVerificationCodes } from '@/lib/db/schema'
import { eq } from 'drizzle-orm'
import bcrypt from 'bcryptjs'
import { sendVerificationEmail } from '@/lib/email'

// Generate 6-digit verification code
function generateVerificationCode() {
  return Math.floor(100000 + Math.random() * 900000).toString()
}

export async function POST(request) {
  try {
    const { name, email, phone, password } = await request.json()

    const db = getDb()

    // Check if user already exists
    const existingUser = await db.select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1)

    if (existingUser.length > 0) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    // Create user (unverified)
    await db.insert(users).values({
      name,
      email,
      phone,
      password: hashedPassword,
      emailVerified: null,
    })

    // Generate verification code
    const verificationCode = generateVerificationCode()
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours

    // Save verification code
    await db.insert(emailVerificationCodes).values({
      email,
      code: verificationCode,
      expiresAt,
    })

    // Send verification email
    await sendVerificationEmail(email, name, verificationCode)

    return NextResponse.json(
      { 
        message: 'Account created! Please check your email for verification code.',
        requiresVerification: true 
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: error.message || 'Internal server error' },
      { status: 500 }
    )
  }
}