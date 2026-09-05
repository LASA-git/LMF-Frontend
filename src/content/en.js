import { CONTACT } from '../constants/contact';

export const en = {
  lang: 'en',
  otherLang: 'es',
  otherLangLabel: 'Español',
  otherLangPath: '/es',
  siteName: 'Lasa Medical Foundation Inc.',
  shortName: 'Lasa Medical Foundation',
  motto: 'Love All, Serve All — Help Ever, Hurt Never',
  paths: {
    home: '/en',
    schedule: '/en/schedule',
    privacy: '/en/privacy',
    splash: '/',
  },
  nav: [
    { id: 'clinic', label: 'The Clinic' },
    { id: 'operate', label: 'How we operate' },
    { id: 'services', label: 'Services' },
    { id: 'location', label: 'Location' },
    { id: 'contact', label: 'Contact' },
    { id: 'privacy', label: 'Privacy', to: '/en/privacy' },
    { id: 'schedule', label: 'Schedule', to: '/en/schedule' },
  ],
  splash: {
    title: 'Lasa Medical Foundation Inc.',
    mission:
      'The Lasa Medical Foundation Inc. provides free primary medical care for low-income people who do not have health insurance.',
    hoursTitle: 'Clinic Hours',
    hours: [
      { label: 'Remote by Phone', value: 'To be confirmed' },
      { label: 'In-person', value: 'To be confirmed' },
    ],
    scheduleLabel: 'Clinic Schedule',
    scheduleLink: 'Schedule',
    scheduleAltLink: 'Horario',
    scheduleAltPath: '/es/horario',
    phoneLabel: 'Phone',
    faxLabel: 'Fax',
    drivingTitle: 'Driving Address',
    mailingTitle: 'Mailing Address',
    emailTitle: 'Email Addresses',
    emails: [
      { label: 'Records Request', value: CONTACT.emailLabel },
      { label: 'Prescriptions', value: CONTACT.emailLabel },
      { label: 'General Inquiries', value: CONTACT.emailLabel },
    ],
    enterEnglish: 'Click here to enter English website',
    enterSpanish: 'Oprima aquí para español',
  },
  clinic: {
    heroKicker: 'The Clinic',
    heroTitle: 'The Clinic',
    scrollHint: 'Scroll down',
    motto: 'Love All, Serve All — Help Ever, Hurt Never',
    intro:
      'The Lasa Medical Foundation Inc. provides free primary medical care for low-income people who do not have health insurance.',
    paragraphs: [
      'We provide non-emergency care for both acute and chronic medical conditions. The clinic is staffed by volunteer physicians, nurse practitioners, physician assistants, registered nurses, physical therapists, and other support staff.',
      '"Love All, Serve All | Help Ever, Hurt Never" summarizes the operational principles of our clinic. We are grateful for the chance to provide free medical care to those in need.',
      'Lasa Medical Foundation Inc. is a 501(c)(3) nonprofit organization. To keep expenses as low as possible, we do not have any salaried employees at the medical clinic. Everyone who works at this clinic does so as a non-paid volunteer.',
      'Many of the wonderful volunteers who work at our clinic come from the local community that we serve. Highly skilled medical professionals — physicians, nurse practitioners, physician assistants, registered nurses, and physical therapists — volunteer their time alongside community members who share LASA’s commitment to Love All, Serve All.',
    ],
  },
  operate: {
    title: 'How we operate the Clinic',
    paragraphs: [
      'Much of the assistance we need to operate the Clinic is provided by the physicians, nurse practitioners, physician assistants, registered nurses, physical therapists, and all the other support staff who volunteer their time to serve the patients who come to our clinic. We know that the Clinic will be supported by people who of their own accord are moved to provide assistance.',
      'We appreciate all the generosity of our volunteers as well as the many private and institutional donors who make this work possible.',
      'If you would like to help the Lasa Medical Foundation Inc. in some way, you can contact us at info@lasane.org.',
    ],
  },
  services: {
    title: 'Services',
    intro:
      'The Lasa Medical Foundation Inc. provides non-urgent and non-emergency primary care services for uninsured individuals who cannot afford the cost of medical care. Remote visits by phone or video and in-person on-site visits are offered according to the clinic schedule. Physical therapy, optometry, mental health, and dental referral support may be available on selected clinic days. Please see the clinic schedule for details.',
    treatTitle: 'Examples of some conditions that we treat',
    treat: [
      'Diabetes',
      'Sore throat / Cough / Cold / Flu',
      'Ear infections / Wax (cerumen) impacted in the ears',
      'Skin conditions',
      'Urine / bladder infections',
      'High blood pressure / High cholesterol',
      'Heartburn',
      'Children with dermatologic and ENT (ear, nose, throat) conditions',
      'Mental health conditions like stress, depression, and anxiety',
      'Eye conditions / Vision exams for prescriptions',
      'Physical therapy',
      'Dental care — preventive and issues impacting general health',
    ],
    cannotTitle: 'Examples of conditions that we cannot treat',
    cannot: [
      'Emergency procedures of any kind',
      'Trauma or injuries that need x-rays',
      'Bleeding problems',
      'Immunizations, TB (tuberculosis bacillus) test, OB/GYN',
      'Disability, DMV, physical examination clearance forms, insurance forms',
      'Patients needing urgent labs',
      'Conditions requiring imaging — MRI / CT',
      'Pap smears',
      'STD / STI — refer these patients to Planned Parenthood or the County Health Department',
      'STD screening',
    ],
    eligibility: [
      'Individuals seeking to establish care will need to complete our financial pre-screening process over the phone to determine they meet the eligibility criteria for the Clinic. For those who walk in, the financial eligibility screening will be done at the Clinic. Upon being qualified to be seen at the clinic, and depending on the urgency of your condition as well as the number of clinicians available, you may be seen the same day or scheduled for an appointment in the future. Follow-up visits will be done by appointment only.',
      'Legal residency in the USA is not a prerequisite to getting care at the Lasa Medical Foundation Inc.',
    ],
  },
  location: {
    title: 'Location',
    clinicName: 'Lasa Medical Foundation Inc.',
    drivingTitle: 'Driving Address',
    mailingTitle: 'Mailing Address',
    phoneLabel: 'Phone',
    directionsTitle: 'Directions',
    directionsIntro:
      'We are located at 40 Old Ferry Road, Lowell, MA 01854. Use the map below for turn-by-turn directions, or open the location in Google Maps or Apple Maps.',
    parkingTitle: 'Parking',
    parking: 'Street and on-site parking guidance will be shared with patients ahead of clinic days.',
    openMaps: 'Open in Google Maps',
    openAppleMaps: 'Open in Apple Maps',
  },
  contact: {
    title: 'Contact',
    emergency:
      'If you are experiencing a medical or psychiatric emergency, please call 911 or, if possible, go to the Emergency Department nearest to your location.',
    body:
      'You can contact us by calling our main phone number or by sending an email to the address below. For voice mails, please be sure to leave a call-back number and spell out your name clearly. For emails, please include your name, email, phone, subject, and the message. Please be advised that voice mails or emails are NOT reviewed immediately. They will be attended to only on the next clinic day. There will likely be significant delays in getting back to your message.',
    emailTitle: 'Email Addresses',
    emails: [
      { label: 'Record Requests', value: CONTACT.emailLabel },
      { label: 'Prescriptions', value: CONTACT.emailLabel },
      { label: 'General Inquiries', value: CONTACT.emailLabel },
    ],
  },
  privacyTeaser: {
    title: 'Privacy',
    paragraphs: [
      'Your protected health information (PHI) is health information that contains identifiers, such as your name, Social Security number, or other information that reveals who you are. For example, your medical record is PHI because it includes your name and other identifiers.',
      'By law, we must (1) protect the privacy of your PHI, (2) tell you about your rights and our legal duties with respect to your PHI, and (3) tell you about our privacy practices and follow our notice currently in effect.',
      'We take these responsibilities seriously and we will take appropriate steps to safeguard the privacy of your PHI.',
    ],
    cta: 'Privacy Practices',
  },
  privacyPage: {
    title: 'Privacy',
    paragraphs: [
      'Your protected health information (PHI) is health information that contains identifiers, such as your name, Social Security number, or other information that reveals who you are. For example, your medical record is PHI because it includes your name and other identifiers.',
      'By law, we must protect the privacy of your PHI, tell you about your rights and our legal duties with respect to your PHI, and tell you about our privacy practices and follow our notice currently in effect.',
      'We take these responsibilities seriously and will take appropriate steps to safeguard the privacy of your PHI. This notice describes how medical information about you may be used and disclosed and how you can get access to this information.',
      'If you have questions about our privacy practices, please contact us at info@lasane.org or call +1 (978) 710 4012.',
    ],
    back: 'Back to clinic',
  },
  schedulePage: {
    title: 'Schedule',
    placeholder: 'Clinic schedule coming soon.',
    note: 'Please check back later, or contact us for the latest clinic dates and hours.',
    back: 'Back to clinic',
  },
  footer: {
    tagline:
      'A charitable organization dedicated to community service based on Truth, Non-violence, Peace, Love, and Right Conduct.',
    rights: 'Lasa Medical Foundation Inc. All rights reserved.',
  },
};
