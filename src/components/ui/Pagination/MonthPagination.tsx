'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { MonthPill } from '@/components/ui/Pagination/MonthPill';
import { Text } from '@/components/ui/Typography/Text';
import { Icon } from '@/components/icons';

export interface MonthPaginationProps {
  value: Date;
  onChange?: (value: Date) => void;
  window?: number; // number of pills to show, default 7 as in figma screenshot
  min?: Date; // earliest selectable month (inclusive)
  max?: Date; // latest selectable month (inclusive)
  className?: string;
  labels?: { previous?: string; next?: string };
}

function startOfMonth(date: Date): Date {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function addMonths(date: Date, delta: number): Date {
  const d = new Date(date);
  d.setMonth(d.getMonth() + delta);
  return startOfMonth(d);
}

function isSameMonth(a: Date, b: Date): boolean {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

function clampMonth(date: Date, min?: Date, max?: Date): Date {
  const s = startOfMonth(date);
  if (min && s < startOfMonth(min)) return startOfMonth(min);
  if (max && s > startOfMonth(max)) return startOfMonth(max);
  return s;
}

function formatMonthShortPtBR(date: Date): string {
  const month = date
    .toLocaleDateString('pt-BR', { month: 'short' })
    .replace('.', '')
    .replace(/^./, (c) => c.toUpperCase());
  const yy = String(date.getFullYear()).slice(-2);
  return `${month}/${yy}`;
}

export const MonthPagination: React.FC<MonthPaginationProps> = ({
  value,
  onChange,
  window = 7,
  min,
  max = startOfMonth(new Date()),
  className = '',
  labels = { previous: 'Anterior', next: 'Próximo' },
}) => {
  const selected = clampMonth(value, min, max);
  // Sliding window anchored by a separate "start" month (leftmost pill)
  const initialStart = React.useMemo(() => (max ? startOfMonth(max) : selected), [max, selected]);
  const [start, setStart] = React.useState<Date>(initialStart);

  // Keep window valid when selected/max change
  React.useEffect(() => {
    const maxStart = max ? startOfMonth(max) : undefined;
    setStart((s) => {
      let next = s;
      if (maxStart && next > maxStart) next = maxStart;
      // If selection goes newer than left edge, align left edge to selection
      if (selected > next) next = selected;
      return next;
    });
  }, [selected, max]);

  // "Anterior" moves newer (left) by +1 month; "Próximo" moves older (right) by -1 month
  const canPrev = !max || addMonths(selected, +1) <= startOfMonth(max);
  const canNext = !min || addMonths(selected, -1) >= startOfMonth(min);

  const go = (d: Date) => onChange?.(clampMonth(d, min, max));

  // Build window from the start (leftmost), descending to older months
  const months = React.useMemo(() => {
    const items: Date[] = [];
    for (let i = 0; i < window; i += 1) {
      const m = addMonths(start, -i);
      if (min && m < startOfMonth(min)) break;
      items.push(m);
    }
    return items;
  }, [start, window, min]);

  return (
    <nav className={`w-full flex items-center justify-between ${className}`} aria-label="paginação de meses">
      <Button
        hierarchy="secondary"
        size="md"
        onClick={() => {
          if (!canPrev) return;
          const nextSelected = addMonths(selected, +1);
          // If selected is already at the left edge, shift the window newer
          if (isSameMonth(selected, start)) {
            const newerStart = addMonths(start, +1);
            const maxStart = max ? startOfMonth(max) : undefined;
            if (!maxStart || newerStart <= maxStart) setStart(newerStart);
          }
          go(nextSelected);
        }}
        disabled={!canPrev}
      >
        <Icon name="arrow_left" size="sm" />
        <Text as="span" size="sm" weight="semibold" className="ml-2">
          {labels.previous}
        </Text>
      </Button>

      <div className="flex items-center gap-spacing-sm">
        {months.map((d) => (
          <MonthPill
            key={`${d.getFullYear()}-${d.getMonth()}`}
            state={isSameMonth(d, selected) ? 'active' : 'inactive'}
            onClick={() => go(d)}
          >
            {formatMonthShortPtBR(d)}
          </MonthPill>
        ))}
      </div>

      <Button
        hierarchy="secondary"
        size="md"
        onClick={() => {
          if (!canNext) return;
          const nextSelected = addMonths(selected, -1);
          // If selected is at the right edge, shift the window older
          const rightEdge = addMonths(start, -(window - 1));
          if (isSameMonth(selected, rightEdge)) {
            const olderStart = addMonths(start, -1);
            // Ensure the new right edge respects min
            const newRightEdge = addMonths(olderStart, -(window - 1));
            if (!min || newRightEdge >= startOfMonth(min)) setStart(olderStart);
          }
          go(nextSelected);
        }}
        disabled={!canNext}
      >
        <Text as="span" size="sm" weight="semibold" className="mr-2">
          {labels.next}
        </Text>
        <Icon name="arrow_right" size="sm" />
      </Button>
    </nav>
  );
};

MonthPagination.displayName = 'MonthPagination';

export default MonthPagination;


