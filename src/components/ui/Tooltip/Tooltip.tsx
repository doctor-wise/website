'use client';

import React from 'react';
import { createPortal } from 'react-dom';

export type TooltipSide = 'top' | 'right' | 'bottom' | 'left';

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: TooltipSide;
  className?: string;
}

function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export function Tooltip({ content, children, side = 'top', className = '' }: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const triggerRef = React.useRef<HTMLSpanElement | null>(null);
  const tooltipRef = React.useRef<HTMLDivElement | null>(null);
  const [coords, setCoords] = React.useState<{ top: number; left: number } | null>(null);
  const id = React.useId();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const updatePosition = React.useCallback(() => {
    if (!triggerRef.current || !tooltipRef.current) return;
    const margin = 8; // px gap between trigger and tooltip
    const rect = triggerRef.current.getBoundingClientRect();
    const tip = tooltipRef.current.getBoundingClientRect();
    const vw = window.innerWidth;
    const vh = window.innerHeight;

    let top = 0;
    let left = 0;

    if (side === 'bottom') {
      top = rect.bottom + margin;
      left = rect.left + rect.width / 2 - tip.width / 2;
    } else if (side === 'left') {
      top = rect.top + rect.height / 2 - tip.height / 2;
      left = rect.left - tip.width - margin;
    } else if (side === 'right') {
      top = rect.top + rect.height / 2 - tip.height / 2;
      left = rect.right + margin;
    } else {
      // top
      top = rect.top - tip.height - margin;
      left = rect.left + rect.width / 2 - tip.width / 2;
    }

    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);
    const minX = 8;
    const maxX = vw - tip.width - 8;
    const minY = 8;
    const maxY = vh - tip.height - 8;
    left = clamp(left, minX, Math.max(minX, maxX));
    top = clamp(top, minY, Math.max(minY, maxY));

    setCoords({ top, left });
  }, [side]);

  React.useEffect(() => {
    if (!open) return;
    updatePosition();
    const handlers = [
      ['scroll', updatePosition],
      ['resize', updatePosition],
    ] as const;
    handlers.forEach(([evt, fn]) => window.addEventListener(evt, fn));
    return () => handlers.forEach(([evt, fn]) => window.removeEventListener(evt, fn));
  }, [open, updatePosition]);

  const arrowPosition = React.useMemo(() => {
    if (side === 'bottom') return 'top-[-4px] left-1/2 -translate-x-1/2';
    if (side === 'left') return 'right-[-4px] top-1/2 -translate-y-1/2';
    if (side === 'right') return 'left-[-4px] top-1/2 -translate-y-1/2';
    return 'bottom-[-4px] left-1/2 -translate-x-1/2'; // top
  }, [side]);

  return (
    <span
      ref={triggerRef}
      className={cn('inline-flex', className)}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={() => setOpen(false)}
      tabIndex={0}
      aria-describedby={id}
    >
      {children}
      {mounted && open && createPortal(
        <div
          ref={tooltipRef}
          id={id}
          role="tooltip"
          aria-hidden={!open}
          style={{ position: 'fixed', top: (coords?.top ?? -9999), left: (coords?.left ?? -9999) }}
          className={cn(
            'pointer-events-none z-[9999] whitespace-nowrap',
            'px-spacing-lg py-spacing-sm rounded-lg',
            'bg-bg-primary-solid text-text-primary-on-brand',
            'text-text-sm font-semibold',
            'shadow-[0_8px_24px_rgba(10,13,18,0.30),_0_2px_6px_rgba(10,13,18,0.18)]',
            'transition-opacity duration-150',
            coords ? 'opacity-100' : 'opacity-0'
          )}
        >
          {content}
          <span
            className={cn(
              'absolute h-2 w-2 rotate-45',
              'bg-bg-primary-solid',
              arrowPosition
            )}
          />
        </div>,
        document.body
      )}
    </span>
  );
}

export default Tooltip;


