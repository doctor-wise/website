'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { TimeframeButton } from '@/components/ui/TimeframeButton';
import { Text } from '@/components/ui/Typography/Text';
import { Icon } from '@/components/icons';

export interface PaginationProps {
  page: number;
  pageSize: number;
  total: number;
  onPageChange?: (page: number) => void;
  className?: string;
  /**
   * Optional labels in pt-BR; can be customized.
   */
  labels?: {
    previous?: string;
    next?: string;
  };
}

function getTotalPages(total: number, pageSize: number): number {
  if (pageSize <= 0) return 1;
  return Math.max(1, Math.ceil(total / pageSize));
}

export const Pagination: React.FC<PaginationProps> = ({
  page,
  pageSize,
  total,
  onPageChange,
  className = '',
  labels = { previous: 'Anterior', next: 'Próximo' },
}) => {
  const totalPages = React.useMemo(() => getTotalPages(total, pageSize), [total, pageSize]);

  const canPrev = page > 1;
  const canNext = page < totalPages;

  const goTo = (p: number) => {
    const clamped = Math.min(Math.max(1, p), totalPages);
    if (clamped !== page) onPageChange?.(clamped);
  };

  // Build page window with ellipsis rules (1 ... window ... last)
  const windowSize = 5; // show up to 5 numeric pills
  const pages: Array<number | 'ellipsis'> = React.useMemo(() => {
    const items: Array<number | 'ellipsis'> = [];
    if (totalPages <= windowSize + 2) {
      for (let i = 1; i <= totalPages; i += 1) items.push(i);
      return items;
    }
    const half = Math.floor(windowSize / 2);
    let start = Math.max(2, page - half);
    let end = Math.min(totalPages - 1, page + half);
    const missing = windowSize - (end - start + 1);
    if (missing > 0) {
      if (start === 2) end = Math.min(totalPages - 1, end + missing);
      else if (end === totalPages - 1) start = Math.max(2, start - missing);
    }
    items.push(1);
    if (start > 2) items.push('ellipsis');
    for (let i = start; i <= end; i += 1) items.push(i);
    if (end < totalPages - 1) items.push('ellipsis');
    items.push(totalPages);
    return items;
  }, [page, totalPages]);

  return (
    <nav className={`w-full flex items-center justify-between ${className}`} aria-label="paginação">
      <Button
        hierarchy="secondary"
        size="md"
        onClick={() => goTo(page - 1)}
        disabled={!canPrev}
      >
        <Icon name="arrow_left" size="sm" />
        <Text as="span" size="sm" weight="semibold" className="ml-2">
          {labels.previous}
        </Text>
      </Button>

      <div className="flex items-center gap-spacing-sm">
        {pages.map((p, idx) =>
          p === 'ellipsis' ? (
            <span key={`ellipsis-${idx}`} className="text-text-sm text-text-quaternary px-spacing-sm">…</span>
          ) : (
            <TimeframeButton
              key={p}
              state={p === page ? 'active' : 'neutral'}
              onClick={() => goTo(p)}
            >
              {p}
            </TimeframeButton>
          ),
        )}
      </div>

      <Button
        hierarchy="secondary"
        size="md"
        onClick={() => goTo(page + 1)}
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

Pagination.displayName = 'Pagination';

export default Pagination;


