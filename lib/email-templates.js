export const getAdminNotificationEmail = (data) => {
  return {
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { 
              background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); 
              color: white; 
              padding: 30px; 
              text-align: center; 
              border-radius: 10px 10px 0 0; 
            }
            .content { 
              background: #f9fafb; 
              padding: 30px; 
              border-radius: 0 0 10px 10px; 
              border: 1px solid #e5e7eb;
            }
            .field { 
              margin-bottom: 20px; 
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #8B5CF6;
            }
            .label { 
              font-weight: bold; 
              color: #8B5CF6; 
              margin-bottom: 5px; 
              font-size: 12px;
              text-transform: uppercase;
            }
            .value { 
              color: #1f2937;
              font-size: 15px;
            }
            .footer { 
              text-align: center; 
              margin-top: 20px; 
              color: #6b7280; 
              font-size: 12px; 
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0;">🔔 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${data.email}" style="color: #3B82F6;">${data.email}</a></div>
              </div>
              
              ${data.phone ? `
                <div class="field">
                  <div class="label">Phone</div>
                  <div class="value"><a href="tel:${data.phone}" style="color: #3B82F6;">${data.phone}</a></div>
                </div>
              ` : ''}
              
              ${data.company ? `
                <div class="field">
                  <div class="label">Company</div>
                  <div class="value">${data.company}</div>
                </div>
              ` : ''}
              
              ${data.service ? `
                <div class="field">
                  <div class="label">Service Interested In</div>
                  <div class="value">${data.service}</div>
                </div>
              ` : ''}
              
              <div class="field">
                <div class="label">Message</div>
                <div class="value" style="white-space: pre-wrap;">${data.message}</div>
              </div>
              
              <div class="footer">
                Submitted on ${new Date().toLocaleString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </div>
            </div>
          </div>
        </body>
      </html>
    `
  }
}

export const getUserAcknowledgmentEmail = (name) => {
  return {
    subject: 'Thank you for contacting IgniAI Technologies',
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { 
              background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); 
              color: white; 
              padding: 40px; 
              text-align: center; 
              border-radius: 10px 10px 0 0; 
            }
            .content { 
              background: #f9fafb; 
              padding: 40px; 
              border-radius: 0 0 10px 10px; 
              border: 1px solid #e5e7eb;
            }
            .message {
              background: white;
              padding: 25px;
              border-radius: 8px;
              margin: 20px 0;
              border-left: 4px solid #8B5CF6;
            }
            .button { 
              display: inline-block; 
              background: linear-gradient(135deg, #8B5CF6 0%, #3B82F6 100%); 
              color: white !important; 
              padding: 14px 32px; 
              text-decoration: none; 
              border-radius: 8px; 
              margin: 20px 0;
              font-weight: bold;
            }
            .footer { 
              text-align: center; 
              margin-top: 30px; 
              padding-top: 20px;
              border-top: 1px solid #e5e7eb;
              color: #6b7280; 
              font-size: 14px; 
            }
            .contact-info {
              background: white;
              padding: 20px;
              border-radius: 8px;
              margin-top: 20px;
            }
            .contact-info a {
              color: #3B82F6;
              text-decoration: none;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 style="margin: 0; font-size: 32px;">✅ Message Received!</h1>
            </div>
            <div class="content">
              <div class="message">
                <p style="margin: 0 0 15px 0; font-size: 16px;">Hi <strong>${name}</strong>,</p>
                <p style="margin: 0 0 15px 0;">Thank you for reaching out to <strong>IgniAI Technologies</strong>!</p>
                <p style="margin: 0 0 15px 0;">We've received your message and our team will review it shortly. We typically respond within <strong>24 hours during business days</strong>.</p>
                <p style="margin: 0;">In the meantime, feel free to explore our services and learn more about how we can help transform your business.</p>
              </div>

              <div style="text-align: center;">
                <a href="${process.env.NEXT_PUBLIC_SITE_URL}/services" class="button">
                  View Our Services →
                </a>
              </div>

              <div class="contact-info">
                <h3 style="margin: 0 0 15px 0; color: #1f2937;">Contact Information</h3>
                <p style="margin: 5px 0;">
                  <strong>Email:</strong> <a href="mailto:contact@igniai.com">contact@igniai.com</a>
                </p>
                <p style="margin: 5px 0;">
                  <strong>Phone:</strong> <a href="tel:+919876543210">+91 98765 43210</a>
                </p>
                <p style="margin: 5px 0;">
                  <strong>Location:</strong> Hyderabad, India
                </p>
              </div>

              <div class="footer">
                <p style="margin: 0 0 10px 0;"><strong>Best regards,</strong></p>
                <p style="margin: 0 0 20px 0;">The IgniAI Technologies Team</p>
                <p style="font-size: 12px; color: #9ca3af;">
                  If you didn't submit this form, please ignore this email or contact us immediately.
                </p>
              </div>
            </div>
          </div>
        </body>
      </html>
    `
  }
}