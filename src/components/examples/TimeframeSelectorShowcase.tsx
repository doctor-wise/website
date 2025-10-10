'use client';

import React from 'react';
import { TimeframeSelector } from '@/components/ui';

export function TimeframeSelectorShowcase() {
  const [value, setValue] = React.useState('current-month');
  return (
    <div className="space-y-spacing-xl">
      <div>
        <h3 className="text-display-sm font-semibold text-text-primary mb-spacing-sm">Timeframe selector</h3>
        <p className="text-text-md text-text-secondary">Simple pill buttons. One active at a time.</p>
      </div>

      <div className="bg-bg-secondary-subtle rounded-3xl p-spacing-3xl">
        <TimeframeSelector
          value={value}
          onChange={setValue}
          options={[
            { label: 'Mês atual', value: 'current-month' },
            { label: 'Hoje', value: 'today' },
            { label: '24h', value: '24h' },
            { label: '30d', value: '30d' },
            { label: '90d', value: '90d' },
            { label: '365d', value: '365d' },
            { label: 'Tudo', value: 'all' },
          ]}
        />
      </div>
    </div>
  );
}

export default TimeframeSelectorShowcase;


