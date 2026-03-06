/* ==========================================================================
   SERVICE AREAS PAGE — Lake Shore Real Estate Appraisals
   SEO: real estate appraiser Kalamazoo MI, home appraisal Grand Rapids, 
   property appraisal Battle Creek, appraisal South Haven Michigan
   ========================================================================== */

import { Link } from "wouter";
import Layout from "@/components/Layout";
import { MapPin, Phone, ArrowRight, CheckCircle2 } from "lucide-react";

const KALAMAZOO_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365056642/cyMjyDqH3wWwkbVJvts4SR/kalamazoo-neighborhood-bz93vmwL7NgLZadPksmWwJ.webp";
const LAKEFRONT_IMG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663365056642/cyMjyDqH3wWwkbVJvts4SR/south-haven-lakefront-eaEuGx5fmXYJB8fmsKJpGY.webp";

const primaryAreas = [
  {
    city: "Kalamazoo",
    state: "MI",
    county: "Kalamazoo County",
    slug: "kalamazoo",
    headline: "Real Estate Appraisals in Kalamazoo, Michigan",
    desc: `Kalamazoo is our primary service hub. We provide certified residential and commercial appraisals throughout the city and surrounding townships including Portage, Comstock, Oshtemo, Texas Township, and Richland. Our appraisers have extensive knowledge of Kalamazoo's diverse neighborhoods — from the historic Stuart neighborhood to the Vine neighborhood and the Westnedge Hill corridor. We understand how proximity to Western Michigan University, Kalamazoo College, and major employers like Pfizer and Stryker influence local property values.`,
    services: ["Residential Appraisals", "Commercial Appraisals", "Divorce Appraisals", "PMI Removal", "Estate Appraisals", "Tax Appeal Appraisals"],
    neighborhoods: ["Portage", "Comstock", "Oshtemo", "Texas Township", "Richland", "Galesburg", "Schoolcraft"],
    population: "72,000+",
    medianHome: "$185,000",
  },
  {
    city: "Grand Rapids",
    state: "MI",
    county: "Kent County",
    slug: "grand-rapids",
    headline: "Real Estate Appraisals in Grand Rapids, Michigan",
    desc: `Grand Rapids is Michigan's second-largest city and a thriving real estate market. Lake Shore Real Estate Appraisals serves homeowners, lenders, and attorneys throughout the Grand Rapids metro area including Wyoming, Kentwood, Walker, Grandville, and East Grand Rapids. Our appraisers understand the premium placed on Grand Rapids' revitalized urban neighborhoods, the Heritage Hill historic district, and the suburban communities along the M-6 corridor.`,
    services: ["Residential Appraisals", "Commercial Appraisals", "Pre-Listing Appraisals", "Divorce Appraisals", "Estate Appraisals", "Investment Property"],
    neighborhoods: ["Wyoming", "Kentwood", "Walker", "Grandville", "East Grand Rapids", "Forest Hills", "Caledonia"],
    population: "198,000+",
    medianHome: "$225,000",
  },
  {
    city: "Battle Creek",
    state: "MI",
    county: "Calhoun County",
    slug: "battle-creek",
    headline: "Real Estate Appraisals in Battle Creek, Michigan",
    desc: `Battle Creek and Calhoun County offer a diverse real estate market with strong value opportunities. Our certified appraisers serve Battle Creek, Springfield, Lakeview, and surrounding Calhoun County communities. We have deep knowledge of Battle Creek's historic neighborhoods, the Cereal City's commercial corridors, and the rural agricultural properties throughout the county. Whether you need a residential appraisal for refinancing or a commercial valuation for a business transaction, we deliver accurate, timely reports.`,
    services: ["Residential Appraisals", "Commercial Appraisals", "Estate Appraisals", "Tax Appeal Appraisals", "Divorce Appraisals", "PMI Removal"],
    neighborhoods: ["Springfield", "Lakeview", "Emmett Township", "Bedford Township", "Pennfield Township", "Marshall", "Albion"],
    population: "51,000+",
    medianHome: "$125,000",
  },
  {
    city: "South Haven",
    state: "MI",
    county: "Van Buren County",
    slug: "south-haven",
    headline: "Real Estate Appraisals in South Haven, Michigan",
    desc: `South Haven and the Lake Michigan shoreline represent some of Southwest Michigan's most unique and valuable real estate. Lake Shore Real Estate Appraisals specializes in lakefront and waterfront property appraisals throughout Van Buren County — including South Haven, Bangor, Lawton, and Paw Paw. Our appraisers understand the premium factors that drive waterfront values: linear feet of frontage, water quality, dock rights, seasonal access, and proximity to South Haven's vibrant downtown and marina district.`,
    services: ["Lakefront Property Appraisals", "Residential Appraisals", "Vacation Rental Appraisals", "Estate Appraisals", "Pre-Listing Appraisals", "Divorce Appraisals"],
    neighborhoods: ["Bangor", "Lawton", "Paw Paw", "Hartford", "Covert Township", "Geneva Township", "Columbia Township"],
    population: "4,500+",
    medianHome: "$285,000",
  },
];

const additionalAreas = [
  { city: "Holland", county: "Ottawa County" },
  { city: "Portage", county: "Kalamazoo County" },
  { city: "St. Joseph", county: "Berrien County" },
  { city: "Allegan", county: "Allegan County" },
  { city: "Plainwell", county: "Allegan County" },
  { city: "Hastings", county: "Barry County" },
  { city: "Coldwater", county: "Branch County" },
  { city: "Three Rivers", county: "St. Joseph County" },
  { city: "Paw Paw", county: "Van Buren County" },
  { city: "Wayland", county: "Allegan County" },
  { city: "Sturgis", county: "St. Joseph County" },
  { city: "Benton Harbor", county: "Berrien County" },
];

export default function ServiceAreas() {
  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[oklch(0.22_0.005_260)] text-white py-16" aria-label="Service areas header">
        <div className="container">
          <div className="section-label text-[oklch(0.72_0.12_85)] mb-3">Where We Serve</div>
          <h1 className="text-3xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Real Estate Appraisals Across<br />
            <span className="text-[oklch(0.72_0.12_85)]">Southwest Michigan</span>
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-2xl leading-relaxed">
            Lake Shore Real Estate Appraisals serves homeowners, lenders, attorneys, and real estate
            professionals throughout Southwest Michigan. Our certified appraisers cover Kalamazoo,
            Grand Rapids, Battle Creek, South Haven, and dozens of surrounding communities.
          </p>
        </div>
      </section>

      {/* Primary service areas */}
      <section className="py-16" aria-label="Primary service areas">
        <div className="container">
          <div className="section-label mb-3">Primary Markets</div>
          <h2 className="text-2xl md:text-3xl font-black text-[oklch(0.22_0.005_260)] mb-12" style={{ fontFamily: "'Merriweather', serif" }}>
            Our Core Service Areas
          </h2>

          <div className="space-y-16">
            {primaryAreas.map((area, idx) => (
              <article key={area.slug} id={area.slug} className={`grid grid-cols-1 lg:grid-cols-3 gap-10 items-start pb-16 ${idx < primaryAreas.length - 1 ? "border-b border-border" : ""}`}>
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-3">
                    <MapPin size={18} className="text-[oklch(0.32_0.09_140)]" />
                    <span className="text-sm font-bold uppercase tracking-widest text-[oklch(0.32_0.09_140)]" style={{ fontFamily: "'Lato', sans-serif" }}>
                      {area.county}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-[oklch(0.22_0.005_260)] mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
                    {area.headline}
                  </h2>
                  <p className="text-[oklch(0.35_0.005_260)] leading-relaxed mb-6">{area.desc}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.32_0.09_140)] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Services Available
                      </div>
                      <ul className="space-y-1.5">
                        {area.services.map((s) => (
                          <li key={s} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.005_260)]">
                            <CheckCircle2 size={13} className="text-[oklch(0.32_0.09_140)] flex-shrink-0" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.32_0.09_140)] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>
                        Communities Served
                      </div>
                      <ul className="space-y-1.5">
                        {area.neighborhoods.map((n) => (
                          <li key={n} className="flex items-center gap-2 text-sm text-[oklch(0.35_0.005_260)]">
                            <span className="w-1 h-1 rounded-full bg-[oklch(0.72_0.12_85)] flex-shrink-0" />
                            {n}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Link href="/order-appraisal" className="btn-primary text-sm py-2.5 px-5">
                    Order Appraisal in {area.city}
                    <ArrowRight size={14} />
                  </Link>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-[oklch(0.96_0.008_90)] rounded-lg p-6 mb-4">
                    <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.32_0.09_140)] mb-4" style={{ fontFamily: "'Lato', sans-serif" }}>
                      Market Snapshot
                    </div>
                    <div className="space-y-3">
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">City Population</div>
                        <div className="font-bold text-[oklch(0.22_0.005_260)]">{area.population}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">Median Home Value</div>
                        <div className="font-bold text-[oklch(0.22_0.005_260)]">{area.medianHome}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">County</div>
                        <div className="font-bold text-[oklch(0.22_0.005_260)]">{area.county}</div>
                      </div>
                    </div>
                  </div>
                  {idx === 0 && (
                    <img
                      src={KALAMAZOO_IMG}
                      alt={`${area.city} Michigan neighborhood homes`}
                      className="rounded-lg w-full object-cover shadow-md"
                      style={{ height: "200px" }}
                      loading="lazy"
                    />
                  )}
                  {idx === 3 && (
                    <img
                      src={LAKEFRONT_IMG}
                      alt="South Haven Michigan lakefront property"
                      className="rounded-lg w-full object-cover shadow-md"
                      style={{ height: "200px" }}
                      loading="lazy"
                    />
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Additional areas */}
      <section className="py-16 bg-[oklch(0.96_0.008_90)]" aria-label="Additional service areas">
        <div className="container">
          <div className="section-label mb-3">Extended Coverage</div>
          <h2 className="text-2xl md:text-3xl font-black text-[oklch(0.22_0.005_260)] mb-4" style={{ fontFamily: "'Merriweather', serif" }}>
            Additional Communities We Serve
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl">
            In addition to our primary markets, Lake Shore Real Estate Appraisals serves dozens of
            communities throughout Southwest Michigan. Don't see your city? Call us — we likely cover your area.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-10">
            {additionalAreas.map((area) => (
              <div key={area.city} className="bg-white rounded-md p-4 border border-border hover:border-[oklch(0.32_0.09_140)] transition-colors">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin size={13} className="text-[oklch(0.32_0.09_140)]" />
                  <span className="font-bold text-sm text-[oklch(0.22_0.005_260)]">{area.city}, MI</span>
                </div>
                <div className="text-xs text-muted-foreground">{area.county}</div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg p-6 border border-border max-w-xl">
            <h3 className="font-black text-[oklch(0.22_0.005_260)] mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
              Don't See Your Area?
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              We frequently travel throughout Southwest Michigan and may serve your community.
              Contact us to confirm coverage for your specific location.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href="tel:+12695550142" className="btn-primary text-sm py-2.5 px-5">
                <Phone size={14} />
                Call Us
              </a>
              <Link href="/contact" className="btn-outline-green text-sm py-2.5 px-5">
                Send a Message
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
