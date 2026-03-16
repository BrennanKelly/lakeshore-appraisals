/* ==========================================================================
   SEO LANDING PAGE — Mattawan Home Appraisal
   Target: home appraisal mattawan mi, real estate appraiser mattawan michigan
   ========================================================================== */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export default function MattawanAppraisal() {
  return (
    <Layout>
      <section className="bg-[oklch(0.22_0.005_260)] text-white py-16" aria-label="Mattawan home appraisal header">
        <div className="container">
          <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">Mattawan, Michigan</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Home Appraisal Services in{" "}
            <span className="text-[oklch(0.72_0.12_245)]">Mattawan, MI</span>
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-2xl leading-relaxed">
            Lakeshore Appraisal is based right here in Mattawan, Michigan. Owner Robert Surns provides
            professional residential property appraisals with over 20 years of local experience.
          </p>
        </div>
      </section>

      <section className="py-16" aria-label="Mattawan appraisal content">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-black text-[oklch(0.22_0.005_260)] mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Your Local Real Estate Appraiser in Mattawan, Michigan
              </h2>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Mattawan is a growing community nestled between Kalamazoo and Paw Paw in Southwest Michigan.
                Known for its highly regarded Mattawan Consolidated School district, family-friendly atmosphere,
                and convenient I-94 access, Mattawan has become one of the most sought-after residential areas
                in Van Buren County. The village and surrounding Antwerp Township offer a diverse mix of housing,
                from established neighborhoods near downtown to newer subdivisions and rural properties with acreage.
              </p>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Robert Surns, owner of Lakeshore Appraisal, is proud to call Mattawan home. As a Michigan Certified
                Residential Appraiser with over 20 years of experience, Robert has an unmatched understanding of
                Mattawan's residential market. He knows which subdivisions command premium prices, how the school
                district boundaries affect values, and what comparable sales best reflect your property's worth.
                When you need an appraisal in Mattawan, you're working with someone who truly knows the community.
              </p>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Mattawan Appraisal Services
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {[
                  "Single-family home appraisals",
                  "New construction appraisals",
                  "Rural property with acreage",
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
                Why Mattawan Homeowners Trust Lakeshore Appraisal
              </h3>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Mattawan's real estate market has seen significant growth over the past decade, driven by the
                excellent school district and the community's location at the intersection of Van Buren and
                Kalamazoo Counties. New developments like the areas along Main Street and the expanding
                subdivisions near the village center have added modern housing stock, while established
                neighborhoods retain their character and value. Understanding how these different property
                types compare requires a local appraiser with genuine market knowledge.
              </p>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                As a Mattawan resident and longtime appraiser, Robert Surns delivers the most accurate
                property valuations possible. Every appraisal from Lakeshore Appraisal is USPAP-compliant
                and accepted by all major lenders, banks, credit unions, and courts throughout Michigan.
                With a typical 48-hour turnaround, Robert works efficiently to keep your real estate
                transaction, refinance, or legal proceeding on schedule.
              </p>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Areas We Serve Near Mattawan
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                {[
                  "Mattawan Village", "Antwerp Township", "Paw Paw",
                  "Lawton", "Gobles", "South Haven",
                  "Kalamazoo", "Portage", "Texas Township",
                  "Decatur", "Lawrence", "Vicksburg",
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
                Need a Home Appraisal in Mattawan?
              </h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Contact Robert Surns today for a professional, accurate property appraisal in Mattawan, Michigan.
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
              <Link href="/paw-paw-home-appraisal" className="text-[oklch(0.48_0.14_245)] hover:underline">Paw Paw Home Appraisal</Link>
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
