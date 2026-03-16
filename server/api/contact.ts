/**
 * Contact Form API Endpoint
 *
 * Handles form submissions by:
 * 1. Sending an email notification to robb@lakeshoreappraisal.com
 * 2. Triggering an SMS notification to 269-598-4008
 *
 * For email: Uses a configurable SMTP service or webhook (e.g., SendGrid, Mailgun)
 * For SMS: Uses Twilio API
 *
 * Environment variables required:
 *   TWILIO_ACCOUNT_SID  - Twilio account SID
 *   TWILIO_AUTH_TOKEN   - Twilio auth token
 *   TWILIO_FROM_NUMBER  - Twilio phone number (sender)
 *   SMTP_HOST           - SMTP server host (or use SENDGRID_API_KEY for SendGrid)
 *   SMTP_USER           - SMTP username
 *   SMTP_PASS           - SMTP password
 *   SENDGRID_API_KEY    - SendGrid API key (alternative to SMTP)
 *   CONTACT_WEBHOOK_URL - Optional webhook URL for a serverless notification service
 */

import type { Request, Response } from "express";

const OWNER_EMAIL = "robb@lakeshoreappraisal.com";
const OWNER_PHONE = "+12695984008";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  propertyAddress?: string;
  message?: string;
  type?: string;
  address?: string;
}

/**
 * Send email notification via SendGrid or webhook
 */
async function sendEmailNotification(data: ContactPayload): Promise<void> {
  const apiKey = process.env.SENDGRID_API_KEY;
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  const emailBody = [
    `New appraisal inquiry from ${data.name}`,
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Property Address: ${data.propertyAddress || data.address || "Not provided"}`,
    `Appraisal Type: ${data.type || "Not specified"}`,
    `Message: ${data.message || "No message"}`,
  ].join("\n");

  if (apiKey) {
    await fetch("https://api.sendgrid.com/v3/mail/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [{ to: [{ email: OWNER_EMAIL }] }],
        from: { email: "noreply@lakeshoreappraisal.com", name: "Lakeshore Appraisal Website" },
        subject: `New Appraisal Request from ${data.name}`,
        content: [{ type: "text/plain", value: emailBody }],
      }),
    });
  } else if (webhookUrl) {
    await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        to: OWNER_EMAIL,
        subject: `New Appraisal Request from ${data.name}`,
        body: emailBody,
        ...data,
      }),
    });
  }
}

/**
 * Send SMS notification via Twilio
 */
async function sendSmsNotification(data: ContactPayload): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;

  if (!accountSid || !authToken || !fromNumber) {
    return;
  }

  const address = data.propertyAddress || data.address || "address not provided";
  const smsBody = `New appraisal request from ${data.name} at ${address}`;

  const params = new URLSearchParams({
    To: OWNER_PHONE,
    From: fromNumber,
    Body: smsBody,
  });

  await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`${accountSid}:${authToken}`).toString("base64")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    }
  );
}

export default async function handleContact(req: Request, res: Response) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const data: ContactPayload = req.body;

  if (!data.name || !data.email || !data.phone) {
    res.status(400).json({ error: "Name, email, and phone are required" });
    return;
  }

  // Fire and forget — don't block the response on external APIs
  const notifications = [
    sendEmailNotification(data).catch(() => {}),
    sendSmsNotification(data).catch(() => {}),
  ];

  await Promise.allSettled(notifications);

  res.status(200).json({ success: true, message: "Form submitted successfully" });
}
