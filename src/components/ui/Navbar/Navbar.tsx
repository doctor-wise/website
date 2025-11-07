'use client';

import React from 'react';
import { Link as I18nLink } from '@/i18n/routing';
import {useTranslations} from 'next-intl';
import { LogoDefault } from '../Logo/LogoDefault';
import { Button } from '../Button';
import { LanguageSelector } from '../LanguageSelector';

type NavbarVariant = 'default' | 'ambassadors';

interface NavbarProps {
  variant?: NavbarVariant;
}

/**
 * Pill-style Navbar centered horizontally.
 * - Top of page: fully transparent, no border or shadow
 * - After scroll: white background, subtle border and light shadow
 */
export function Navbar({ variant = 'default' }: NavbarProps): React.ReactElement {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const t = useTranslations('Navbar');
  const isAmbassadors = variant === 'ambassadors';

  const ctaFull = t('ctaAccess');
  const shortCta = React.useMemo(() => ctaFull.replace(/\s+(grátis|free|gratis)$/i, ''), [ctaFull]);
  const ambassadorsApplyFull = isAmbassadors ? t('ctaAmbassadorsApply') : ctaFull;
  const ambassadorsApplyShort = isAmbassadors ? t('ctaAmbassadorsApplyShort') : shortCta;
  const ambassadorsAreaLabel = isAmbassadors ? t('ctaAmbassadorsArea') : '';

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
          data-name={isAmbassadors ? 'Navbar - Ambassadors' : 'State=Scroll, Size=Mobile'}
          data-node-id={isAmbassadors ? '13532:7422' : '13375:15929'}
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
          <I18nLink href="/" aria-label="Doctor Wise - Home" className="inline-flex items-center">
            <span className="inline-flex md:hidden">
              <LogoDefault variant="light" size="sm" />
            </span>
            <span className="hidden md:inline-flex">
              <LogoDefault variant="light" size="md" />
            </span>
          </I18nLink>

          {/* Actions */}
          <div
            id={isAmbassadors ? 'AmbassadorsActions' : 'Actions'}
            data-node-id={isAmbassadors ? '13532:7424' : '13375:15932'}
            className={[
              'flex items-center',
              isAmbassadors ? 'gap-spacing-md md:gap-spacing-xl' : 'gap-spacing-md md:gap-spacing-2xl'
            ].join(' ')}
          >
            <LanguageSelector />

            {isAmbassadors && (
              <>
                <div
                  id="ActionsDivider"
                  className="hidden h-5 w-px bg-border-tertiary md:block"
                  aria-hidden="true"
                  data-node-id="13532:7426"
                />

                <a
                  id="AmbassadorAreaButton"
                  href="https://emb.doctorwise.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-block"
                >
                  <Button size="sm" hierarchy="secondary" icon="line_chart_up_04">
                    <span className="text-text-sm font-semibold text-text-secondary">{ambassadorsAreaLabel}</span>
                  </Button>
                </a>
              </>
            )}

            <a
              id="PrimaryCtaButton"
              href={isAmbassadors ? 'https://airtable.com/appLHbSfKhrt6rgMc/pagEYONy9x3aFkYBv/form' : 'https://doctorwise.app/'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button
                size="sm"
                hierarchy="primary"
                icon="arrow_right"
                iconPosition="right"
              >
                <span className="inline-flex items-center text-text-sm font-semibold">
                  <span className="md:hidden">{ambassadorsApplyShort}</span>
                  <span className="hidden md:inline">{ambassadorsApplyFull}</span>
                </span>
              </Button>
            </a>
          </div>
          
        </div>
      </div>

    </header>
  );
}


