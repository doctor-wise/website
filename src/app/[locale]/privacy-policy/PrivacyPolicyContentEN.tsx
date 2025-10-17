import React from 'react';
import { Link } from '@/i18n/routing';
import { Heading, Text } from '@/components/ui/Typography';

export function PrivacyPolicyContentEN() {
  return (
    <div className="flex flex-col gap-spacing-4xl">
      
      <Heading as="h1" size="display-lg" weight="bold" color="primary">
        Privacy Policy
      </Heading>

      <div className="bg-bg-warning-primary border border-border-warning px-spacing-xl py-spacing-lg rounded-lg flex flex-col gap-spacing-sm">
        <Text as="p" size="sm" weight="semibold" color="warning">
          Translation Notice
        </Text>
        <Text as="p" size="sm" color="secondary">
          This is an automatic translation of the Privacy Policy from Portuguese. In case of any discrepancies or questions, please refer to the{' '}
          <Link href="/privacy-policy" locale="pt" className="text-text-brand-primary hover:text-text-brand-secondary underline font-semibold">
            Portuguese version
          </Link>
          , which is the official and legally binding document.
        </Text>
      </div>

      <Text as="p" size="md" color="secondary">
        This Privacy Policy (&quot;<strong>Policy</strong>&quot;) governs how <strong>Doctor Wise</strong> processes personal data, including the collection, use, sharing, storage, and protection of personal data of data subjects while they access the website, application, and associated services, including the insertion of information containing personal data (&quot;<strong>Platform</strong>&quot;). By using the Platform, the data subject unequivocally consents to the processing practices and operations described below and in our <strong>Terms of Use</strong>.
      </Text>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          1. Purpose
        </Heading>

        <Text as="p" size="md" color="secondary">
          1.1 <strong>Purpose.</strong> The purpose of this Policy is to regulate and inform, in a clear and concise manner, the practices and operations of processing personal data of data subjects, including but not limited to privacy, anonymity, confidentiality, security, purpose, among other principles in accordance with applicable legislation, including the <strong>Brazilian General Data Protection Law — LGPD (Law No. 13.709/2018)</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          1.2 <strong>Acceptance and amendments.</strong> By using the Platform, the data subject agrees to this Policy (&quot;Acceptance&quot;). <strong>Doctor Wise</strong>, in turn, may update it at any time. Any amendments and updates will take effect from the date of publication on the app or website.
        </Text>

        <Text as="p" size="md" color="secondary">
          If the data subject does not express opposition, their tacit consent will be presumed.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          2. Controller and Contact
        </Heading>

        <Text as="p" size="md" color="secondary">
          2.1 <strong>Controller.</strong> Doctor Wise is the controller of the personal data subject to processing operations on the Platform.
        </Text>

        <Text as="p" size="md" color="secondary">
          2.2 <strong>Data Protection Officer/DPO Contact.</strong> To exercise rights, make requests, or clarify doubts, please contact: <strong>support@doctorwise.com.br</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          2.3 Doctor Wise is framed under the terms of ANPD Resolution CD/ANPD No. 2, of January 27, 2022. Nevertheless, it designates Mr. Helder Galvão as its Data Protection Officer, according to the aforementioned channel.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          3. Personal Data Collected
        </Heading>

        <Text as="p" size="md" color="secondary">
          We collect only the minimum necessary to operate, improve, and train the Platform, namely:
        </Text>

        <Text as="p" size="md" color="secondary">
          3.1 <strong>Account and identification data.</strong> Name, email, specialty/area, and other information provided during registration.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.2 <strong>Usage and interaction data.</strong> Queries and messages exchanged in chat, conversation history, date and time of access, event logs, IP address, operating system, device identifiers, and language.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.3 <strong>Payment data.</strong> Transactional information (subscribed plan — <strong>PLUS</strong> or <strong>PRO</strong>, periodicity <strong>monthly</strong> or <strong>annual</strong>, amounts, billing status, dates). <strong>We do not store complete credit card data.</strong> Processing is done by payment providers who act as processors.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.4 <strong>Cookies and similar technologies.</strong> We use cookies and similar technologies for functionality, security, audience measurement, and experience improvement. See Section 8.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.5 <strong>Support and communications data.</strong> Content of contacts made with our support (email and in-app channel), including attachments you choose to send.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.6 <strong>Third-party data.</strong> We may receive data from partners (e.g., anti-fraud and payment) for transaction validation and security improvement.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          4. Legal Bases and Purposes
        </Heading>

        <Text as="p" size="md" color="secondary">
          We process data based on the legal bases of the LGPD, including <strong>contract execution</strong>, <strong>compliance with legal/regulatory obligations</strong>, <strong>legitimate interest</strong>, <strong>consent</strong>, <strong>credit protection</strong>, and <strong>regular exercise of rights</strong>. In particular, we use the data to:
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Provide and operate the Platform</strong> (account creation, authentication, delivery of <strong>PLUS/PRO</strong> plan functionalities, <strong>monthly</strong> or <strong>annual</strong> billing via <strong>credit card</strong>, and <strong>automatic renewal</strong> according to the Terms of Use);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Personalize and improve the service</strong> (usage analytics, machine learning, testing, fixes, new features);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Security, fraud prevention, and reliability</strong> (monitoring abuse, violation attempts, and incidents);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Essential communications</strong> (operational notices, transactional messages, and changes to terms/policies);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Support</strong> (assistance with requests and questions);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Research and statistics</strong> with <strong>de-identified</strong> and/or <strong>anonymized</strong> data for continuous improvement of models and Platform performance;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Compliance with legal obligations</strong> (billing, accounting, responses to authorities, limitation periods) and <strong>protection of rights</strong>.
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          When necessary, we will request <strong>consent</strong> (for example, for marketing communications and non-essential cookies). You may revoke it at any time (Section 9).
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          5. Data Sharing
        </Heading>

        <Text as="p" size="md" color="secondary">
          Occasionally, data may be shared when necessary, and with adequate contractual guarantees, namely:
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Processors:</strong> cloud providers, payments (credit card), anti-fraud, email/transactional, analytics, support, and monitoring tools;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Public authorities:</strong> when there is a legal/regulatory obligation or valid order;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Corporate operations:</strong> in case of merger, acquisition, or reorganization, with continuity of the protections of this Policy;
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          <strong>We do not sell</strong> personal data.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          6. International Transfers
        </Heading>

        <Text as="p" size="md" color="secondary">
          <strong>Doctor Wise</strong> may transfer data to countries with different levels of protection. We adopt mechanisms provided for in the LGPD (such as contractual clauses and security standards) to ensure an adequate level of protection.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          7. Retention and Deletion
        </Heading>

        <Text as="p" size="md" color="secondary">
          <strong>Doctor Wise</strong> retains personal data <strong>for the necessary time</strong> to fulfill the described purposes and legal obligations (e.g., tax and limitation periods), fraud prevention, and exercise of rights.
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Account/subscription:</strong> data is retained while the account is active and for the additional period required by law after cancellation.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Conversation history:</strong> maintained for service continuity and audit; you may request deletion (subject to legal and technical limitations).
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Security logs:</strong> retained for a period compatible with prevention and investigation of incidents.
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          When there is no legal basis for retention, we will <strong>delete</strong> or <strong>anonymize</strong> the personal data in our database.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          8. Cookies and Similar Technologies
        </Heading>

        <Text as="p" size="md" color="secondary">
          8.1 <strong>Types of cookies.</strong>
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Strictly necessary:</strong> essential for authentication and website/app functionality;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Analytics/measurement:</strong> help understand usage and performance to improve the experience;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Preferences:</strong> remember user choices (e.g., language).
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          8.2 <strong>Cookie management.</strong> The data subject can manage cookies in browser settings and, when available, in app/website preferences. Disabling essential cookies may affect functionalities.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          9. Data Subject Rights (LGPD)
        </Heading>

        <Text as="p" size="md" color="secondary">
          The data subject may exercise, at any time, the rights provided for in the LGPD, including: <strong>confirmation of processing</strong>, <strong>access</strong>, <strong>correction</strong>, <strong>anonymization, blocking, or deletion</strong>, <strong>portability</strong>, <strong>information about sharing</strong>, <strong>revocation of consent</strong>, and <strong>review of automated decisions</strong>, when applicable.
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>How to exercise:</strong> send a request to <strong>support@doctorwise.com.br</strong> or use the support channel in the app;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Deadlines:</strong> we confirm receipt and respond <strong>within 15 days</strong>, subject to legal requirements and request complexity;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Identity:</strong> we may request additional information to verify your identity and protect your account.
            </Text>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          10. Information Security
        </Heading>

        <Text as="p" size="md" color="secondary">
          We adopt reasonable technical and organizational measures to protect personal data (encryption in transit, access controls, audit logs, and secure development practices).
        </Text>

        <Text as="p" size="md" color="secondary">
          10.1 <strong>Incidents.</strong> In the event of a security incident that may result in significant risk or damage, <strong>Doctor Wise</strong> will take all measures to remedy them quickly and efficiently, as well as mitigate their effects in a short period of time and, when required, notify the <strong>ANPD</strong> and affected data subjects.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.2 <strong>User best practices.</strong> <strong>Doctor Wise</strong> advises data subjects to adopt &quot;strong passwords&quot;, enable available security features, and avoid use on untrusted networks and devices.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.3 <strong>Disclaimer.</strong> Under the applicable legislation, <strong>Doctor Wise</strong> is not responsible for any security incidents caused by factors beyond its control, systemic failures, and third-party chain failures.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          11. Communications and Preferences
        </Heading>

        <Text as="p" size="md" color="secondary">
          11.1 <strong>Essential communications.</strong> We will send essential transactional communications (e.g., <strong>monthly</strong>/<strong>annual</strong> subscription confirmation, <strong>credit card</strong> billing, automatic renewal, and contractual changes).
        </Text>

        <Text as="p" size="md" color="secondary">
          11.2 <strong>Marketing.</strong> Receipt of promotional communications will depend on the data subject&apos;s consent. The data subject, in turn, may <strong>unsubscribe</strong>, request deletion, and/or exercise their informational self-determination at any time through email links or support.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          12. Children and Adolescents
        </Heading>

        <Text as="p" size="md" color="secondary">
          The Platform <strong>is not directed</strong> to minors under 18 (eighteen) years of age. <strong>Doctor Wise</strong> does not intentionally collect data from minors. If you believe a minor has provided us with data, please contact us for appropriate removal.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          13. Relationship with the Terms of Use
        </Heading>

        <Text as="p" size="md" color="secondary">
          This Policy ratifies and is an integral part of the Platform&apos;s <strong>Terms of Use</strong>. In case of conflict regarding privacy, personal data protection, and contractual conditions, this Policy will prevail on the matter.
        </Text>

        <Text as="p" size="md" color="secondary">
          For information about <strong>plans (PLUS/PRO), monthly/annual billing</strong>, <strong>cancellation</strong>, <strong>7-day free trial</strong>, and <strong>refunds</strong>, please refer to the Terms of Use.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          14. Applicable Law and Jurisdiction
        </Heading>

        <Text as="p" size="md" color="secondary">
          This Policy is governed by Brazilian law. The <strong>Court of Rio de Janeiro/RJ</strong> is elected, except for legal provisions to the contrary.
        </Text>
      </div>

      <div className="border-t border-border-secondary pt-spacing-4xl flex flex-col gap-spacing-2xl">
        <Text as="p" size="md" weight="semibold" color="primary">
          Doctor Wise
        </Text>

        <Text as="p" size="md" color="secondary">
          Questions about this Policy? Contact us: <strong>support@doctorwise.com.br</strong>.
        </Text>

        <Text as="p" size="sm" color="tertiary">
          <strong>Last updated:</strong> September 10, 2025
        </Text>
      </div>

    </div>
  );
}

