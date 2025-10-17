import React from 'react';
import { Heading, Text } from '@/components/ui/Typography';

export function TermsOfUseContentPT() {
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

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          2. Descrição do Serviço
        </Heading>

        <Text as="p" size="md" color="secondary">
          2.1 <strong>O que é a Doctor Wise.</strong> A Doctor Wise é uma plataforma de assistente virtual baseado em inteligência artificial que auxilia médicos, profissionais de saúde e estudantes com informações, comparações e discussões sobre temas médicos.
        </Text>

        <Text as="p" size="md" color="secondary">
          2.2 <strong>Evolução contínua.</strong> A Plataforma é atualizada constantemente. Funcionalidades podem ser incluídas, alteradas ou descontinuadas a qualquer momento.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          3. Conta do Usuário
        </Heading>

        <Text as="p" size="md" color="secondary">
          3.1 <strong>Cadastro.</strong> Para utilizar a Plataforma, é necessário criar uma conta com informações verdadeiras, precisas e atualizadas.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.2 <strong>Segurança.</strong> O usuário é responsável por manter a confidencialidade de suas credenciais e por todas as atividades realizadas em sua conta. Notifique imediatamente o suporte da Doctor Wise em caso de uso indevido ou acesso não autorizado.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.3 <strong>Suspensão/Encerramento.</strong> Podemos suspender ou encerrar contas que violem estes Termos, tentem burlar limites, realizem fraudes ou causem danos à Plataforma. O usuário poderá encerrar a sua conta a qualquer momento.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          4. Assinaturas, Planos e Pagamentos
        </Heading>

        <Text as="p" size="md" color="secondary">
          4.1 <strong>Planos.</strong> Oferecemos planos pagos <strong>PLUS</strong> e <strong>PRO</strong>, disponíveis nas modalidades <strong>mensal</strong> e <strong>anual</strong>. Os recursos de cada plano são descritos na página de preços da Doctor Wise.
        </Text>

        <Text as="p" size="md" color="secondary">
          4.2 <strong>Periodicidade e cobrança.</strong>
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Anual:</strong> a assinatura de 12 (doze) meses é <strong>cobrada de uma única vez</strong> (pagamento único) e <strong>renovada automaticamente</strong> ao final do período anual, salvo cancelamento prévio.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Mensal:</strong> a assinatura é <strong>cobrada a cada mês</strong> e <strong>renovada automaticamente</strong> a cada ciclo, salvo cancelamento prévio.
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          4.3 <strong>Forma de pagamento.</strong> Aceitamos <strong>exclusivamente cartão de crédito</strong>. Ao informar um cartão, o usuário declara estar autorizado(a) a utilizá-lo e autoriza às cobranças recorrentes conforme o plano escolhido.
        </Text>

        <Text as="p" size="md" color="secondary">
          4.4 <strong>Renovação automática.</strong> A menos que o usuário cancele antes do término do ciclo vigente, a assinatura será renovada automaticamente e será cobrado o valor aplicável com base no cartão cadastrado.
        </Text>

        <Text as="p" size="md" color="secondary">
          4.5 <strong>Preços.</strong> Os valores dos planos poderão ser atualizados. Alterações de preço não afetam ciclos já pagos e serão comunicadas previamente ao usuário.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          5. Teste Grátis de 7 dias
        </Heading>

        <Text as="p" size="md" color="secondary">
          5.1 <strong>Elegibilidade.</strong> Cada usuário tem direito a <strong>um único período de teste grátis de 7 (sete) dias</strong>, podendo escolher entre os planos <strong>PRO</strong> ou <strong>PLUS</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          5.2 <strong>Início e cobrança.</strong> Ao iniciar o teste, o usuário autoriza a cobrança <strong>automática</strong> do valor do plano escolhido ao final dos 7 (sete) dias, <strong>salvo cancelamento antes do término do teste</strong>. Após esse período, será debitado o respectivo valor.
        </Text>

        <Text as="p" size="md" color="secondary">
          5.3 <strong>Limitação de novo teste.</strong> Após a utilização do teste grátis, o usuário <strong>não terá direito</strong> a novo período de teste, <strong>mesmo que se crie outra conta</strong>. Contas múltiplas para obter novos testes poderão ser bloqueadas.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          6. Cancelamento
        </Heading>

        <Text as="p" size="md" color="secondary">
          6.1 <strong>Como cancelar.</strong> O usuário poderá cancelar a assinatura <strong>diretamente no aplicativo</strong> (menu de conta/assinatura) <strong>ou</strong> mediante contato pelo <strong>support@doctorwise.com.br</strong> ou pelo canal de atendimento no app.
        </Text>

        <Text as="p" size="md" color="secondary">
          6.2 <strong>Acesso até o fim do ciclo.</strong> O cancelamento impede renovações futuras, mas o usuário <strong>permanecerá com acesso</strong> até o final do período já pago (mensal ou anual). Não haverá cobranças adicionais após o cancelamento efetivado, salvo àquelas já faturadas.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          7. Reembolsos
        </Heading>

        <Text as="p" size="md" color="secondary">
          7.1 <strong>Direito de arrependimento (CDC).</strong> Para contratações on-line, o usuário poderá solicitar <strong>reembolso em até 7 (sete) dias</strong> a partir da data de contratação, conforme o Código de Defesa do Consumidor (Lei 8.078/90). <strong>Esse é o prazo do período de teste grátis</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          7.2 <strong>Após o teste grátis.</strong> Após o término do teste grátis, <strong>não há direito legal a reembolso</strong> pelo CDC. <strong>Exceção Doctor Wise:</strong> se você contratou um <strong>plano anual</strong>, poderá solicitar reembolso <strong>em até 7 (sete) dias após o término do teste</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          7.3 <strong>Contratações sem teste grátis.</strong> Se o plano não incluir teste grátis, aplica-se somente o prazo legal de <strong>7 (sete) dias</strong> a partir da contratação.
        </Text>

        <Text as="p" size="md" color="secondary">
          7.4 <strong>Como solicitar.</strong> Solicite reembolso pelo e-mail <strong>support@doctorwise.com.br</strong> ou pelo canal de atendimento no aplicativo. Processaremos o pedido e, se elegível, efetuaremos o estorno pelo mesmo meio de pagamento, observando prazos das operadoras de cartão.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          8. Uso Responsável e Isenções
        </Heading>

        <Text as="p" size="md" color="secondary">
          8.1 <strong>Finalidade.</strong> A Doctor Wise <strong>não substitui</strong> a consulta médica, diagnóstico, prescrição, conduta clínica ou julgamento profissional. <strong>Como toda a plataforma baseada em recursos tecnológicos, seu propósito é oferecer recursos de apoio e conteúdos específicos aos seus usuários.</strong>
        </Text>

        <Text as="p" size="md" color="secondary">
          8.2 <strong>Decisões clínicas.</strong> O usuário deverá utilizar da sua expertise e julgamento clínico, diretrizes atualizadas e fontes primárias previamente para a tomada de decisões, orientações e assistências a terceiros. Informações, pela própria natureza da plataforma destes gêneros, poderão conter dados ou informações passíveis de equívocos, imprecisões ou desatualizações. Recomenda-se, inclusive, revisões.
        </Text>

        <Text as="p" size="md" color="secondary">
          8.3 <strong>Sem garantias.</strong> A Plataforma é fornecida <strong>&quot;como está&quot;</strong>, sem garantias de qualquer tipo, expressas ou implícitas. A Doctor Wise não responderá por danos diretos, indiretos, incidentais, especiais, consequenciais ou lucros cessantes decorrentes do uso da Plataforma ou indisponibilidade do serviço.
        </Text>

        <Text as="p" size="md" color="secondary">
          8.4 <strong>Emergências.</strong> Não utilize a Plataforma em situações de emergência ou que coloquem em risco a integridade de terceiros. Procure atendimento médico imediato.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          9. Propriedade Intelectual
        </Heading>

        <Text as="p" size="md" color="secondary">
          Todo o conteúdo gerado pela Plataforma (exemplificativamente, mas não limitado a textos, marcas, logotipos, software, layouts, desenhos, esquemas, gráficos e demais materiais) é de titularidade exclusiva da Doctor Wise e é protegido por leis de propriedade intelectual. O usuário, ao utilizar a Plataforma, recebe uma <strong>licença limitada, não exclusiva e intransferível</strong> para uso pessoal/profissional conforme estes Termos.
        </Text>

        <Text as="p" size="md" color="secondary">
          A Doctor Wise não se responsabiliza por eventuais reivindicações de direitos autorais por terceiros dos conteúdos gerados pela Plataforma, haja vista a sua natureza de inteligência artificial generativa.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          10. Privacidade e Dados
        </Heading>

        <Text as="p" size="md" color="secondary">
          10.1 <strong>Coleta e uso.</strong> A Doctor Wise coleta os dados pessoais necessários e limitados ao cumprimento do seu objeto social, ao seu funcionamento, à segurança e à melhorias e treinamentos da Plataforma, conforme descrito em nossa <strong>Política de Privacidade</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.2 <strong>Direitos do titular.</strong> Na forma da LGPD, o usuário poderá solicitar acesso, correção ou exclusão de dados pessoais a qualquer tempo, bem como exercer demais direitos previstos na legislação aplicável, através dos canais de suporte e por Encarregados de Dados.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.3 <strong>Segurança.</strong> Adotamos as medidas técnicas e organizacionais para proteger os dados pessoais dos titulares, inclusive no rigor das boas práticas estabelecidas pela LGPD e nas exceções acerca de fatos imprevisíveis e involuntários a respeito da segurança e <em>compliance</em> dos dados.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          11. Disponibilidade e Suporte
        </Heading>

        <Text as="p" size="md" color="secondary">
          11.1 <strong>Disponibilidade.</strong> A Doctor Wise dedica todos os esforços para manter a Plataforma disponível, mas interrupções podem ocorrer por manutenção, atualizações ou motivos fora de nosso controle.
        </Text>

        <Text as="p" size="md" color="secondary">
          11.2 <strong>Suporte.</strong> Fale conosco pelo <strong>support@doctorwise.com.br</strong> ou pelo canal de atendimento no app.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          12. Disposições Gerais
        </Heading>

        <Text as="p" size="md" color="secondary">
          12.1 <strong>Nulidade parcial.</strong> Se alguma cláusula for considerada inválida, as demais permanecerão válidas.
        </Text>

        <Text as="p" size="md" color="secondary">
          12.2 <strong>Cessão.</strong> A Doctor Wise poderá ceder estes Termos e direitos/obrigações a terceiros, dispensando o aviso prévio, porém mantendo os direitos dos usuários.
        </Text>

        <Text as="p" size="md" color="secondary">
          12.3 <strong>Lei e foro.</strong> Estes Termos são regidos pela <strong>legislação brasileira</strong>. Fica eleito o <strong>Foro da Comarca do Rio de Janeiro/RJ</strong>, salvo disposições legais em contrário.
        </Text>
      </div>

      <div className="border-t border-border-secondary pt-spacing-4xl flex flex-col gap-spacing-2xl">
        <Text as="p" size="md" weight="semibold" color="primary">
          Doctor Wise
        </Text>

        <Text as="p" size="md" color="secondary">
          Se tiver dúvidas sobre estes Termos, entre em contato: <strong>support@doctorwise.com.br</strong>.
        </Text>

        <Text as="p" size="sm" color="tertiary">
          <strong>Última atualização:</strong> 10 de setembro de 2025
        </Text>
      </div>

    </div>
  );
}

