'use client';

import React from 'react';
import { MetricsCard } from '@/components/ui';

export function MetricsCardShowcase() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-spacing-3xl">
      <MetricsCard
        label="Total de indicações"
        value="1.248"
        secondaryValue="+12% este mês"
        helpContent="Número total de indicações recebidas no período selecionado."
      />
      <MetricsCard
        label="Taxa de conversão"
        value="8,3%"
        helpContent="Percentual de leads indicados que converteram."
      />
      <MetricsCard
        label="Receita"
        value="R$ 12.540,00"
        secondaryValue="+R$ 1.230,00 vs mês passado"
        helpContent="Receita bruta gerada pelas indicações."
      />
    </div>
  );
}


