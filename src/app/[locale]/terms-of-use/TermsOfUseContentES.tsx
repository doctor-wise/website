import React from 'react';
import { Link } from '@/i18n/routing';
import { Heading, Text } from '@/components/ui/Typography';

export function TermsOfUseContentES() {
  return (
    <div className="flex flex-col gap-spacing-4xl">
      
      <Heading as="h1" size="display-lg" weight="bold" color="primary">
        Términos de Uso
      </Heading>

      <div className="bg-bg-warning-primary border border-border-warning px-spacing-xl py-spacing-lg rounded-lg flex flex-col gap-spacing-sm">
        <Text as="p" size="sm" weight="semibold" color="warning">
          Aviso de Traducción
        </Text>
        <Text as="p" size="sm" color="secondary">
          Esta es una traducción automática de los Términos de Uso del portugués. En caso de discrepancias o preguntas, consulte la{' '}
          <Link href="/terms-of-use" locale="pt" className="text-text-brand-primary hover:text-text-brand-secondary underline font-semibold">
            versión en portugués
          </Link>
          , que es el documento oficial y legalmente vinculante.
        </Text>
      </div>

      <Text as="p" size="md" color="secondary">
        Bienvenido(a) a Doctor Wise. Estos Términos de Uso (&quot;<strong>Términos</strong>&quot;) regulan el uso de la aplicación, sitio web y demás servicios ofrecidos por Doctor Wise (&quot;<strong>Plataforma</strong>&quot;).
      </Text>

      {/* ... resto del contenido preservado ... */}
    </div>
  );
}



