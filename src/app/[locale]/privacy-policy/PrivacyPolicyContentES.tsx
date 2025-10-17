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
        Esta Política de Privacidad (&quot;<strong>Política</strong>&quot;) regula cómo <strong>Doctor Wise</strong> realiza el tratamiento de datos personales, específicamente, la recopilación, uso, intercambio, almacenamiento y protección de datos personales de los titulares mientras acceden al sitio web, aplicación y servicios asociados, incluida la inserción de información que contiene datos personales (&quot;<strong>Plataforma</strong>&quot;). Al utilizar la Plataforma, el titular manifiesta su consentimiento inequívoco con respecto a las prácticas y operaciones de tratamiento descritas a continuación y en nuestros <strong>Términos de Uso</strong>.
      </Text>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          1. Objetivo
        </Heading>

        <Text as="p" size="md" color="secondary">
          1.1 <strong>Objetivo.</strong> El objetivo de esta Política es regular e informar, de manera clara y concisa, las prácticas y operaciones de tratamiento de datos personales de los titulares, de manera ejemplificativa, pero no limitada a privacidad, anonimato, confidencialidad, seguridad, finalidad, entre otros principios en alineación con la legislación aplicable, incluyendo la <strong>Ley General de Protección de Datos de Brasil — LGPD (Ley nº 13.709/2018)</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          1.2 <strong>Aceptación y modificaciones.</strong> Al utilizar la Plataforma, el titular acepta esta Política (&quot;Aceptación&quot;). <strong>Doctor Wise</strong>, a su vez, podrá actualizarla en cualquier momento. Cualquier modificación y actualización entrará en vigencia a partir de la fecha de publicación en la app o sitio web.
        </Text>

        <Text as="p" size="md" color="secondary">
          Si el titular no manifiesta oposición, se presumirá su consentimiento tácito.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          2. Controlador y Contacto
        </Heading>

        <Text as="p" size="md" color="secondary">
          2.1 <strong>Controlador.</strong> Doctor Wise es el controlador de los datos personales sujetos a operaciones de tratamiento en la Plataforma.
        </Text>

        <Text as="p" size="md" color="secondary">
          2.2 <strong>Contacto del Encargado/DPO.</strong> Para ejercer derechos, solicitudes o aclarar dudas, contacte: <strong>support@doctorwise.com.br</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          2.3 Doctor Wise se enmarca en los términos de la Resolución CD/ANPD Nº 2, de 27 de enero de 2022. Sin embargo, designa al Sr. Helder Galvão como su Encargado de Protección de Datos, según el canal mencionado.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          3. Datos Personales Recopilados
        </Heading>

        <Text as="p" size="md" color="secondary">
          Recopilamos solo lo mínimo necesario para operar, mejorar y entrenar la Plataforma, específicamente:
        </Text>

        <Text as="p" size="md" color="secondary">
          3.1 <strong>Datos de cuenta e identificación.</strong> Nombre, correo electrónico, especialidad/área y demás información proporcionada en el registro.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.2 <strong>Datos de uso e interacción.</strong> Consultas y mensajes intercambiados en el chat, historial de conversaciones, fecha y hora de acceso, registros de eventos (logs), dirección IP, sistema operativo, identificadores de dispositivo e idioma.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.3 <strong>Datos de pago.</strong> Información transaccional (plan contratado — <strong>PLUS</strong> o <strong>PRO</strong>, periodicidad <strong>mensual</strong> o <strong>anual</strong>, valores, estado de cobro, fechas). <strong>No almacenamos datos completos de tarjeta de crédito.</strong> El procesamiento lo realizan proveedores de pago que actúan como procesadores.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.4 <strong>Cookies y tecnologías similares.</strong> Utilizamos cookies y tecnologías similares para funcionamiento, seguridad, medición de audiencia y mejora de la experiencia. Consulte la Sección 8.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.5 <strong>Datos de soporte y comunicaciones.</strong> Contenido de contactos realizados con nuestro soporte (correo electrónico y canal en la app), incluidos archivos adjuntos que elija enviar.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.6 <strong>Datos de terceros.</strong> Podemos recibir datos de socios (por ejemplo, antifraude y pago) para validación de transacciones y mejora de la seguridad.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          4. Bases Legales y Finalidades
        </Heading>

        <Text as="p" size="md" color="secondary">
          Tratamos datos con fundamento en las bases legales de la LGPD, entre ellas la <strong>ejecución de contrato</strong>, el <strong>cumplimiento de obligación legal/regulatoria</strong>, el <strong>interés legítimo</strong>, el <strong>consentimiento</strong>, la <strong>protección del crédito</strong> y el <strong>ejercicio regular de derechos</strong>. En especial, utilizamos los datos para:
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Prestar y operar la Plataforma</strong> (creación de cuenta, autenticación, entrega de funcionalidades de los planes <strong>PLUS/PRO</strong>, cobro <strong>mensual</strong> o <strong>anual</strong> vía <strong>tarjeta de crédito</strong> y <strong>renovación automática</strong> según los Términos de Uso);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Personalizar y mejorar el servicio</strong> (análisis de uso, aprendizaje automático, pruebas, correcciones, nuevas funciones);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Seguridad, prevención de fraudes y confiabilidad</strong> (monitoreo de abuso, intentos de violación e incidentes);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Comunicaciones esenciales</strong> (avisos operacionales, transaccionales y cambios en términos/políticas);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Soporte</strong> (atención a solicitudes y preguntas);
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Investigación y estadísticas</strong> con datos <strong>desidentificados</strong> y/o <strong>anonimizados</strong> para mejora continua de modelos y rendimiento de la Plataforma;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Cumplimiento de obligaciones legales</strong> (facturación, contabilidad, respuestas a autoridades, plazos de prescripción) y <strong>protección de derechos</strong>.
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          Cuando sea necesario, solicitaremos <strong>consentimiento</strong> (por ejemplo, para comunicaciones de marketing y cookies no esenciales). Puede revocarlo en cualquier momento (Sección 9).
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          5. Intercambio de Datos
        </Heading>

        <Text as="p" size="md" color="secondary">
          Ocasionalmente, puede ocurrir el intercambio de datos, cuando sea necesario, y con garantías contractuales adecuadas, a saber:
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Procesadores:</strong> proveedores de nube, pagos (tarjeta de crédito), antifraude, correo electrónico/transaccional, análisis, soporte y herramientas de monitoreo;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Autoridades públicas:</strong> cuando haya obligación legal/regulatoria u orden válida;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Operaciones corporativas:</strong> en caso de fusión, adquisición o reorganización, con continuidad de las protecciones de esta Política;
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          <strong>No comercializamos</strong> datos personales.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          6. Transferencias Internacionales
        </Heading>

        <Text as="p" size="md" color="secondary">
          <strong>Doctor Wise</strong> podrá transferir datos a países con diferentes niveles de protección. Adoptamos mecanismos previstos en la LGPD (como cláusulas contractuales y estándares de seguridad) para asegurar un nivel adecuado de protección.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          7. Retención y Eliminación
        </Heading>

        <Text as="p" size="md" color="secondary">
          <strong>Doctor Wise</strong> mantiene almacenados los datos personales <strong>por el tiempo necesario</strong> para cumplir con las finalidades descritas y obligaciones legales (por ejemplo, plazos fiscales y de prescripción), prevención de fraudes y ejercicio de derechos.
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Cuenta/suscripción:</strong> los datos se retienen mientras la cuenta esté activa y por el período adicional exigido por ley después de la cancelación.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Historial de conversaciones:</strong> mantenido para continuidad del servicio y auditoría; puede solicitar eliminación (observados límites legales y técnicos).
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Registros de seguridad:</strong> retenidos por período compatible con prevención e investigación de incidentes.
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          Cuando no haya base legal para retención, <strong>eliminaremos</strong> o <strong>anonimizaremos</strong> los datos personales contenidos en nuestra base.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          8. Cookies y Tecnologías Similares
        </Heading>

        <Text as="p" size="md" color="secondary">
          8.1 <strong>Tipos de cookies.</strong>
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Estrictamente necesarias:</strong> esenciales para autenticación y funcionamiento del sitio/app;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Analíticas/medición:</strong> ayudan a entender el uso y rendimiento para mejorar la experiencia;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Preferencias:</strong> recuerdan elecciones del usuario (por ejemplo, idioma).
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          8.2 <strong>Gestión de cookies.</strong> El titular puede gestionar cookies en la configuración del navegador y, cuando esté disponible, en las preferencias de la app/sitio. La desactivación de cookies esenciales puede afectar las funcionalidades.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          9. Derechos del Titular (LGPD)
        </Heading>

        <Text as="p" size="md" color="secondary">
          El titular podrá ejercer, en cualquier momento, los derechos previstos en la LGPD, incluyendo: <strong>confirmación del tratamiento</strong>, <strong>acceso</strong>, <strong>corrección</strong>, <strong>anonimización, bloqueo o eliminación</strong>, <strong>portabilidad</strong>, <strong>información sobre intercambios</strong>, <strong>revocación del consentimiento</strong> y <strong>revisión de decisiones automatizadas</strong>, cuando sea aplicable.
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Cómo ejercer:</strong> envíe solicitud a <strong>support@doctorwise.com.br</strong> o utilice el canal de atención en la app;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Plazos:</strong> confirmamos la recepción y respondemos <strong>en hasta 15 días</strong>, observadas exigencias legales y complejidad de la solicitud;
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Identidad:</strong> podremos solicitar información adicional para verificar su identidad y proteger su cuenta.
            </Text>
          </li>
        </ul>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          10. Seguridad de la Información
        </Heading>

        <Text as="p" size="md" color="secondary">
          Adoptamos medidas técnicas y organizacionales razonables para proteger datos personales (cifrado en tránsito, controles de acceso, registros de auditoría y prácticas de desarrollo seguro).
        </Text>

        <Text as="p" size="md" color="secondary">
          10.1 <strong>Incidentes.</strong> En caso de incidente de seguridad que pueda acarrear riesgo o daño relevante, <strong>Doctor Wise</strong> adoptará todas las medidas para solucionarlos de forma rápida y ágil, así como mitigar sus efectos en corto plazo y, cuando sea exigido, notificar a la <strong>ANPD</strong> y a los titulares afectados.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.2 <strong>Buenas prácticas del usuario.</strong> <strong>Doctor Wise</strong> orienta a los titulares que adopten &quot;contraseñas seguras&quot;, activen recursos de seguridad disponibles y eviten el uso en redes y dispositivos no confiables.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.3 <strong>Exención.</strong> Según la legislación vigente, <strong>Doctor Wise</strong> no se responsabiliza por eventuales incidentes de seguridad ocasionados por factores ajenos a su voluntad, por fallos sistémicos y en la cadena de terceros.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          11. Comunicaciones y Preferencias
        </Heading>

        <Text as="p" size="md" color="secondary">
          11.1 <strong>Comunicados esenciales.</strong> Enviaremos comunicaciones transaccionales esenciales (por ejemplo, confirmación de suscripción <strong>mensual</strong>/<strong>anual</strong>, cobro en <strong>tarjeta de crédito</strong>, renovación automática y cambios contractuales).
        </Text>

        <Text as="p" size="md" color="secondary">
          11.2 <strong>Marketing.</strong> La recepción de comunicaciones promocionales dependerá del consentimiento del titular. El titular, a su vez, podrá <strong>cancelar la suscripción</strong>, exigir la eliminación y/o ejercer su autodeterminación informativa en cualquier momento a través de los enlaces del correo electrónico o del soporte.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          12. Niños y Adolescentes
        </Heading>

        <Text as="p" size="md" color="secondary">
          La Plataforma <strong>no está dirigida</strong> a menores de 18 (dieciocho) años. <strong>Doctor Wise</strong> no recopila intencionalmente datos de menores. Si cree que un menor nos ha proporcionado datos, contáctenos para su eliminación apropiada.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          13. Relación con los Términos de Uso
        </Heading>

        <Text as="p" size="md" color="secondary">
          Esta Política ratifica y es parte integrante de los <strong>Términos de Uso</strong> de la Plataforma. En caso de conflicto sobre privacidad, protección de datos personales y las condiciones contractuales, prevalecerá esta Política en lo que respecta al tema.
        </Text>

        <Text as="p" size="md" color="secondary">
          Para información sobre <strong>planes (PLUS/PRO), cobro mensual/anual</strong>, <strong>cancelación</strong>, <strong>prueba gratuita de 7 días</strong> y <strong>reembolsos</strong>, consulte los Términos de Uso.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          14. Ley Aplicable y Jurisdicción
        </Heading>

        <Text as="p" size="md" color="secondary">
          Esta Política se rige por la legislación brasileña. Se elige el <strong>Fuero de la Comarca de Río de Janeiro/RJ</strong>, salvo disposiciones legales en contrario.
        </Text>
      </div>

      <div className="border-t border-border-secondary pt-spacing-4xl flex flex-col gap-spacing-2xl">
        <Text as="p" size="md" weight="semibold" color="primary">
          Doctor Wise
        </Text>

        <Text as="p" size="md" color="secondary">
          ¿Preguntas sobre esta Política? Contáctenos: <strong>support@doctorwise.com.br</strong>.
        </Text>

        <Text as="p" size="sm" color="tertiary">
          <strong>Última actualización:</strong> 10 de septiembre de 2025
        </Text>
      </div>

    </div>
  );
}

