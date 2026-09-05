import { CONTACT } from '../constants/contact';

export const es = {
  lang: 'es',
  otherLang: 'en',
  otherLangLabel: 'English',
  otherLangPath: '/en',
  siteName: 'LASA Medical Foundation',
  shortName: 'LASA Medical Foundation',
  motto: 'Ama a todos, Sirve a todos — Ayuda siempre, Nunca lastimes',
  paths: {
    home: '/es',
    schedule: '/es/horario',
    privacy: '/es/privacidad',
    splash: '/',
  },
  nav: [
    { id: 'clinic', label: 'La Clínica' },
    { id: 'operate', label: 'Cómo operamos' },
    { id: 'services', label: 'Servicios' },
    { id: 'location', label: 'Ubicación' },
    { id: 'contact', label: 'Contacto' },
    { id: 'privacy', label: 'Privacidad', to: '/es/privacidad' },
    { id: 'schedule', label: 'Horario', to: '/es/horario' },
  ],
  splash: {
    title: 'LASA Medical Foundation',
    mission:
      'LASA Medical Foundation brinda atención médica primaria gratuita para personas de bajos ingresos que no tienen seguro médico.',
    hoursTitle: 'Horario de la clínica',
    hours: [
      { label: 'Remoto por teléfono', value: 'Por confirmar' },
      { label: 'En persona', value: 'Por confirmar' },
    ],
    scheduleLabel: 'Horario de la clínica',
    scheduleLink: 'Horario',
    scheduleAltLink: 'Schedule',
    scheduleAltPath: '/en/schedule',
    phoneLabel: 'Teléfono',
    faxLabel: 'Fax',
    drivingTitle: 'Dirección',
    mailingTitle: 'Dirección postal',
    emailTitle: 'Correos electrónicos',
    emails: [
      { label: 'Solicitud de registros', value: CONTACT.emailLabel },
      { label: 'Recetas', value: CONTACT.emailLabel },
      { label: 'Consultas generales', value: CONTACT.emailLabel },
    ],
    enterEnglish: 'Click here to enter English website',
    enterSpanish: 'Oprima aquí para español',
  },
  clinic: {
    heroKicker: 'La Clínica',
    heroTitle: 'La Clínica',
    scrollHint: 'Desplácese hacia abajo',
    motto: 'Ama a todos, Sirve a todos — Ayuda siempre, Nunca lastimes',
    intro:
      'LASA Medical Foundation brinda atención médica primaria gratuita para personas de bajos ingresos que no tienen seguro médico.',
    paragraphs: [
      'Brindamos atención que no es de emergencia para afecciones médicas agudas y crónicas. La clínica cuenta con médicos voluntarios, enfermeras practicantes, asistentes médicos, enfermeras registradas, fisioterapeutas y otro personal de apoyo.',
      '"Amar a todos, servir a todos | Ayudar siempre, nunca lastimar" resume los principios operativos de nuestra clínica. Estamos agradecidos por la oportunidad de brindar atención médica gratuita a quienes la necesitan.',
      'Lasa Medical Foundation Inc. es una organización sin fines de lucro 501(c)(3). Para mantener los gastos lo más bajos posible, no tenemos empleados asalariados en la clínica médica. Todos los que trabajan en esta clínica lo hacen como voluntarios no remunerados.',
      'Muchos de los maravillosos voluntarios que trabajan en nuestra clínica provienen de la comunidad local a la que servimos. Profesionales médicos altamente calificados — médicos, enfermeras practicantes, asistentes médicos, enfermeras registradas y fisioterapeutas — ofrecen su tiempo junto a miembros de la comunidad que comparten el compromiso de LASA de Amar a todos, Servir a todos.',
    ],
  },
  operate: {
    title: 'Cómo operamos la Clínica',
    paragraphs: [
      'Gran parte de la asistencia que necesitamos para operar la Clínica la brindan los médicos, las enfermeras practicantes, los asistentes médicos, las enfermeras tituladas, los fisioterapeutas y todo el resto del personal de apoyo, que ofrecen su tiempo como voluntarios para atender a los pacientes que acuden a nuestra clínica. Sabemos que la Clínica contará con el apoyo de personas que por su propia voluntad se movilizan para brindar asistencia.',
      'Agradecemos toda la generosidad de todos nuestros voluntarios, así como de los numerosos donantes privados e institucionales que hacen posible este trabajo.',
      'Si desea ayudar a Lasa Medical Foundation Inc. de alguna manera, puede contactarnos en info@lasane.org.',
    ],
  },
  services: {
    title: 'Servicios',
    intro:
      'Lasa Medical Foundation Inc. brinda servicios de atención primaria que no son de urgencia ni de emergencia para personas sin seguro que no pueden pagar el costo de la atención médica. Ofrecemos visitas remotas por teléfono o video y visitas presenciales según el horario de la clínica. Los servicios de fisioterapia, optometría, salud mental y referencias dentales pueden estar disponibles en días seleccionados. Consulte el horario de la clínica para obtener más detalles.',
    treatTitle: 'Ejemplos de algunas condiciones que tratamos',
    treat: [
      'Diabetes',
      'Dolor de garganta / Tos / Resfriado / Gripe',
      'Infecciones de oído / Impactos de cera (cerumen) en los oídos',
      'Condiciones de la piel',
      'Infecciones de orina / vejiga',
      'Presión arterial alta / colesterol alto',
      'Acidez',
      'Niños con afecciones dermatológicas y otorrinolaringológicas (oído, nariz, garganta)',
      'Condiciones de salud mental como estrés, depresión y ansiedad',
      'Condiciones de la vista / Exámenes de la vista para prescripciones',
      'Terapia física',
      'Cuidado dental: preventivo y problemas que afectan la salud general',
    ],
    cannotTitle: 'Ejemplos de condiciones que no podemos tratar',
    cannot: [
      'Procedimientos de emergencia de cualquier tipo',
      'Traumatismos o lesiones que necesitan radiografías',
      'Problemas de sangrado',
      'Vacunas, prueba de tuberculosis (bacilo de la tuberculosis), obstetricia y ginecología',
      'Discapacidad, DMV, formularios de autorización de examen físico, formularios de seguro',
      'Pacientes que necesitan laboratorios urgentes',
      'Condiciones que requieren imágenes: MRI / CT',
      'Papanicolau',
      'ETS / ITS — remita a estos pacientes a Planned Parenthood o al Departamento de Salud del condado',
      'Detección de ETS',
    ],
    eligibility: [
      'Las personas que deseen establecer atención deberán completar nuestro proceso de preselección financiera por teléfono para determinar que cumplen con los criterios de elegibilidad para la Clínica. Para quienes acudan sin cita previa, la evaluación de elegibilidad financiera se realizará en la Clínica. Una vez calificado para ser atendido, y dependiendo de la urgencia de su afección así como de la cantidad de clínicos disponibles, es posible que lo atiendan el mismo día o le programen una cita en el futuro. Las visitas de seguimiento se realizarán únicamente con cita previa.',
      'La residencia legal en los EE. UU. no es un requisito previo para recibir atención en Lasa Medical Foundation Inc.',
    ],
  },
  location: {
    title: 'Ubicación',
    clinicName: 'LASA Medical Foundation',
    drivingTitle: 'Dirección',
    mailingTitle: 'Dirección postal',
    phoneLabel: 'Teléfono',
    directionsTitle: 'Direcciones',
    directionsIntro:
      'Estamos ubicados en 40 Old Ferry Road, Lowell, MA 01854. Use el mapa a continuación para obtener indicaciones paso a paso, o abra la ubicación en Google Maps o Apple Maps.',
    parkingTitle: 'Estacionamiento',
    parking:
      'La información sobre estacionamiento en la calle y en el lugar se compartirá con los pacientes antes de los días de clínica.',
    openMaps: 'Abrir en Google Maps',
    openAppleMaps: 'Abrir en Apple Maps',
  },
  contact: {
    title: 'Contáctenos',
    emergency:
      'Si tiene una emergencia médica o psiquiátrica, llame al 911 o, si es posible, diríjase al Departamento de Emergencias más cercano a su ubicación.',
    body:
      'Puede contactarnos llamando a nuestro número de teléfono principal o enviando un correo electrónico a la dirección que aparece a continuación. Para los mensajes de voz, asegúrese de dejar un número para que le devolvamos la llamada y escriba su nombre con claridad. Para los correos electrónicos, incluya su nombre, correo electrónico, teléfono, asunto y el mensaje. Tenga en cuenta que los mensajes de voz o correos electrónicos no se revisan de inmediato. Solo se atenderán el siguiente día de consulta. Es probable que haya demoras significativas en responder a su mensaje.',
    emailTitle: 'Correos electrónicos',
    emails: [
      { label: 'Solicitud de registros', value: CONTACT.emailLabel },
      { label: 'Recetas', value: CONTACT.emailLabel },
      { label: 'Consultas generales', value: CONTACT.emailLabel },
    ],
  },
  privacyTeaser: {
    title: 'Privacidad',
    paragraphs: [
      'Su Información Privada de Salud (IPS) es la información de salud que contiene identificación, como su nombre, número de seguro social, u otra información que revela quién es. Por ejemplo, su historial médico es IPS porque contiene su nombre y otros medios de identificación.',
      'Por ley, debemos (1) proteger la privacidad de su IPS, (2) advertirle de sus derechos y nuestros deberes legales con respecto a su IPS, y (3) advertirle sobre nuestras prácticas de privacidad y seguir el aviso vigente.',
      'Nos tomamos en serio estas responsabilidades y tomaremos las medidas adecuadas para salvaguardar la privacidad de su IPS.',
    ],
    cta: 'Prácticas de privacidad',
  },
  privacyPage: {
    title: 'Privacidad',
    paragraphs: [
      'Su Información Privada de Salud (IPS) es la información de salud que contiene identificación, como su nombre, número de seguro social, u otra información que revela quién es. Por ejemplo, su historial médico es IPS porque contiene su nombre y otros medios de identificación.',
      'Por ley, debemos proteger la privacidad de su IPS, advertirle de sus derechos y nuestros deberes legales con respecto a su IPS, y advertirle sobre nuestras prácticas de privacidad y seguir el aviso vigente.',
      'Nos tomamos en serio estas responsabilidades y tomaremos las medidas adecuadas para salvaguardar la privacidad de su IPS. Este aviso describe cómo se puede usar y divulgar la información médica sobre usted y cómo puede obtener acceso a esta información.',
      'Si tiene preguntas sobre nuestras prácticas de privacidad, contáctenos en info@lasane.org o llame al +1 (978) 710 4012.',
    ],
    back: 'Volver a la clínica',
  },
  schedulePage: {
    title: 'Horario',
    placeholder: 'Horario de la clínica próximamente.',
    note: 'Vuelva a consultar más tarde, o contáctenos para conocer las fechas y horarios más recientes.',
    back: 'Volver a la clínica',
  },
  footer: {
    tagline:
      'Una organización benéfica dedicada al servicio comunitario basada en la Verdad, la No violencia, la Paz, el Amor y la Recta Conducta.',
    rights: 'Lasa Medical Foundation Inc. Todos los derechos reservados.',
  },
};
