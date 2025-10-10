'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/icons';
import { LogoDefault } from '@/components/ui/Logo/LogoDefault';

/**
 * Footer (Figma node: 13264:36846)
 * - Uses design tokens (spacing, text colors, borders)
 * - Reuses shared components: LogoDefault, Icon
 * - Images must come from public assets; brand icons from icon library
 */
export function Footer(): React.ReactElement {
  return (
    <footer id="Footer" className="bg-bg-primary w-full">
      {/* Top container: logo and social/cta links */}
      <div id="Footer_container-top" className="mx-auto w-full max-w-3xl px-spacing-6xl py-spacing-7xl">
        <div id="Footer_content-top" className="flex flex-wrap items-center justify-between gap-spacing-6xl">
          <div id="Footer_logo-and-links" className="flex min-w-[560px] grow items-center justify-between">
            <LogoDefault variant="light" size="md" />

            {/* Right side: links group */}
            <div id="Footer_links-group" className="flex items-center gap-spacing-3xl">
              {/* Be an ambassador */}
              <Link href="#" className="inline-flex items-center gap-spacing-sm text-text-md font-semibold text-text-tertiary hover:text-text-tertiary-hover">
                <Icon name="users_plus" size="md" className="text-fg-quaternary" aria-label="users-plus" />
                <span>Seja um embaixador</span>
              </Link>

              {/* Divider */}
              <span className="hidden md:block h-[20px] w-px bg-border-tertiary" />

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
            </div>
          </div>
        </div>
      </div>

      {/* Bottom container: divider + legal + policies */}
      <div id="Footer_container-bottom" className="mx-auto w-full max-w-3xl px-spacing-6xl pb-spacing-6xl">
        <div id="Footer_content-bottom" className="border-t border-border-secondary pt-spacing-3xl flex flex-wrap items-center justify-between gap-spacing-2xl text-text-md text-text-quaternary">
          <p className="text-text-md text-text-quaternary">
            © 2025 DOCTOR WISE TECNOLOGIA LTDA. CNPJ: 60.964.645/0001-76. Todos os direitos reservados.
          </p>
          <div id="Footer_policy-links" className="flex items-center gap-spacing-xl text-text-md text-text-quaternary">
            <Link href="#">Política de privacidade</Link>
            <Link href="#">Termos de uso</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;


