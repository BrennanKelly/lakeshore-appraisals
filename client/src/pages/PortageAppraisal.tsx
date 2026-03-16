/* ==========================================================================
   SEO LANDING PAGE — Portage Home Appraisal
   Target: home appraisal portage mi, real estate appraiser portage michigan
   ========================================================================== */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { Phone, ArrowRight, CheckCircle2, MapPin } from "lucide-react";

export default function PortageAppraisal() {
  return (
    <Layout>
      <section className="bg-[oklch(0.22_0.005_260)] text-white py-16" aria-label="Portage home appraisal header">
        <div className="container">
          <div className="section-label text-[oklch(0.72_0.12_245)] mb-3">Portage, Michigan</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Home Appraisal Services in{" "}
            <span className="text-[oklch(0.72_0.12_245)]">Portage, MI</span>
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-2xl leading-relaxed">
            Lakeshore Appraisal provides professional residential property appraisals in Portage and throughout
            Kalamazoo County. Owner Robert Surns brings over 20 years of local appraisal experience.
          </p>
        </div>
      </section>

      <section className="py-16" aria-label="Portage appraisal content">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-black text-[oklch(0.22_0.005_260)] mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                Professional Real Estate Appraiser in Portage, Michigan
              </h2>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Portage is one of Southwest Michigan's most desirable communities, known for its excellent schools,
                well-maintained neighborhoods, and convenient access to Kalamazoo's employment centers. With a mix
                of established neighborhoods near Portage Central and newer developments around South Westnedge,
                the Portage real estate market offers everything from starter homes to executive properties along
                the area's scenic lakes and nature preserves.
              </p>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Robert Surns of Lakeshore Appraisal has been providing residential property appraisals in Portage
                for over 20 years. Based in nearby Mattawan, Robert is intimately familiar with Portage's diverse
                housing stock, from the mid-century ranch homes near Haverhill to the custom-built properties in
                the Woodland Estates and Romence Hills areas. This deep local knowledge translates to more accurate
                appraisals and faster turnaround times for Portage homeowners.
              </p>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Portage Appraisal Services
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
                Understanding the Portage Real Estate Market
              </h3>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                Portage consistently ranks among Michigan's best places to live, which drives strong demand for
                residential properties. The city's proximity to major employers like Pfizer, Stryker, and
                Bronson Healthcare makes it a top choice for professionals and families. Property values in
                Portage reflect this desirability, but they vary significantly by subdivision, lot size, and
                proximity to amenities like Celery Flats, Bishop's Bog, and West Lake.
              </p>
              <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">
                An accurate appraisal in Portage requires understanding these micro-market differences. Robert
                Surns has completed thousands of appraisals in the area and knows which comparable sales best
                reflect your property's true market value. All appraisals are USPAP-compliant and accepted by
                all major lenders, banks, courts, and mortgage companies in Michigan.
              </p>

              <h3 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                Portage Neighborhoods We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mb-8">
                {[
                  "Amberly", "Woodland Estates", "Romence Hills",
                  "Haverhill", "Angling Road area", "South Westnedge",
                  "Portage Central area", "West Lake", "Kilgore area",
                  "Shaver Road corridor", "Milham Park area", "Bishop's Bog area",
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
                Need a Home Appraisal in Portage?
              </h3>
              <p className="text-white/80 mb-6 max-w-lg mx-auto">
                Contact Robert Surns today for a professional, accurate property appraisal in Portage, Michigan.
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
              <Link href="/kalamazoo-home-appraisal" className="text-[oklch(0.48_0.14_245)] hover:underline">Kalamazoo Home Appraisal</Link>
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
