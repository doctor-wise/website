'use client';

import React from 'react';
import { TableCard } from '@/components/ui';

export function TableShowcase() {
  return (
    <TableCard
      title="Minhas indicações"
      columns={[
        { key: 'name', header: 'Nome' },
        { key: 'createdAt', header: 'Data de inscrição' },
        { key: 'email', header: 'Email' },
        { key: 'plan', header: 'Plano atual', headerHelpIcon: true, headerHelpText: 'Plano atual do usuário. Pode ser Grátis, PLUS ou PRO.', kind: 'badge' },
        { key: 'earnings', header: 'Ganhos', headerHelpIcon: true, headerHelpText: 'Total de ganhos acumulados para este indicado.' },
      ]}
      rows={[
        { name: 'Elma Maria Pinto', createdAt: '18/11/2025', email: 'elmapinto@email.com', plan: { label: 'Grátis', badgeProps: { tone: 'gray', variant: 'outline', size: 'sm' } }, earnings: 'R$10,00' },
        { name: 'Elma Maria Pinto', createdAt: '18/11/2025', email: 'elmapinto@email.com', plan: { label: 'PLUS', badgeProps: { tone: 'brand', variant: 'soft', size: 'sm' } }, earnings: 'R$10,00' },
        { name: 'Elma Maria Pinto', createdAt: '18/11/2025', email: 'elmapinto@email.com', plan: { label: 'PRO', badgeProps: { tone: 'green', variant: 'soft', size: 'sm' } }, earnings: 'R$10,00' },
        { name: 'Elma Maria Pinto', createdAt: '18/11/2025', email: 'elmapinto@email.com', plan: { label: 'Grátis', badgeProps: { tone: 'gray', variant: 'outline', size: 'sm' } }, earnings: 'R$10,00' },
        { name: 'Elma Maria Pinto', createdAt: '18/11/2025', email: 'elmapinto@email.com', plan: { label: 'PLUS', badgeProps: { tone: 'brand', variant: 'soft', size: 'sm' } }, earnings: 'R$10,00' },
      ]}
    />
  );
}


