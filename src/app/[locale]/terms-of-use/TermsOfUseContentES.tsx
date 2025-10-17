import React from 'react';
import Link from 'next/link';
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
          <Link href="/pt/terms-of-use" className="text-text-brand-primary hover:text-text-brand-secondary underline font-semibold">
            versión en portugués
          </Link>
          , que es el documento oficial y legalmente vinculante.
        </Text>
      </div>

      <Text as="p" size="md" color="secondary">
        Bienvenido(a) a Doctor Wise. Estos Términos de Uso (&quot;<strong>Términos</strong>&quot;) regulan el uso de la aplicación, sitio web y demás servicios ofrecidos por Doctor Wise (&quot;<strong>Plataforma</strong>&quot;). El acceso o uso de la Plataforma será interpretado como acuerdo total e inequívoco de estos Términos. El usuario tiene la opción de no utilizar la Plataforma en caso de desacuerdo.
      </Text>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          1. Aceptación y Actualizaciones de los Términos
        </Heading>

        <Text as="p" size="md" color="secondary">
          1.1 <strong>Aceptación.</strong> Al crear una cuenta, acceder o utilizar la Plataforma, el usuario declara haber leído, entendido y aceptado estos Términos, siendo este un contrato de adhesión.
        </Text>

        <Text as="p" size="md" color="secondary">
          1.2 <strong>Modificaciones.</strong> Doctor Wise podrá modificar estos Términos en cualquier momento para regular mejoras, ajustes legales u operacionales. Las modificaciones entrarán en vigencia en la fecha de publicación en la aplicación o sitio web. El uso continuo después de la publicación implicará acuerdo con esta nueva versión. Recomendamos, por lo tanto, revisarlo periódicamente.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          2. Descripción del Servicio
        </Heading>

        <Text as="p" size="md" color="secondary">
          2.1 <strong>Qué es Doctor Wise.</strong> Doctor Wise es una plataforma de asistente virtual basada en inteligencia artificial que ayuda a médicos, profesionales de la salud y estudiantes con información, comparaciones y discusiones sobre temas médicos.
        </Text>

        <Text as="p" size="md" color="secondary">
          2.2 <strong>Evolución continua.</strong> La Plataforma se actualiza constantemente. Las funcionalidades pueden ser incluidas, modificadas o descontinuadas en cualquier momento.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          3. Cuenta del Usuario
        </Heading>

        <Text as="p" size="md" color="secondary">
          3.1 <strong>Registro.</strong> Para utilizar la Plataforma, es necesario crear una cuenta con información verdadera, precisa y actualizada.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.2 <strong>Seguridad.</strong> El usuario es responsable de mantener la confidencialidad de sus credenciales y de todas las actividades realizadas en su cuenta. Notifique inmediatamente al soporte de Doctor Wise en caso de uso indebido o acceso no autorizado.
        </Text>

        <Text as="p" size="md" color="secondary">
          3.3 <strong>Suspensión/Terminación.</strong> Podemos suspender o cerrar cuentas que violen estos Términos, intenten eludir límites, cometan fraudes o causen daños a la Plataforma. El usuario podrá cerrar su cuenta en cualquier momento.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          4. Suscripciones, Planes y Pagos
        </Heading>

        <Text as="p" size="md" color="secondary">
          4.1 <strong>Planes.</strong> Ofrecemos planes de pago <strong>PLUS</strong> y <strong>PRO</strong>, disponibles en modalidades <strong>mensual</strong> y <strong>anual</strong>. Los recursos de cada plan están descritos en la página de precios de Doctor Wise.
        </Text>

        <Text as="p" size="md" color="secondary">
          4.2 <strong>Periodicidad y cobro.</strong>
        </Text>

        <ul className="flex flex-col gap-spacing-md pl-spacing-2xl list-disc">
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Anual:</strong> la suscripción de 12 (doce) meses se <strong>cobra de una sola vez</strong> (pago único) y se <strong>renueva automáticamente</strong> al final del período anual, salvo cancelación previa.
            </Text>
          </li>
          <li>
            <Text as="span" size="md" color="secondary">
              <strong>Mensual:</strong> la suscripción se <strong>cobra cada mes</strong> y se <strong>renueva automáticamente</strong> en cada ciclo, salvo cancelación previa.
            </Text>
          </li>
        </ul>

        <Text as="p" size="md" color="secondary">
          4.3 <strong>Forma de pago.</strong> Aceptamos <strong>exclusivamente tarjeta de crédito</strong>. Al proporcionar una tarjeta, el usuario declara estar autorizado(a) a utilizarla y autoriza los cobros recurrentes según el plan elegido.
        </Text>

        <Text as="p" size="md" color="secondary">
          4.4 <strong>Renovación automática.</strong> A menos que el usuario cancele antes del término del ciclo vigente, la suscripción se renovará automáticamente y se cobrará el monto aplicable con base en la tarjeta registrada.
        </Text>

        <Text as="p" size="md" color="secondary">
          4.5 <strong>Precios.</strong> Los valores de los planes podrán ser actualizados. Los cambios de precio no afectan ciclos ya pagados y serán comunicados previamente al usuario.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          5. Prueba Gratuita de 7 días
        </Heading>

        <Text as="p" size="md" color="secondary">
          5.1 <strong>Elegibilidad.</strong> Cada usuario tiene derecho a <strong>un único período de prueba gratuita de 7 (siete) días</strong>, pudiendo elegir entre los planes <strong>PRO</strong> o <strong>PLUS</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          5.2 <strong>Inicio y cobro.</strong> Al iniciar la prueba, el usuario autoriza el cobro <strong>automático</strong> del valor del plan elegido al final de los 7 (siete) días, <strong>salvo cancelación antes del término de la prueba</strong>. Después de este período, se debitará el monto respectivo.
        </Text>

        <Text as="p" size="md" color="secondary">
          5.3 <strong>Limitación de nueva prueba.</strong> Después de utilizar la prueba gratuita, el usuario <strong>no tendrá derecho</strong> a un nuevo período de prueba, <strong>incluso si se crea otra cuenta</strong>. Las cuentas múltiples para obtener nuevas pruebas podrán ser bloqueadas.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          6. Cancelación
        </Heading>

        <Text as="p" size="md" color="secondary">
          6.1 <strong>Cómo cancelar.</strong> El usuario podrá cancelar la suscripción <strong>directamente en la aplicación</strong> (menú de cuenta/suscripción) <strong>o</strong> mediante contacto por <strong>support@doctorwise.com.br</strong> o por el canal de atención en la app.
        </Text>

        <Text as="p" size="md" color="secondary">
          6.2 <strong>Acceso hasta el fin del ciclo.</strong> La cancelación impide renovaciones futuras, pero el usuario <strong>mantendrá el acceso</strong> hasta el final del período ya pagado (mensual o anual). No habrá cobros adicionales después de la cancelación efectuada, salvo aquellos ya facturados.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          7. Reembolsos
        </Heading>

        <Text as="p" size="md" color="secondary">
          7.1 <strong>Derecho de arrepentimiento (Código de Defensa del Consumidor).</strong> Para contrataciones en línea, el usuario podrá solicitar <strong>reembolso en hasta 7 (siete) días</strong> a partir de la fecha de contratación, conforme al Código de Defensa del Consumidor brasileño (Ley 8.078/90). <strong>Este es el plazo del período de prueba gratuita</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          7.2 <strong>Después de la prueba gratuita.</strong> Después del término de la prueba gratuita, <strong>no hay derecho legal a reembolso</strong> por el Código de Defensa del Consumidor. <strong>Excepción Doctor Wise:</strong> si contrató un <strong>plan anual</strong>, podrá solicitar reembolso <strong>en hasta 7 (siete) días después del término de la prueba</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          7.3 <strong>Contrataciones sin prueba gratuita.</strong> Si el plan no incluye prueba gratuita, se aplica solamente el plazo legal de <strong>7 (siete) días</strong> a partir de la contratación.
        </Text>

        <Text as="p" size="md" color="secondary">
          7.4 <strong>Cómo solicitar.</strong> Solicite reembolso por correo electrónico a <strong>support@doctorwise.com.br</strong> o por el canal de atención en la aplicación. Procesaremos la solicitud y, si es elegible, efectuaremos el reembolso por el mismo medio de pago, observando plazos de las operadoras de tarjeta.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          8. Uso Responsable y Exenciones
        </Heading>

        <Text as="p" size="md" color="secondary">
          8.1 <strong>Finalidad.</strong> Doctor Wise <strong>no sustituye</strong> la consulta médica, diagnóstico, prescripción, conducta clínica o juicio profesional. <strong>Como toda plataforma basada en recursos tecnológicos, su propósito es ofrecer recursos de apoyo y contenidos específicos a sus usuarios.</strong>
        </Text>

        <Text as="p" size="md" color="secondary">
          8.2 <strong>Decisiones clínicas.</strong> El usuario deberá utilizar su experiencia y juicio clínico, directrices actualizadas y fuentes primarias previamente para la toma de decisiones, orientaciones y asistencias a terceros. La información, por la propia naturaleza de plataformas de este tipo, podrá contener datos o información sujetos a errores, imprecisiones o desactualizaciones. Se recomienda revisiones.
        </Text>

        <Text as="p" size="md" color="secondary">
          8.3 <strong>Sin garantías.</strong> La Plataforma se proporciona <strong>&quot;tal como está&quot;</strong>, sin garantías de ningún tipo, expresas o implícitas. Doctor Wise no responderá por daños directos, indirectos, incidentales, especiales, consecuentes o lucro cesante derivados del uso de la Plataforma o indisponibilidad del servicio.
        </Text>

        <Text as="p" size="md" color="secondary">
          8.4 <strong>Emergencias.</strong> No utilice la Plataforma en situaciones de emergencia o que pongan en riesgo la integridad de terceros. Busque atención médica inmediata.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          9. Propiedad Intelectual
        </Heading>

        <Text as="p" size="md" color="secondary">
          Todo el contenido generado por la Plataforma (de manera ejemplificativa, pero no limitado a textos, marcas, logotipos, software, layouts, diseños, esquemas, gráficos y demás materiales) es de titularidad exclusiva de Doctor Wise y está protegido por leyes de propiedad intelectual. El usuario, al utilizar la Plataforma, recibe una <strong>licencia limitada, no exclusiva e intransferible</strong> para uso personal/profesional conforme a estos Términos.
        </Text>

        <Text as="p" size="md" color="secondary">
          Doctor Wise no se responsabiliza por eventuales reivindicaciones de derechos de autor por terceros de los contenidos generados por la Plataforma, dada su naturaleza de inteligencia artificial generativa.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          10. Privacidad y Datos
        </Heading>

        <Text as="p" size="md" color="secondary">
          10.1 <strong>Recopilación y uso.</strong> Doctor Wise recopila los datos personales necesarios y limitados al cumplimiento de su objeto social, su funcionamiento, seguridad y mejoras y entrenamientos de la Plataforma, según se describe en nuestra <strong>Política de Privacidad</strong>.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.2 <strong>Derechos del titular.</strong> Según la LGPD brasileña, el usuario podrá solicitar acceso, corrección o eliminación de datos personales en cualquier momento, así como ejercer demás derechos previstos en la legislación aplicable, a través de los canales de soporte y Encargados de Protección de Datos.
        </Text>

        <Text as="p" size="md" color="secondary">
          10.3 <strong>Seguridad.</strong> Adoptamos medidas técnicas y organizacionales para proteger los datos personales de los titulares, incluso en el rigor de las buenas prácticas establecidas por la LGPD y en las excepciones sobre hechos imprevisibles e involuntarios respecto a la seguridad y <em>compliance</em> de los datos.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          11. Disponibilidad y Soporte
        </Heading>

        <Text as="p" size="md" color="secondary">
          11.1 <strong>Disponibilidad.</strong> Doctor Wise dedica todos los esfuerzos para mantener la Plataforma disponible, pero pueden ocurrir interrupciones por mantenimiento, actualizaciones o motivos fuera de nuestro control.
        </Text>

        <Text as="p" size="md" color="secondary">
          11.2 <strong>Soporte.</strong> Contáctenos por <strong>support@doctorwise.com.br</strong> o por el canal de atención en la app.
        </Text>
      </div>

      <div className="flex flex-col gap-spacing-3xl">
        <Heading as="h2" size="display-sm" weight="semibold" color="primary">
          12. Disposiciones Generales
        </Heading>

        <Text as="p" size="md" color="secondary">
          12.1 <strong>Nulidad parcial.</strong> Si alguna cláusula fuera considerada inválida, las demás permanecerán válidas.
        </Text>

        <Text as="p" size="md" color="secondary">
          12.2 <strong>Cesión.</strong> Doctor Wise podrá ceder estos Términos y derechos/obligaciones a terceros, prescindiendo de aviso previo, pero manteniendo los derechos de los usuarios.
        </Text>

        <Text as="p" size="md" color="secondary">
          12.3 <strong>Ley y jurisdicción.</strong> Estos Términos se rigen por la <strong>legislación brasileña</strong>. Se elige el <strong>Fuero de la Comarca de Río de Janeiro/RJ</strong>, salvo disposiciones legales en contrario.
        </Text>
      </div>

      <div className="border-t border-border-secondary pt-spacing-4xl flex flex-col gap-spacing-2xl">
        <Text as="p" size="md" weight="semibold" color="primary">
          Doctor Wise
        </Text>

        <Text as="p" size="md" color="secondary">
          Si tiene preguntas sobre estos Términos, contáctenos: <strong>support@doctorwise.com.br</strong>.
        </Text>

        <Text as="p" size="sm" color="tertiary">
          <strong>Última actualización:</strong> 10 de septiembre de 2025
        </Text>
      </div>

    </div>
  );
}

