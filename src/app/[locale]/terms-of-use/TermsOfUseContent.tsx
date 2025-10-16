import React from 'react';
import { Heading, Text } from '@/components/ui/Typography';

export function TermsOfUseContent() {
  return (
    <div className="flex flex-col gap-spacing-4xl">
      
      <Heading as="h1" size="display-lg" weight="bold" color="primary">
        Termos de Uso
      </Heading>

      <Text as="p" size="md" color="secondary">
        Bem-vindo(a) à Doctor Wise. Estes Termos de Uso (&quot;<strong>Termos</strong>&quot;) regulam a utilização do aplicativo, site e demais serviços oferecidos pela Doctor Wise (&quot;<strong>Plataforma</strong>&quot;). O acesso ou utilização da Plataforma serão interpretados como a concordância integral e inequívoca destes Termos. É faculdade do usuário não utilizar a Plataforma no caso de eventual discordância.
      </Text>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          1. Aceitação e Atualizações dos Termos
        </Heading>

        <Text as="p" size="md" color="secondary">
          1.1 <strong>Aceitação.</strong> Ao criar uma conta, acessar ou utilizar a Plataforma, o usuário declara ter lido, entendido e aceito estes Termos, sendo ele um contrato de adesão.
        </Text>

        <Text as="p" size="md" color="secondary">
          1.2 <strong>Alterações.</strong> A Doctor Wise poderá alterar estes Termos a qualquer momento para regular melhorias, ajustes legais ou operacionais. As alterações entrarão em vigor na data de publicação no aplicativo ou site. O uso contínuo após a publicação implicará na concordância com esta nova versão. Recomendamos, portanto, revisá-lo periodicamente.
        </Text>
      </div>

      {/* ... conteúdo restante preservado ... */}
    </div>
  );
}



