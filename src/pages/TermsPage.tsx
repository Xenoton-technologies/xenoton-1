import { LegalPage } from "@/components/LegalPage"

export function TermsPage() {
  return (
    <LegalPage
      eyebrow="TERMS & CONDITIONS"
      title="Terms & Conditions"
      updated="September 21, 2026"
      intro="These Terms & Conditions govern your use of the Xenoton Technologies website and the software development services we provide. By accessing this website or engaging us for a project, you agree to the terms below."
      sections={[
        {
          heading: "1. About These Terms",
          body: (
            <p>
              Xenoton Technologies ("Xenoton", "we", "us", "our") provides this website and
              related services subject to the terms described here. If you do not agree with any
              part of these terms, please do not use this website or engage our services.
            </p>
          ),
        },
        {
          heading: "2. Our Services",
          body: (
            <p>
              We provide software and technology services, including web development, mobile
              app development, custom software development, UI/UX design, backend and API
              development, cloud deployment, AI and automation solutions, and related maintenance
              and support. The specific scope, timeline, and deliverables for any project are
              agreed separately with each client, typically through a proposal, quotation, or
              signed agreement before work begins.
            </p>
          ),
        },
        {
          heading: "3. Use of This Website",
          body: (
            <p>
              You may browse this website and use the contact form to reach out about a project.
              You agree not to misuse the website — including attempting unauthorized access,
              disrupting its normal operation, or submitting false or malicious information
              through our forms.
            </p>
          ),
        },
        {
          heading: "4. Intellectual Property",
          body: (
            <p>
              The content on this website — including text, graphics, logos, and the Xenoton
              Technologies name and mark — belongs to Xenoton Technologies unless otherwise
              stated, and may not be copied or reused without permission. Ownership of
              deliverables created as part of a client project (such as source code or designs)
              is addressed in the project agreement for that engagement.
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
              and its content are provided "as is" without warranties of any kind. To the extent
              permitted by law, Xenoton Technologies is not liable for indirect or consequential
              losses arising from the use of this website.
            </p>
          ),
        },
        {
          heading: "8. Third-Party Links",
          body: (
            <p>
              Our website or project deliverables may reference or link to third-party services.
              We are not responsible for the content, availability, or practices of any
              third-party sites.
            </p>
          ),
        },
        {
          heading: "9. Changes to These Terms",
          body: (
            <p>
              We may update these Terms & Conditions from time to time. Changes take effect once
              posted on this page, and the "Last updated" date above will reflect the most recent
              revision.
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
  )
}
