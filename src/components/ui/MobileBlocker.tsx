'use client';

import React from 'react';
import { Icon } from '@/components/icons';
import { Heading } from '@/components/ui/Typography/Heading';
import { Text } from '@/components/ui/Typography/Text';

export function MobileBlocker() {
  return (
    <div className="fixed left-0 top-0 w-screen h-dvh z-[10000] md:hidden bg-white flex items-center justify-center p-6 overflow-hidden">
      <div className="w-full max-w-md text-center space-y-4">
        <Icon name="alert_triangle" size="xl" className="mx-auto text-warning-600" aria-label="Aviso" />
        <Heading as="h2" size="display-sm" align="center">
          Experiência para celular em breve
        </Heading>
        <Text align="center" color="secondary">
          Estamos preparando uma experiência incrível para o celular. Por enquanto,
          acesse pelo computador ou tablet para usar o painel.
        </Text>
      </div>
    </div>
  );
}

export default MobileBlocker;


