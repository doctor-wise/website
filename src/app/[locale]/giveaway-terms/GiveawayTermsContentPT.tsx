import React from 'react';
import { Heading, Text } from '@/components/ui/Typography';

export function GiveawayTermsContentPT() {
  return (
    <div className="flex flex-col gap-spacing-4xl">
      
      <Heading as="h1" size="display-lg" weight="bold" color="primary">
        Regulamento Oficial – Sorteio Black Friday Doctor Wise
      </Heading>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          1. Critérios de Qualificação
        </Heading>

        <Text as="p" size="md" color="secondary">
          Para participar, o interessado deve obrigatoriamente:
        </Text>

        <Text as="p" size="md" color="secondary">
          Ser estudante ou profissional da área da saúde, como medicina, enfermagem, nutrição, fisioterapia, odontologia, psicologia, farmácia, entre outros.
        </Text>

        <Text as="p" size="md" color="secondary">
          Comprovar vínculo estudantil ou profissional para o envio dos prêmios, mediante um dos documentos listados neste regulamento.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          2. Critérios de Participação
        </Heading>

        <Text as="p" size="md" color="secondary">
          Para validar a participação no sorteio, o participante deverá:
        </Text>

        <Text as="p" size="md" color="secondary">
          Entrar na Doctor Wise e responder o form entre o dia 19 e 22:
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              Seu @instagram
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              @Instagram de quem te indicou
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              &quot;Porque você precisa ganhar 1 ano de Doctor Wise PRO?&quot;
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          Entrar no grupo oficial do WhatsApp (link no formulário).
        </Text>

        <Text as="p" size="md" color="secondary">
          Participar da live do sorteio ao vivo, no dia 27/11/2025 às 19h30.
        </Text>

        <Text as="p" size="md" color="secondary">
          <strong>Importante:</strong> Cada pessoa poderá fazer apenas um cadastro no sorteio. Indivíduos que tentarem burlar o regulamento do sorteio serão desqualificados. E não estarão elegíveis para ganhar os prêmios.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          3. Premiação
        </Heading>

        <Text as="p" size="md" color="secondary">
          Serão premiados dois participantes da seguinte forma:
        </Text>

        <Text as="p" size="md" color="secondary">
          <strong>Ganhador do Sorteio:</strong>
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              1 Apple iPad 11ª Geração (Chip A16, Wi-Fi, 128 GB)
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              1 ano de assinatura Doctor Wise PRO grátis
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          <strong>Indicado do Ganhador (se houver):</strong>
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              1 Apple iPad 11ª Geração (Chip A16, Wi-Fi, 128 GB)
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              1 ano de assinatura Doctor Wise PRO grátis
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          Caso o ganhador não tenha sido indicado por ninguém, será realizado um novo sorteio, dessa vez sem prêmio por indicação.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          4. Datas Importantes
        </Heading>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border-secondary">
                <th className="text-left py-spacing-md px-spacing-lg">
                  <Text as="span" size="md" weight="semibold" color="primary">
                    Etapa
                  </Text>
                </th>
                <th className="text-left py-spacing-md px-spacing-lg">
                  <Text as="span" size="md" weight="semibold" color="primary">
                    Data e Horário
                  </Text>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border-secondary">
                <td className="py-spacing-md px-spacing-lg">
                  <Text as="span" size="md" color="secondary">
                    Início das inscrições
                  </Text>
                </td>
                <td className="py-spacing-md px-spacing-lg">
                  <Text as="span" size="md" color="secondary">
                    20/11/2025 às 12:00
                  </Text>
                </td>
              </tr>
              <tr className="border-b border-border-secondary">
                <td className="py-spacing-md px-spacing-lg">
                  <Text as="span" size="md" color="secondary">
                    Encerramento das inscrições
                  </Text>
                </td>
                <td className="py-spacing-md px-spacing-lg">
                  <Text as="span" size="md" color="secondary">
                    22/11/2025 às 23:59
                  </Text>
                </td>
              </tr>
              <tr className="border-b border-border-secondary">
                <td className="py-spacing-md px-spacing-lg">
                  <Text as="span" size="md" color="secondary">
                    Live e sorteio ao vivo
                  </Text>
                </td>
                <td className="py-spacing-md px-spacing-lg">
                  <Text as="span" size="md" color="secondary">
                    27/11/2025 às 19:30
                  </Text>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          5. Realização do sorteio
        </Heading>

        <Text as="p" size="md" color="secondary">
          O sorteio será realizado em uma &quot;Live&quot; ao vivo dentro do site https://doctorwise.app.
        </Text>

        <Text as="p" size="md" color="secondary">
          Cada participante que entrar na Live terá um número. A seleção do número sorteado será feita de forma aleatória pela plataforma terceira: sorteio.com.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          6. Entrega dos Prêmios
        </Heading>

        <Text as="p" size="md" color="secondary">
          O ganhador será contactado e precisará comprovar sua elegibilidade (ser estudante ou profissional da área da saúde).
        </Text>

        <Text as="p" size="md" color="secondary">
          Caso não haja manifestação ou o participante não comprove os requisitos, será realizado um novo sorteio ao vivo até que haja um ganhador elegível.
        </Text>

        <Text as="p" size="md" color="secondary">
          Os iPads serão adquiridos em marketplaces online e enviados após o sorteio.
        </Text>

        <Text as="p" size="md" color="secondary">
          A Doctor Wise buscará fornecedores com prazo de entrega inferior a 30 dias, mas não se responsabiliza por eventuais atrasos de entrega por parte dos fornecedores.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          7. Documentos Aceitos
        </Heading>

        <Text as="p" size="md" color="secondary">
          <strong>Para comprovar vínculo estudantil:</strong>
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              Declaração de matrícula (Com data de até 3 meses e nome do curso).
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Comprovante de matrícula do semestre vigente.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Carteira de estudante (UNE, UBES ou emitida pela instituição).
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Boleto ou comprovante de pagamento da mensalidade do curso.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Histórico escolar atualizado ou atestado de frequência.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Contrato de estágio na área da saúde.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Comprovante de inscrição em programa de residência médica, multiprofissional ou especialização.
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          <strong>Para comprovar vínculo profissional:</strong>
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              Carteira de conselho profissional (ex.: CRM, CRO, COREN, CREFITO, CRF, CRP etc.).
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Declaração de vínculo empregatício emitida pela instituição de saúde.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Holerite ou contracheque com identificação do cargo e do empregador na área da saúde.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Contrato de trabalho ou de prestação de serviços na área da saúde.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Comprovante ou certificado de residência médica/multiprofissional.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              Certificado de conclusão de curso técnico, superior ou de especialização em área da saúde.
            </Text>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          8. Disposições Gerais
        </Heading>

        <Text as="p" size="md" color="secondary">
          A participação neste sorteio implica total concordância com este regulamento.
        </Text>

        <Text as="p" size="md" color="secondary">
          O sorteio é de caráter gratuito, sem vínculo com compra ou pagamento.
        </Text>

        <Text as="p" size="md" color="secondary">
          A Doctor Wise reserva-se o direito de alterar as datas ou condições do sorteio, mediante aviso prévio em seus canais oficiais.
        </Text>

        <Text as="p" size="md" color="secondary">
          Quaisquer situações não previstas neste regulamento serão resolvidas pela organização do sorteio.
        </Text>
      </div>

      <div className="border-t border-border-secondary pt-spacing-4xl flex flex-col gap-spacing-2xl">
        <Text as="p" size="md" weight="semibold" color="primary">
          Data da Live e Sorteio:
        </Text>

        <Text as="p" size="md" color="secondary">
          27 de novembro de 2025 (quinta-feira)
        </Text>

        <Text as="p" size="md" color="secondary">
          Horário: 19h30 (ao vivo)
        </Text>

        <Text as="p" size="md" color="secondary">
          Instagram: @doctorwise.ai
        </Text>

        <Text as="p" size="md" color="secondary">
          Site oficial: https://doctorwise.app/
        </Text>
      </div>

    </div>
  );
}

