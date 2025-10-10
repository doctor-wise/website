'use client';

import React from 'react';
import { Badge, type BadgeProps } from '@/components/ui/Badge';
import { Icon } from '@/components/icons';
import { Tooltip } from '@/components/ui/Tooltip';

export type TableCellKind = 'text' | 'badge';

export interface TableBadgeCellValue {
  label: string;
  badgeProps?: Partial<BadgeProps>;
}

export type TableCellValue = string | number | React.ReactNode | TableBadgeCellValue;

export type SortType = 'string' | 'date' | 'number';

export interface TableColumn {
  key: string;
  header: React.ReactNode;
  width?: string | number;
  align?: 'left' | 'center' | 'right';
  kind?: TableCellKind; // default: text
  headerHelpIcon?: boolean;
  headerHelpText?: React.ReactNode;
  className?: string;
  sortable?: boolean;
  sortType?: SortType;
  sortAccessor?: (row: Record<string, unknown>) => string | number | Date;
}

export interface TableProps<T extends Record<string, unknown>> {
  title?: React.ReactNode;
  columns: TableColumn[];
  rows: T[];
  getCellValue?: (row: T, column: TableColumn) => TableCellValue;
  className?: string;
  empty?: React.ReactNode;
  defaultSortKey?: string | null;
  defaultSortDir?: 'asc' | 'desc';
  page?: number;
  pageSize?: number;
  footer?: React.ReactNode;
  loading?: boolean;
  skeletonRowCount?: number;
  initialLoading?: boolean;
  initialLoadingNode?: React.ReactNode;
}

function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export function TableCard<T extends Record<string, unknown>>({
  title,
  columns,
  rows,
  getCellValue,
  className = '',
  empty,
  defaultSortKey = null,
  defaultSortDir = 'asc',
  page,
  pageSize,
  footer,
  loading = false,
  skeletonRowCount = 10,
  initialLoading = false,
  initialLoadingNode,
}: TableProps<T>) {
  const [sortKey, setSortKey] = React.useState<string | null>(defaultSortKey ?? null);
  const [sortDir, setSortDir] = React.useState<'asc' | 'desc'>(defaultSortDir ?? 'asc');

  const toggleSort = (col: TableColumn) => {
    if (!col.sortable) return;
    if (sortKey !== col.key) {
      setSortKey(col.key);
      setSortDir('asc');
    } else {
      setSortDir((d) => (d === 'asc' ? 'desc' : 'asc'));
    }
  };

  const sortedRows = React.useMemo(() => {
    if (!sortKey) return rows;
    const column = columns.find((c) => c.key === sortKey);
    if (!column) return rows;
    const type = column.sortType ?? 'string';
    const accessor = column.sortAccessor;
    const toValue = (row: T): string | number | Date | null => {
      if (typeof accessor === 'function') return accessor(row);
      const raw = (row as Record<string, unknown>)[column.key];
      if (column.kind === 'badge' && raw && typeof raw === 'object' && 'label' in (raw as TableBadgeCellValue)) {
        return (raw as TableBadgeCellValue).label;
      }
      if (typeof raw === 'string' || typeof raw === 'number') return raw;
      if (raw instanceof Date) return raw;
      return raw == null ? null : String(raw);
    };

    const parseDate = (v: unknown): number => {
      if (v instanceof Date) return v.getTime();
      if (typeof v === 'string') {
        // Try parse dd/mm/yyyy first
        const m = v.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
        if (m) {
          const d = Number(m[1]);
          const mo = Number(m[2]) - 1;
          const y = Number(m[3].length === 2 ? `20${m[3]}` : m[3]);
          return new Date(y, mo, d).getTime();
        }
        const dt = new Date(v);
        if (!Number.isNaN(dt.getTime())) return dt.getTime();
      }
      return 0;
    };

    const comparator = (a: T, b: T) => {
      const va = toValue(a);
      const vb = toValue(b);
      let comp = 0;
      switch (type) {
        case 'number':
          comp = Number(va) - Number(vb);
          break;
        case 'date':
          comp = parseDate(va) - parseDate(vb);
          break;
        case 'string':
        default:
          comp = String(va ?? '')
            .toLowerCase()
            .localeCompare(String(vb ?? '').toLowerCase(), 'pt-BR');
      }
      return sortDir === 'asc' ? comp : -comp;
    };

    return [...rows].sort(comparator);
  }, [rows, sortKey, sortDir, columns]);

  const pagedRows = React.useMemo(() => {
    if (!page || !pageSize || pageSize <= 0) return sortedRows;
    const start = (page - 1) * pageSize;
    return sortedRows.slice(start, start + pageSize);
  }, [sortedRows, page, pageSize]);

  return (
    <section
      className={cn(
        'relative bg-bg-primary rounded-5xl overflow-hidden',
        'shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]',
        'border border-border-secondary',
        className,
      )}
    >
      {title && (
        <header className="px-6 pt-5 pb-5">
          <h2 className="text-text-lg leading-[28px] font-semibold text-text-primary">{title}</h2>
        </header>
      )}

      <div className="w-full overflow-x-auto">
        {initialLoading ? (
          <div className="px-6 py-24 flex flex-col items-center justify-center gap-spacing-sm">
            {initialLoadingNode ?? (
              <>
                <span className="inline-block h-10 w-10 rounded-full border-2 border-text-quaternary border-t-transparent animate-spin" />
                <div className="mt-spacing-md text-text-lg font-semibold text-text-primary">Carregando dados...</div>
                <div className="text-text-md text-text-tertiary">Aguarde um instante</div>
              </>
            )}
          </div>
        ) : loading ? (
          <div className="min-w-full grid" style={{ gridTemplateColumns: columns.map(() => '1fr').join(' ') }}>
            {Array.from({ length: skeletonRowCount }).map((_, rowIndex) => (
              columns.map((col) => (
                <div
                  key={`sk-${rowIndex}-${String(col.key)}`}
                  className={cn(
                    'h-16 max-h-16 px-5 py-4 flex items-center',
                    rowIndex < skeletonRowCount - 1 && 'border-b border-border-secondary',
                    col.className,
                  )}
                >
                  <div className="animate-pulse h-4 bg-bg-secondary rounded w-1/3" />
                </div>
              ))
            ))}
          </div>
        ) : (rows.length === 0 || sortedRows.length === 0) && empty ? (
          <div className="px-6 py-16 flex items-center justify-center">
            {empty}
          </div>
        ) : (
        <div className="min-w-full grid" style={{ gridTemplateColumns: columns.map(() => '1fr').join(' ') }}>
          {columns.map((col) => (
            <div
              key={`hdr-${String(col.key)}`}
              className={cn(
                'h-10 max-h-10 px-5 py-2 flex items-center gap-spacing-sm',
                'bg-bg-secondary',
                'border-b border-border-secondary',
                'text-text-xs font-semibold text-text-quaternary',
                col.className,
              )}
            >
              {col.sortable ? (
                <button
                  type="button"
                  className="truncate inline-flex items-center gap-1 text-text-quaternary hover:text-text-tertiary"
                  onClick={() => toggleSort(col)}
                >
                  <span className="truncate">{col.header}</span>
                  {sortKey === col.key ? (
                    <Icon name={sortDir === 'asc' ? 'arrow_up' : 'arrow_down'} size="sm" className="text-fg-quaternary" />
                  ) : (
                    <Icon name="chevron_selector_vertical" size="sm" className="text-fg-quaternary opacity-60" />
                  )}
                </button>
              ) : (
                <span className="truncate">{col.header}</span>
              )}
              {col.headerHelpIcon && (
                <Tooltip content={col.headerHelpText ?? ''}>
                  <span className="inline-flex">
                    <Icon name="help_circle" size="sm" className="text-fg-quaternary" aria-label="ajuda" />
                  </span>
                </Tooltip>
              )}
            </div>
          ))}

          {pagedRows.map((row, rowIndex) =>
            columns.map((col, colIndex) => {
              const value: TableCellValue = getCellValue
                ? getCellValue(row, col)
                : (row[col.key] as TableCellValue);

              const isFirstOfRow = colIndex === 0;
              const isLastRow = rowIndex === pagedRows.length - 1;
              const cellBase = cn(
                'h-16 max-h-16 px-5 py-4 flex items-center',
                !isLastRow && 'border-b border-border-secondary',
                col.className,
              );

              if (col.kind === 'badge') {
                const badgeValue = value as TableBadgeCellValue;
                const label = typeof badgeValue === 'object' && badgeValue && 'label' in badgeValue ? badgeValue.label : String(value ?? '');
                const badgeProps = typeof badgeValue === 'object' && badgeValue && 'badgeProps' in badgeValue ? badgeValue.badgeProps : undefined;
                return (
                  <div key={`cell-${rowIndex}-${String(col.key)}`} className={cellBase}>
                    <Badge size="sm" variant="soft" tone="gray" {...badgeProps}>
                      {label}
                    </Badge>
                  </div>
                );
              }

              // default text cell
              const textClasses = cn(
                isFirstOfRow ? 'text-text-sm font-medium text-text-primary' : 'text-text-sm font-normal text-text-tertiary',
                'truncate',
              );

              return (
                <div key={`cell-${rowIndex}-${String(col.key)}`} className={cellBase}>
                  <span className={textClasses}>{(value as React.ReactNode) ?? ''}</span>
                </div>
              );
            }),
          )}
        </div>
        )}
      </div>

      {footer && (
        <div className="px-6 py-4 border-t border-border-secondary bg-bg-primary">
          {footer}
        </div>
      )}
    </section>
  );
}

export default TableCard;


