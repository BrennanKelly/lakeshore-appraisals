/* ==========================================================================
   SEO LANDING PAGE — Paw Paw Home Appraisal
   Target: home appraisal paw paw mi, real estate appraiser van buren county
   ========================================================================== */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export default function PawPawAppraisal() {
  return (
    <Layout>
      <section className="bg-[oklch(0.22_0.005_260)] text-white py-16" aria-label="Paw Paw home appraisal header">
        <div className="container">
          <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">Paw Paw, Michigan</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Home Appraisal Services in{" "}
            <span className="text-[oklch(0.72_0.12_245)]">Paw Paw, MI</span>
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-2xl leading-relaxed">
            Lakeshore Appraisal provides certified residential property appraisals in Paw Paw and
            throughout Van Buren County. Robert Surns has over 20 years of local appraisal experience.
          </p>
        </div>
      </section>

      <section className="py-16" aria-label="Paw Paw appraisal content">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-black text-[oklch(0.22_0.005_260)] mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Certified Real Estate Appraiser in Paw Paw, Michigan
              </h2>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Paw Paw, the county seat of Van Buren County, is a charming community known for its
                wine country heritage, Maple Lake, and small-town character. The Paw Paw real estate
                market includes everything from historic homes in the village center to lakefront properties
                on Maple Lake and rural acreage in the surrounding townships. Accurate property valuation
                in this market requires an appraiser who understands the unique factors that drive value in
                Van Buren County.
              </p>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Robert Surns of Lakeshore Appraisal has been providing professional property appraisals
                in Paw Paw and throughout Van Buren County for over 20 years. Based in nearby Mattawan —
                just minutes from Paw Paw — Robert has an intimate understanding of the local market,
                including the impact of lake access, agricultural zoning, wine trail proximity, and
                school district boundaries on property values.
              </p>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Paw Paw Appraisal Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Single-family home appraisals",
                  "Lakefront property appraisals",
                  "Rural and agricultural property valuations",
                  "Divorce and legal appraisals",
                  "Estate and probate valuations",
                  "PMI removal appraisals",
                  "Tax appeal support appraisals",
                  "Pre-listing market valuations",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.005_260)]">
                    <CheckCircle2 size={15} className="text-[oklch(0.48_0.14_245)] flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Understanding the Paw Paw and Van Buren County Market
              </h3>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Van Buren County's real estate market is distinctly different from neighboring Kalamazoo County.
                Property values are influenced by factors specific to the area: proximity to Maple Lake,
                location along the Southwest Michigan wine trail, agricultural land use, and access to
                I-94 for commuters who work in Kalamazoo or Portage. The county also includes popular
                communities like Lawrence, Decatur, Hartford, and Bangor, each with their own market dynamics.
              </p>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Robert Surns has appraised hundreds of properties throughout Van Buren County and understands
                the comparable sales data that accurately reflects market values in Paw Paw and surrounding
                communities. Whether you're buying, selling, refinancing, or dealing with a legal matter,
                Lakeshore Appraisal delivers USPAP-compliant reports accepted by all major lenders, banks,
                and courts in Michigan. Most residential appraisals are completed within 48 hours.
              </p>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Areas We Serve in Van Buren County
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                {[
                  "Paw Paw Village", "Paw Paw Township", "Maple Lake area",
                  "Mattawan", "Lawrence", "Decatur",
                  "Hartford", "Bangor", "South Haven",
                  "Almena Township", "Waverly Township", "Antwerp Township",
                ].map((n) => (
                  <div key={n} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.005_260)]">
                    <MapPin size={13} className="text-[oklch(0.48_0.14_245)] flex-shrink-0" />
                    {n}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[oklch(0.48_0.14_245)] rounded-lg p-8 text-center text-white mt-8">
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Need a Home Appraisal in Paw Paw?
              </h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Contact Robert Surns today for a professional, accurate property appraisal in Paw Paw and Van Buren County.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/order-appraisal" className="btn-gold">
                  Order an Appraisal <ArrowRight size={16} />
                </Link>
                <a href="tel:+12695984008" className="btn-outline-white">
                  <Phone size={16} /> (269) 598-4008
                </a>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="text-muted-foreground">Nearby areas:</span>
              <Link href="/mattawan-home-appraisal" className="text-[oklch(0.48_0.14_245)] hover:underline">Mattawan Home Appraisal</Link>
              <Link href="/kalamazoo-home-appraisal" className="text-[oklch(0.48_0.14_245)] hover:underline">Kalamazoo Home Appraisal</Link>
              <Link href="/portage-home-appraisal" className="text-[oklch(0.48_0.14_245)] hover:underline">Portage Home Appraisal</Link>
              <Link href="/service-areas" className="text-[oklch(0.48_0.14_245)] hover:underline">All Service Areas</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
