'use client';

import React, { useState } from 'react';
import { Icon, iconNames } from '@/components/icons';
import type { IconName } from '@/components/icons';
import { InputField } from '@/components/ui';
import { SearchMd } from '@/components/icons/generated/SearchMd';

export const IconShowcase: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');

  // Filter icons based on search term
  const filteredIcons = iconNames.filter(iconName =>
    iconName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get a sample of icons for display (first 50)
  const displayIcons = filteredIcons.slice(0, 50);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Icon Library Showcase
        </h2>
        <p className="text-gray-600">
          {iconNames.length} icons available • Showing {displayIcons.length} results
        </p>
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <div className="relative min-w-[260px] w-full sm:w-auto">
          <InputField
            placeholder="Search icons..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            iconLeading={<SearchMd size={20} className="text-fg-quaternary" />}
          />
        </div>

        <div className="flex gap-2">
          {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 rounded text-sm font-medium ${
                selectedSize === size
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {size.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Icon Grid */}
      <div className="grid grid-cols-8 sm:grid-cols-12 md:grid-cols-16 lg:grid-cols-20 gap-4">
        {displayIcons.map((iconName) => (
          <div
            key={iconName}
            className="flex flex-col items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
            title={iconName}
          >
            <Icon
              name={iconName as IconName}
              size={selectedSize}
              className="text-gray-700 group-hover:text-blue-600 transition-colors"
            />
            <span className="text-xs text-gray-500 mt-1 truncate w-full text-center">
              {iconName.replace(/_/g, ' ')}
            </span>
          </div>
        ))}
      </div>

      {filteredIcons.length > 50 && (
        <div className="text-center text-gray-500">
          Showing first 50 results. Use search to find specific icons.
        </div>
      )}

      {/* Usage Example */}
      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Usage Example</h3>
        <pre className="bg-white rounded p-4 font-mono text-sm text-gray-800 whitespace-pre-wrap">
{`// Import the Icon component
import { Icon } from '@/components/icons';

// Use any of the ${iconNames.length} available icons
<Icon name="activity" size="md" />
<Icon name="home_01" size="lg" className="text-blue-500" />`}
        </pre>
      </div>
    </div>
  );
};
