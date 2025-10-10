'use client';

import React from 'react';
import { SideNavItem } from '@/components/ui';

export const SideNavItemShowcase: React.FC = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-display-sm font-semibold text-text-primary mb-2">SideNavItem</h2>
        <p className="text-text-md text-text-secondary">Sidebar nav item using design tokens. States: default, hover, focused, and current.</p>
      </div>

      <div className="bg-bg-secondary-subtle rounded-3xl p-spacing-3xl">
        <div className="grid grid-cols-[auto_1fr_1fr] grid-rows-[auto_repeat(3,_minmax(0,_1fr))] gap-x-spacing-3xl gap-y-spacing-xl items-center">
          {/* Headers */}
          <div />
          <div className="text-text-sm font-medium text-text-tertiary">Not current</div>
          <div className="text-text-sm font-medium text-text-tertiary">Current</div>

          {/* Default row */}
          <div className="text-text-sm font-medium text-text-tertiary">Default</div>
          <div className="flex items-center px-0 py-[2px] w-[272px]">
            <SideNavItem icon="bar_chart_square_02" label="Dashboard" chevron />
          </div>
          <div className="flex items-center px-0 py-[2px] w-[272px]">
            <SideNavItem icon="bar_chart_square_02" label="Dashboard" active chevron />
          </div>

          {/* Hover row - simulated via classes */}
          <div className="text-text-sm font-medium text-text-tertiary">Hover</div>
          <div className="flex items-center px-0 py-[2px] w-[272px]">
            <SideNavItem icon="bar_chart_square_02" label="Dashboard" chevron className="bg-bg-primary-hover text-text-secondary-hover" />
          </div>
          <div className="flex items-center px-0 py-[2px] w-[272px]">
            <SideNavItem icon="bar_chart_square_02" label="Dashboard" active chevron className="bg-bg-primary-hover text-text-secondary-hover" />
          </div>

          {/* Focused row - simulated via focus ring */}
          <div className="text-text-sm font-medium text-text-tertiary">Focused</div>
          <div className="flex items-center px-0 py-[2px] w-[272px]">
            <SideNavItem icon="bar_chart_square_02" label="Dashboard" chevron className="shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#0072e5]" />
          </div>
          <div className="flex items-center px-0 py-[2px] w-[272px]">
            <SideNavItem icon="bar_chart_square_02" label="Dashboard" active chevron className="shadow-[0px_0px_0px_2px_#ffffff,0px_0px_0px_4px_#0072e5]" />
          </div>
        </div>
      </div>
    </div>
  );
};


