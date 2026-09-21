import { LegalPage } from "@/components/LegalPage"

export function PrivacyPage() {
  return (
    <LegalPage
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
                We do not collect payment information through this website, and we do not
                knowingly collect information from children.
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
              This website may use basic cookies or analytics tools to understand how visitors
              use the site and to improve its performance. These tools do not identify you
              personally.
            </p>
          ),
        },
        {
          heading: "4. Data Sharing",
          body: (
            <p>
              We do not share the information you submit with third parties, except where
              required to deliver a service you requested (for example, a hosting or email
              provider we use to operate this website) or where required by law.
            </p>
          ),
        },
        {
          heading: "5. Data Security",
          body: (
            <p>
              We take reasonable measures to protect the information you share with us. However,
              no method of transmission or storage over the internet is completely secure, and we
              cannot guarantee absolute security.
            </p>
          ),
        },
        {
          heading: "6. Data Retention",
          body: (
            <p>
              We retain enquiry and project-related information for as long as reasonably
              necessary to respond to you, deliver services, and meet our business or legal
              obligations.
            </p>
          ),
        },
        {
          heading: "7. Your Rights",
          body: (
            <p>
              You can ask us what information we hold about you, request a correction, or ask us
              to delete it, by contacting us using the details below.
            </p>
          ),
        },
        {
          heading: "8. Changes to This Policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. Changes take effect once
              posted on this page, and the "Last updated" date above will reflect the most recent
              revision.
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
  )
}
