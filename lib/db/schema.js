import { pgTable, serial, text, timestamp, integer, boolean, uuid } from 'drizzle-orm/pg-core'

// Users Table
export const users = pgTable('users', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  emailVerified: timestamp('email_verified'),
  password: text('password').notNull(),
  phone: text('phone'),
  image: text('image'),
  createdAt: timestamp('created_at').defaultNow(),
})

// Verification Tokens Table (for email verification)
export const verificationTokens = pgTable('verification_tokens', {
  identifier: text('identifier').notNull(),
  token: text('token').notNull().unique(),
  expires: timestamp('expires').notNull(),
})

// Contact Messages Table
export const contactMessages = pgTable('contact_messages', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  message: text('message').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

// Job Applications Table
export const jobApplications = pgTable('job_applications', {
  id: serial('id').primaryKey(),
  userId: uuid('user_id').references(() => users.id),
  fullName: text('full_name').notNull(),
  email: text('email').notNull(),
  phone: text('phone').notNull(),
  dateOfBirth: text('date_of_birth'),
  gender: text('gender'),
  address: text('address'),
  city: text('city'),
  state: text('state'),
  pincode: text('pincode'),
  education: text('education'),
  university: text('university'),
  graduationYear: text('graduation_year'),
  skills: text('skills'),
  experienceYears: text('experience_years'),
  previousCompany: text('previous_company'),
  jobPosition: text('job_position').notNull(),
  resumeUrl: text('resume_url').notNull(),
  coverLetter: text('cover_letter'),
  linkedinUrl: text('linkedin_url'),
  portfolioUrl: text('portfolio_url'),
  expectedSalary: text('expected_salary'),
  availableFrom: text('available_from'),
  status: text('status').default('pending'),
  createdAt: timestamp('created_at').defaultNow(),
})

export const emailVerificationCodes = pgTable('email_verification_codes', {
  id: serial('id').primaryKey(),
  email: text('email').notNull(),
  code: text('code').notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})