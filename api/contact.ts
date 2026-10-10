import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, phone, email, service, date, time, message, formType } = body || {};

    if (!name || !phone) {
      return res.status(400).json({ error: "Name and phone number are required." });
    }

    const smtpUser = process.env.SMTP_USER || "zyradigitalsofficial@gmail.com";
    const smtpPass = (process.env.SMTP_PASS || "tlqoagvxyfizbots").replace(/\s+/g, "");
    const recipientEmail = process.env.CONTACT_RECIPIENT_EMAIL || "zyradigitalsofficial@gmail.com";

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const isAppointment = formType === "appointment";
    const subject = isAppointment
      ? `🏥 New Appointment Booking: ${name} (${service || "General"})`
      : `📩 New Contact Form Submission from ${name}`;

    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background-color: #0f766e; color: #ffffff; padding: 24px; text-align: center;">
          <h2 style="margin: 0; font-size: 24px;">Phoenix Mediclinic</h2>
          <p style="margin: 6px 0 0 0; font-size: 14px; opacity: 0.9;">${isAppointment ? "New Appointment Booking Request" : "New Website Contact Inquiry"}</p>
        </div>
        <div style="padding: 28px; background-color: #ffffff; color: #333333;">
          <p style="font-size: 16px; margin-top: 0;">You have received a new inquiry via the website form:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 12px; font-weight: bold; width: 130px; border-bottom: 1px solid #f0f0f0; background: #fafafa;">Name:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f0f0f0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #f0f0f0; background: #fafafa;">Phone:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f0f0f0;"><a href="tel:${phone}" style="color: #0f766e; text-decoration: none; font-weight: 600;">${phone}</a></td>
            </tr>
            ${email ? `
            <tr>
              <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #f0f0f0; background: #fafafa;">Email:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #0f766e; text-decoration: none;">${email}</a></td>
            </tr>` : ""}
            ${service ? `
            <tr>
              <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #f0f0f0; background: #fafafa;">Service:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f0f0f0;">${service}</td>
            </tr>` : ""}
            ${date ? `
            <tr>
              <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #f0f0f0; background: #fafafa;">Preferred Date:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f0f0f0;">${date}</td>
            </tr>` : ""}
            ${time ? `
            <tr>
              <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #f0f0f0; background: #fafafa;">Preferred Time:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f0f0f0;">${time}</td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding: 12px; font-weight: bold; border-bottom: 1px solid #f0f0f0; background: #fafafa; vertical-align: top;">Message/Notes:</td>
              <td style="padding: 12px; border-bottom: 1px solid #f0f0f0; white-space: pre-wrap;">${message}</td>
            </tr>` : ""}
          </table>
        </div>
        <div style="background-color: #f9fafb; padding: 16px; text-align: center; font-size: 12px; color: #666666; border-top: 1px solid #eeeeee;">
          Received on ${new Date().toLocaleString()} · Phoenix Mediclinic Notification System
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Phoenix Mediclinic" <${smtpUser}>`,
      to: recipientEmail,
      subject: subject,
      html: htmlContent,
      replyTo: email || undefined,
    });

    return res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error: any) {
    console.error("SMTP Handler Error:", error);
    return res.status(500).json({ error: error?.message || "Failed to send email via SMTP." });
  }
}
