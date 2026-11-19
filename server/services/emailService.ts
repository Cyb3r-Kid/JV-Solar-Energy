import nodemailer from 'nodemailer';
import { EnquiryRecord } from '../config/db';

export const sendEnquiryNotification = async (enquiry: EnquiryRecord): Promise<{ success: boolean; messageId?: string; simulated?: boolean }> => {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = Number(process.env.SMTP_PORT) || 587;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const notifyEmail = process.env.NOTIFICATION_EMAIL || 'jv.solarenergy@gmail.com';

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Solar Enquiry - ${enquiry.enquiryId}</title>
      <style>
        body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background: #061B16; color: #F6F5EF; padding: 24px; margin: 0; }
        .card { background: #092B20; border: 1px solid #D4B66A; border-radius: 12px; max-width: 650px; margin: 0 auto; overflow: hidden; }
        .header { background: #061B16; padding: 24px; border-bottom: 2px solid #D4B66A; }
        .header h1 { color: #D4B66A; margin: 0; font-size: 22px; }
        .body { padding: 24px; }
        .field { margin-bottom: 14px; }
        .label { font-size: 12px; color: #6D7972; text-transform: uppercase; letter-spacing: 0.5px; }
        .val { font-size: 16px; color: #FFFFFF; font-weight: 500; margin-top: 4px; }
        .highlight { color: #D4B66A; font-weight: bold; }
        .footer { background: #061B16; padding: 16px 24px; font-size: 12px; color: #6D7972; text-align: center; }
      </style>
    </head>
    <body>
      <div class="card">
        <div class="header">
          <h1>New Solar Consultation Enquiry</h1>
          <p style="margin: 4px 0 0; color: #6D7972;">Ref ID: <span class="highlight">${enquiry.enquiryId}</span></p>
        </div>
        <div class="body">
          <div class="field">
            <div class="label">Customer Name</div>
            <div class="val">${enquiry.fullName} ${enquiry.companyName ? `(${enquiry.companyName})` : ''}</div>
          </div>
          <div class="field">
            <div class="label">Phone / WhatsApp</div>
            <div class="val"><a href="tel:${enquiry.phone}" style="color: #D4B66A; text-decoration: none;">${enquiry.phone}</a></div>
          </div>
          <div class="field">
            <div class="label">Email Address</div>
            <div class="val"><a href="mailto:${enquiry.email}" style="color: #D4B66A; text-decoration: none;">${enquiry.email}</a></div>
          </div>
          <div class="field">
            <div class="label">Project Solution</div>
            <div class="val highlight">${enquiry.projectType}</div>
          </div>
          <div class="field">
            <div class="label">Site Location</div>
            <div class="val">${enquiry.projectLocation}</div>
          </div>
          <div class="field">
            <div class="label">Requested Capacity</div>
            <div class="val">${enquiry.requiredCapacity || 'To be determined based on site audit'}</div>
          </div>
          <div class="field">
            <div class="label">Monthly Electricity Bill</div>
            <div class="val">${enquiry.currentBillRange || 'Not specified'}</div>
          </div>
          ${enquiry.additionalRequirements ? `
          <div class="field">
            <div class="label">Additional Project Details / Notes</div>
            <div class="val" style="white-space: pre-line; background: #061B16; padding: 12px; border-radius: 6px; font-size: 14px;">${enquiry.additionalRequirements}</div>
          </div>` : ''}
        </div>
        <div class="footer">
          Received via JV Solar Energy Pvt Ltd Official Web Portal &bull; Chennai, Tamil Nadu
        </div>
      </div>
    </body>
    </html>
  `;

  // If real SMTP credentials provided, dispatch via Nodemailer
  if (smtpHost && smtpUser && smtpPass) {
    try {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass
        }
      });

      const info = await transporter.sendMail({
        from: `"JV Solar Portal" <${smtpUser}>`,
        to: notifyEmail,
        replyTo: enquiry.email,
        subject: `[New Solar Lead] ${enquiry.projectType} - ${enquiry.fullName} (${enquiry.enquiryId})`,
        html: htmlContent
      });

      console.log(`[Email] Notification sent to ${notifyEmail}. Message ID: ${info.messageId}`);
      return { success: true, messageId: info.messageId, simulated: false };
    } catch (err) {
      console.error('[Email] Failed to send real SMTP email:', err);
      // Fallback to simulated delivery logged to server console
      return { success: true, simulated: true };
    }
  }

  // Simulated / dev fallback
  console.log(`\n======================================================`);
  console.log(`[SIMULATED EMAIL NOTIFICATION]`);
  console.log(`To: ${notifyEmail}`);
  console.log(`Subject: [New Solar Lead] ${enquiry.projectType} - ${enquiry.fullName} (${enquiry.enquiryId})`);
  console.log(`Customer: ${enquiry.fullName} | Phone: ${enquiry.phone} | Email: ${enquiry.email}`);
  console.log(`Project: ${enquiry.projectType} at ${enquiry.projectLocation}`);
  console.log(`Capacity: ${enquiry.requiredCapacity || 'N/A'}`);
  console.log(`======================================================\n`);

  return { success: true, simulated: true };
};
