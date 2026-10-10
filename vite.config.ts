import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

function apiDevPlugin(): Plugin {
  return {
    name: "api-dev-server",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === "/api/contact" && req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk;
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body || "{}");
              const { name, phone, email, service, date, time, message, formType } = data;

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

              res.setHeader("Content-Type", "application/json");
              res.statusCode = 200;
              res.end(JSON.stringify({ success: true, message: "Email sent successfully!" }));
            } catch (err: any) {
              console.error("Vite Dev SMTP Error:", err);
              res.setHeader("Content-Type", "application/json");
              res.statusCode = 500;
              res.end(JSON.stringify({ error: err?.message || "Failed to send email." }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [
    apiDevPlugin(),
    TanStackRouterVite(),
    react(),
    tailwindcss(),
    tsconfigPaths(),
  ],
});
