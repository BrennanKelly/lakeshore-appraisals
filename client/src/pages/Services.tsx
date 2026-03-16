/* ==========================================================================
   SERVICES PAGE — Lakeshore Appraisal
   SEO: residential appraisal Kalamazoo, divorce appraisal Michigan, PMI removal appraisal,
   estate appraisal Battle Creek, commercial appraisal Southwest Michigan
   ========================================================================== */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import {
  Home as HomeIcon, Scale, FileText, Shield, Building2, Waves,
  TrendingUp, ClipboardList, ArrowRight, Phone, CheckCircle2,
} from "lucide-react";

const REPORT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365056642/cyMjyDqH3wWwkbVJvts4SR/appraisal-report-UESYAir3fo27mzggZv7Ppg.webp";
const KALAMAZOO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365056642/cyMjyDqH3wWwkbVJvts4SR/kalamazoo-neighborhood-bz93vmwL7NgLZadPksmWwJ.webp";

const services = [
  {
    id: "residential",
    icon: HomeIcon,
    title: "Residential Home Appraisals",
    subtitle: "Single-Family, Condo & Multi-Family",
    seoKeywords: "residential appraisal Kalamazoo MI, home appraisal Southwest Michigan",
    desc: `Our certified residential appraisers provide accurate, USPAP-compliant valuations for single-family homes, condominiums, townhomes, and 2-4 unit residential properties throughout Southwest Michigan. Whether you're refinancing, purchasing, or settling an estate, our reports are accepted by all major lenders, courts, and government agencies.`,
    uses: [
      "Mortgage origination and refinancing",
      "Home purchase transactions",
      "Pre-listing market analysis",
      "Dispute resolution",
      "Investment property analysis",
    ],
    turnaround: "48–72 hours",
  },
  {
    id: "divorce",
    icon: Scale,
    title: "Divorce Appraisals",
    subtitle: "Court-Admissible Property Valuations",
    seoKeywords: "divorce appraisal Michigan, divorce property valuation Kalamazoo",
    desc: `Divorce proceedings require impartial, court-admissible property valuations that both parties can trust. Lakeshore Appraisal provides neutral, objective appraisals for marital property division across Kalamazoo County, Calhoun County, and Van Buren County. Our reports are prepared to withstand legal scrutiny and are accepted by Michigan family courts.`,
    uses: [
      "Marital home valuation for equitable distribution",
      "Retroactive date-of-separation appraisals",
      "Expert witness testimony support",
      "Attorney and mediator collaboration",
      "Multiple property portfolio valuation",
    ],
    turnaround: "48–72 hours",
  },
  {
    id: "estate",
    icon: FileText,
    title: "Estate & Probate Appraisals",
    subtitle: "Date-of-Death & Retrospective Valuations",
    seoKeywords: "estate appraisal Michigan, probate appraisal Battle Creek, date of death appraisal",
    desc: `When a loved one passes, accurate property valuations are essential for estate settlement, IRS reporting, and probate court proceedings. Our estate appraisers are experienced in retrospective valuations — determining a property's value as of a specific past date — and work closely with estate attorneys, CPAs, and personal representatives throughout Southwest Michigan.`,
    uses: [
      "Probate court filings",
      "IRS Form 706 estate tax returns",
      "Date-of-death valuations",
      "Trust administration",
      "Charitable donation appraisals",
    ],
    turnaround: "3–5 business days",
  },
  {
    id: "pmi",
    icon: Shield,
    title: "PMI Removal Appraisals",
    subtitle: "Eliminate Private Mortgage Insurance",
    seoKeywords: "PMI removal appraisal Michigan, remove PMI Kalamazoo, private mortgage insurance appraisal",
    desc: `If your home has appreciated in value since you purchased it, you may be eligible to cancel your Private Mortgage Insurance (PMI) and save hundreds of dollars per month. Lakeshore Appraisal provides lender-accepted appraisals to document your home's current market value and support your PMI cancellation request. Most lenders require 20% equity to remove PMI.`,
    uses: [
      "PMI cancellation with your lender",
      "Documenting increased home equity",
      "Refinancing to eliminate PMI",
      "HELOC qualification",
      "Loan-to-value ratio verification",
    ],
    turnaround: "48 hours",
  },
  {
    id: "commercial",
    icon: Building2,
    title: "Commercial Property Appraisals",
    subtitle: "Office, Retail, Industrial & Mixed-Use",
    seoKeywords: "commercial appraisal Kalamazoo, commercial property appraisal Southwest Michigan",
    desc: `Our certified general appraisers provide comprehensive commercial real estate valuations for office buildings, retail centers, industrial facilities, warehouses, and mixed-use developments throughout Southwest Michigan. We utilize all three approaches to value — sales comparison, income capitalization, and cost approach — to deliver defensible, market-supported conclusions.`,
    uses: [
      "Commercial mortgage financing",
      "Business acquisition and sale",
      "Property tax appeals",
      "Eminent domain proceedings",
      "Insurance coverage determination",
      "Partnership buy-outs",
    ],
    turnaround: "5–10 business days",
  },
  {
    id: "lakefront",
    icon: Waves,
    title: "Lakefront Property Appraisals",
    subtitle: "Lake Michigan & Inland Lake Specialists",
    seoKeywords: "lakefront appraisal South Haven Michigan, Lake Michigan property appraisal, waterfront property value Michigan",
    desc: `Lakefront and waterfront properties require specialized appraisal expertise. Lakeshore Appraisal has deep experience valuing Lake Michigan shoreline properties, inland lake cottages, and waterfront estates throughout Van Buren County, Allegan County, and Berrien County. We understand the unique factors that influence waterfront value — frontage, water quality, dock rights, and seasonal access.`,
    uses: [
      "Lake Michigan shoreline properties",
      "Inland lake cottages and cabins",
      "Waterfront estate valuations",
      "Vacation rental property analysis",
      "Seasonal property appraisals",
    ],
    turnaround: "3–5 business days",
  },
  {
    id: "tax",
    icon: TrendingUp,
    title: "Property Tax Appeal Appraisals",
    subtitle: "Challenge Your Assessment",
    seoKeywords: "property tax appeal appraisal Michigan, tax assessment appeal Kalamazoo, over-assessed property Michigan",
    desc: `If your property has been over-assessed by your local municipality, you may be paying more in property taxes than you should. Lakeshore Appraisal provides independent appraisals to document your property's true market value and support your tax appeal before the Michigan Tax Tribunal or local Board of Review. Our reports provide the market evidence needed to successfully challenge inflated assessments.`,
    uses: [
      "Michigan Tax Tribunal appeals",
      "Local Board of Review hearings",
      "Documenting market value decline",
      "Commercial and residential appeals",
      "Attorney support for tax litigation",
    ],
    turnaround: "3–5 business days",
  },
  {
    id: "prelisting",
    icon: ClipboardList,
    title: "Pre-Listing Appraisals",
    subtitle: "Know Your Value Before You List",
    seoKeywords: "pre-listing appraisal Michigan, home value appraisal before selling Kalamazoo",
    desc: `Before listing your home on the market, a professional appraisal gives you an objective, data-driven understanding of your property's fair market value. This empowers you to price competitively, negotiate from strength, and avoid leaving money on the table. Our pre-listing appraisals are particularly valuable in Southwest Michigan's dynamic real estate market where pricing strategy is critical.`,
    uses: [
      "Accurate listing price determination",
      "Negotiation leverage with buyers",
      "FSBO (For Sale By Owner) transactions",
      "Relocation appraisals",
      "Pricing strategy for unique properties",
    ],
    turnaround: "48–72 hours",
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[oklch(0.22_0.005_260)] text-white py-16" aria-label="Services page header">
        <div className="container">
          <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">Our Services</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Real Estate Appraisal Services<br />
            <span className="text-[oklch(0.72_0.12_245)]">in Southwest Michigan</span>
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-2xl leading-relaxed">
            From residential home appraisals to complex commercial valuations, Lakeshore Appraisal provides certified, USPAP-compliant reports for every appraisal need across
            Mattawan, Kalamazoo, Portage, Paw Paw, and surrounding communities.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="py-16" aria-label="Appraisal service details">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <article
                key={service.id}
                id={service.id}
                className={`grid grid-cols-1 lg:grid-cols-3 gap-8 items-start pb-12 ${idx < services.length - 1 ? "border-b border-border" : ""}`}
              >
                {/* Icon + title */}
                <div className="lg:col-span-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[oklch(0.48_0.14_245)] flex items-center justify-center flex-shrink-0">
                      <service.icon size={22} className="text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.48_0.14_245)] mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>
                        {String(idx + 1).padStart(2, "0")}
                      </div>
                      <h2 className="text-xl font-black text-[oklch(0.22_0.005_260)]" style={{ fontFamily: "'Merriweather', serif" }}>
                        {service.title}
                      </h2>
                      <div className="text-sm text-muted-foreground mt-0.5">{service.subtitle}</div>
                    </div>
                  </div>
                  <div className="bg-[oklch(0.96_0.008_90)] rounded-md p-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.48_0.14_245)] mb-2" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Typical Turnaround
                    </div>
                    <div className="text-lg font-black text-[oklch(0.22_0.005_260)]" style={{ fontFamily: "'Merriweather', serif" }}>
                      {service.turnaround}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="lg:col-span-2">
                  <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">{service.desc}</p>
                  <div className="mb-6">
                    <div className="text-sm font-bold uppercase tracking-wide text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Common Uses
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.uses.map((use) => (
                        <li key={use} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.005_260)]">
                          <CheckCircle2 size={14} className="text-[oklch(0.48_0.14_245)] flex-shrink-0" />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href="/order-appraisal" className="btn-primary text-sm py-2.5 px-5">
                    Order This Appraisal
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Process section */}
      <section className="py-20 bg-[oklch(0.96_0.008_90)]" aria-label="Appraisal process">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-3">How It Works</div>
              <h2 className="text-3xl font-black text-[oklch(0.22_0.005_260)] mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                Our Simple 4-Step Appraisal Process
              </h2>
              <div className="space-y-6">
                {[
                  { step: "01", title: "Request Your Appraisal", desc: "Submit our online order form or call us directly. Provide basic property information and your intended use for the appraisal." },
                  { step: "02", title: "Schedule the Inspection", desc: "We'll contact you within 1 business day to schedule a convenient inspection time. Most inspections take 30–60 minutes." },
                  { step: "03", title: "Property Inspection", desc: "Our certified appraiser visits the property, measures, photographs, and documents all relevant features and conditions." },
                  { step: "04", title: "Receive Your Report", desc: "A comprehensive, USPAP-compliant appraisal report is delivered electronically within your agreed turnaround window." },
                ].map((item) => (
                  <div key={item.step} className="flex gap-5">
                    <div className="text-3xl font-black text-[oklch(0.48_0.14_245/0.2)] flex-shrink-0 w-12 text-right" style={{ fontFamily: "'Merriweather', serif" }}>
                      {item.step}
                    </div>
                    <div className="border-l-4 border-[oklch(0.48_0.14_245)] pl-5">
                      <div className="font-bold text-[oklch(0.22_0.005_260)] mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>{item.title}</div>
                      <div className="text-sm text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={REPORT_IMG}
                alt="Professional real estate appraisal report document"
                className="rounded-lg w-full object-cover shadow-lg"
                style={{ maxHeight: "480px" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.48_0.14_245)]" aria-label="Order appraisal CTA">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Ready to Order Your Appraisal?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Contact Lakeshore Appraisal today. We serve all of Southwest Michigan
            with fast, accurate, and certified property valuations.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/order-appraisal" className="btn-gold">
              Order Online
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+12695984008" className="btn-outline-white">
              <Phone size={16} />
              (269) 598-4008
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
