'use client';

import React from 'react';
import { SideNavItem } from '@/components/ui/SideNavItem/SideNavItem';
import { LogoMark } from '@/components/ui/Logo';
import { IconName } from '@/components/icons';
import { usePathname } from 'next/navigation';

interface SideMenuItem {
  icon: IconName;
  label: string;
  href?: string;
  active?: boolean;
}

interface SideMenuProps {
  className?: string;
}

export function SideMenu({ className = '' }: SideMenuProps) {
  const pathname = usePathname();
  const menuItems: SideMenuItem[] = [
    {
      icon: 'home_01',
      label: 'Cores',
      href: '/demo/colors',
      active: pathname?.startsWith('/demo/colors'),
    },
    {
      icon: 'trophy_01',
      label: 'Tipografia',
      href: '/demo/typography',
      active: pathname?.startsWith('/demo/typography'),
    },
    {
      icon: 'users_01',
      label: 'Ícones',
      href: '/demo/icons',
      active: pathname?.startsWith('/demo/icons'),
    },
    {
      icon: 'announcement_01',
      label: 'Componentes',
      href: '/demo/components',
      active: pathname?.startsWith('/demo/components'),
    },
  ];

  return (
    <div className={`bg-white flex flex-col h-full border-r border-border-secondary ${className}`}>
      {/* Content wrapper */}
      <div className="flex flex-col flex-grow justify-between">
        {/* Navigation section */}
        <div className="flex flex-col gap-spacing-4xl pt-spacing-3xl">
          {/* Header */}
          <div className="flex gap-spacing-md items-center px-spacing-2xl">
            <LogoMark size="md" />
            <div className="flex-grow bg-bg-secondary rounded-2xl px-spacing-lg py-0 h-8 flex items-center justify-center">
              <span className="text-text-sm font-semibold text-text-tertiary">
                Sistema de design
              </span>
            </div>
          </div>

          {/* Navigation items */}
          <div className="flex flex-col px-spacing-xl">
            {menuItems.map((item, index) => (
              <div key={index} className="py-spacing-xxs">
                <SideNavItem
                  icon={item.icon}
                  label={item.label}
                  href={item.href}
                  active={item.active}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}