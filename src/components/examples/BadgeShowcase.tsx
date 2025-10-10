'use client';

import React from 'react';
import { Badge } from '@/components/ui';

const tones = ['gray','brand','blue','green','yellow','orange','red','pink','purple'] as const;
const sizes = ['sm','md','lg'] as const;
// (removed unused variants)

export function BadgeShowcase() {
  return (
    <div className="space-y-spacing-2xl">
      {/* Sizes header */}
      <div className="grid grid-cols-3 gap-x-spacing-3xl">
        {sizes.map((s) => (
          <div key={s} className="flex items-center justify-center">
            <div className="inline-flex items-center justify-center bg-bg-primary-solid text-text-white rounded-full px-spacing-lg py-spacing-sm">
              <span className="font-semibold">{s}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Demo grid similar to Figma screenshot */}
      <div className="grid grid-cols-3 gap-x-spacing-3xl gap-y-spacing-lg">
        {sizes.map((size) => (
          <div key={size} className="space-y-spacing-lg">
            {/* Neutral examples */}
            <div className="flex flex-col gap-spacing-md">
              <Badge size={size} tone="gray" variant="soft">Label</Badge>
              <Badge size={size} tone="gray" variant="outline">Label</Badge>
              <Badge size={size} tone="gray" variant="solid">Label</Badge>
            </div>

            {/* Colored tones */}
            {tones.filter((t) => t !== 'gray').map((tone) => (
              <div key={tone} className="flex">
                <Badge size={size} tone={tone} variant="soft">Label</Badge>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}


