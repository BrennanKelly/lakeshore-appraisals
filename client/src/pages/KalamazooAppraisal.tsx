/* ==========================================================================
   SEO LANDING PAGE — Kalamazoo Home Appraisal
   Target: home appraisal kalamazoo, real estate appraiser kalamazoo mi
   ========================================================================== */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export default function KalamazooAppraisal() {
  return (
    <Layout>
      <section className="bg-[oklch(0.22_0.005_260)] text-white py-16" aria-label="Kalamazoo home appraisal header">
        <div className="container">
          <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">Kalamazoo, Michigan</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Home Appraisal Services in{" "}
            <span className="text-[oklch(0.72_0.12_245)]">Kalamazoo, MI</span>
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-2xl leading-relaxed">
            Lakeshore Appraisal provides professional residential property appraisals throughout Kalamazoo
            and Kalamazoo County. Owner Robert Surns has over 20 years of experience serving Southwest Michigan.
          </p>
        </div>
      </section>

      <section className="py-16" aria-label="Kalamazoo appraisal content">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-black text-[oklch(0.22_0.005_260)] mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Trusted Real Estate Appraiser in Kalamazoo, Michigan
              </h2>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Kalamazoo is one of Southwest Michigan's most dynamic real estate markets, with neighborhoods ranging from
                historic Vine and Stuart areas to newer developments in Westwood and Texas Township. Whether you own a
                century-old craftsman in the Edison neighborhood or a modern home near Asylum Lake, accurate property
                valuation requires deep local knowledge that only comes from years of experience in the market.
              </p>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Robert Surns, owner of Lakeshore Appraisal, has been appraising residential properties in Kalamazoo
                and throughout Kalamazoo County for over two decades. As a Michigan Certified Residential Appraiser based
                in nearby Mattawan, Robert brings firsthand knowledge of Kalamazoo's diverse neighborhoods, school
                districts, and market trends to every appraisal assignment.
              </p>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Kalamazoo Appraisal Services We Offer
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Single-family home appraisals",
                  "Condo and townhome appraisals",
                  "Divorce and legal appraisals",
                  "Estate and probate valuations",
                  "PMI removal appraisals",
                  "Pre-listing market valuations",
                  "Tax appeal support appraisals",
                  "Refinance appraisals",
                ].map((s) => (
                  <div key={s} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.005_260)]">
                    <CheckCircle2 size={15} className="text-[oklch(0.48_0.14_245)] flex-shrink-0" />
                    {s}
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Why Kalamazoo Homeowners Choose Lakeshore Appraisal
              </h3>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Kalamazoo's real estate market has unique characteristics that require an appraiser who truly understands
                the area. From the student rental market near Western Michigan University to the family-friendly suburbs
                of Oshtemo and Cooper Townships, property values vary significantly by location, condition, and
                neighborhood trends. Robert Surns has completed thousands of appraisals in Kalamazoo County and
                understands the comparable sales data, zoning regulations, and market conditions that impact your
                property's value.
              </p>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Every appraisal from Lakeshore Appraisal is USPAP-compliant and accepted by banks, credit unions,
                mortgage companies, and courts throughout Michigan. Whether you need an appraisal for a home purchase,
                refinance, divorce settlement, estate planning, or property tax appeal in Kalamazoo, Robert delivers
                accurate reports with a typical 48-hour turnaround.
              </p>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Kalamazoo Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                {[
                  "Westnedge Hill", "Vine", "Stuart", "Edison",
                  "Milwood", "Winchell", "Oakwood", "Westwood",
                  "Oshtemo Township", "Cooper Township", "Texas Township", "Comstock Township",
                ].map((n) => (
                  <div key={n} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.005_260)]">
                    <MapPin size={13} className="text-[oklch(0.48_0.14_245)] flex-shrink-0" />
                    {n}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-[oklch(0.48_0.14_245)] rounded-lg p-8 text-center text-white mt-8">
              <h3 className="text-2xl font-black mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Need a Home Appraisal in Kalamazoo?
              </h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Contact Robert Surns today for a professional, accurate property appraisal in Kalamazoo, Michigan.
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

            {/* Internal links */}
            <div className="mt-8 flex flex-wrap gap-4 text-sm">
              <span className="text-muted-foreground">Nearby areas:</span>
              <Link href="/portage-home-appraisal" className="text-[oklch(0.48_0.14_245)] hover:underline">Portage Home Appraisal</Link>
              <Link href="/mattawan-home-appraisal" className="text-[oklch(0.48_0.14_245)] hover:underline">Mattawan Home Appraisal</Link>
              <Link href="/paw-paw-home-appraisal" className="text-[oklch(0.48_0.14_245)] hover:underline">Paw Paw Home Appraisal</Link>
              <Link href="/service-areas" className="text-[oklch(0.48_0.14_245)] hover:underline">All Service Areas</Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
