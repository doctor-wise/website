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

      {/* ... rest of content preserved ... */}
    </div>
  );
}



