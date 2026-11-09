# Restore “Clinic” wording

Temporary public-copy change made November 2026: visitor-facing text uses **LMF Healthcare Services** / **Healthcare Services** instead of Clinic / The Clinic / Dispensary.

Revert this after 1–2 months by putting the **Original** strings below back into `src/content/en.js`, `src/content/es.js`, `src/content/privacyNoticeEn.js`, and `src/content/privacyNoticeEs.js`.

## Left unchanged on purpose

- Routes stay `/en/clinic` and `/es/clinica`
- Code names stay (`ClinicPage`, `content.clinic`, `clinicAdminEmailHref`)
- Email stays `clinicadmin@lasamedical.org`
- Official names stay: NAFC, eClinicalWorks, Tufts Medical Center, Lowell General Hospital, Clinical Assistant Professor
- “Clinician / clínicos” (job title) stays
- Admin/backend screens stay on “clinic day”

---

## English (`src/content/en.js`)

| Location | Original |
| --- | --- |
| nav clinic label | The Clinic |
| about.paragraphs[0] | …through a volunteer-driven clinic. No service is contingent… |
| about.paragraphs[1] | The clinic offers non-emergency primary care… staff each clinic day without salaries… |
| about.paragraphs[2] | …the way the clinic operates: people give their time… |
| team.lede | The clinic is led by a volunteer board, medical director, and administrator, with visiting clinicians on each clinic day. |
| team.operationsTitle | Clinic Operations |
| team.leadership[1].role | Clinic Administrator |
| partners.lede | We thank our partners for supporting clinic operations. |
| hours.intro | In-person clinic hours will be posted here as they are confirmed. Specific upcoming clinic days are listed on the schedule. |
| hours.scheduleIntro | See published clinic days and claim a limited spot. |
| hours.scheduleCta | Book a clinic day |
| donate.lede | Support the clinic through a gift, your time, supplies, or a community partnership. |
| donate.volunteer.body | Join volunteer clinicians and community members at the free medical clinic. |
| donate.supplies.body | To donate medical supplies, contact the Clinic Administrator. |
| donate.partner.body | To become a community partner, contact the Clinic Administrator. |
| clinic.heroTitle | The Clinic |
| clinic.intro | A volunteer-run clinic offering free primary care for adults… |
| clinic.paragraphs[0] | …The clinic is staffed by volunteer physicians… |
| clinic.paragraphs[1] | Many of the volunteers who work at our clinic… volunteer their time at the Clinic. |
| operate.title | How we operate the Clinic |
| operate.paragraphs[0] | Much of the assistance we need to operate the Clinic… patients who come to our clinic. We know that the Clinic will be supported… |
| services.cannot (dental) | Emergency dental procedures beyond the services specifically offered at the clinic |
| services.cannot (testing) | Specialized diagnostic testing or treatment that is not available through our clinic |
| services.note | …Our clinic staff can help direct patients… |
| contact.body | …They will be attended to only on the next clinic day. |
| schedulePage.intro | Upcoming clinic days are listed below. |
| schedulePage.empty | No upcoming clinic days are published yet. |
| schedulePage.emptyNote | …latest clinic dates and hours. |
| schedulePage.back | Back to the clinic |
| schedulePage.backToList | All clinic days |
| schedulePage.full | This clinic day is fully booked |
| schedulePage.alreadyBooked | This email already has a booking for this clinic day. |
| schedulePage.consentLabel | …complete my clinic booking. |
| schedulePage.notFound | This clinic day is not available. |
| schedulePage.eventLabel | Clinic day |
| footer.donateIntro | Give, volunteer, donate supplies, or partner with the clinic. |

`src/content/privacyNoticeEn.js` back: `Back to clinic`

---

## Spanish (`src/content/es.js`)

| Location | Original |
| --- | --- |
| nav clinic label | La Clínica |
| about.paragraphs[0] | …mediante una clínica impulsada por voluntarios. |
| about.paragraphs[1] | La clínica ofrece… cada día de clínica sin salario… |
| about.paragraphs[2] | …la forma en que opera la clínica… |
| team.lede | La clínica está dirigida… |
| team.operationsTitle | Operaciones de la clínica |
| team.leadership[1].role | Administrador de la clínica |
| partners.lede | …operaciones de la clínica. |
| hours.intro | …Los próximos días de clínica aparecen en la reserva. |
| hours.scheduleIntro | Vea los días de clínica publicados… |
| hours.scheduleCta | Reservar un día de clínica |
| donate.lede | Apoye la clínica con un donativo… |
| donate.volunteer.body | …en la clínica médica gratuita. |
| donate.supplies.body / partner.body | …administrador de la clínica. |
| clinic.heroTitle | La Clínica |
| clinic.intro | Una clínica impulsada por voluntarios… |
| clinic.paragraphs[0] | …La clínica cuenta con médicos voluntarios… |
| clinic.paragraphs[1] | …trabajan en nuestra clínica… ofrecen su tiempo en la Clínica. |
| operate.title | Cómo operamos la Clínica |
| operate.paragraphs[0] | …operar la Clínica… nuestra clínica. Sabemos que la Clínica contará… |
| services.cannot / note | …la clínica / El personal de la clínica… |
| schedulePage + footer | días de clínica / Volver a la clínica / alíese con la clínica |

`src/content/privacyNoticeEs.js` back: `Volver a la clínica`
