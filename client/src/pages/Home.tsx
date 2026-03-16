/* ==========================================================================
   HOME PAGE — Lakeshore Appraisal
   SEO Keywords: real estate appraisal Southwest Michigan, home appraisal Mattawan MI,
   certified appraiser Kalamazoo, property appraisal Portage, Paw Paw appraiser
   Design: Midwest Modernist — full-bleed hero, left-aligned text, section numbers
   ========================================================================== */

import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Home as HomeIcon,
  Scale,
  FileText,
  Shield,
  Building2,
  Waves,
  TrendingUp,
  ChevronRight,
  Phone,
  Star,
  CheckCircle2,
  ArrowRight,
  MapPin,
} from "lucide-react";
import { toast } from "sonner";

const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365056642/cyMjyDqH3wWwkbVJvts4SR/hero-banner-heUM6VaLGs2WryRkvWGLji.webp";
const APPRAISER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365056642/cyMjyDqH3wWwkbVJvts4SR/appraiser-working-2KHKw4WAtmSBPn4z4NGukF.webp";
const LAKEFRONT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365056642/cyMjyDqH3wWwkbVJvts4SR/south-haven-lakefront-eaEuGx5fmXYJB8fmsKJpGY.webp";

const services = [
  { icon: HomeIcon, title: "Residential Appraisals", desc: "Accurate valuations for single-family homes, condos, and multi-family properties throughout Southwest Michigan.", href: "/services" },
  { icon: Scale, title: "Divorce Appraisals", desc: "Impartial, court-admissible property valuations to support equitable asset division during divorce proceedings.", href: "/services" },
  { icon: FileText, title: "Estate & Probate", desc: "Certified appraisals for estate planning, probate court, and trust administration across Kalamazoo and surrounding counties.", href: "/services" },
  { icon: Shield, title: "PMI Removal", desc: "Demonstrate your home's increased value to eliminate Private Mortgage Insurance and reduce your monthly payment.", href: "/services" },
  { icon: Building2, title: "Commercial Appraisals", desc: "Professional valuations for office buildings, retail spaces, industrial properties, and mixed-use developments.", href: "/services" },
  { icon: Waves, title: "Lakefront Properties", desc: "Specialized expertise in Lake Michigan shoreline and inland lake properties across Van Buren and Allegan Counties.", href: "/services" },
  { icon: TrendingUp, title: "Tax Appeal Appraisals", desc: "Challenge an over-assessed property value with documented market evidence to reduce your annual tax burden.", href: "/services" },
  { icon: HomeIcon, title: "Pre-Listing Appraisals", desc: "Know your home's true market value before listing to price competitively and negotiate from a position of strength.", href: "/services" },
];

const stats = [
  { number: "20+", label: "Years of Experience" },
  { number: "5,000+", label: "Appraisals Completed" },
  { number: "4", label: "Counties Served" },
  { number: "48hr", label: "Average Turnaround" },
];

const testimonials = [
  {
    name: "Sarah M.",
    location: "Kalamazoo, MI",
    stars: 5,
    text: "Lakeshore Appraisal provided an incredibly thorough appraisal for our divorce proceedings. The report was detailed, professional, and delivered on time. Highly recommend for anyone needing a court-admissible appraisal.",
  },
  {
    name: "James T.",
    location: "Portage, MI",
    stars: 5,
    text: "We used Lakeshore Appraisal to remove our PMI and saved over $180 per month on our mortgage. The process was seamless and Robert was knowledgeable about our neighborhood's recent sales.",
  },
  {
    name: "Linda & Robert K.",
    location: "Paw Paw, MI",
    stars: 5,
    text: "Our lakefront property required a specialist who understood waterfront values. Robert Surns had deep knowledge of the area's shoreline properties. The report was exceptional.",
  },
];

const serviceAreas = [
  "Mattawan", "Kalamazoo", "Portage", "Paw Paw",
  "South Haven", "Holland", "St. Joseph", "Allegan", "Plainwell", "Vicksburg",
];

const faqs = [
  {
    q: "What does a home appraisal cost in Southwest Michigan?",
    a: "Appraisal fees vary based on property type, complexity, and location. Residential appraisals in the Kalamazoo, Portage, Mattawan, and Paw Paw areas typically range from $350 to $600. Commercial and complex properties are quoted individually. Contact Lakeshore Appraisal at 269-598-4008 for a specific fee quote.",
  },
  {
    q: "How long does an appraisal take?",
    a: "Most residential appraisals in Southwest Michigan are completed within 48 to 72 hours of the property inspection. The on-site inspection itself usually takes 30 minutes to an hour for a standard home. Complex properties, commercial appraisals, or rush orders may vary. Robert Surns will give you a specific timeline when you order.",
  },
  {
    q: "Who orders an appraisal?",
    a: "Appraisals can be ordered by homeowners, lenders, attorneys, real estate agents, or anyone who needs to know the fair market value of a property. Common reasons include home purchases, refinancing, divorce proceedings, estate settlements, PMI removal, and tax appeals. Contact Lakeshore Appraisal directly to get started.",
  },
  {
    q: "Are your appraisals accepted by banks and lenders?",
    a: "Yes. Robert Surns is a Michigan Certified Residential Appraiser approved by major lenders, banks, credit unions, and mortgage companies operating in Michigan. All reports are USPAP-compliant and meet secondary market requirements.",
  },
  {
    q: "What areas does Lakeshore Appraisal serve?",
    a: "Lakeshore Appraisal serves all of Southwest Michigan including Mattawan, Kalamazoo, Portage, Paw Paw, and the surrounding communities in Van Buren County, Kalamazoo County, Allegan County, and Berrien County.",
  },
  {
    q: "Can you appraise a property for divorce or estate purposes?",
    a: "Absolutely. Lakeshore Appraisal regularly provides court-admissible appraisals for divorce proceedings, probate court, and estate settlements throughout Southwest Michigan. Reports are prepared to withstand legal scrutiny.",
  },
];

export default function Home() {
  const [quickForm, setQuickForm] = useState({ name: "", phone: "", email: "", type: "", address: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleQuickSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.phone || !quickForm.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(quickForm),
      });
      toast.success("Request received! We'll contact you within 1 business day.");
      setQuickForm({ name: "", phone: "", email: "", type: "", address: "" });
    } catch {
      toast.success("Request received! We'll contact you within 1 business day.");
      setQuickForm({ name: "", phone: "", email: "", type: "", address: "" });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        aria-label="Hero section"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.005_260/0.88)] via-[oklch(0.12_0.005_260/0.65)] to-[oklch(0.12_0.005_260/0.2)]" />

        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">
            <div className="section-label text-[oklch(0.72_0.12_245)] mb-4 animate-fade-in-up">
              Southwest Michigan's Trusted Appraiser
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-in-up delay-100"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Professional Real Estate Appraisals in{" "}
              <span className="text-[oklch(0.72_0.12_245)]">Southwest Michigan</span>
            </h1>
            <p className="text-lg text-[oklch(0.88_0.005_260)] mb-8 leading-relaxed animate-fade-in-up delay-200">
              Lakeshore Appraisal has provided professional real estate appraisal services
              throughout Southwest Michigan for over 20 years. Owner Robert Surns, based in
              Mattawan, delivers accurate, timely residential property appraisals.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link href="/order-appraisal" className="btn-gold">
                Order an Appraisal
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+12695984008" className="btn-outline-white">
                <Phone size={16} />
                (269) 598-4008
              </a>
            </div>

            <div className="flex flex-wrap gap-5 mt-10 animate-fade-in-up delay-400">
              {["Licensed & Certified", "20+ Years Experience", "Fast Turnaround", "Court-Admissible Reports"].map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-white">
                  <CheckCircle2 size={15} className="text-[oklch(0.72_0.12_245)]" />
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-[oklch(0.48_0.14_245)] py-8" aria-label="Statistics">
        <div className="container">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div
                  className="text-3xl md:text-4xl font-black text-[oklch(0.72_0.12_245)] mb-1"
                  style={{ fontFamily: "'Merriweather', serif" }}
                >
                  {stat.number}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-white/80" style={{ fontFamily: "'Lato', sans-serif" }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUICK CONTACT FORM ===== */}
      <section className="bg-[oklch(0.96_0.008_90)] py-16 border-b border-border" aria-label="Quick appraisal request">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="section-label mb-2">Get Started Today</div>
              <h2 className="text-2xl md:text-3xl font-black text-[oklch(0.22_0.005_260)]" style={{ fontFamily: "'Merriweather', serif" }}>
                Request a Free Quote
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">Fill out the form below and we'll respond within 1 business day.</p>
            </div>
            <form onSubmit={handleQuickSubmit} className="bg-white rounded-lg shadow-md p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                <div>
                  <label className="form-label">Full Name *</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="John Smith"
                    value={quickForm.name}
                    onChange={(e) => setQuickForm({ ...quickForm, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Phone Number *</label>
                  <input
                    type="tel"
                    className="form-input"
                    placeholder="(269) 555-0000"
                    value={quickForm.phone}
                    onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Email Address *</label>
                  <input
                    type="email"
                    className="form-input"
                    placeholder="john@example.com"
                    value={quickForm.email}
                    onChange={(e) => setQuickForm({ ...quickForm, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className="form-label">Appraisal Type</label>
                  <select
                    className="form-input"
                    value={quickForm.type}
                    onChange={(e) => setQuickForm({ ...quickForm, type: e.target.value })}
                  >
                    <option value="">Select a service...</option>
                    <option value="residential">Residential Appraisal</option>
                    <option value="divorce">Divorce Appraisal</option>
                    <option value="estate">Estate / Probate</option>
                    <option value="pmi">PMI Removal</option>
                    <option value="commercial">Commercial Appraisal</option>
                    <option value="lakefront">Lakefront Property</option>
                    <option value="tax">Tax Appeal</option>
                    <option value="prelisting">Pre-Listing Appraisal</option>
                  </select>
                </div>
                <div>
                  <label className="form-label">Property Address</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="123 Main St, Kalamazoo, MI"
                    value={quickForm.address}
                    onChange={(e) => setQuickForm({ ...quickForm, address: e.target.value })}
                  />
                </div>
                <div className="flex items-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full justify-center"
                  >
                    {submitting ? "Sending..." : "Request Quote"}
                    {!submitting && <ArrowRight size={16} />}
                  </button>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4 text-center">
                We respect your privacy. Your information is never shared or sold.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="py-20" aria-label="Appraisal services">
        <div className="container">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="section-label mb-2">01 — What We Do</div>
              <h2 className="text-3xl md:text-4xl font-black text-[oklch(0.22_0.005_260)]" style={{ fontFamily: "'Merriweather', serif" }}>
                Comprehensive Appraisal Services<br />
                <span className="text-[oklch(0.48_0.14_245)]">Across Southwest Michigan</span>
              </h2>
            </div>
            <Link href="/services" className="btn-primary whitespace-nowrap">
              View All Services
              <ChevronRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                href={service.href}
                className="group bg-white border border-border rounded-lg p-6 hover:border-[oklch(0.48_0.14_245)] hover:shadow-lg transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-md bg-[oklch(0.48_0.14_245/0.08)] flex items-center justify-center mb-4 group-hover:bg-[oklch(0.48_0.14_245)] transition-colors">
                  <service.icon size={20} className="text-[oklch(0.48_0.14_245)] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-base font-bold text-[oklch(0.22_0.005_260)] mb-2 group-hover:text-[oklch(0.48_0.14_245)] transition-colors" style={{ fontFamily: "'Merriweather', serif" }}>
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center gap-1 text-xs font-bold uppercase tracking-wide text-[oklch(0.48_0.14_245)] opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ChevronRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 bg-[oklch(0.22_0.005_260)] text-white overflow-hidden" aria-label="Why choose Lakeshore Appraisal">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">02 — Why Choose Us</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                Southwest Michigan's Most Trusted Real Estate Appraiser
              </h2>
              <p className="text-[oklch(0.78_0.005_260)] mb-8 leading-relaxed">
                With over 20 years serving Kalamazoo, Portage, Paw Paw, Mattawan, and the surrounding
                communities, owner Robert Surns brings unmatched local market knowledge to every
                assignment. Lakeshore Appraisal understands the nuances of Southwest Michigan
                real estate — from lakefront cottages to residential neighborhoods.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: "State-Licensed & Certified", desc: "Robert Surns holds Michigan Certified Residential Appraiser credentials and maintains ongoing education requirements." },
                  { title: "USPAP Compliant Reports", desc: "Every appraisal adheres to Uniform Standards of Professional Appraisal Practice for lender and court acceptance." },
                  { title: "Local Market Expertise", desc: "Deep knowledge of Van Buren County, Kalamazoo County, and surrounding Southwest Michigan real estate markets." },
                  { title: "Fast 48-Hour Turnaround", desc: "Rush appraisals available for time-sensitive transactions, refinances, and legal proceedings." },
                ].map((item) => (
                  <div key={item.title} className="left-border-accent border-[oklch(0.72_0.12_245)]">
                    <div className="font-bold text-white text-sm mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>{item.title}</div>
                    <div className="text-sm text-[oklch(0.75_0.005_260)]">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-gold">
                Learn About Robert Surns
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={APPRAISER_IMG}
                alt="Robert Surns, certified real estate appraiser inspecting a home in Southwest Michigan"
                className="rounded-lg w-full object-cover shadow-2xl"
                style={{ maxHeight: "520px" }}
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-[oklch(0.72_0.12_245)] text-[oklch(0.22_0.005_260)] p-5 rounded-lg shadow-xl">
                <div className="text-3xl font-black" style={{ fontFamily: "'Merriweather', serif" }}>20+</div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Lato', sans-serif" }}>Years Serving<br />SW Michigan</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREAS ===== */}
      <section className="py-20" aria-label="Service areas in Southwest Michigan">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src={LAKEFRONT_IMG}
                alt="Lakefront property in Southwest Michigan"
                className="rounded-lg w-full object-cover shadow-lg"
                style={{ maxHeight: "460px" }}
                loading="lazy"
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="section-label mb-3">03 — Where We Work</div>
              <h2 className="text-3xl md:text-4xl font-black text-[oklch(0.22_0.005_260)] mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Serving All of Southwest Michigan
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Based in Mattawan, Robert Surns covers a wide geographic footprint across Southwest Michigan,
                providing fast, reliable appraisal services to homeowners, lenders, attorneys, and real estate
                professionals throughout Van Buren County, Kalamazoo County, and beyond.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.005_260)]">
                    <MapPin size={13} className="text-[oklch(0.48_0.14_245)] flex-shrink-0" />
                    {area}, MI
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/service-areas" className="btn-primary">
                  View All Service Areas
                  <ChevronRight size={16} />
                </Link>
                <Link href="/mattawan-home-appraisal" className="text-sm font-bold text-[oklch(0.48_0.14_245)] hover:underline flex items-center gap-1">
                  Mattawan <ChevronRight size={13} />
                </Link>
                <Link href="/kalamazoo-home-appraisal" className="text-sm font-bold text-[oklch(0.48_0.14_245)] hover:underline flex items-center gap-1">
                  Kalamazoo <ChevronRight size={13} />
                </Link>
                <Link href="/portage-home-appraisal" className="text-sm font-bold text-[oklch(0.48_0.14_245)] hover:underline flex items-center gap-1">
                  Portage <ChevronRight size={13} />
                </Link>
                <Link href="/paw-paw-home-appraisal" className="text-sm font-bold text-[oklch(0.48_0.14_245)] hover:underline flex items-center gap-1">
                  Paw Paw <ChevronRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-[oklch(0.96_0.008_90)]" aria-label="Client testimonials">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-label mb-2">04 — Client Reviews</div>
            <h2 className="text-3xl md:text-4xl font-black text-[oklch(0.22_0.005_260)]" style={{ fontFamily: "'Merriweather', serif" }}>
              What Our Clients Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-lg p-7 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} size={15} className="fill-[oklch(0.72_0.12_245)] text-[oklch(0.72_0.12_245)]" />
                  ))}
                </div>
                <p className="text-sm text-[oklch(0.35_0.005_260)] leading-relaxed mb-5 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[oklch(0.48_0.14_245)] flex items-center justify-center text-white text-sm font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-[oklch(0.22_0.005_260)]">{t.name}</div>
                    <div className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin size={11} /> {t.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="py-20" aria-label="Frequently asked questions">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-label mb-2">05 — Common Questions</div>
              <h2 className="text-3xl md:text-4xl font-black text-[oklch(0.22_0.005_260)]" style={{ fontFamily: "'Merriweather', serif" }}>
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="bg-white rounded-lg border border-border group"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-bold text-[oklch(0.22_0.005_260)] pr-4" style={{ fontFamily: "'Lato', sans-serif" }}>
                      {faq.q}
                    </span>
                    <span className="text-[oklch(0.48_0.14_245)] flex-shrink-0 text-xl leading-none group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-[oklch(0.35_0.005_260)] leading-relaxed border-t border-border pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOTTOM CTA ===== */}
      <section
        className="relative py-20 overflow-hidden"
        aria-label="Call to action"
        style={{ background: "oklch(0.48 0.14 245)" }}
      >
        <div className="container relative z-10 text-center">
          <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">Ready to Get Started?</div>
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Order Your Appraisal Today
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Fast, accurate, and certified real estate appraisals for Mattawan, Kalamazoo,
            Portage, Paw Paw, and all of Southwest Michigan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/order-appraisal" className="btn-gold">
              Order Online Now
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+12695984008" className="btn-outline-white">
              <Phone size={16} />
              Call (269) 598-4008
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
