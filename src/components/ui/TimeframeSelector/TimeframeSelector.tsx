'use client';

import React from 'react';
import { TimeframeButton } from '@/components/ui/TimeframeButton';

export type TimeframeOption = {
  label: React.ReactNode;
  value: string;
};

export interface TimeframeSelectorProps {
  options: TimeframeOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  className?: string;
}

/**
 * TimeframeSelector
 * Horizontal group of `TimeframeButton` with single-selection behavior.
 * Implements basic radio-group semantics with keyboard navigation.
 */
export const TimeframeSelector: React.FC<TimeframeSelectorProps> = ({
  options,
  value,
  defaultValue,
  onChange,
  className = '',
}) => {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState<string | undefined>(
    defaultValue ?? options[0]?.value
  );

  const selectedValue = isControlled ? value : internalValue;
  const buttonsRef = React.useRef<Array<HTMLButtonElement | null>>([]);

  const setValue = (newValue: string) => {
    if (!isControlled) setInternalValue(newValue);
    onChange?.(newValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (options.length === 0) return;
    const currentIndex = Math.max(
      0,
      options.findIndex((o) => o.value === selectedValue)
    );
    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % options.length;
      setValue(options[nextIndex].value);
      buttonsRef.current[nextIndex]?.focus();
      e.preventDefault();
    } else if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + options.length) % options.length;
      setValue(options[prevIndex].value);
      buttonsRef.current[prevIndex]?.focus();
      e.preventDefault();
    }
  };

  return (
    <div
      role="radiogroup"
      aria-label="Timeframe selector"
      className={`flex items-center gap-spacing-sm ${className}`}
      onKeyDown={handleKeyDown}
    >
      {options.map((option, index) => {
        const active = option.value === selectedValue;
        return (
          <TimeframeButton
            key={option.value}
            ref={(el) => { buttonsRef.current[index] = el; }}
            state={active ? 'active' : 'default'}
            role="radio"
            aria-checked={active}
            tabIndex={active ? 0 : -1}
            onClick={() => setValue(option.value)}
            type="button"
          >
            {option.label}
          </TimeframeButton>
        );
      })}
    </div>
  );
};

export default TimeframeSelector;


