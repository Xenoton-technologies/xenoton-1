import type { ReactNode } from "react";
import { PageBanner } from "@/components/common/PageBanner";
import { Eyebrow, Headline, Reveal } from "@/components/common/SectionHeading";

interface LegalSection {
  heading: string;
  body: ReactNode;
}

function LegalLayout({
  eyebrow,
  title,
  updated,
  intro,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <div>
      <PageBanner image="/images/banner-legal.jpg" title={title} />
      <section className="border-b border-border py-20">
        <div className="mx-auto max-w-[1240px] px-6 md:px-10 lg:px-16">
          <Reveal className="max-w-2xl">
            <Eyebrow>{eyebrow}</Eyebrow>
            <Headline
              as="h2"
              className="text-balance font-sans text-[clamp(34px,4.8vw,58px)] font-extrabold tracking-[-0.035em] text-foreground"
            >
              {title}
            </Headline>
            <p className="mt-5 font-mono text-xs text-muted-foreground">
              Last updated: {updated}
            </p>
            <p className="mt-6 text-lg leading-[1.7] text-muted-foreground">{intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-[840px] px-6 md:px-10 lg:px-16">
          <div className="flex flex-col gap-14">
            {sections.map((sec, idx) => (
              <Reveal key={sec.heading} delay={Math.min(idx * 0.04, 0.2)}>
                <h2 className="text-xl font-semibold tracking-[-0.01em] text-foreground">
                  {sec.heading}
                </h2>
                <div className="mt-4 text-[15px] leading-[1.8] text-muted-foreground [&_a]:text-primary [&_a]:transition-colors hover:[&_a]:text-accent [&_li]:mt-2 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
                  {sec.body}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function TermsPage() {
  return (
    <LegalLayout
      eyebrow="TERMS & CONDITIONS"
      title="Terms & Conditions"
      updated="September 21, 2026"
      intro="These Terms & Conditions govern your use of the Xenoton Technologies website and the software development services we provide. By accessing this website or engaging us for a project, you agree to the terms below."
      sections={[
        {
          heading: "1. About These Terms",
          body: (
            <p>
              Xenoton Technologies (&quot;Xenoton&quot;, &quot;we&quot;, &quot;us&quot;,
              &quot;our&quot;) provides this website and related services subject to the terms
              described here. If you do not agree with any part of these terms, please do not use
              this website or engage our services.
            </p>
          ),
        },
        {
          heading: "2. Our Services",
          body: (
            <p>
              We provide software and technology services, including web development, mobile app
              development, custom software development, UI/UX design, backend and API development,
              cloud deployment, AI and automation solutions, and related maintenance and support.
              The specific scope, timeline, and deliverables for any project are agreed separately
              with each client, typically through a proposal, quotation, or signed agreement before
              work begins.
            </p>
          ),
        },
        {
          heading: "3. Use of This Website",
          body: (
            <p>
              You may browse this website and use the contact form to reach out about a project.
              You agree not to misuse the website — including attempting unauthorized access,
              disrupting its normal operation, or submitting false or malicious information through
              our forms.
            </p>
          ),
        },
        {
          heading: "4. Intellectual Property",
          body: (
            <p>
              The content on this website — including text, graphics, logos, and the Xenoton
              Technologies name and mark — belongs to Xenoton Technologies unless otherwise stated,
              and may not be copied or reused without permission. Ownership of deliverables created
              as part of a client project (such as source code or designs) is addressed in the
              project agreement for that engagement.
            </p>
          ),
        },
        {
          heading: "5. Client Responsibilities",
          body: (
            <p>
              When you engage us for a project, timely feedback, access to necessary accounts or
              materials, and accurate project requirements help us deliver on schedule. Delays in
              providing this information may affect project timelines.
            </p>
          ),
        },
        {
          heading: "6. Payments",
          body: (
            <p>
              Payment terms, milestones, and pricing are agreed on a per-project basis and set out
              in the applicable proposal or agreement. This website does not process payments or
              publish pricing.
            </p>
          ),
        },
        {
          heading: "7. Limitation of Liability",
          body: (
            <p>
              We take reasonable care in building and maintaining our services, but this website
              and its content are provided &quot;as is&quot; without warranties of any kind. To the
              extent permitted by law, Xenoton Technologies is not liable for indirect or
              consequential losses arising from the use of this website.
            </p>
          ),
        },
        {
          heading: "8. Third-Party Links",
          body: (
            <p>
              Our website or project deliverables may reference or link to third-party services. We
              are not responsible for the content, availability, or practices of any third-party
              sites.
            </p>
          ),
        },
        {
          heading: "9. Changes to These Terms",
          body: (
            <p>
              We may update these Terms &amp; Conditions from time to time. Changes take effect once
              posted on this page, and the &quot;Last updated&quot; date above will reflect the most
              recent revision.
            </p>
          ),
        },
        {
          heading: "10. Governing Law",
          body: <p>These terms are governed by the laws of India.</p>,
        },
        {
          heading: "11. Contact Us",
          body: (
            <p>
              Questions about these terms can be sent to{" "}
              <a href="mailto:xenotontechnologies@gmail.com">xenotontechnologies@gmail.com</a> or{" "}
              <a href="tel:+919384116088">+91 9384116088</a>.
            </p>
          ),
        },
      ]}
    />
  );
}

export function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="PRIVACY POLICY"
      title="Privacy Policy"
      updated="September 21, 2026"
      intro="This Privacy Policy explains what information Xenoton Technologies collects through this website, how it is used, and the choices you have."
      sections={[
        {
          heading: "1. Information We Collect",
          body: (
            <div>
              <p>When you use our contact form, we collect the information you submit:</p>
              <ul>
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Company name (optional)</li>
                <li>Project type and message details</li>
              </ul>
              <p className="mt-3">
                We do not collect payment information through this website, and we do not knowingly
                collect information from children.
              </p>
            </div>
          ),
        },
        {
          heading: "2. How We Use Your Information",
          body: (
            <div>
              <p>We use the information you submit to:</p>
              <ul>
                <li>Respond to your enquiry and discuss your project requirements</li>
                <li>Prepare proposals or quotations when requested</li>
                <li>Maintain records of our communication with prospective and existing clients</li>
              </ul>
              <p className="mt-3">We do not sell your personal information to third parties.</p>
            </div>
          ),
        },
        {
          heading: "3. Cookies & Analytics",
          body: (
            <p>
              This website may use basic cookies or analytics tools to understand how visitors use
              the site and to improve its performance. These tools do not identify you personally.
            </p>
          ),
        },
        {
          heading: "4. Data Sharing",
          body: (
            <p>
              We do not share the information you submit with third parties, except where required
              to deliver a service you requested (for example, a hosting or email provider we use
              to operate this website) or where required by law.
            </p>
          ),
        },
        {
          heading: "5. Data Security",
          body: (
            <p>
              We take reasonable measures to protect the information you share with us. However, no
              method of transmission or storage over the internet is completely secure, and we
              cannot guarantee absolute security.
            </p>
          ),
        },
        {
          heading: "6. Data Retention",
          body: (
            <p>
              We retain enquiry and project-related information for as long as reasonably necessary
              to respond to you, deliver services, and meet our business or legal obligations.
            </p>
          ),
        },
        {
          heading: "7. Your Rights",
          body: (
            <p>
              You can ask us what information we hold about you, request a correction, or ask us to
              delete it, by contacting us using the details below.
            </p>
          ),
        },
        {
          heading: "8. Changes to This Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. Changes take effect once posted
              on this page, and the &quot;Last updated&quot; date above will reflect the most
              recent revision.
            </p>
          ),
        },
        {
          heading: "9. Contact Us",
          body: (
            <p>
              For any privacy-related questions or requests, contact us at{" "}
              <a href="mailto:xenotontechnologies@gmail.com">xenotontechnologies@gmail.com</a> or{" "}
              <a href="tel:+919384116088">+91 9384116088</a>.
            </p>
          ),
        },
      ]}
    />
  );
}
