import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  Building2,
  CheckCircle2,
  CreditCard,
  Pill,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { Eyebrow, Headline, Reveal } from "@/components/common/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";

const VALUE_PILLARS = [
  { value: "30+", label: "Connected Hospital Modules" },
  { value: "14", label: "Role-Based Staff Profiles" },
  { value: "100%", label: "Audit-Logged Clinical Actions" },
  { value: "Multi-Branch", label: "Ready for Growing Networks" },
];

const DEPARTMENT_TABS = [
  {
    id: "clinical",
    label: "OPD & Clinical",
    icon: Stethoscope,
    headline: "Faster Patient Check-Ins & Paperless Consultations",
    summary:
      "Eliminate front-desk bottlenecks and scattered paper files. From UHID registration and consent capture to live OPD queues and signed digital prescriptions, every visit flows smoothly.",
    benefits: [
      "Instant UHID registration with automatic duplicate patient warnings",
      "Live front-desk queue board with priority calling and doctor slot booking",
      "Structured OPD encounters with digital sign-off and amendment history",
      "Direct e-Prescriptions sent straight to your in-house pharmacy queue",
    ],
  },
  {
    id: "inpatient",
    label: "Inpatient, ICU & OT",
    icon: Activity,
    headline: "Real-Time Bed Visibility & Safer Ward Workflows",
    summary:
      "Give doctors, nurses, and bed coordinators complete visibility across every ward, ICU bed, emergency bay, and operation theatre — with built-in safety gates at every step.",
    benefits: [
      "Live bed board with reservations, ward transfers, and discharge readiness checks",
      "eMAR medication administration tracking with nurse & patient confirmation",
      "Emergency triage & disposition tracking plus ICU device & vitals charting",
      "Operation Theatre checklists covering consent, time-out, anaesthesia & recovery",
    ],
  },
  {
    id: "pharmacy",
    label: "Pharmacy & Inventory",
    icon: Pill,
    headline: "Zero Stockouts, Zero Expired Dispensing",
    summary:
      "Run hospital pharmacies and central stores with precision. Automate FEFO dispensing, track every batch and expiry date, and streamline supplier purchasing from requisition to GRN.",
    benefits: [
      "FEFO (First-Expiry, First-Out) dispensing with batch & expiry validation",
      "Controlled drug registers, quarantine holds, and supplier recall tracking",
      "Purchase requisitions, multi-level PO approvals, and GRN stock posting",
      "Multi-location inventory balances and automated consumption replenishment",
    ],
  },
  {
    id: "finance",
    label: "Labs, Billing & Branches",
    icon: CreditCard,
    headline: "Tighter Revenue Control Across Every Branch",
    summary:
      "Connect laboratory and radiology reporting directly to patient billing, track collections and insurance claims, and oversee multiple hospital branches from one executive view.",
    benefits: [
      "Integrated Lab & Radiology worklists with validated report release",
      "Billing, collections, refunds, aging receivables, and shift reconciliation",
      "Blood bank screening & crossmatch traceability plus maternity & newborn charts",
      "Consolidated multi-branch KPIs, HR rosters, and patient portal access",
    ],
  },
];

const HOSPITAL_ADVANTAGES = [
  {
    num: "01",
    title: "Built for Indian Healthcare Realities",
    description:
      "Designed from the ground up for high-volume OPDs, multi-branch hospitals, and integrated pharmacy operations across India.",
  },
  {
    num: "02",
    title: "Strict Role-Based Access & Accountability",
    description:
      "14 specialized staff roles — from doctors and nurses to pharmacists, lab technicians, cashiers, and HR — see only what they need.",
  },
  {
    num: "03",
    title: "Built-In AI Operational Assistance",
    description:
      "Accelerate clinical summaries, discharge drafts, medication alerts, and inventory demand forecasting without compromising human sign-off.",
  },
  {
    num: "04",
    title: "Standards-Ready & Future-Proof",
    description:
      "Supports FHIR R4 interoperability mappings, patient portal access, and multi-facility expansion as your hospital group grows.",
  },
];

const STAKEHOLDER_ROLES = [
  {
    icon: Building2,
    role: "Hospital Directors",
    outcome: "Live occupancy, department revenue, and multi-branch visibility in one place.",
  },
  {
    icon: Stethoscope,
    role: "Doctors & Clinicians",
    outcome: "Complete patient timelines, faster OPD charting, and instant lab/pharmacy orders.",
  },
  {
    icon: Pill,
    role: "Pharmacy & Store Heads",
    outcome: "Batch-accurate stock control, zero expiry leakage, and clean supplier audits.",
  },
  {
    icon: ShieldCheck,
    role: "Quality & Compliance",
    outcome: "Append-only audit trails, incident/CAPA registers, and OT safety checklists.",
  },
];

export function HmsPage() {
  const [activeTabId, setActiveTabId] = useState(DEPARTMENT_TABS[0].id);
  const activeTab =
    DEPARTMENT_TABS.find((t) => t.id === activeTabId) ?? DEPARTMENT_TABS[0];
  const ActiveIcon = activeTab.icon;

  return (
    <div>
      <PageBanner
        image="/images/banner-hms.jpg"
        title="Xenoton HMS"
        crumb="HMS"
      />

      {/* Executive Showcase Header */}
      <section className="relative border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <div className="flex justify-center">
                <Eyebrow>HOSPITAL &amp; PHARMACY PLATFORM</Eyebrow>
              </div>
              <Headline
                as="h2"
                className="text-balance font-sans text-[clamp(34px,4.8vw,60px)] font-bold tracking-[-0.03em] text-foreground"
              >
                One Unified Command Center for Hospitals, Clinics &amp; Pharmacies.
              </Headline>
              <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">
                Replace disconnected spreadsheets, legacy billing desks, and manual ward registers
                with a single, fast, audit-ready platform that connects patient care, pharmacy
                inventory, diagnostics, and hospital finance.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <Link to="/contact" className="hap-btn">
                  Schedule an HMS Walkthrough
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-[40px] border border-border px-7 py-4 text-[15px] font-medium uppercase text-foreground transition-colors hover:border-[var(--hap-base-color)] hover:text-[var(--hap-base-color)]"
                >
                  All Products
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Wide Browser Preview */}
          <Reveal delay={0.12} className="mt-14">
            <div className="overflow-hidden rounded-[24px] border border-border bg-muted shadow-xl shadow-primary/5">
              <div className="flex items-center gap-1.5 border-b border-border bg-card-elevated px-5 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/50" />
                <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/40" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  hms.xenotontechnologies.com
                </span>
              </div>
              <img
                src="/images/product-hms-preview.svg"
                alt="Xenoton HMS unified hospital and pharmacy dashboard"
                className="w-full object-cover"
              />
            </div>
          </Reveal>

          {/* 4-Column Value Bar */}
          <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {VALUE_PILLARS.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-border bg-card p-6 text-center"
              >
                <p className="hap-gradient-text text-3xl font-bold">{item.value}</p>
                <p className="mt-2 text-sm font-medium text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Department Explorer */}
      <section className="border-t border-border bg-card/50 py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>DEPARTMENT SOLUTIONS</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(32px,4.2vw,54px)] font-bold tracking-[-0.03em] text-foreground"
            >
              Designed Around Every Clinical &amp; Operational Team
            </Headline>
          </Reveal>

          <div className="mt-10 flex flex-wrap gap-3">
            {DEPARTMENT_TABS.map((tab) => {
              const Icon = tab.icon;
              const isActive = tab.id === activeTabId;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTabId(tab.id)}
                  className={`inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-sm font-semibold transition-all ${
                    isActive
                      ? "text-white shadow-md shadow-primary/20 [background:var(--hap-gradient-color)]"
                      : "border border-border bg-white text-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid grid-cols-1 items-center gap-10 rounded-[28px] border border-border bg-white p-8 shadow-sm md:p-12 lg:grid-cols-[1fr_1.1fr]">
            <div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f4f2ff] text-primary">
                <ActiveIcon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-foreground">
                {activeTab.headline}
              </h3>
              <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
                {activeTab.summary}
              </p>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 font-mono-label text-primary transition-colors hover:text-accent"
              >
                Request {activeTab.label} Demo
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {activeTab.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-start gap-3.5 rounded-2xl border border-border bg-card p-5"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-[15px] font-medium leading-[1.6] text-foreground">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dark Contrast Editorial Band (Aligned with Homepage Dark Section) */}
      <section className="bg-[#141414] py-24 text-white">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <div className="max-w-2xl">
            <div className="hap-section-title dark-bg-title mb-3">
              <div className="sub-title">WHY XENOTON HMS</div>
            </div>
            <h2 className="text-balance font-sans text-[clamp(32px,4.5vw,54px)] font-bold tracking-[-0.03em] text-white">
              Built for High-Trust Healthcare Delivery
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            {HOSPITAL_ADVANTAGES.map((item, idx) => (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group rounded-[24px] border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-[#f350bc]/60"
              >
                <span className="hap-gradient-text font-mono text-2xl font-bold">{item.num}</span>
                <h3 className="mt-4 text-2xl font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-white/75">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Every Hospital Leader */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>FOR EVERY STAKEHOLDER</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(32px,4.2vw,50px)] font-bold tracking-[-0.03em] text-foreground"
            >
              Empowering Every Team Across Your Hospital
            </Headline>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {STAKEHOLDER_ROLES.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.role}
                  className="rounded-[22px] border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-primary/40"
                >
                  <Icon className="h-7 w-7 text-primary" strokeWidth={1.5} />
                  <h3 className="mt-5 text-lg font-bold text-foreground">{item.role}</h3>
                  <p className="mt-2.5 text-[15px] leading-[1.65] text-muted-foreground">
                    {item.outcome}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
