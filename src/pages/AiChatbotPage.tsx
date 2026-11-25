import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import {
  ArrowRight,
  Bot,
  Check,
  Headphones,
  MessageCircle,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import { PageBanner } from "@/components/common/PageBanner";
import { Eyebrow, Headline, Reveal } from "@/components/common/SectionHeading";
import { CtaSection } from "@/components/sections/CtaSection";

const USE_CASES = [
  {
    tag: "LEAD GENERATION",
    title: "Capture & Qualify Leads While You Sleep",
    description:
      "Engage high-intent visitors the moment they land, collect contact details naturally with smart intake prompts, and book demos automatically.",
    highlight: true,
  },
  {
    tag: "CUSTOMER SUPPORT",
    title: "Resolve 80% of Repetitive Questions Instantly",
    description:
      "Answer pricing, order status, onboarding, and FAQ questions in seconds using your own website docs and help articles.",
    highlight: false,
  },
  {
    tag: "LIVE SALES & VIP",
    title: "Hand Off High-Value Chats to Your Team",
    description:
      "When a prospect asks for custom pricing or complex help, your team steps into the exact same chat thread in real time.",
    highlight: false,
  },
  {
    tag: "MULTI-BRAND",
    title: "One Workspace for Every Website You Run",
    description:
      "Manage multiple domains, brands, and regional teams from a single unified inbox with separate branding and knowledge bases.",
    highlight: false,
  },
];

const LAUNCH_STEPS = [
  {
    step: "01",
    title: "Add One Line of Code",
    description:
      "Drop our lightweight widget snippet into your website, Shopify store, or web app in under two minutes.",
  },
  {
    step: "02",
    title: "Train on Your Business",
    description:
      "Import your FAQs, product pages, and docs. Preview and fine-tune every answer in the built-in AI Playground.",
  },
  {
    step: "03",
    title: "Convert & Delight Visitors",
    description:
      "Let AI handle instant replies 24/7 while your team jumps in with AI Copilot suggestions whenever a human touch wins the deal.",
  },
];

const CHAT_DEMO_MODES = {
  ai: {
    label: "AI Instant Reply",
    visitor: "Hi! Can Xenoton Chatbot handle both AI answers and live human support?",
    reply:
      "Yes! I answer customer questions 24/7 using your business knowledge base — and if a visitor needs a specialist, your team can take over this exact chat in one click.",
    badge: "Answered in 0.8s by AI",
  },
  human: {
    label: "Human + Copilot",
    visitor: "We run 3 regional websites. Can we manage them in one inbox?",
    reply:
      "Absolutely. Each site gets its own branded widget and knowledge base, while your agents handle every conversation from one unified live inbox.",
    badge: "AI Copilot Assisted · Live Agent",
  },
};

export function AiChatbotPage() {
  const [demoMode, setDemoMode] = useState<"ai" | "human">("ai");
  const activeDemo = CHAT_DEMO_MODES[demoMode];

  return (
    <div>
      <PageBanner
        image="/images/banner-solutions.jpg"
        title="Xenoton AI Chatbot"
        crumb="AI Chatbot"
      />

      {/* Split Conversational Hero */}
      <section className="relative overflow-hidden border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <Eyebrow>CONVERSATIONAL GROWTH PLATFORM</Eyebrow>
              <Headline
                as="h2"
                className="text-balance font-sans text-[clamp(34px,4.5vw,56px)] font-bold tracking-[-0.03em] text-foreground"
              >
                Turn Every Website Visitor Into a Conversation — and Every Conversation Into Revenue.
              </Headline>
              <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">
                Stop losing potential customers to slow contact forms and unanswered questions.
                Xenoton AI Chatbot greets visitors instantly, answers accurately from your
                business knowledge, and routes high-value leads straight to your live team.
              </p>

              <div className="mt-8 flex flex-wrap gap-6 border-y border-border py-6">
                <div>
                  <p className="hap-gradient-text text-3xl font-bold">24/7</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Instant Engagement
                  </p>
                </div>
                <div>
                  <p className="hap-gradient-text text-3xl font-bold">&lt; 1s</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    First Response
                  </p>
                </div>
                <div>
                  <p className="hap-gradient-text text-3xl font-bold">1-Click</p>
                  <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Human Takeover
                  </p>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link to="/contact" className="hap-btn">
                  Book a Live Demo
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

            {/* Interactive Chat Simulator Card */}
            <Reveal delay={0.12}>
              <div className="rounded-[28px] border border-border bg-card p-6 shadow-xl shadow-primary/5 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full text-white [background:var(--hap-gradient-color)]">
                      <Bot className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-foreground">Xenoton Assistant</p>
                      <p className="text-xs text-success">● Online · Ready to help</p>
                    </div>
                  </div>
                  <div className="flex rounded-full border border-border bg-background p-1">
                    {(["ai", "human"] as const).map((mode) => (
                      <button
                        key={mode}
                        type="button"
                        onClick={() => setDemoMode(mode)}
                        className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${
                          demoMode === mode
                            ? "text-white [background:var(--hap-gradient-color)]"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {CHAT_DEMO_MODES[mode].label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[var(--hap-base-color)] px-4 py-3 text-sm leading-relaxed text-white">
                    {activeDemo.visitor}
                  </div>
                  <div className="max-w-[90%] rounded-2xl rounded-bl-sm border border-border bg-white px-4 py-3.5 text-sm leading-relaxed text-foreground shadow-sm">
                    <p>{activeDemo.reply}</p>
                    <p className="mt-2.5 inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-primary">
                      <Sparkles className="h-3 w-3" />
                      {activeDemo.badge}
                    </p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-xl border border-border bg-white">
                  <img
                    src="/images/product-chatbot-preview.svg"
                    alt="Xenoton AI Chatbot live inbox and website widget"
                    className="h-48 w-full object-cover object-top"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Alternating Feature Spotlights */}
      <section className="border-t border-border bg-card/50 py-24">
        <div className="mx-auto max-w-[1240px] space-y-20 px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white [background:var(--hap-gradient-color)]">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-foreground">
                Instant, Brand-Accurate Answers From Day One
              </h3>
              <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
                No robotic scripts or frustrating dead ends. Upload your FAQs, service guides, and
                product catalog so the AI responds in your brand&apos;s exact tone — and test
                every scenario in the AI Playground before your customers see it.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Smart pre-chat intake captures name, email, and intent automatically",
                  "Business-hours availability rules with custom after-hours messaging",
                  "Visitor location and session insights delivered straight to your team",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-[24px] border border-border bg-white p-8 shadow-sm">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <span className="font-mono-label text-primary">AI + HUMAN WORKFLOW</span>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div className="mt-6 space-y-4">
                  <div className="rounded-xl bg-card p-4">
                    <p className="text-xs font-bold uppercase text-primary">Step 1 · AI Greets</p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Answers product &amp; pricing questions instantly, 24/7.
                    </p>
                  </div>
                  <div className="rounded-xl bg-card p-4">
                    <p className="text-xs font-bold uppercase text-accent">
                      Step 2 · Copilot Assists
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Drafts smart, context-aware replies for your support agents.
                    </p>
                  </div>
                  <div className="rounded-xl bg-card p-4">
                    <p className="text-xs font-bold uppercase text-success">
                      Step 3 · Human Closes
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Agents take over seamlessly in real time to close deals faster.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <Reveal className="lg:order-2">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl text-white [background:var(--hap-gradient-color)]">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-3xl font-bold tracking-[-0.02em] text-foreground">
                A Live Agent Inbox Built for Speed, Not Clutter
              </h3>
              <p className="mt-4 text-base leading-[1.7] text-muted-foreground">
                When a conversation needs a human touch, your team sees the full chat history,
                visitor context, and AI Copilot reply suggestions in one clean live-agent console.
                No tab switching, no repeating questions.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Real-time messaging with instant agent takeover",
                  "AI Copilot suggests accurate responses in one click",
                  "Automated stale-chat cleanup keeps your queue focused on active buyers",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-foreground">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.1} className="lg:order-1">
              <div className="overflow-hidden rounded-[24px] border border-border bg-white shadow-sm">
                <img
                  src="/images/product-chatbot-preview.svg"
                  alt="Live agent inbox and copilot view"
                  className="w-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Bento Use-Case Grid */}
      <section className="border-t border-border py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>BUILT FOR EVERY TEAM</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(32px,4.2vw,54px)] font-bold tracking-[-0.03em] text-foreground"
            >
              One Chatbot Platform. Four Ways to Grow.
            </Headline>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {USE_CASES.map((item, idx) => (
              <motion.div
                key={item.tag}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className={`rounded-[24px] p-8 transition-all duration-300 hover:-translate-y-1 ${
                  item.highlight
                    ? "text-white [background:var(--hap-gradient-color)] shadow-lg shadow-primary/20"
                    : "border border-border bg-card text-foreground hover:border-primary/40"
                }`}
              >
                <span
                  className={`font-mono-label ${
                    item.highlight ? "text-white/85" : "text-primary"
                  }`}
                >
                  {item.tag}
                </span>
                <h3 className="mt-4 text-2xl font-bold tracking-[-0.015em]">{item.title}</h3>
                <p
                  className={`mt-3 text-[15px] leading-[1.7] ${
                    item.highlight ? "text-white/90" : "text-muted-foreground"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Launch Timeline */}
      <section className="border-t border-border bg-card/50 py-24">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="mx-auto max-w-2xl text-center">
            <div className="flex justify-center">
              <Eyebrow>GO LIVE IN MINUTES</Eyebrow>
            </div>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(32px,4.2vw,52px)] font-bold tracking-[-0.03em] text-foreground"
            >
              From Zero to Live Support in Three Steps
            </Headline>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {LAUNCH_STEPS.map((s) => (
              <div
                key={s.step}
                className="rounded-[24px] border border-border bg-white p-8 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <span className="hap-gradient-text text-4xl font-bold">{s.step}</span>
                  <MessageCircle className="h-5 w-5 text-primary/60" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
