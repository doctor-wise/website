import React from 'react';
import { Link } from '@/i18n/routing';
import { Heading, Text } from '@/components/ui/Typography';

export function TermsOfUseContentEN() {
  return (
    <div className="flex flex-col gap-spacing-4xl">
      
      <Heading as="h1" size="display-lg" weight="bold" color="primary">
        Terms of Use
      </Heading>

      <div className="bg-bg-warning-primary border border-border-warning px-spacing-xl py-spacing-lg rounded-lg flex flex-col gap-spacing-sm">
        <Text as="p" size="sm" weight="semibold" color="warning">
          Translation Notice
        </Text>
        <Text as="p" size="sm" color="secondary">
          This is an automatic translation of the Terms of Use from Portuguese. In case of any discrepancies or questions, please refer to the{' '}
          <Link href="/terms-of-use" locale="pt" className="text-text-brand-primary hover:text-text-brand-secondary underline font-semibold">
            Portuguese version
          </Link>
          , which is the official and legally binding document.
        </Text>
      </div>

      <Text as="p" size="md" color="secondary">
        Welcome to Doctor Wise. These Terms of Use (&quot;<strong>Terms</strong>&quot;) govern the use of the application, website, and other services offered by Doctor Wise (&quot;<strong>Platform</strong>&quot;). Access to or use of the Platform will be interpreted as full and unequivocal agreement to these Terms. The user has the option not to use the Platform in case of any disagreement.
      </Text>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          1. Acceptance and Updates to the Terms
        </Heading>

        <Text as="p" size="md" color="secondary">
          1.1 <strong>Acceptance.</strong> By creating an account, accessing, or using the Platform, the user declares that they have read, understood, and accepted these Terms, which constitute an adhesion contract.
        </Text>

        <Text as="p" size="md" color="secondary">
          1.2 <strong>Amendments.</strong> Doctor Wise may amend these Terms at any time to regulate improvements, legal, or operational adjustments. The amendments will take effect on the date of publication in the application or website. Continued use after publication will imply agreement to this new version. We therefore recommend reviewing it periodically.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          2. Service Description
        </Heading>

        <Text as="p" size="md" color="secondary">
          2.1 <strong>What is Doctor Wise.</strong> Doctor Wise is a virtual assistant platform based on artificial intelligence that helps doctors, healthcare professionals, and students with information, comparisons, and discussions on medical topics.
        </Text>

        <Text as="p" size="md" color="secondary">
          2.2 <strong>Continuous evolution.</strong> The Platform is constantly updated. Features may be added, changed, or discontinued at any time.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          3. User Account
        </Heading>

        <Text as="p" size="md" color="secondary">
          3.1 <strong>Registration.</strong> To use the Platform, it is necessary to create an account with true, accurate, and up-to-date information.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.2 <strong>Security.</strong> The user is responsible for maintaining the confidentiality of their credentials and for all activities performed on their account. Immediately notify Doctor Wise support in case of improper use or unauthorized access.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.3 <strong>Suspension/Termination.</strong> We may suspend or terminate accounts that violate these Terms, attempt to circumvent limits, commit fraud, or cause damage to the Platform. The user may terminate their account at any time.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          4. Subscriptions, Plans, and Payments
        </Heading>

        <Text as="p" size="md" color="secondary">
          4.1 <strong>Plans.</strong> We offer paid plans <strong>PLUS</strong> and <strong>PRO</strong>, available in <strong>monthly</strong> and <strong>annual</strong> modalities. The features of each plan are described on Doctor Wise&apos;s pricing page.
        </Text>

        <Text as="p" size="md" color="secondary">
          4.2 <strong>Periodicity and billing.</strong>
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Annual:</strong> the 12 (twelve) month subscription is <strong>charged once</strong> (single payment) and <strong>automatically renewed</strong> at the end of the annual period, unless previously canceled.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Monthly:</strong> the subscription is <strong>charged every month</strong> and <strong>automatically renewed</strong> each cycle, unless previously canceled.
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          4.3 <strong>Payment method.</strong> We accept <strong>credit card only</strong>. By providing a card, the user declares to be authorized to use it and authorizes recurring charges according to the chosen plan.
        </Text>

        <Text as="p" size="md" color="secondary">
          4.4 <strong>Automatic renewal.</strong> Unless the user cancels before the end of the current cycle, the subscription will be automatically renewed and the applicable amount will be charged based on the registered card.
        </Text>

        <Text as="p" size="md" color="secondary">
          4.5 <strong>Prices.</strong> Plan prices may be updated. Price changes do not affect already paid cycles and will be communicated to the user in advance.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          5. 7-Day Free Trial
        </Heading>

        <Text as="p" size="md" color="secondary">
          5.1 <strong>Eligibility.</strong> Each user is entitled to <strong>a single 7 (seven) day free trial period</strong>, choosing between the <strong>PRO</strong> or <strong>PLUS</strong> plans.
        </Text>

        <Text as="p" size="md" color="secondary">
          5.2 <strong>Start and billing.</strong> Upon starting the trial, the user authorizes the <strong>automatic</strong> charge of the chosen plan&apos;s amount at the end of the 7 (seven) days, <strong>unless canceled before the trial ends</strong>. After this period, the respective amount will be debited.
        </Text>

        <Text as="p" size="md" color="secondary">
          5.3 <strong>New trial limitation.</strong> After using the free trial, the user <strong>will not be entitled</strong> to a new trial period, <strong>even if another account is created</strong>. Multiple accounts to obtain new trials may be blocked.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          6. Cancellation
        </Heading>

        <Text as="p" size="md" color="secondary">
          6.1 <strong>How to cancel.</strong> The user may cancel the subscription <strong>directly in the application</strong> (account/subscription menu) <strong>or</strong> by contacting <strong>support@doctorwise.com.br</strong> or through the support channel in the app.
        </Text>

        <Text as="p" size="md" color="secondary">
          6.2 <strong>Access until the end of the cycle.</strong> Cancellation prevents future renewals, but the user <strong>will remain with access</strong> until the end of the already paid period (monthly or annual). There will be no additional charges after the cancellation is completed, except for those already invoiced.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          7. Refunds
        </Heading>

        <Text as="p" size="md" color="secondary">
          7.1 <strong>Right of withdrawal (Consumer Protection Code).</strong> For online contracts, the user may request a <strong>refund within 7 (seven) days</strong> from the date of contract, in accordance with the Consumer Protection Code (Law 8.078/90). <strong>This is the free trial period deadline</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          7.2 <strong>After the free trial.</strong> After the end of the free trial, <strong>there is no legal right to a refund</strong> under the Consumer Protection Code. <strong>Doctor Wise Exception:</strong> if you contracted an <strong>annual plan</strong>, you may request a refund <strong>within 7 (seven) days after the trial ends</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          7.3 <strong>Contracts without free trial.</strong> If the plan does not include a free trial, only the legal period of <strong>7 (seven) days</strong> from the contract applies.
        </Text>

        <Text as="p" size="md" color="secondary">
          7.4 <strong>How to request.</strong> Request a refund by email at <strong>support@doctorwise.com.br</strong> or through the support channel in the application. We will process the request and, if eligible, we will refund via the same payment method, subject to card operator deadlines.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          8. Responsible Use and Disclaimers
        </Heading>

        <Text as="p" size="md" color="secondary">
          8.1 <strong>Purpose.</strong> Doctor Wise <strong>does not replace</strong> medical consultation, diagnosis, prescription, clinical conduct, or professional judgment. <strong>Like any platform based on technological resources, its purpose is to offer support resources and specific content to its users.</strong>
        </Text>

        <Text as="p" size="md" color="secondary">
          8.2 <strong>Clinical decisions.</strong> The user must use their expertise and clinical judgment, updated guidelines, and primary sources before making decisions, providing guidance, and assisting third parties. Information, by the very nature of platforms of this kind, may contain data or information subject to errors, inaccuracies, or outdated content. Reviews are recommended.
        </Text>

        <Text as="p" size="md" color="secondary">
          8.3 <strong>No warranties.</strong> The Platform is provided <strong>&quot;as is&quot;</strong>, without warranties of any kind, express or implied. Doctor Wise will not be liable for direct, indirect, incidental, special, consequential damages, or loss of profits arising from the use of the Platform or service unavailability.
        </Text>

        <Text as="p" size="md" color="secondary">
          8.4 <strong>Emergencies.</strong> Do not use the Platform in emergency situations or situations that endanger the integrity of third parties. Seek immediate medical attention.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          9. Intellectual Property
        </Heading>

        <Text as="p" size="md" color="secondary">
          All content generated by the Platform (including but not limited to texts, trademarks, logos, software, layouts, designs, diagrams, graphics, and other materials) is the exclusive property of Doctor Wise and is protected by intellectual property laws. By using the Platform, the user receives a <strong>limited, non-exclusive, and non-transferable license</strong> for personal/professional use in accordance with these Terms.
        </Text>

        <Text as="p" size="md" color="secondary">
          Doctor Wise is not responsible for any copyright claims by third parties regarding content generated by the Platform, given its generative artificial intelligence nature.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          10. Privacy and Data
        </Heading>

        <Text as="p" size="md" color="secondary">
          10.1 <strong>Collection and use.</strong> Doctor Wise collects personal data necessary and limited to fulfilling its corporate purpose, its operation, security, and improvements and training of the Platform, as described in our <strong>Privacy Policy</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.2 <strong>Data subject rights.</strong> Under the LGPD, the user may request access, correction, or deletion of personal data at any time, as well as exercise other rights provided for in applicable legislation, through support channels and Data Protection Officers.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.3 <strong>Security.</strong> We adopt technical and organizational measures to protect the personal data of data subjects, including strict compliance with best practices established by the LGPD and exceptions regarding unforeseeable and involuntary facts regarding data security and <em>compliance</em>.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          11. Availability and Support
        </Heading>

        <Text as="p" size="md" color="secondary">
          11.1 <strong>Availability.</strong> Doctor Wise dedicates all efforts to keep the Platform available, but interruptions may occur due to maintenance, updates, or reasons beyond our control.
        </Text>

        <Text as="p" size="md" color="secondary">
          11.2 <strong>Support.</strong> Contact us at <strong>support@doctorwise.com.br</strong> or through the support channel in the app.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          12. General Provisions
        </Heading>

        <Text as="p" size="md" color="secondary">
          12.1 <strong>Partial invalidity.</strong> If any clause is deemed invalid, the others will remain valid.
        </Text>

        <Text as="p" size="md" color="secondary">
          12.2 <strong>Assignment.</strong> Doctor Wise may assign these Terms and rights/obligations to third parties, waiving prior notice, while maintaining user rights.
        </Text>

        <Text as="p" size="md" color="secondary">
          12.3 <strong>Law and jurisdiction.</strong> These Terms are governed by <strong>Brazilian law</strong>. The <strong>Court of Rio de Janeiro/RJ</strong> is elected, except for legal provisions to the contrary.
        </Text>
      </div>

      <div className="border-t border-border-secondary pt-spacing-4xl flex flex-col gap-spacing-2xl">
        <Text as="p" size="md" weight="semibold" color="primary">
          Doctor Wise
        </Text>

        <Text as="p" size="md" color="secondary">
          If you have questions about these Terms, please contact: <strong>support@doctorwise.com.br</strong>.
        </Text>

        <Text as="p" size="sm" color="tertiary">
          <strong>Last updated:</strong> September 10, 2025
        </Text>
      </div>

    </div>
  );
}

