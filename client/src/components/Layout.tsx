/* ==========================================================================
   LAYOUT COMPONENT — Lake Shore Real Estate Appraisals
   Design: Midwest Modernist — sticky header with persistent phone CTA, full footer
   ========================================================================== */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, MapPin, Mail, ChevronRight } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="bg-[oklch(0.22_0.005_260)] text-white text-sm py-2 px-4">
        <div className="container flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+12695550142" className="flex items-center gap-1.5 hover:text-[oklch(0.62_0.14_245)] transition-colors">
              <Phone size={13} />
              <span className="font-semibold">(269) 555-0142</span>
            </a>
            <a href="mailto:info@lakeshoreappraisals.com" className="flex items-center gap-1.5 hover:text-[oklch(0.62_0.14_245)] transition-colors hidden sm:flex">
              <Mail size={13} />
              <span>info@lakeshoreappraisals.com</span>
            </a>
          </div>
          <div className="flex items-center gap-1.5 text-[oklch(0.62_0.14_245)]">
            <MapPin size={13} />
            <span className="hidden sm:inline">Serving Southwest Michigan</span>
            <span className="sm:hidden">SW Michigan</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo-lighthouse.svg"
              alt="Lake Shore Appraisals Lighthouse Logo"
              className="w-12 h-12 transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col leading-tight">
              <span
                className="text-xl font-black tracking-tight text-[oklch(0.22_0.005_260)] group-hover:text-[oklch(0.48_0.14_245)] transition-colors"
                style={{ fontFamily: "'Merriweather', serif" }}
              >
                Lake Shore
              </span>
              <span
                className="text-xs font-bold uppercase tracking-[0.2em] text-[oklch(0.48_0.14_245)]"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Real Estate Appraisals
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wide transition-colors relative pb-1 ${
                  location === link.href
                    ? "text-[oklch(0.48_0.14_245)] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[oklch(0.48_0.14_245)]"
                    : "text-[oklch(0.35_0.005_260)] hover:text-[oklch(0.48_0.14_245)]"
                }`}
                style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.08em" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <Link href="/order-appraisal" className="btn-gold hidden md:inline-flex text-xs py-2.5 px-5">
              Order Appraisal
            </Link>
            <button
              className="lg:hidden p-2 text-[oklch(0.22_0.005_260)] hover:text-[oklch(0.48_0.14_245)] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-border">
            <nav className="container py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center justify-between py-3 px-4 rounded-md text-sm font-bold uppercase tracking-wide transition-colors ${
                    location === link.href
                      ? "bg-[oklch(0.48_0.14_245)] text-white"
                      : "text-[oklch(0.22_0.005_260)] hover:bg-[oklch(0.95_0.005_90)]"
                  }`}
                  style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.08em" }}
                >
                  {link.label}
                  <ChevronRight size={16} />
                </Link>
              ))}
              <Link href="/order-appraisal" className="btn-gold mt-3 justify-center">
                Order Appraisal
              </Link>
            </nav>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[oklch(0.22_0.005_260)] text-white">
        <div className="container py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="lg:col-span-1">
              <div className="mb-4 flex items-center gap-3">
                <img
                  src="/logo-lighthouse.svg"
                  alt="Lake Shore Appraisals Lighthouse Logo"
                  className="w-12 h-12"
                />
                <div>
                  <div className="text-xl font-black text-white" style={{ fontFamily: "'Merriweather', serif" }}>
                    Lake Shore
                  </div>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-[oklch(0.62_0.14_245)]" style={{ fontFamily: "'Lato', sans-serif" }}>
                    Real Estate Appraisals
                  </div>
                </div>
              </div>
              <p className="text-sm text-[oklch(0.75_0.005_260)] leading-relaxed mb-6">
                Certified residential and commercial property appraisals serving Southwest Michigan since 2005. Licensed, insured, and locally trusted.
              </p>
              <a href="tel:+12695550142" className="btn-gold text-xs py-2.5 px-5">
                <Phone size={14} />
                (269) 555-0142
              </a>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[oklch(0.62_0.14_245)] mb-5" style={{ fontFamily: "'Lato', sans-serif" }}>
                Our Services
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Residential Appraisals",
                  "Divorce Appraisals",
                  "Estate & Probate Appraisals",
                  "PMI Removal Appraisals",
                  "Commercial Appraisals",
                  "Lakefront Property Appraisals",
                  "Tax Appeal Appraisals",
                  "Pre-Listing Appraisals",
                ].map((s) => (
                  <li key={s}>
                    <Link href="/services" className="text-sm text-[oklch(0.75_0.005_260)] hover:text-white transition-colors flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[oklch(0.62_0.14_245)] flex-shrink-0" />
                      {s}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Areas */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[oklch(0.62_0.14_245)] mb-5" style={{ fontFamily: "'Lato', sans-serif" }}>
                Service Areas
              </h3>
              <ul className="space-y-2.5">
                {[
                  "Kalamazoo, MI",
                  "Grand Rapids, MI",
                  "Battle Creek, MI",
                  "South Haven, MI",
                  "Portage, MI",
                  "Holland, MI",
                  "St. Joseph, MI",
                  "Allegan County, MI",
                  "Van Buren County, MI",
                  "Calhoun County, MI",
                ].map((area) => (
                  <li key={area}>
                    <Link href="/service-areas" className="text-sm text-[oklch(0.75_0.005_260)] hover:text-white transition-colors flex items-center gap-2">
                      <MapPin size={12} className="text-[oklch(0.62_0.14_245)] flex-shrink-0" />
                      {area}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-[oklch(0.62_0.14_245)] mb-5" style={{ fontFamily: "'Lato', sans-serif" }}>
                Contact Us
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start gap-3">
                  <Phone size={15} className="text-[oklch(0.62_0.14_245)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[oklch(0.55_0.005_260)] uppercase tracking-wide mb-0.5">Phone</div>
                    <a href="tel:+12695550142" className="text-sm text-white hover:text-[oklch(0.62_0.14_245)] transition-colors font-semibold">
                      (269) 555-0142
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail size={15} className="text-[oklch(0.62_0.14_245)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[oklch(0.55_0.005_260)] uppercase tracking-wide mb-0.5">Email</div>
                    <a href="mailto:info@lakeshoreappraisals.com" className="text-sm text-white hover:text-[oklch(0.62_0.14_245)] transition-colors">
                      info@lakeshoreappraisals.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin size={15} className="text-[oklch(0.62_0.14_245)] mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-xs text-[oklch(0.55_0.005_260)] uppercase tracking-wide mb-0.5">Service Area</div>
                    <span className="text-sm text-white">Southwest Michigan</span>
                  </div>
                </li>
              </ul>
              <div>
                <div className="text-xs text-[oklch(0.55_0.005_260)] uppercase tracking-wide mb-2">Hours</div>
                <div className="text-sm text-[oklch(0.75_0.005_260)]">Mon – Fri: 8:00 AM – 5:00 PM</div>
                <div className="text-sm text-[oklch(0.75_0.005_260)]">Sat: By Appointment</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[oklch(0.32_0.005_260)]">
          <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[oklch(0.55_0.005_260)]">
            <span>© {new Date().getFullYear()} Lake Shore Real Estate Appraisals. All rights reserved.</span>
            <span>Licensed Michigan Certified Residential Appraiser | Southwest Michigan</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
