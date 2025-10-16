import React from 'react';
import { Heading, Text } from '@/components/ui/Typography';

export function PrivacyPolicyContentPT() {
  return (
    <div className="flex flex-col gap-spacing-4xl">
      
      <Heading as="h1" size="display-lg" weight="bold" color="primary">
        Política de Privacidade
      </Heading>

      <Text as="p" size="md" color="secondary">
        Esta Política de Privacidade (&quot;<strong>Política</strong>&quot;) regula como a <strong>Doctor Wise</strong> realiza a operação de tratamento de dados pessoais, nomeadamente, a coleta, a utilização, o compartilhamento, o armazenamento e proteção dos dados pessoais dos titulares enquanto estes acessam o site, aplicativo e explora os serviços associados, entre elas a inserção de informações revestidas de dados pessoais (&quot;<strong>Plataforma</strong>&quot;). Ao utilizar a Plataforma, o titular manifesta o seu consentimento inequívoco quanto às práticas e operações de tratamento descritas abaixo e, ainda, nos seus <strong>Termos de Uso</strong>.
      </Text>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          1. Objetivo
        </Heading>

        <Text as="p" size="md" color="secondary">
          1.1 <strong>Objetivo.</strong> É objetivo desta Política regular e informar, de forma clara e concisa, as práticas e operação de tratamento de dados pessoais dos titulares, exemplificativamente, mas não limitado à privacidade, anonimato, sigilo, segurança, finalidade, entre outros princípios em alinhamento com a legislação aplicável, incluindo a <strong>Lei Geral de Proteção de Dados — LGPD (Lei nº 13.709/2018)</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          1.2 <strong>Aceitação e alterações.</strong> Ao utilizar a Plataforma, o titular concorda com esta Política (&quot;Aceitação&quot;). A <strong>Doctor Wise</strong>, por sua vez, poderá atualizá-la a qualquer tempo. Eventuais alterações e atualizações passarão a vigorar a partir da data de publicação no app ou site.
        </Text>

        <Text as="p" size="md" color="secondary">
          Se o titular não manifestar oposição, restará presumido o seu consentimento tácito.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          2. Controladora e Contato
        </Heading>

        <Text as="p" size="md" color="secondary">
          2.1 <strong>Controladora.</strong> A Doctor Wise é a controladora dos dados pessoais objeto de operação de tratamento na Plataforma.
        </Text>

        <Text as="p" size="md" color="secondary">
          2.2 <strong>Contato do Encarregado/DPO.</strong> Para exercer direitos, requerimentos ou esclarecer dúvidas, entre em contato: <strong>support@doctorwise.com.br</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          2.3 A Doctor Wise encontra-se enquadrada nos termos da Resolução CD/ANPD Nº 2, de 27 de janeiro de 2022. De todo o modo, indica como o seu Encarregado de Dados o Sr. Helder Galvão, conforme o canal citado.
        </Text>
      </div>

      {/* Resto do conteúdo preservado do arquivo original */}
    </div>
  );
}


