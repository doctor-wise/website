'use client';

import React from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {useTranslations} from 'next-intl';
import { Icon } from '@/components/icons';
import { LogoDefault } from '../Logo/LogoDefault';
import { Button } from '../Button';
import { LanguageSelector } from '../LanguageSelector';

/**
 * Pill-style Navbar centered horizontally.
 * - Top of page: fully transparent, no border or shadow
 * - After scroll: white background, subtle border and light shadow
 */
export function Navbar(): React.ReactElement {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const pathname = usePathname();
  const t = useTranslations('Navbar');
  const currentLocale = React.useMemo(() => {
    const parts = pathname?.split('/').filter(Boolean) ?? [];
    return parts[0] === 'en' ? 'en' : 'pt';
  }, [pathname]);

  const ctaFull = t('ctaAccess');
  const shortCta = React.useMemo(() => ctaFull.replace(/\s+(grátis|free|gratis)$/i, ''), [ctaFull]);

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Mobile menu removed per new spec; navbar is always inline on mobile

  const wrapperClasses = [
    'fixed top-0 left-0 right-0 z-50 w-full',
    'transition-all duration-300 ease-in-out',
    'bg-transparent',
  ].join(' ');

  return (
    <header className={wrapperClasses}>
      <div className="mx-auto w-full max-w-3xl px-spacing-md pt-spacing-xl pb-spacing-none md:px-spacing-xl md:pt-spacing-xl md:pb-spacing-none overflow-x-hidden">
        <div
          id="Navbar"
          data-name="State=Scroll, Size=Mobile"
          data-node-id="13375:15929"
          className={[
            'flex items-center justify-between',
            'h-16',
            'rounded-full',
            'pl-spacing-2xl pr-spacing-xl',
            'transition-all duration-300 ease-in-out',
            // Mobile (always styled like Figma pill)
            'bg-white/80 backdrop-blur border border-border-tertiary shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
            // Desktop behavior (transparent until scroll)
            isScrolled
              ? 'md:pl-spacing-3xl md:pr-spacing-2xl md:bg-white/80 md:backdrop-blur md:border md:border-border-secondary md:mx-spacing-3xl md:shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]'
              : 'md:pl-spacing-3xl md:pr-spacing-2xl md:bg-transparent md:border md:border-transparent md:shadow-none md:mx-0',
          ].join(' ')}
        >
          <Link href={`/${currentLocale}`} aria-label="Doctor Wise - Home" className="inline-flex items-center">
            <span className="inline-flex md:hidden">
              <LogoDefault variant="light" size="sm" />
            </span>
            <span className="hidden md:inline-flex">
              <LogoDefault variant="light" size="md" />
            </span>
          </Link>

          {/* Actions */}
          <div id="Actions" className="flex items-center gap-spacing-md md:gap-spacing-2xl">
            <LanguageSelector />

            <a href="https://doctorwise.app/" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Button size="sm" hierarchy="primary">
                <span className="inline-flex items-center gap-[4px] text-text-sm font-semibold">
                  <span className="md:hidden">{shortCta}</span>
                  <span className="hidden md:inline">{t('ctaAccess')}</span>
                  <Icon name="arrow_right" size="sm" className="text-text-white" aria-label="arrow-right" />
                </span>
              </Button>
            </a>
          </div>
          
        </div>
      </div>

    </header>
  );
}


