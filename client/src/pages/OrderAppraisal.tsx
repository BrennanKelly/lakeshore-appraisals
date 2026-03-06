/* ==========================================================================
   ORDER APPRAISAL PAGE — Lake Shore Real Estate Appraisals
   SEO: order real estate appraisal Michigan, request appraisal Kalamazoo,
   appraisal order form Southwest Michigan
   ========================================================================== */

import { useState } from "react";
import Layout from "@/components/Layout";
import {
  Home as HomeIcon, Scale, FileText, Shield, Building2, Waves,
  TrendingUp, ClipboardList, CheckCircle2, ArrowRight, Phone, ChevronLeft,
} from "lucide-react";
import { toast } from "sonner";

const appraisalTypes = [
  { id: "residential", icon: HomeIcon, title: "Residential Appraisal", desc: "Single-family, condo, or multi-family home", turnaround: "48–72 hrs" },
  { id: "divorce", icon: Scale, title: "Divorce Appraisal", desc: "Court-admissible marital property valuation", turnaround: "48–72 hrs" },
  { id: "estate", icon: FileText, title: "Estate / Probate", desc: "Date-of-death or retrospective valuation", turnaround: "3–5 days" },
  { id: "pmi", icon: Shield, title: "PMI Removal", desc: "Document equity to cancel mortgage insurance", turnaround: "48 hrs" },
  { id: "commercial", icon: Building2, title: "Commercial Appraisal", desc: "Office, retail, industrial, or mixed-use", turnaround: "5–10 days" },
  { id: "lakefront", icon: Waves, title: "Lakefront Property", desc: "Lake Michigan or inland waterfront property", turnaround: "3–5 days" },
  { id: "tax", icon: TrendingUp, title: "Tax Appeal", desc: "Challenge an over-assessed property value", turnaround: "3–5 days" },
  { id: "prelisting", icon: ClipboardList, title: "Pre-Listing Appraisal", desc: "Know your value before listing for sale", turnaround: "48–72 hrs" },
];

const intendedUses = [
  "Mortgage / Refinancing",
  "Divorce Proceedings",
  "Estate / Probate Settlement",
  "PMI Removal",
  "Property Tax Appeal",
  "Pre-Sale / Listing",
  "Investment Analysis",
  "Legal / Litigation",
  "Insurance",
  "Other",
];

interface FormData {
  appraisalType: string;
  propertyAddress: string;
  propertyCity: string;
  propertyState: string;
  propertyZip: string;
  propertyType: string;
  squareFootage: string;
  yearBuilt: string;
  bedrooms: string;
  bathrooms: string;
  intendedUse: string;
  lenderName: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  preferredDate: string;
  rush: boolean;
  additionalNotes: string;
}

const initialForm: FormData = {
  appraisalType: "",
  propertyAddress: "",
  propertyCity: "",
  propertyState: "MI",
  propertyZip: "",
  propertyType: "",
  squareFootage: "",
  yearBuilt: "",
  bedrooms: "",
  bathrooms: "",
  intendedUse: "",
  lenderName: "",
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  preferredDate: "",
  rush: false,
  additionalNotes: "",
};

export default function OrderAppraisal() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState<FormData>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const totalSteps = 4;

  const update = (field: keyof FormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step === 1 && !form.appraisalType) {
      toast.error("Please select an appraisal type to continue.");
      return;
    }
    if (step === 2 && (!form.propertyAddress || !form.propertyCity || !form.propertyZip)) {
      toast.error("Please fill in the required property information.");
      return;
    }
    if (step === 3 && (!form.firstName || !form.lastName || !form.email || !form.phone)) {
      toast.error("Please fill in all required contact fields.");
      return;
    }
    setStep((s) => Math.min(s + 1, totalSteps));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const prevStep = () => {
    setStep((s) => Math.max(s - 1, 1));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1600);
  };

  const selectedType = appraisalTypes.find((t) => t.id === form.appraisalType);

  const stepLabels = ["Appraisal Type", "Property Info", "Your Details", "Review & Submit"];

  return (
    <Layout>
      {/* Page header */}
      <section className="bg-[oklch(0.22_0.005_260)] text-white py-12" aria-label="Order appraisal header">
        <div className="container">
          <div className="section-label text-[oklch(0.72_0.12_85)] mb-2">Order Online</div>
          <h1 className="text-3xl md:text-4xl font-black text-white mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
            Order a Real Estate Appraisal
          </h1>
          <p className="text-[oklch(0.78_0.005_260)] max-w-xl">
            Complete the form below to request your appraisal. We'll confirm your order and contact you within 1 business day to schedule the inspection.
          </p>
        </div>
      </section>

      <section className="py-12" aria-label="Appraisal order form">
        <div className="container">
          <div className="max-w-3xl mx-auto">

            {/* Progress bar */}
            {!submitted && (
              <div className="mb-10">
                <div className="flex items-center justify-between mb-3">
                  {stepLabels.map((label, i) => (
                    <div key={label} className="flex flex-col items-center gap-1.5 flex-1">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors ${
                        i + 1 < step
                          ? "bg-[oklch(0.32_0.09_140)] text-white"
                          : i + 1 === step
                          ? "bg-[oklch(0.72_0.12_85)] text-[oklch(0.22_0.005_260)]"
                          : "bg-[oklch(0.88_0.008_90)] text-muted-foreground"
                      }`}>
                        {i + 1 < step ? <CheckCircle2 size={16} /> : i + 1}
                      </div>
                      <span className={`text-xs font-bold uppercase tracking-wide hidden sm:block ${
                        i + 1 === step ? "text-[oklch(0.32_0.09_140)]" : "text-muted-foreground"
                      }`} style={{ fontFamily: "'Lato', sans-serif" }}>
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="h-1.5 bg-[oklch(0.88_0.008_90)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[oklch(0.32_0.09_140)] rounded-full transition-all duration-500"
                    style={{ width: `${((step - 1) / (totalSteps - 1)) * 100}%` }}
                  />
                </div>
              </div>
            )}

            {/* Success state */}
            {submitted ? (
              <div className="bg-white rounded-xl border border-border p-12 text-center shadow-sm">
                <div className="w-16 h-16 rounded-full bg-[oklch(0.32_0.09_140/0.1)] flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 size={36} className="text-[oklch(0.32_0.09_140)]" />
                </div>
                <h2 className="text-2xl font-black text-[oklch(0.22_0.005_260)] mb-3" style={{ fontFamily: "'Merriweather', serif" }}>
                  Appraisal Order Received!
                </h2>
                <p className="text-muted-foreground mb-2 max-w-md mx-auto">
                  Thank you, <strong>{form.firstName}</strong>! Your appraisal request for{" "}
                  <strong>{form.propertyAddress}, {form.propertyCity}</strong> has been received.
                </p>
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                  A Lake Shore Real Estate Appraisals team member will contact you at{" "}
                  <strong>{form.phone}</strong> within 1 business day to confirm your order and schedule the inspection.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a href="tel:+12695550142" className="btn-primary">
                    <Phone size={15} />
                    Call Us: (269) 555-0142
                  </a>
                  <button
                    onClick={() => { setSubmitted(false); setForm(initialForm); setStep(1); }}
                    className="btn-outline-green"
                  >
                    Submit Another Order
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">

                  {/* Step 1: Appraisal Type */}
                  {step === 1 && (
                    <div className="p-7 md:p-10">
                      <h2 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                        Select Appraisal Type
                      </h2>
                      <p className="text-sm text-muted-foreground mb-7">Choose the type of appraisal that best fits your needs.</p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {appraisalTypes.map((type) => (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => update("appraisalType", type.id)}
                            className={`flex items-start gap-4 p-4 rounded-lg border-2 text-left transition-all ${
                              form.appraisalType === type.id
                                ? "border-[oklch(0.32_0.09_140)] bg-[oklch(0.32_0.09_140/0.05)]"
                                : "border-border hover:border-[oklch(0.32_0.09_140/0.4)]"
                            }`}
                          >
                            <div className={`w-9 h-9 rounded-md flex items-center justify-center flex-shrink-0 ${
                              form.appraisalType === type.id ? "bg-[oklch(0.32_0.09_140)]" : "bg-[oklch(0.96_0.008_90)]"
                            }`}>
                              <type.icon size={17} className={form.appraisalType === type.id ? "text-white" : "text-[oklch(0.32_0.09_140)]"} />
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-bold text-sm text-[oklch(0.22_0.005_260)]">{type.title}</div>
                              <div className="text-xs text-muted-foreground mt-0.5">{type.desc}</div>
                              <div className="text-xs font-bold text-[oklch(0.32_0.09_140)] mt-1">⏱ {type.turnaround}</div>
                            </div>
                            {form.appraisalType === type.id && (
                              <CheckCircle2 size={16} className="text-[oklch(0.32_0.09_140)] flex-shrink-0 mt-0.5" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Step 2: Property Info */}
                  {step === 2 && (
                    <div className="p-7 md:p-10">
                      <h2 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                        Property Information
                      </h2>
                      <p className="text-sm text-muted-foreground mb-7">Tell us about the property to be appraised.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="md:col-span-2">
                          <label className="form-label">Property Street Address *</label>
                          <input type="text" className="form-input" placeholder="123 Main Street" value={form.propertyAddress} onChange={(e) => update("propertyAddress", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">City *</label>
                          <input type="text" className="form-input" placeholder="Kalamazoo" value={form.propertyCity} onChange={(e) => update("propertyCity", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">ZIP Code *</label>
                          <input type="text" className="form-input" placeholder="49001" value={form.propertyZip} onChange={(e) => update("propertyZip", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">Property Type</label>
                          <select className="form-input" value={form.propertyType} onChange={(e) => update("propertyType", e.target.value)}>
                            <option value="">Select type...</option>
                            <option value="sfr">Single-Family Residence</option>
                            <option value="condo">Condominium</option>
                            <option value="townhome">Townhome</option>
                            <option value="duplex">Duplex / 2-Unit</option>
                            <option value="triplex">Triplex / 3-Unit</option>
                            <option value="fourplex">4-Unit</option>
                            <option value="commercial">Commercial</option>
                            <option value="land">Vacant Land</option>
                            <option value="lakefront">Lakefront Property</option>
                          </select>
                        </div>
                        <div>
                          <label className="form-label">Intended Use</label>
                          <select className="form-input" value={form.intendedUse} onChange={(e) => update("intendedUse", e.target.value)}>
                            <option value="">Select use...</option>
                            {intendedUses.map((u) => <option key={u} value={u}>{u}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="form-label">Approx. Square Footage</label>
                          <input type="text" className="form-input" placeholder="1,800" value={form.squareFootage} onChange={(e) => update("squareFootage", e.target.value)} />
                        </div>
                        <div>
                          <label className="form-label">Year Built</label>
                          <input type="text" className="form-input" placeholder="1995" value={form.yearBuilt} onChange={(e) => update("yearBuilt", e.target.value)} />
                        </div>
                        <div>
                          <label className="form-label">Bedrooms</label>
                          <select className="form-input" value={form.bedrooms} onChange={(e) => update("bedrooms", e.target.value)}>
                            <option value="">Select...</option>
                            {["1","2","3","4","5","6+"].map((n) => <option key={n} value={n}>{n}</option>)}
                          </select>
                        </div>
                        <div>
                          <label className="form-label">Bathrooms</label>
                          <select className="form-input" value={form.bathrooms} onChange={(e) => update("bathrooms", e.target.value)}>
                            <option value="">Select...</option>
                            {["1","1.5","2","2.5","3","3.5","4+"].map((n) => <option key={n} value={n}>{n}</option>)}
                          </select>
                        </div>
                        <div className="md:col-span-2">
                          <label className="form-label">Lender / Client Name (if applicable)</label>
                          <input type="text" className="form-input" placeholder="First National Bank" value={form.lenderName} onChange={(e) => update("lenderName", e.target.value)} />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Contact Info */}
                  {step === 3 && (
                    <div className="p-7 md:p-10">
                      <h2 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                        Your Contact Information
                      </h2>
                      <p className="text-sm text-muted-foreground mb-7">We'll use this information to confirm your order and schedule the inspection.</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div>
                          <label className="form-label">First Name *</label>
                          <input type="text" className="form-input" placeholder="John" value={form.firstName} onChange={(e) => update("firstName", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">Last Name *</label>
                          <input type="text" className="form-input" placeholder="Smith" value={form.lastName} onChange={(e) => update("lastName", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">Email Address *</label>
                          <input type="email" className="form-input" placeholder="john@example.com" value={form.email} onChange={(e) => update("email", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">Phone Number *</label>
                          <input type="tel" className="form-input" placeholder="(269) 555-0000" value={form.phone} onChange={(e) => update("phone", e.target.value)} required />
                        </div>
                        <div>
                          <label className="form-label">Company / Organization</label>
                          <input type="text" className="form-input" placeholder="ABC Mortgage" value={form.company} onChange={(e) => update("company", e.target.value)} />
                        </div>
                        <div>
                          <label className="form-label">Your Role</label>
                          <select className="form-input" value={form.role} onChange={(e) => update("role", e.target.value)}>
                            <option value="">Select role...</option>
                            <option value="homeowner">Homeowner</option>
                            <option value="buyer">Home Buyer</option>
                            <option value="lender">Lender / Loan Officer</option>
                            <option value="attorney">Attorney</option>
                            <option value="realtor">Real Estate Agent</option>
                            <option value="accountant">CPA / Accountant</option>
                            <option value="investor">Real Estate Investor</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                        <div>
                          <label className="form-label">Preferred Inspection Date</label>
                          <input type="date" className="form-input" value={form.preferredDate} onChange={(e) => update("preferredDate", e.target.value)} min={new Date().toISOString().split("T")[0]} />
                        </div>
                        <div className="flex items-center gap-3 pt-6">
                          <input
                            type="checkbox"
                            id="rush"
                            checked={form.rush}
                            onChange={(e) => update("rush", e.target.checked)}
                            className="w-4 h-4 accent-[oklch(0.32_0.09_140)]"
                          />
                          <label htmlFor="rush" className="text-sm font-bold text-[oklch(0.22_0.005_260)] cursor-pointer">
                            Rush Order (24-hour turnaround)
                          </label>
                        </div>
                        <div className="md:col-span-2">
                          <label className="form-label">Additional Notes</label>
                          <textarea
                            className="form-input resize-none"
                            rows={4}
                            placeholder="Any special circumstances, access instructions, or additional information we should know..."
                            value={form.additionalNotes}
                            onChange={(e) => update("additionalNotes", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 4: Review */}
                  {step === 4 && (
                    <div className="p-7 md:p-10">
                      <h2 className="text-xl font-black text-[oklch(0.22_0.005_260)] mb-2" style={{ fontFamily: "'Merriweather', serif" }}>
                        Review Your Order
                      </h2>
                      <p className="text-sm text-muted-foreground mb-7">Please review your appraisal request before submitting.</p>
                      <div className="space-y-5">
                        <div className="bg-[oklch(0.96_0.008_90)] rounded-lg p-5">
                          <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.32_0.09_140)] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>Appraisal Type</div>
                          {selectedType && (
                            <div className="flex items-center gap-3">
                              <div className="w-9 h-9 rounded-md bg-[oklch(0.32_0.09_140)] flex items-center justify-center">
                                <selectedType.icon size={16} className="text-white" />
                              </div>
                              <div>
                                <div className="font-bold text-[oklch(0.22_0.005_260)]">{selectedType.title}</div>
                                <div className="text-xs text-muted-foreground">Est. turnaround: {selectedType.turnaround}{form.rush ? " (Rush)" : ""}</div>
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="bg-[oklch(0.96_0.008_90)] rounded-lg p-5">
                          <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.32_0.09_140)] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>Property</div>
                          <div className="text-sm text-[oklch(0.22_0.005_260)] font-bold">{form.propertyAddress}</div>
                          <div className="text-sm text-muted-foreground">{form.propertyCity}, {form.propertyState} {form.propertyZip}</div>
                          {form.propertyType && <div className="text-sm text-muted-foreground mt-1">{form.propertyType} · {form.intendedUse}</div>}
                        </div>
                        <div className="bg-[oklch(0.96_0.008_90)] rounded-lg p-5">
                          <div className="text-xs font-bold uppercase tracking-widest text-[oklch(0.32_0.09_140)] mb-3" style={{ fontFamily: "'Lato', sans-serif" }}>Contact</div>
                          <div className="text-sm text-[oklch(0.22_0.005_260)] font-bold">{form.firstName} {form.lastName}</div>
                          <div className="text-sm text-muted-foreground">{form.email}</div>
                          <div className="text-sm text-muted-foreground">{form.phone}</div>
                          {form.company && <div className="text-sm text-muted-foreground">{form.company}</div>}
                        </div>
                      </div>
                      <div className="mt-6 p-4 bg-[oklch(0.32_0.09_140/0.06)] border border-[oklch(0.32_0.09_140/0.2)] rounded-lg text-sm text-[oklch(0.35_0.005_260)]">
                        By submitting this form, you authorize Lake Shore Real Estate Appraisals to contact you regarding your appraisal request. We will not share your information with third parties.
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="px-7 md:px-10 py-5 border-t border-border bg-[oklch(0.98_0.005_90)] flex items-center justify-between gap-4">
                    {step > 1 ? (
                      <button type="button" onClick={prevStep} className="flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-[oklch(0.22_0.005_260)] transition-colors">
                        <ChevronLeft size={16} /> Back
                      </button>
                    ) : (
                      <div />
                    )}
                    {step < totalSteps ? (
                      <button type="button" onClick={nextStep} className="btn-primary">
                        Continue
                        <ArrowRight size={16} />
                      </button>
                    ) : (
                      <button type="submit" disabled={submitting} className="btn-gold">
                        {submitting ? "Submitting..." : "Submit Order"}
                        {!submitting && <CheckCircle2 size={16} />}
                      </button>
                    )}
                  </div>
                </div>
              </form>
            )}

            {/* Sidebar info */}
            {!submitted && (
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[
                  { icon: CheckCircle2, title: "USPAP Compliant", desc: "All reports meet federal and state standards" },
                  { icon: Phone, title: "1-Day Response", desc: "We confirm all orders within 1 business day" },
                  { icon: Shield, title: "Licensed & Insured", desc: "Michigan certified appraisers, fully insured" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3 bg-white rounded-lg p-4 border border-border">
                    <item.icon size={18} className="text-[oklch(0.32_0.09_140)] flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-[oklch(0.22_0.005_260)]">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
