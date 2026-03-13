/* ==========================================================================
   HOME PAGE — Lake Shore Real Estate Appraisals
   SEO Keywords: real estate appraisal Kalamazoo MI, home appraisal Southwest Michigan,
   certified appraiser Battle Creek, property appraisal South Haven, Grand Rapids appraiser
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
    text: "Lake Shore provided an incredibly thorough appraisal for our divorce proceedings. The report was detailed, professional, and delivered on time. Highly recommend for anyone needing a court-admissible appraisal.",
  },
  {
    name: "James T.",
    location: "Battle Creek, MI",
    stars: 5,
    text: "We used Lake Shore to remove our PMI and saved over $180 per month on our mortgage. The process was seamless and the appraiser was knowledgeable about our neighborhood's recent sales.",
  },
  {
    name: "Linda & Robert K.",
    location: "South Haven, MI",
    stars: 5,
    text: "Our lakefront property required a specialist who understood waterfront values. Lake Shore's appraiser had deep knowledge of Lake Michigan shoreline properties. The report was exceptional.",
  },
];

const serviceAreas = [
  "Kalamazoo", "Portage", "Grand Rapids", "Wyoming", "Battle Creek",
  "South Haven", "Holland", "St. Joseph", "Allegan", "Plainwell",
];

export default function Home() {
  const [quickForm, setQuickForm] = useState({ name: "", phone: "", email: "", type: "", city: "" });
  const [submitting, setSubmitting] = useState(false);

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.name || !quickForm.phone || !quickForm.email) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      toast.success("Request received! We'll contact you within 1 business day.");
      setQuickForm({ name: "", phone: "", email: "", type: "", city: "" });
    }, 1200);
  };

  return (
    <Layout>
      {/* ===== HERO ===== */}
      <section
        className="relative min-h-[88vh] flex items-center overflow-hidden"
        aria-label="Hero section"
      >
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMG})` }}
        />
        {/* Dark overlay — left-heavy gradient for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.12_0.005_260/0.88)] via-[oklch(0.12_0.005_260/0.65)] to-[oklch(0.12_0.005_260/0.2)]" />

        <div className="container relative z-10 py-24">
          <div className="max-w-2xl">
            <div className="section-label text-[oklch(0.72_0.12_245)] mb-4 animate-fade-in-up">
              Southwest Michigan's Trusted Appraisers
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight animate-fade-in-up delay-100"
              style={{ fontFamily: "'Merriweather', serif" }}
            >
              Certified Real Estate Appraisals in{" "}
              <span className="text-[oklch(0.72_0.12_245)]">Southwest Michigan</span>
            </h1>
            <p className="text-lg text-[oklch(0.88_0.005_260)] mb-8 leading-relaxed animate-fade-in-up delay-200">
              Lake Shore Real Estate Appraisals provides accurate, impartial property valuations
              for homeowners, lenders, attorneys, and real estate professionals across Kalamazoo,
              Grand Rapids, Battle Creek, South Haven, and surrounding communities.
            </p>
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link href="/order-appraisal" className="btn-gold">
                Order an Appraisal
                <ArrowRight size={16} />
              </Link>
              <a href="tel:+12695550142" className="btn-outline-white">
                <Phone size={16} />
                (269) 555-0142
              </a>
            </div>

            {/* Trust badges */}
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
                  <label className="form-label">Property City</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Kalamazoo, Battle Creek..."
                    value={quickForm.city}
                    onChange={(e) => setQuickForm({ ...quickForm, city: e.target.value })}
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
            {services.map((service, i) => (
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
      <section className="py-20 bg-[oklch(0.22_0.005_260)] text-white overflow-hidden" aria-label="Why choose Lake Shore Appraisals">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">02 — Why Choose Us</div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                Southwest Michigan's Most Trusted Real Estate Appraisers
              </h2>
              <p className="text-[oklch(0.78_0.005_260)] mb-8 leading-relaxed">
                With over 20 years serving Kalamazoo, Grand Rapids, Battle Creek, and South Haven,
                Lake Shore Real Estate Appraisals brings unmatched local market knowledge to every
                assignment. Our certified appraisers understand the nuances of Southwest Michigan
                real estate — from lakefront cottages to urban commercial properties.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: "State-Licensed & Certified", desc: "All appraisers hold Michigan Certified Residential Appraiser credentials and maintain ongoing education requirements." },
                  { title: "USPAP Compliant Reports", desc: "Every appraisal adheres to Uniform Standards of Professional Appraisal Practice for lender and court acceptance." },
                  { title: "Local Market Expertise", desc: "Deep knowledge of Kalamazoo County, Calhoun County, Van Buren County, and Allegan County real estate markets." },
                  { title: "Fast 48-Hour Turnaround", desc: "Rush appraisals available for time-sensitive transactions, refinances, and legal proceedings." },
                ].map((item) => (
                  <div key={item.title} className="left-border-accent border-[oklch(0.72_0.12_245)]">
                    <div className="font-bold text-white text-sm mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>{item.title}</div>
                    <div className="text-sm text-[oklch(0.75_0.005_260)]">{item.desc}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" className="btn-gold">
                Learn About Our Team
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <img
                src={APPRAISER_IMG}
                alt="Certified real estate appraiser inspecting a home in Southwest Michigan"
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
                alt="Lakefront property in South Haven Michigan"
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
                Our certified appraisers cover a wide geographic footprint across Southwest Michigan,
                providing fast, reliable service to homeowners, lenders, attorneys, and real estate
                professionals throughout the region.
              </p>
              <div className="grid grid-cols-2 gap-2 mb-8">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.005_260)]">
                    <MapPin size={13} className="text-[oklch(0.48_0.14_245)] flex-shrink-0" />
                    {area}, MI
                  </div>
                ))}
              </div>
              <Link href="/service-areas" className="btn-primary">
                View All Service Areas
                <ChevronRight size={16} />
              </Link>
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
            Fast, accurate, and certified real estate appraisals for Kalamazoo, Grand Rapids,
            Battle Creek, South Haven, and all of Southwest Michigan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/order-appraisal" className="btn-gold">
              Order Online Now
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+12695550142" className="btn-outline-white">
              <Phone size={16} />
              Call (269) 555-0142
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
