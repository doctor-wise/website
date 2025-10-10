'use client';

import React from 'react';
import { Button } from '@/components/ui/Button';
import { AuthCodeModal } from '@/components/ui/Auth';

export const AuthCodeModalShowcase: React.FC = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="space-y-4">
      <Button hierarchy="primary" size="md" type="button" onClick={() => setOpen(true)}>
        Abrir modal de autenticação
      </Button>

      <AuthCodeModal
        open={open}
        email="olivia@doctorwise.com"
        onClose={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      />
    </div>
  );
};


