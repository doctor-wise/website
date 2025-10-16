'use client';

import React from 'react';
import Link from 'next/link';
import { Link as I18nLink } from '@/i18n/routing';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Icon } from '@/components/icons';
import { LogoMark } from '@/components/ui/Logo/LogoMark';
import {useTranslations} from 'next-intl';

/**
 * Footer (Figma node: 13264:36846)
 * - Uses design tokens (spacing, text colors, borders)
 * - Reuses shared components: LogoMark, Icon
 * - Images must come from public assets; brand icons from icon library
 */
export function Footer(): React.ReactElement {
  const t = useTranslations('Footer');
  usePathname();
  return (
    <footer id="Footer" className="bg-bg-primary w-full overflow-x-hidden" data-node-id="13298:8763">
      {/* Container */}
      <div className="mx-auto w-full max-w-3xl px-spacing-xl py-spacing-6xl md:px-spacing-7xl md:pt-spacing-7xl md:pb-spacing-6xl">
        <div className="flex flex-col gap-spacing-7xl">
          {/* Top: logo + links (stacked on mobile) */}
          <div id="Footer_top" className="flex flex-col gap-spacing-4xl md:flex-row md:items-center md:justify-between w-full md:min-w-[560px]">
            <LogoMark size="md" />

            <div id="Footer_links" className="flex flex-wrap items-center gap-spacing-4xl w-full md:w-auto">
              {/* Ambassador link - first on desktop, last on mobile */}
              <Link href="https://airtable.com/appLHbSfKhrt6rgMc/pagEYONy9x3aFkYBv/form" className="inline-flex items-center gap-spacing-sm text-text-md font-semibold text-text-tertiary hover:text-text-tertiary-hover order-last md:order-1">
                <Icon name="users_plus" size="md" className="text-fg-quaternary" aria-label="users-plus" />
                <span>{t('ambassador')}</span>
              </Link>

              {/* Divider visible only on desktop, sits between ambassador and socials */}
              <span className="hidden md:block h-[20px] w-px bg-border-tertiary md:order-2" />

              {/* Social links - provided assets from public folder */}
              <Link href="https://www.instagram.com/doctorwise.ai/" aria-label="Instagram" className="inline-flex items-center gap-spacing-sm text-text-md font-semibold text-text-tertiary hover:text-text-tertiary-hover md:order-3" target="_blank" rel="noopener noreferrer">
                <span className="relative h-[20px] w-[20px]">
                  <Image src="/Assets/Misc-assets/Social-icons/Instagram.svg" alt="" fill sizes="20px" className="object-contain" />
                </span>
                <span>Instagram</span>
              </Link>
              <Link href="https://www.tiktok.com/@doctorwise.ai" aria-label="Tiktok" className="inline-flex items-center gap-spacing-sm text-text-md font-semibold text-text-tertiary hover:text-text-tertiary-hover md:order-3" target="_blank" rel="noopener noreferrer">
                <span className="relative h-[20px] w-[20px]">
                  <Image src="/Assets/Misc-assets/Social-icons/Tiktok.svg" alt="" fill sizes="20px" className="object-contain" />
                </span>
                <span>Tiktok</span>
              </Link>
              <Link href="https://www.linkedin.com/company/doctor-wise/" aria-label="Linkedin" className="inline-flex items-center gap-spacing-sm text-text-md font-semibold text-text-tertiary hover:text-text-tertiary-hover md:order-3" target="_blank" rel="noopener noreferrer">
                <span className="relative h-[20px] w-[20px]">
                  <Image src="/Assets/Misc-assets/Social-icons/Linkedin.svg" alt="" fill sizes="20px" className="object-contain" />
                </span>
                <span>Linkedin</span>
              </Link>
            </div>
          </div>

          {/* Bottom: divider + policies + legal (stacked on mobile) */}
          <div id="Footer_bottom" className="border-t border-border-secondary pt-spacing-4xl flex flex-col gap-spacing-3xl text-text-md text-text-quaternary w-full md:flex-row md:items-center md:justify-between md:flex-nowrap md:gap-spacing-none">
            <div id="Footer_policies" className="flex items-center w-full flex-wrap gap-spacing-xl md:w-auto md:ml-auto md:justify-end md:order-2 md:flex-nowrap">
              <I18nLink href="/privacy-policy">{t('privacy')}</I18nLink>
              <I18nLink href="/terms-of-use">{t('terms')}</I18nLink>
            </div>
            <p className="text-text-md text-text-quaternary md:order-1">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


