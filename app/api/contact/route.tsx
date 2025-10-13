import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    console.log("[v0] Received contact form submission")

    const body = await request.json()
    const { firstName, lastName, email, phone, service, message } = body

    console.log("[v0] Form data:", { firstName, lastName, email, phone, service })

    // Create transporter with Gmail SMTP settings
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: "mohsin.centosquare@gmail.com",
        pass: "mynsceelhfgbuqwx",
      },
      tls: {
        rejectUnauthorized: false,
      },
    })

    console.log("[v0] Transporter created successfully")

    // Email content
    const mailOptions = {
      from: '"Portfolio Contact Form" <mohsin.centosquare@gmail.com>',
      to: "mohsin.centosquare@gmail.com",
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #ffffff;
                background-color: #000000;
                margin: 0;
                padding: 20px;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #0a0a0a;
                border: 2px solid #22c55e;
                border-radius: 10px;
                padding: 30px;
              }
              h1 {
                color: #22c55e;
                margin-top: 0;
                border-bottom: 2px solid #22c55e;
                padding-bottom: 10px;
              }
              .field {
                margin-bottom: 20px;
                padding: 15px;
                background-color: #111111;
                border-left: 4px solid #22c55e;
                border-radius: 5px;
              }
              .label {
                color: #22c55e;
                font-weight: bold;
                display: block;
                margin-bottom: 5px;
              }
              .value {
                color: #ffffff;
                font-size: 16px;
              }
              .footer {
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #22c55e;
                text-align: center;
                color: #888888;
                font-size: 14px;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <h1>🎉 New Contact Form Submission</h1>
              
              <div class="field">
                <span class="label">Name:</span>
                <span class="value">${firstName} ${lastName}</span>
              </div>
              
              <div class="field">
                <span class="label">Email:</span>
                <span class="value">${email}</span>
              </div>
              
              <div class="field">
                <span class="label">Phone:</span>
                <span class="value">${phone || "Not provided"}</span>
              </div>
              
              <div class="field">
                <span class="label">Service:</span>
                <span class="value">${service}</span>
              </div>
              
              <div class="field">
                <span class="label">Message:</span>
                <span class="value">${message}</span>
              </div>
              
              <div class="footer">
                <p>This email was sent from your portfolio contact form</p>
                <p>Received at: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </body>
        </html>
      `,
    }

    console.log("[v0] Attempting to send email...")

    // Send email
    const info = await transporter.sendMail(mailOptions)

    console.log("[v0] Email sent successfully:", info.messageId)

    return NextResponse.json(
      {
        success: true,
        message: "Mail sent successfully!",
        messageId: info.messageId,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Failed to send email. Please try again.",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 },
    )
  }
}
