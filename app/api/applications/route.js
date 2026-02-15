import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'
import { jobApplications } from '@/lib/db/schema'

export async function POST(request) {
  try {
    const data = await request.json()

    const db = getDb()

    await db.insert(jobApplications).values({
      fullName: data.full_name,
      email: data.email,
      phone: data.phone,
      dateOfBirth: data.date_of_birth,
      gender: data.gender,
      address: data.address,
      city: data.city,
      state: data.state,
      pincode: data.pincode,
      education: data.education,
      university: data.university,
      graduationYear: data.graduation_year,
      skills: data.skills,
      experienceYears: data.experience_years,
      previousCompany: data.previous_company,
      jobPosition: data.job_position,
      resumeUrl: data.resume_url,
      coverLetter: data.cover_letter,
      linkedinUrl: data.linkedin_url,
      portfolioUrl: data.portfolio_url,
      expectedSalary: data.expected_salary,
      availableFrom: data.available_from,
      status: 'pending',
    })

    return NextResponse.json(
      { message: 'Application submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}