import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendVerificationEmail(email, name, token) {
  const verificationUrl = `${process.env.NEXTAUTH_URL}/verify-email?token=${token}`

  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Verify your IgniaIT account',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #00ff88, #0088ff); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: #000; margin: 0; font-size: 28px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: linear-gradient(135deg, #00ff88, #0088ff); color: #000; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
            .code { background: #fff; border: 2px dashed #00ff88; padding: 20px; text-align: center; font-size: 32px; font-weight: bold; letter-spacing: 5px; color: #00ff88; margin: 20px 0; border-radius: 8px; }
            .footer { text-align: center; margin-top: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🚀 Welcome to IgniaIT!</h1>
            </div>
            <div class="content">
              <h2>Hi ${name}! 👋</h2>
              <p>Thank you for signing up with IgniaIT! We're excited to help you ignite your career.</p>
              
              <p>To complete your registration, please verify your email address using the code below:</p>
              
              <div class="code">${token}</div>
              
              <p style="text-align: center;">Or click the button below:</p>
              
              <p style="text-align: center;">
                <a href="${verificationUrl}" class="button">Verify Email Address</a>
              </p>
              
              <p><strong>This verification code will expire in 24 hours.</strong></p>
              
              <p>If you didn't create an account with IgniaIT, you can safely ignore this email.</p>
              
              <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
              
              <p style="color: #666; font-size: 14px;">
                <strong>IgniaIT</strong><br>
                Empowering Youth Careers<br>
                Hyderabad, India
              </p>
            </div>
            <div class="footer">
              <p>&copy; 2024 IgniaIT. All rights reserved.</p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send verification email:', error)
    return { success: false, error: error.message }
  }
}

export async function sendWelcomeEmail(email, name) {
  try {
    await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: email,
      subject: 'Welcome to IgniaIT! 🎉',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #00ff88, #0088ff); padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .header h1 { color: #000; margin: 0; font-size: 28px; }
            .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
            .button { display: inline-block; background: linear-gradient(135deg, #00ff88, #0088ff); color: #000; padding: 15px 40px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>✅ Email Verified!</h1>
            </div>
            <div class="content">
              <h2>Welcome aboard, ${name}! 🎉</h2>
              <p>Your email has been successfully verified. You're all set to explore career opportunities!</p>
              
              <p>Here's what you can do next:</p>
              <ul>
                <li>🔍 <strong>Explore Opportunities</strong> - Browse exciting job openings</li>
                <li>📝 <strong>Apply for Jobs</strong> - Submit your applications with ease</li>
                <li>💬 <strong>Get Support</strong> - Contact us anytime for guidance</li>
              </ul>
              
              <p style="text-align: center;">
                <a href="${process.env.NEXTAUTH_URL}" class="button">Visit IgniaIT</a>
              </p>
              
              <p>We're here to help you ignite your career. Let's get started!</p>
              
              <p>Best regards,<br><strong>The IgniaIT Team</strong></p>
            </div>
          </div>
        </body>
        </html>
      `,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to send welcome email:', error)
    return { success: false, error: error.message }
  }
}