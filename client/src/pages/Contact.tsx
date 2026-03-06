/* ==========================================================================
   CONTACT PAGE — Lake Shore Real Estate Appraisals
   SEO: contact real estate appraiser Kalamazoo MI, appraisal company Southwest Michigan
   ========================================================================== */

import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    propertyAddress: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.message) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      toast.success("Message sent! We'll respond within 1 business day.");
    }, 1400);
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "(269) 555-0142",
      href: "tel:+12695550142",
      desc: "Mon–Fri 8AM–5PM",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@lakeshoreappraisals.com",
      href: "mailto:info@lakeshoreappraisals.com",
      desc: "Response within 1 business day",
    },
    {
      icon: MapPin,
      label: "Service Area",
      value: "Southwest Michigan",
      href: "/service-areas",
      desc: "Kalamazoo, Grand Rapids, Battle Creek, South Haven & more",
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
          <div className="section-label text-[oklch(0.72_0.12_85)] mb-3">Get In Touch</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Contact Lake Shore<br />
            <span className="text-[oklch(0.72_0.12_85)]">Real Estate Appraisals</span>
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-xl leading-relaxed">
            Have a question about our services or ready to order an appraisal? We're here to help.
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
                    <div className="w-10 h-10 rounded-lg bg-[oklch(0.32_0.09_140)] flex items-center justify-center flex-shrink-0">
                      <item.icon size={17} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.32_0.09_140)] mb-0.5" style={{ fontFamily: "'Lato', sans-serif" }}>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="font-bold text-[oklch(0.22_0.005_260)] hover:text-[oklch(0.32_0.09_140)] transition-colors text-sm"
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
              <div className="mt-10 bg-[oklch(0.32_0.09_140)] rounded-lg p-6 text-white">
                <h3 className="font-black mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                  Need a Fast Appraisal?
                </h3>
                <p className="text-sm text-white/80 mb-4">
                  Call us directly for the fastest response. We offer rush appraisals for time-sensitive situations.
                </p>
                <a href="tel:+12695550142" className="btn-gold text-sm py-2.5 px-5 w-full justify-center">
                  <Phone size={14} />
                  Call (269) 555-0142
                </a>
              </div>

              {/* Service areas quick list */}
              <div className="mt-6 bg-[oklch(0.96_0.008_90)] rounded-lg p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.32_0.09_140)] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>
                  We Serve
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {["Kalamazoo", "Grand Rapids", "Battle Creek", "South Haven", "Portage", "Holland", "St. Joseph", "Allegan"].map((city) => (
                    <div key={city} className="flex items-center gap-1.5 text-xs text-[oklch(0.35_0.005_260)]">
                      <MapPin size={10} className="text-[oklch(0.32_0.09_140)]" />
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
                <div className="bg-[oklch(0.32_0.09_140/0.06)] border border-[oklch(0.32_0.09_140/0.3)] rounded-lg p-10 text-center">
                  <CheckCircle2 size={48} className="text-[oklch(0.32_0.09_140)] mx-auto mb-4" />
                  <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for contacting Lake Shore Real Estate Appraisals. We'll respond to your inquiry within 1 business day.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", subject: "", propertyAddress: "", message: "" }); }}
                    className="btn-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-border p-7 shadow-sm">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label className="form-label">Full Name *</label>
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
                      <label className="form-label">Phone Number *</label>
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
                      <label className="form-label">Email Address *</label>
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
                      <label className="form-label">Subject</label>
                      <select
                        className="form-input"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      >
                        <option value="">Select a topic...</option>
                        <option value="quote">Request a Quote</option>
                        <option value="residential">Residential Appraisal</option>
                        <option value="divorce">Divorce Appraisal</option>
                        <option value="estate">Estate / Probate</option>
                        <option value="pmi">PMI Removal</option>
                        <option value="commercial">Commercial Appraisal</option>
                        <option value="lakefront">Lakefront Property</option>
                        <option value="tax">Tax Appeal</option>
                        <option value="other">Other Question</option>
                      </select>
                    </div>
                    <div className="md:col-span-2">
                      <label className="form-label">Property Address (if applicable)</label>
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
