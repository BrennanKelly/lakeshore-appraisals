/* ==========================================================================
   ABOUT PAGE — Lake Shore Real Estate Appraisals
   SEO: certified real estate appraiser Southwest Michigan, licensed appraiser Kalamazoo,
   USPAP compliant appraisal Michigan, experienced property appraiser Michigan
   ========================================================================== */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Award, Shield, BookOpen, Users, ArrowRight, Phone, CheckCircle2 } from "lucide-react";

const APPRAISER_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365056642/cyMjyDqH3wWwkbVJvts4SR/appraiser-working-2KHKw4WAtmSBPn4z4NGukF.webp";
const HERO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365056642/cyMjyDqH3wWwkbVJvts4SR/hero-banner-heUM6VaLGs2WryRkvWGLji.webp";

const credentials = [
  { icon: Award, title: "State Certified Residential Appraiser", desc: "Michigan Department of Licensing and Regulatory Affairs (LARA) certified. License maintained with ongoing continuing education." },
  { icon: Shield, title: "USPAP Compliant", desc: "All appraisals adhere to the Uniform Standards of Professional Appraisal Practice as required by federal and state law." },
  { icon: BookOpen, title: "Appraisal Institute Member", desc: "Active membership in the Appraisal Institute, the nation's largest professional association of real estate appraisers." },
  { icon: Users, title: "20+ Years Local Experience", desc: "Over two decades of appraising properties throughout Southwest Michigan, building unmatched local market knowledge." },
];

const values = [
  { title: "Accuracy", desc: "Every appraisal is supported by thorough market research, comparable sales analysis, and professional judgment. We never cut corners." },
  { title: "Independence", desc: "Our appraisals are completely impartial. We have no financial interest in the outcome of any transaction we appraise." },
  { title: "Timeliness", desc: "We understand that real estate transactions move quickly. Our 48-hour turnaround commitment keeps your deal on track." },
  { title: "Communication", desc: "We explain our methodology clearly and are available to answer questions about our reports from clients, attorneys, and lenders." },
];

const faqs = [
  {
    q: "How long does a real estate appraisal take in Michigan?",
    a: "Most residential appraisals in Southwest Michigan are completed within 48–72 hours of the property inspection. Complex properties, commercial appraisals, or rush orders may vary. We'll give you a specific timeline when you order.",
  },
  {
    q: "What is the difference between a home inspection and an appraisal?",
    a: "A home inspection evaluates the physical condition of a property's systems and components. A real estate appraisal determines the property's fair market value based on comparable sales, market conditions, and property characteristics. Both serve different purposes.",
  },
  {
    q: "Are your appraisals accepted by banks and lenders?",
    a: "Yes. Our certified appraisers are approved by major lenders, banks, credit unions, and mortgage companies operating in Michigan. All reports are USPAP-compliant and meet secondary market requirements.",
  },
  {
    q: "Can you appraise a property for divorce or estate purposes?",
    a: "Absolutely. We regularly provide court-admissible appraisals for divorce proceedings, probate court, and estate settlements throughout Southwest Michigan. Our reports are prepared to withstand legal scrutiny.",
  },
  {
    q: "Do you appraise lakefront properties in Southwest Michigan?",
    a: "Yes — lakefront and waterfront property appraisal is one of our specialties. We have extensive experience valuing Lake Michigan shoreline properties, inland lake cottages, and waterfront estates throughout Van Buren, Allegan, and Berrien Counties.",
  },
  {
    q: "How much does a real estate appraisal cost in Michigan?",
    a: "Appraisal fees vary based on property type, complexity, and location. Residential appraisals typically range from $350–$600. Commercial and complex properties are quoted individually. Contact us for a specific fee quote.",
  },
];

export default function About() {
  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[oklch(0.22_0.005_260)] text-white py-16" aria-label="About page header">
        <div className="container">
          <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">About Us</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Southwest Michigan's Trusted<br />
            <span className="text-[oklch(0.72_0.12_245)]">Real Estate Appraisers</span>
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-2xl leading-relaxed">
            For over 20 years, Lake Shore Real Estate Appraisals has provided accurate, impartial,
            and professionally certified property valuations to homeowners, lenders, attorneys, and
            real estate professionals throughout Southwest Michigan.
          </p>
        </div>
      </section>

      {/* Company story */}
      <section className="py-20" aria-label="Company story">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-3">Our Story</div>
              <h2 className="text-3xl font-black text-[oklch(0.22_0.005_260)] mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                Rooted in Southwest Michigan Real Estate
              </h2>
              <div className="space-y-4 text-[oklch(0.35_0.005_260)] leading-relaxed">
                <p>
                  Lake Shore Real Estate Appraisals was founded with a simple mission: to provide
                  Southwest Michigan property owners, lenders, and legal professionals with the most
                  accurate, reliable, and professionally delivered appraisal services in the region.
                </p>
                <p>
                  Based in Kalamazoo and serving the broader Southwest Michigan market — including
                  Grand Rapids, Battle Creek, South Haven, and dozens of surrounding communities —
                  we have built our reputation on a foundation of local market expertise, professional
                  integrity, and unwavering commitment to accuracy.
                </p>
                <p>
                  Our appraisers are not just licensed professionals — they are Southwest Michigan
                  residents who understand the unique dynamics of our local real estate market.
                  From Kalamazoo's diverse urban neighborhoods to the lakefront estates of South Haven
                  and the agricultural properties of Calhoun County, we bring genuine local knowledge
                  to every assignment.
                </p>
                <p>
                  Over the past two decades, we have completed more than 5,000 appraisals and earned
                  the trust of hundreds of lenders, attorneys, estate planners, and homeowners across
                  Southwest Michigan. We are proud to be the region's most trusted independent
                  appraisal firm.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src={APPRAISER_IMG}
                alt="Lake Shore Real Estate Appraisals certified appraiser inspecting a Southwest Michigan home"
                className="rounded-lg w-full object-cover shadow-xl"
                style={{ maxHeight: "520px" }}
                loading="lazy"
              />
              <div className="absolute -bottom-6 -right-6 bg-[oklch(0.48_0.14_245)] text-white p-5 rounded-lg shadow-xl">
                <div className="text-3xl font-black" style={{ fontFamily: "'Merriweather', serif" }}>5,000+</div>
                <div className="text-xs font-bold uppercase tracking-widest" style={{ fontFamily: "'Lato', sans-serif" }}>Appraisals<br />Completed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-20 bg-[oklch(0.96_0.008_90)]" aria-label="Credentials and certifications">
        <div className="container">
          <div className="text-center mb-12">
            <div className="section-label mb-2">Credentials</div>
            <h2 className="text-3xl font-black text-[oklch(0.22_0.005_260)]" style={{ fontFamily: "'Merriweather', serif" }}>
              Licensed, Certified & Professionally Accredited
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {credentials.map((cred) => (
              <div key={cred.title} className="bg-white rounded-lg p-7 border border-border hover:border-[oklch(0.48_0.14_245)] hover:shadow-md transition-all">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[oklch(0.48_0.14_245)] flex items-center justify-center flex-shrink-0">
                    <cred.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-black text-[oklch(0.22_0.005_260)] mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                      {cred.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cred.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" aria-label="Company values">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="section-label mb-3">Our Values</div>
              <h2 className="text-3xl font-black text-[oklch(0.22_0.005_260)] mb-6" style={{ fontFamily: "'Merriweather', serif" }}>
                The Principles Behind Every Appraisal
              </h2>
              <div className="space-y-5">
                {values.map((v) => (
                  <div key={v.title} className="left-border-accent">
                    <div className="font-bold text-[oklch(0.22_0.005_260)] mb-1" style={{ fontFamily: "'Lato', sans-serif" }}>{v.title}</div>
                    <div className="text-sm text-muted-foreground">{v.desc}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/order-appraisal" className="btn-primary">
                  Order an Appraisal
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
            <div>
              <img
                src={HERO_IMG}
                alt="Southwest Michigan neighborhood aerial view"
                className="rounded-lg w-full object-cover shadow-lg"
                style={{ maxHeight: "420px" }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[oklch(0.96_0.008_90)]" aria-label="Frequently asked questions">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="section-label mb-2">FAQ</div>
              <h2 className="text-3xl font-black text-[oklch(0.22_0.005_260)]" style={{ fontFamily: "'Merriweather', serif" }}>
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

      {/* CTA */}
      <section className="py-16 bg-[oklch(0.48_0.14_245)]" aria-label="Contact CTA">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Ready to Work with Southwest Michigan's Best?
          </h2>
          <p className="text-white/80 mb-8 max-w-lg mx-auto">
            Contact Lake Shore Real Estate Appraisals today for a free quote on your residential
            or commercial appraisal anywhere in Southwest Michigan.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/order-appraisal" className="btn-gold">
              Order an Appraisal
              <ArrowRight size={16} />
            </Link>
            <a href="tel:+12695550142" className="btn-outline-white">
              <Phone size={16} />
              (269) 555-0142
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
