'use client';

import React from 'react';
import Link from 'next/link';
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

  React.useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const wrapperClasses = [
    'fixed top-0 left-0 right-0 z-50 w-full',
    'transition-all duration-300 ease-in-out',
    'bg-transparent',
  ].join(' ');

  const divider = <span className="hidden md:block h-[18px] w-px bg-border-secondary" />;

  return (
    <header className={wrapperClasses}>
      <div className="mx-auto w-full max-w-3xl px-spacing-md pt-spacing-md md:px-spacing-xl pt-spacing-xl">
        <div
          className={[
            'flex items-center justify-between',
            'h-16',
            'rounded-full',
            'pl-spacing-3xl pr-spacing-2xl',
            'transition-all duration-300 ease-in-out',
            isScrolled
              ? 'bg-white/80 backdrop-blur border border-border-secondary shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]'
              : 'bg-transparent border border-transparent',
          ].join(' ')}
        >
          <Link href="/" aria-label="Doctor Wise - Home" className="inline-flex items-center">
            <LogoDefault variant="light" size="md" />
          </Link>

          <div className="flex items-center gap-spacing-2xl">
            <LanguageSelector />

            {divider}

            <Link
              href="/blog"
              className="inline-flex items-center gap-[4px] rounded-full border border-border-primary bg-white px-[12px] py-[8px] text-text-secondary hover:text-text-secondary-hover transition-colors"
            >
              <span className="text-text-sm font-semibold">Blog</span>
              <Icon name="book_open_01" size="sm" className="text-fg-tertiary" aria-label="book-open" />
            </Link>

            <Button size="sm" hierarchy="primary" as={Link} href="/signup">
              <span className="inline-flex items-center gap-[4px] text-text-sm font-semibold">
                Acessar grátis
                <Icon name="arrow_right" size="sm" className="text-text-white" aria-label="arrow-right" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}


