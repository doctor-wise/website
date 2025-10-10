'use client';

import React from 'react';
import { Heading, Text } from '@/components/ui';
import { InputField } from '@/components/ui/InputField';
import { Button } from '@/components/ui/Button';

export interface AuthCodeModalProps {
  open: boolean;
  email?: string;
  onClose: () => void;
  onSubmit?: (code: string) => void;
  onResend?: () => Promise<boolean> | void;
}

export const AuthCodeModal: React.FC<AuthCodeModalProps> = ({ open, email, onClose, onSubmit, onResend }) => {
  const [code, setCode] = React.useState('');
  const [cooldown, setCooldown] = React.useState<number>(0);
  const [resending, setResending] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (!open) setCode('');
  }, [open]);

  React.useEffect(() => {
    if (!open) return;
    if (cooldown <= 0) return;
    const id = setInterval(() => setCooldown((c) => (c > 0 ? c - 1 : 0)), 1000);
    return () => clearInterval(id);
  }, [cooldown, open]);

  const handleResend = async () => {
    if (resending || cooldown > 0) return;
    if (!onResend) return;
    try {
      setResending(true);
      const result = await onResend();
      if (result !== false) {
        setCooldown(60);
      }
    } finally {
      setResending(false);
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        aria-hidden
        className="absolute inset-0 bg-[rgba(0,0,0,0.15)]"
        onClick={onClose}
      />

      <div className="relative z-10 w-full max-w-[420px] rounded-5xl bg-bg-primary shadow-[0px_10px_40px_rgba(10,13,18,0.12)] border border-border-primary">
        <div className="p-6 md:p-8 space-y-spacing-xl">
          <div className="flex items-start justify-between gap-spacing-md">
            <div className="space-y-spacing-xs">
            <Heading as="h3" size="display-xs" weight="semibold">
              Confirme seu email
            </Heading>
            <Text size="sm" color="tertiary">
              Enviamos um código de verificação {email ? `para ${email}` : 'para seu email'}. Digite-o abaixo para continuar.
            </Text>
            </div>
            <Button
              type="button"
              hierarchy="tertiary"
              size="sm"
              iconOnly
              icon="x"
              aria-label="Fechar"
              className="shrink-0"
              onClick={onClose}
            />
          </div>

          <div className="space-y-spacing-md">
            <InputField
              placeholder="000000"
              inputMode="numeric"
              maxLength={6}
              value={code}
              iconLeading={<></>}
              onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
            />
            <Text size="sm" color="tertiary">
              Não recebeu o código?{' '}
              <button
                type="button"
                className="text-text-brand-tertiary hover:underline disabled:no-underline disabled:text-text-disabled"
                disabled={resending || cooldown > 0}
                onClick={handleResend}
              >
                {cooldown > 0 ? `Reenviar em ${cooldown}s` : resending ? 'Reenviando...' : 'Reenviar'}
              </button>
            </Text>
          </div>

          <div className="flex gap-3">
            <Button
              className="w-full"
              hierarchy="primary"
              size="md"
              type="button"
              disabled={code.length !== 6}
              onClick={() => onSubmit?.(code)}
            >
              Continuar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

AuthCodeModal.displayName = 'AuthCodeModal';


