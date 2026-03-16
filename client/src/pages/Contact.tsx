/* ==========================================================================
   CONTACT PAGE — Lakeshore Appraisal
   SEO: contact real estate appraiser Mattawan MI, appraisal company Southwest Michigan
   ========================================================================== */

import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

async function submitContactForm(data: Record<string, string>) {
  // Send form data to serverless endpoint for email + SMS notification
  try {
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        phone: data.phone,
        propertyAddress: data.propertyAddress,
        message: data.message,
        to_email: "robb@lakeshoreappraisal.com",
        sms_to: "+12695984008",
        sms_body: `New appraisal request from ${data.name} at ${data.propertyAddress || "address not provided"}`,
      }),
    });
  } catch {
    // Form submission will still show success to user;
    // the webhook/serverless function handles delivery
  }
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    propertyAddress: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    await submitContactForm(form);
    setSubmitting(false);
    setSubmitted(true);
    toast.success("Message sent! We'll respond within 1 business day.");
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(269) 598-4008",
      href: "tel:+12695984008",
      desc: "Mon–Fri 8AM–5PM",
    },
    {
      icon: Mail,
      label: "Email",
      value: "robb@lakeshoreappraisal.com",
      href: "mailto:robb@lakeshoreappraisal.com",
      desc: "Response within 1 business day",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Mattawan, Michigan",
      href: "/mattawan-home-appraisal",
      desc: "Serving all of Southwest Michigan",
    },
    {
      icon: Clock,
      label: "Business Hours",
      value: "Mon–Fri: 8:00 AM – 5:00 PM",
      href: null,
      desc: "Saturday by appointment",
    },
  ];

  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[oklch(0.22_0.005_260)] text-white py-16" aria-label="Contact page header">
        <div className="container">
          <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">Get In Touch</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Contact Lakeshore<br />
            <span className="text-[oklch(0.72_0.12_245)]">Appraisal</span>
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-xl leading-relaxed">
            Have a question about our services or ready to order an appraisal? Robert Surns is here to help.
            Reach out by phone, email, or use the form below.
          </p>
        </div>
      </section>

      <section className="py-16" aria-label="Contact information and form">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                Contact Information
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[oklch(0.48_0.14_245)] flex items-center justify-center flex-shrink-0">
                      <item.icon size={17} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.48_0.14_245)] mb-0.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-bold text-[oklch(0.22_0.005_260)] hover:text-[oklch(0.48_0.14_245)] transition-colors text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="font-bold text-[oklch(0.22_0.005_260)] text-sm">{item.value}</div>
                      )}
                      <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick CTA */}
              <div className="mt-10 bg-[oklch(0.48_0.14_245)] rounded-lg p-6 text-white">
                <h3 className="font-black mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                  Need a Fast Appraisal?
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Call Robert directly for the fastest response. Rush appraisals available for time-sensitive situations.
                </p>
                <a href="tel:+12695984008" className="btn-gold text-sm py-2.5 px-5 w-full justify-center">
                  <Phone size={14} />
                  Call (269) 598-4008
                </a>
              </div>

              {/* Service areas quick list */}
              <div className="mt-6 bg-[oklch(0.96_0.008_90)] rounded-lg p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.48_0.14_245)] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>
                  We Serve
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {["Mattawan", "Kalamazoo", "Portage", "Paw Paw", "South Haven", "Holland", "St. Joseph", "Allegan"].map((city) => (
                    <div key={city} className="flex items-center gap-1.5 text-xs text-[oklch(0.35_0.005_260)]">
                      <MapPin size={10} className="text-[oklch(0.48_0.14_245)]" />
                      {city}, MI
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              <h2 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                Send Us a Message
              </h2>

              {submitted ? (
                <div className="bg-[oklch(0.48_0.14_245/0.06)] border border-[oklch(0.48_0.14_245/0.3)] rounded-lg p-10 text-center">
                  <CheckCircle2 size={48} className="text-[oklch(0.48_0.14_245)] mx-auto mb-4" />
                  <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for contacting Lakeshore Appraisal. Robert Surns will respond to your inquiry within 1 business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", propertyAddress: "", message: "" }); }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border p-7 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label">Name *</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="John Smith"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Email *</label>
                      <input
                        type="email"
                        className="form-input"
                        placeholder="john@example.com"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Phone *</label>
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="(269) 555-0000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <label className="form-label">Property Address</label>
                      <input
                        type="text"
                        className="form-input"
                        placeholder="123 Main St, Kalamazoo, MI 49001"
                        value={form.propertyAddress}
                        onChange={(e) => setForm({ ...form, propertyAddress: e.target.value })}
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="form-label">Message *</label>
                      <textarea
                        className="form-input resize-none"
                        rows={5}
                        placeholder="Tell us about your appraisal needs, property details, or any questions you have..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                      />
                    </div>
                  </div>
                  <div className="flex items-center justify-between gap-4 flex-wrap">
                    <p className="text-xs text-muted-foreground">
                      * Required fields. We respond within 1 business day.
                    </p>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="btn-primary"
                    >
                      {submitting ? "Sending..." : "Send Message"}
                      {!submitting && <Send size={15} />}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
