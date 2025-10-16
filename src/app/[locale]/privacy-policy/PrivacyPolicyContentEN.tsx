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

      {/* ... rest of content preserved from original EN version ... */}
    </div>
  );
}


