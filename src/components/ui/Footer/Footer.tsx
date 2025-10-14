'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
  return (
    <footer id="Footer" className="bg-bg-primary w-full overflow-x-hidden" data-node-id="13378:16780">
      {/* Container */}
      <div className="mx-auto w-full max-w-3xl px-spacing-xl py-spacing-6xl md:px-spacing-6xl md:py-spacing-7xl">
        <div className="flex flex-col gap-spacing-6xl">
          {/* Top: logo + links (stacked on mobile) */}
          <div id="Footer_top" className="flex flex-col gap-spacing-4xl md:flex-row md:items-center md:justify-between w-full">
            <LogoMark size="md" />

            <div id="Footer_links" className="flex flex-wrap items-center gap-spacing-4xl w-full md:w-auto">
              {/* Social links - provided assets from public folder */}
              <Link href="#" aria-label="Instagram" className="inline-flex items-center gap-spacing-sm text-text-md font-semibold text-text-tertiary hover:text-text-tertiary-hover">
                <span className="relative h-[20px] w-[20px]">
                  <Image src="/Assets/Misc-assets/Social-icons/Instagram.svg" alt="" fill sizes="20px" className="object-contain" />
                </span>
                <span>Instagram</span>
              </Link>
              <Link href="#" aria-label="Tiktok" className="inline-flex items-center gap-spacing-sm text-text-md font-semibold text-text-tertiary hover:text-text-tertiary-hover">
                <span className="relative h-[20px] w-[20px]">
                  <Image src="/Assets/Misc-assets/Social-icons/Tiktok.svg" alt="" fill sizes="20px" className="object-contain" />
                </span>
                <span>Tiktok</span>
              </Link>
              <Link href="#" aria-label="Linkedin" className="inline-flex items-center gap-spacing-sm text-text-md font-semibold text-text-tertiary hover:text-text-tertiary-hover">
                <span className="relative h-[20px] w-[20px]">
                  <Image src="/Assets/Misc-assets/Social-icons/Linkedin.svg" alt="" fill sizes="20px" className="object-contain" />
                </span>
                <span>Linkedin</span>
              </Link>

              {/* Divider visible only on desktop */}
              <span className="hidden md:block h-[20px] w-px bg-border-tertiary" />

              {/* Ambassador link */}
              <Link href="#" className="inline-flex items-center gap-spacing-sm text-text-md font-semibold text-text-tertiary hover:text-text-tertiary-hover">
                <Icon name="users_plus" size="md" className="text-fg-quaternary" aria-label="users-plus" />
                <span>{t('ambassador')}</span>
              </Link>
            </div>
          </div>

          {/* Bottom: divider + policies + legal (stacked on mobile) */}
          <div id="Footer_bottom" className="border-t border-border-secondary pt-spacing-4xl flex flex-col gap-spacing-3xl text-text-md text-text-quaternary w-full">
            <div id="Footer_policies" className="flex items-center justify-between w-full flex-wrap gap-spacing-xl">
              <Link href="#">{t('privacy')}</Link>
              <Link href="#">{t('terms')}</Link>
            </div>
            <p className="text-text-md text-text-quaternary">
              {t('copyright')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


