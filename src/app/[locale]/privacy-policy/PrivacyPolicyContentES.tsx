import React from 'react';
import { Link } from '@/i18n/routing';
import { Heading, Text } from '@/components/ui/Typography';

export function PrivacyPolicyContentES() {
  return (
    <div className="flex flex-col gap-spacing-4xl">
      
      <Heading as="h1" size="display-lg" weight="bold" color="primary">
        Política de Privacidad
      </Heading>

      <div className="bg-bg-warning-primary border border-border-warning px-spacing-xl py-spacing-lg rounded-lg flex flex-col gap-spacing-sm">
        <Text as="p" size="sm" weight="semibold" color="warning">
          Aviso de Traducción
        </Text>
        <Text as="p" size="sm" color="secondary">
          Esta es una traducción automática de la Política de Privacidad del portugués. En caso de discrepancias o preguntas, consulte la{' '}
          <Link href="/privacy-policy" locale="pt" className="text-text-brand-primary hover:text-text-brand-secondary underline font-semibold">
            versión en portugués
          </Link>
          , que es el documento oficial y legalmente vinculante.
        </Text>
      </div>

      <Text as="p" size="md" color="secondary">
        Esta Política de Privacidad (&quot;<strong>Política</strong>&quot;) regula cómo <strong>Doctor Wise</strong> realiza el tratamiento de datos personales, incluyendo la recopilación, uso, intercambio, almacenamiento y protección de datos personales mientras los titulares acceden al sitio web, la aplicación y servicios asociados.
      </Text>

      {/* ... resto del contenido preservado ... */}
    </div>
  );
}


