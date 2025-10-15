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
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname();
  const t = useTranslations('Navbar');
  const currentLocale = React.useMemo(() => {
    const parts = pathname?.split('/').filter(Boolean) ?? [];
    return parts[0] === 'en' ? 'en' : 'pt';
  }, [pathname]);

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close on ESC when menu is open
  React.useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMenuOpen]);

  // Lock body scroll while the menu is open (iOS-safe)
  React.useEffect(() => {
    if (!isMenuOpen) return;
    const scrollY = window.scrollY;
    const style = document.body.style;
    const prev = {
      position: style.position,
      top: style.top,
      overflow: style.overflow,
      width: style.width,
    };
    style.position = 'fixed';
    style.top = `-${scrollY}px`;
    style.width = '100%';
    style.overflow = 'hidden';
    return () => {
      const y = Math.abs(parseInt(style.top || '0', 10)) || 0;
      style.position = prev.position;
      style.top = prev.top;
      style.overflow = prev.overflow;
      style.width = prev.width;
      window.scrollTo(0, y);
    };
  }, [isMenuOpen]);

  const wrapperClasses = [
    'fixed top-0 left-0 right-0 z-50 w-full',
    'transition-all duration-300 ease-in-out',
    'bg-transparent',
  ].join(' ');

  const divider = <span className="hidden md:block h-[18px] w-px bg-border-secondary" />;

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
            'pl-spacing-3xl pr-spacing-2xl',
            'transition-all duration-300 ease-in-out',
            // Mobile (always styled like Figma pill)
            'bg-white/80 backdrop-blur border border-border-tertiary shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
            // Desktop behavior (transparent until scroll)
            isScrolled
              ? 'md:bg-white/80 md:backdrop-blur md:border md:border-border-secondary md:mx-spacing-3xl md:shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]'
              : 'md:bg-transparent md:border md:border-transparent md:shadow-none md:mx-0',
          ].join(' ')}
        >
          <Link href={`/${currentLocale}`} aria-label="Doctor Wise - Home" className="inline-flex items-center">
            <LogoDefault variant="light" size="md" />
          </Link>

          {/* Desktop actions */}
          <div id="ActionsDesktop" className="hidden md:flex items-center gap-spacing-2xl">
            <LanguageSelector />

            {divider}

            <Link
              href={`/${currentLocale}/blog`}
              className="inline-flex items-center gap-[4px] rounded-full border border-border-primary bg-white px-[12px] py-[8px] text-text-secondary hover:text-text-secondary-hover transition-colors"
            >
              <span className="text-text-sm font-semibold">{t('blog')}</span>
              <Icon name="book_open_01" size="sm" className="text-fg-tertiary" aria-label="book-open" />
            </Link>

            <Button size="sm" hierarchy="primary" as={Link} href={`/${currentLocale}/signup`}>
              <span className="inline-flex items-center gap-[4px] text-text-sm font-semibold">
                {t('ctaAccess')}
                <Icon name="arrow_right" size="sm" className="text-text-white" aria-label="arrow-right" />
              </span>
            </Button>
          </div>

          {/* Mobile menu icon (visual only) */}
          <button
            id="Actions"
            type="button"
            aria-label="Open menu"
            data-node-id="13375:15929"
            className="md:hidden inline-flex items-center justify-center p-spacing-md"
            onClick={() => setIsMenuOpen(true)}
          >
            <Icon name="menu_05" size="sm" className="text-fg-tertiary" aria-label="menu" />
          </button>
        </div>
      </div>

      {/* Mobile full-screen menu overlay */}
      {isMenuOpen && (
        <div
          id="NavbarMenu"
          data-node-id="13375:16084"
          role="dialog"
          aria-modal="true"
          className="md:hidden fixed inset-0 z-[60] overscroll-none"
        >
          
          <div
            id="Backdrop"
            aria-hidden
            className="absolute inset-0 backdrop-blur bg-white/80"
            onClick={() => setIsMenuOpen(false)}
          />

          
          <div
            id="Actions"
            data-node-id="13375:16085"
            className="relative z-10 h-full w-full flex flex-col items-center justify-center gap-spacing-2xl px-spacing-xl"
          >
            <Button
              size="sm"
              hierarchy="primary"
              as={Link}
              href={`/${currentLocale}/signup`}
              icon="arrow_right"
              iconPosition="right"
              className="w-full max-w-[150px]"
            >
              {t('ctaAccess')}
            </Button>

            <Link
              href={`/${currentLocale}/blog`}
              className="inline-flex items-center justify-between gap-[4px] rounded-full border border-border-primary bg-white px-[12px] py-[8px] text-text-secondary hover:text-text-secondary-hover transition-colors w-full max-w-[150px]"
            >
              <span className="text-text-sm font-semibold">{t('blog')}</span>
              <Icon name="book_open_01" size="sm" className="text-fg-tertiary" aria-label="book-open" />
            </Link>

            
            <div id="Divider" className="w-full max-w-[150px] h-px bg-border-secondary" />

            
            <div id="LanguageSelectorWrapper" className="w-full max-w-[150px]">
              <LanguageSelector className="w-full max-w-[150px] justify-start" />
            </div>
          </div>

          
          <div id="NavbarWrapper" data-node-id="13375:16090" className="absolute top-spacing-xl right-spacing-xl z-10">
            <div
              id="Navbar"
              data-node-id="13375:16091"
              className="size-16 rounded-full border border-border-secondary bg-white/80 backdrop-blur flex items-center justify-center shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]"
            >
              <div id="Actions" className="flex items-center justify-center">
                <Button
                  type="button"
                  hierarchy="tertiary"
                  size="sm"
                  iconOnly
                  icon="x"
                  aria-label="Close menu"
                  className="p-spacing-md"
                  onClick={() => setIsMenuOpen(false)}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}


