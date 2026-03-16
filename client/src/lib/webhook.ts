/**
 * n8n Webhook Configuration
 *
 * All form submissions POST to this webhook URL.
 * n8n handles: email notification, Twilio SMS, GoHighLevel CRM lead creation.
 *
 * To configure:
 * 1. Replace the URL below with your actual n8n webhook URL
 * 2. In n8n, create a workflow with a Webhook trigger node
 * 3. Add nodes for: Send Email, Twilio SMS, GoHighLevel HTTP Request
 *
 * The webhook receives JSON with fields:
 *   name, email, phone, property_address, message, source, appraisal_type
 */
export const N8N_WEBHOOK_URL =
  import.meta.env.VITE_N8N_WEBHOOK_URL ||
  "https://your-n8n-domain.com/webhook/appraisal-request";

export async function submitToWebhook(data: Record<string, string | boolean | undefined>) {
  try {
    await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        property_address: data.property_address || data.propertyAddress || data.address || "",
        message: data.message || "",
        appraisal_type: data.appraisal_type || data.type || "",
        source: data.source || "website",
      }),
    });
  } catch {
    // Webhook failure should not block the user experience.
    // The form still shows a success message.
  }
}
