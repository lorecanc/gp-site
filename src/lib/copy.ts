import {
  Briefcase,
  FileText,
  Scale,
  ShieldCheck,
  Cloud,
  LineChart,
  Shield,
  Award,
  Lock,
  Sparkles,
  Mail,
  Phone,
  MapPin,
} from "lucide-react"

export const brand = {
  name: "GP",
  fullName: "GP srl",
  tagline: "Consulenza giuslavoristica professionale",
  copyright: `© ${new Date().getFullYear()} GP Consulenti del Lavoro – P.IVA 04494470240`,
}

export const nav = {
  links: [
    { label: "Servizi", href: "/#servizi" },
    { label: "Chi Siamo", href: "/#chi-siamo" },
    { label: "Il Team", href: "/#il-team" },
    { label: "Contatti", href: "/#contatti" },
  ],
  cta: "Richiedi Consulenza",
  ctaHref: "#contatti",
  themeToggleLight: "Passa al tema chiaro",
  themeToggleDark: "Passa al tema scuro",
  openMenu: "Apri menu",
}

export const hero = {
  heading: "Consulenza del Lavoro su Misura per la Tua Azienda",
  subtitle:
    "Supporto professionale in materia giuslavoristica, paghe e contributi, sicurezza sul lavoro.",
  primaryCta: "Scopri i Servizi",
  primaryCtaHref: "#servizi",
  secondaryCta: "Contattaci",
  secondaryCtaHref: "#contatti",
}

export const stats = {
  items: [
    { value: "20+", label: "Anni di Esperienza" },
    { value: "500+", label: "Aziende Assistite" },
    { value: "15+", label: "Settori Merceologici" },
  ],
}

export const services = {
  heading: "I Nostri Servizi",
  subheading:
    "Soluzioni complete per la gestione del personale, dalla contrattualistica alla sicurezza.",
  items: [
    {
      icon: Briefcase,
      title: "Amministrazione del Personale",
      description: "Buste paga, contributi e TFR gestiti con precisione e puntualità.",
    },
    {
      icon: FileText,
      title: "Contrattualistica del Lavoro",
      description: "Assunzioni, cessazioni e trasformazioni contrattuali a norma.",
    },
    {
      icon: Scale,
      title: "Consulenza Giuslavoristica",
      description: "Vertenze, licenziamenti e diritto sindacale con supporto esperto.",
    },
    {
      icon: ShieldCheck,
      title: "Sicurezza sul Lavoro",
      description: "DVR, formazione e adempimenti secondo il D.Lgs 81/08.",
    },
    {
      icon: Cloud,
      title: "Gestione Paghe Online",
      description: "Portale digitale per cedolini e documenti sempre disponibili.",
    },
    {
      icon: LineChart,
      title: "Audit e Due Diligence",
      description: "Analisi approfondita del costo del lavoro e ottimizzazione.",
    },
  ],
}

export const about = {
  heading: "Chi Siamo",
  paragraph:
    "GP Consulenti del Lavoro è uno studio professionale che da oltre vent'anni affianca le aziende italiane nella gestione del personale, con un approccio orientato alla qualità, alla continuità del servizio e alla costruzione di relazioni di lungo periodo. Il nostro metodo mette al centro le persone: ascoltiamo le esigenze del cliente, studiamo soluzioni personalizzate e garantiamo risposte rapide e competenti su ogni tematica giuslavoristica.",
  values: [
    { icon: Shield, label: "Affidabilità" },
    { icon: Award, label: "Competenza" },
    { icon: Lock, label: "Riservatezza" },
    { icon: Sparkles, label: "Innovazione" },
  ],
}

export const team = {
  heading: "Il Nostro Team",
  subheading: "Professionisti dedicati al successo della tua azienda.",
  members: [
    {
      name: "Dott. Giuseppe Bianchi",
      role: "Consulente del Lavoro Senior",
      bio: "Specialista in diritto del lavoro e contrattualistica aziendale.",
    },
    {
      name: "Dott.ssa Maria Rossi",
      role: "Consulente del Lavoro",
      bio: "Esperta in amministrazione del personale e gestione paghe.",
    },
    {
      name: "Dott. Alessandro Verdi",
      role: "Consulente Sicurezza sul Lavoro",
      bio: "RSPP e formatore certificato per gli adempimenti D.Lgs 81/08.",
    },
  ],
}

export const cta = {
  heading: "Hai bisogno di supporto giuslavoristico?",
  subtext: "Contattaci oggi per una prima consulenza gratuita.",
  button: "Prenota una Consulenza",
  href: "#contatti",
}

export const testimonials = {
  heading: "Cosa Dicono di Noi",
  subheading:
    "Le aziende che hanno scelto GP Consulenti del Lavoro raccontano la loro esperienza.",
  items: [
    {
      quote:
        "GP Consulenti del Lavoro ci ha permesso di esternalizzare completamente la gestione delle buste paga, riducendo gli errori del 95% e liberando tempo prezioso per il nostro team HR.",
      author: "Marco Fontana",
      role: "HR Director",
      company: "Tech Solutions S.p.A.",
    },
    {
      quote:
        "La consulenza giuslavoristica ci ha salvato da una vertenza complessa. Professionalità, rapidità e competenza fuori dal comune.",
      author: "Laura Esposito",
      role: "CEO",
      company: "Green Logistics Srl",
    },
    {
      quote:
        "Da dieci anni ci affidiamo a GP per la sicurezza sul lavoro. I nostri DVR sono sempre aggiornati e la formazione del personale è impeccabile.",
      author: "Andrea Rinaldi",
      role: "RSPP Interno",
      company: "EdilComfort Group",
    },
    {
      quote:
        "Il portale online per i cedolini è intuitivo e sempre accessibile. I nostri dipendenti apprezzano la trasparenza e la facilità d'uso.",
      author: "Francesca Moretti",
      role: "Amministratore Delegato",
      company: "Fashion Retail Italia",
    },
  ],
}

export const faq = {
  heading: "Domande Frequenti",
  subheading:
    "Le risposte alle domande più comuni sui nostri servizi di consulenza del lavoro.",
  items: [
    {
      question:
        "Quali sono i vantaggi di affidare le buste paga a un consulente del lavoro?",
      answer:
        "Affidare l'amministrazione del personale a un consulente del lavoro garantisce precisione nei calcoli, rispetto delle scadenze fiscali e contributive, riduzione del rischio di sanzioni e più tempo per concentrarti sul tuo core business. Inoltre, offriamo un portale digitale dove i tuoi dipendenti possono consultare cedolini e documenti in qualsiasi momento.",
    },
    {
      question: "Come funziona la prima consulenza gratuita?",
      answer:
        "Durante la prima consulenza gratuita analizziamo le esigenze della tua azienda, il numero di dipendenti, il settore merceologico e gli adempimenti già in essere. Ti presentiamo un preventivo personalizzato e un piano di lavoro su misura, senza alcun impegno.",
    },
    {
      question:
        "Siete specializzati in qualche settore merceologico specifico?",
      answer:
        "Grazie a oltre vent'anni di esperienza, assistiamo aziende in più di 15 settori merceologici: edilizia, metalmeccanico, commercio, logistica, sanità, terziario avanzato e molti altri. Ogni settore ha CCNL specifici che conosciamo a fondo.",
    },
    {
      question: "Cosa prevede il servizio di sicurezza sul lavoro?",
      answer:
        "Il servizio include la redazione e l'aggiornamento del Documento di Valutazione dei Rischi (DVR), la nomina del RSPP esterno, la formazione obbligatoria dei lavoratori (generale e specifica), la gestione delle visite mediche e la sorveglianza sanitaria, tutto in conformità al D.Lgs 81/08.",
    },
    {
      question: "Come gestite la privacy e la riservatezza dei dati?",
      answer:
        "La riservatezza è un nostro valore fondamentale. Tutti i dati del personale sono trattati nel pieno rispetto del GDPR (Reg. UE 2016/679). Utilizziamo sistemi informatici protetti, accessi profilati e procedure di backup giornaliero. Siamo disponibili a sottoscrivere accordi di riservatezza specifici.",
    },
    {
      question: "Posso cambiare consulente del lavoro in corso d'anno?",
      answer:
        "Certamente. Il passaggio da un consulente a un altro è un'operazione che gestiamo completamente noi, senza alcun disagio per l'azienda. Ci occupiamo del ritiro della documentazione dal precedente studio, della verifica degli adempimenti pregressi e dell'avvio della nuova gestione in continuità.",
    },
  ],
}

export const servicesDetail = {
  heading: "I Nostri Servizi in Dettaglio",
  items: [
    {
      slug: "amministrazione-del-personale",
      icon: Briefcase,
      title: "Amministrazione del Personale",
      description:
        "Buste paga, contributi e TFR gestiti con precisione e puntualità.",
      longDescription:
        "Il servizio di amministrazione del personale copre tutte le fasi del rapporto di lavoro: dall'assunzione alla cessazione. Ci occupiamo dell'elaborazione mensile delle buste paga, del calcolo di contributi INPS e INAIL, della gestione del TFR (anche in fondi di previdenza complementare), degli adempimenti annuali come CU e 770, e della gestione di bonus, premi di produzione e welfare aziendale. Mettiamo a disposizione un portale online dove i tuoi dipendenti possono consultare cedolini, CU e documenti in qualsiasi momento.",
      benefits: [
        "Elaborazione buste paga entro il giorno 20 di ogni mese",
        "Gestione completa TFR in azienda e fondi pensione",
        "Portale digitale per dipendenti con accesso 24/7 a cedolini e CU",
        "Predisposizione modelli F24 per versamenti contributivi e fiscali",
        "Assistenza in caso di ispezioni INPS/INAIL",
      ],
    },
    {
      slug: "contrattualistica-del-lavoro",
      icon: FileText,
      title: "Contrattualistica del Lavoro",
      description:
        "Assunzioni, cessazioni e trasformazioni contrattuali a norma.",
      longDescription:
        "La gestione contrattuale è un aspetto cruciale per ogni azienda. Offriamo supporto completo nella redazione e gestione di contratti di lavoro di ogni tipologia: tempo indeterminato, determinato, apprendistato, part-time, somministrazione, contratti a chiamata e collaborazioni. Verifichiamo la corretta applicazione dei CCNL di riferimento, gestiamo le comunicazioni obbligatorie (Unilav, Unisomm) e assistiamo l'azienda in tutte le fasi di trasformazione, proroga e cessazione del rapporto di lavoro.",
      benefits: [
        "Redazione contratti conformi al CCNL applicabile e alla normativa vigente",
        "Gestione comunicazioni obbligatorie telematiche (Unilav, Unisomm)",
        "Consulenza su incentivi all'assunzione e sgravi contributivi",
        "Supporto nella gestione di appalti e distacchi di personale",
        "Verifica periodica della corretta classificazione del personale",
      ],
    },
    {
      slug: "consulenza-giuslavoristica",
      icon: Scale,
      title: "Consulenza Giuslavoristica",
      description:
        "Vertenze, licenziamenti e diritto sindacale con supporto esperto.",
      longDescription:
        "La nostra consulenza giuslavoristica copre ogni aspetto del diritto del lavoro: dalla gestione delle vertenze individuali e collettive alla consulenza su licenziamenti (individuali e collettivi), procedure disciplinari, trasferimenti, mobbing e demansionamento. Offriamo assistenza nella gestione delle relazioni sindacali, nella redazione di accordi di conciliazione e nella rappresentanza dell'azienda in sede sindacale e amministrativa. Forniamo pareri scritti su quesiti giuslavoristici complessi entro 48 ore.",
      benefits: [
        "Assistenza in vertenze individuali e collettive",
        "Consulenza su licenziamenti e procedure disciplinari",
        "Gestione rapporti con organizzazioni sindacali e RSU",
        "Pareri scritti su quesiti giuslavoristici entro 48 ore",
        "Supporto nella redazione di regolamenti aziendali e policy interne",
      ],
    },
    {
      slug: "sicurezza-sul-lavoro",
      icon: ShieldCheck,
      title: "Sicurezza sul Lavoro",
      description: "DVR, formazione e adempimenti secondo il D.Lgs 81/08.",
      longDescription:
        "Il servizio sicurezza sul lavoro garantisce la piena conformità al D.Lgs 81/08 e successive modifiche. Offriamo la redazione e l'aggiornamento continuo del Documento di Valutazione dei Rischi (DVR), la nomina del RSPP esterno, la formazione obbligatoria per tutti i lavoratori (generale, specifica, preposti, dirigenti, antincendio e primo soccorso), la gestione della sorveglianza sanitaria con medico competente e la redazione del Piano di Emergenza ed Evacuazione.",
      benefits: [
        "Redazione e aggiornamento DVR con sopralluogo in azienda",
        "Nomina RSPP esterno con assistenza continuativa",
        "Formazione lavoratori, preposti e dirigenti con docenti qualificati",
        "Gestione sorveglianza sanitaria e visite mediche periodiche",
        "Piano di Emergenza ed Evacuazione con prove antincendio annuali",
      ],
    },
    {
      slug: "gestione-paghe-online",
      icon: Cloud,
      title: "Gestione Paghe Online",
      description:
        "Portale digitale per cedolini e documenti sempre disponibili.",
      longDescription:
        "Il nostro portale digitale per la gestione paghe offre a te e ai tuoi dipendenti un accesso sicuro e immediato a tutti i documenti: cedolini paga mensili, Certificazioni Uniche, modelli CU, prospetti TFR e riepiloghi contributivi. Il portale è accessibile 24/7 da qualsiasi dispositivo (PC, tablet, smartphone), con autenticazione a due fattori e crittografia dei dati. Per l'azienda offriamo una dashboard di controllo con KPI sul costo del lavoro, report mensili e alert sulle scadenze.",
      benefits: [
        "Accesso 24/7 a cedolini e documenti da qualsiasi dispositivo",
        "Autenticazione a due fattori e crittografia dei dati personali",
        "Dashboard aziendale con KPI sul costo del lavoro",
        "Report mensili e alert automatici sulle scadenze contributive",
        "Conservazione digitale a norma per 10 anni",
      ],
    },
    {
      slug: "audit-e-due-diligence",
      icon: LineChart,
      title: "Audit e Due Diligence",
      description:
        "Analisi approfondita del costo del lavoro e ottimizzazione.",
      longDescription:
        "Il servizio di audit e due diligence è pensato per aziende che vogliono verificare la correttezza della gestione del personale, identificare aree di rischio e opportunità di ottimizzazione. Effettuiamo un'analisi approfondita del costo del lavoro, verifichiamo la corretta applicazione dei CCNL, controlliamo la regolarità contributiva e fiscale e produciamo un report dettagliato con raccomandazioni operative. Questo servizio è particolarmente utile in fase di acquisizioni, fusioni o riorganizzazioni aziendali.",
      benefits: [
        "Analisi completa del costo del lavoro e benchmarking di settore",
        "Verifica conformità normativa e contributiva (due diligence)",
        "Identificazione di aree di ottimizzazione e risparmio",
        "Report dettagliato con raccomandazioni prioritarie",
        "Supporto in operazioni straordinarie (M&A, riorganizzazioni)",
      ],
    },
  ],
}

export const contactForm = {
  trigger: "Contattaci",
  title: "Richiedi una Consulenza",
  description:
    "Compila il form e ti ricontatteremo entro 24 ore per una prima consulenza gratuita.",
  fields: {
    name: { label: "Nome e Cognome", placeholder: "Mario Rossi" },
    email: { label: "Email", placeholder: "mario.rossi@azienda.it" },
    phone: { label: "Telefono", placeholder: "+39 123 456 7890" },
    service: {
      label: "Servizio di Interesse",
      placeholder: "Seleziona un servizio",
      options: [
        "Amministrazione del Personale",
        "Contrattualistica del Lavoro",
        "Consulenza Giuslavoristica",
        "Sicurezza sul Lavoro",
        "Gestione Paghe Online",
        "Audit e Due Diligence",
      ],
    },
    message: {
      label: "Messaggio",
      placeholder: "Descrivi brevemente le tue esigenze...",
    },
  },
  submit: "Invia Richiesta",
  submitting: "Invio in corso...",
  success: {
    title: "Richiesta Inviata!",
    description:
      "Grazie per averci contattato. Ti risponderemo entro 24 ore lavorative.",
  },
}

export const privacy = {
  heading: "Privacy Policy",
  lastUpdated: "01 Gennaio 2024",
  sections: [
    {
      title: "Titolare del Trattamento",
      content:
        "GP Consulenti del Lavoro, con sede in VIALE DELL'INDUSTRIA 67, 36100 VICENZA (VI), P.IVA 04494470240, è il Titolare del trattamento dei dati personali raccolti attraverso questo sito web. Per qualsiasi richiesta relativa ai tuoi dati personali, puoi contattarci all'indirizzo email info@gpconsulenti.it.",
    },
    {
      title: "Dati Personali Raccolti",
      content:
        "Raccogliamo i dati personali che ci fornisci volontariamente attraverso il form di contatto: nome e cognome, indirizzo email, numero di telefono e il contenuto del messaggio. Questi dati sono trattati esclusivamente per rispondere alle tue richieste di informazione e per fornirti il servizio di consulenza richiesto.",
    },
    {
      title: "Finalità del Trattamento",
      content:
        "I tuoi dati personali sono trattati per le seguenti finalità: rispondere alle tue richieste di contatto e consulenza, fornirti informazioni sui nostri servizi, adempiere a obblighi di legge e regolamentari. Non utilizziamo i tuoi dati per finalità di marketing senza il tuo esplicito consenso.",
    },
    {
      title: "Base Giuridica",
      content:
        "Il trattamento dei tuoi dati si basa sull'esecuzione di misure precontrattuali e contrattuali richieste dall'interessato (art. 6, par. 1, lett. b GDPR) e sul legittimo interesse del Titolare a rispondere alle richieste di informazione (art. 6, par. 1, lett. f GDPR).",
    },
    {
      title: "Conservazione dei Dati",
      content:
        "I tuoi dati personali sono conservati per il tempo strettamente necessario a fornirti il servizio richiesto e, in ogni caso, per un periodo non superiore a 24 mesi dall'ultimo contatto, salvo obblighi di legge che richiedano una conservazione più lunga.",
    },
    {
      title: "Diritti dell'Interessato",
      content:
        "Hai il diritto di accedere ai tuoi dati personali, chiederne la rettifica o la cancellazione, limitare il trattamento, opporti al trattamento e richiedere la portabilità dei dati. Per esercitare questi diritti, scrivi a info@gpconsulenti.it. Hai inoltre il diritto di proporre reclamo al Garante per la Protezione dei Dati Personali.",
    },
    {
      title: "Cookie",
      content:
        "Questo sito utilizza esclusivamente cookie tecnici necessari al funzionamento del sito stesso e un cookie tecnico per ricordare la preferenza del tema (chiaro/scuro). Non utilizziamo cookie di profilazione o di terze parti. Per maggiori informazioni, consulta la nostra Cookie Policy disponibile su questa pagina.",
    },
  ],
}

export const cookieBanner = {
  message:
    "Utilizziamo cookie tecnici necessari al funzionamento del sito e un cookie per ricordare le tue preferenze sul tema. Non utilizziamo cookie di profilazione.",
  accept: "Accetta",
  reject: "Rifiuta",
  policyLink: "Maggiori informazioni",
}

export const footer = {
  links: [
    { label: "Servizi", href: "/#servizi" },
    { label: "Chi Siamo", href: "/#chi-siamo" },
    { label: "Il Team", href: "/#il-team" },
    { label: "Contatti", href: "/#contatti" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
  ],
  contact: {
    address: "VIALE DELL'INDUSTRIA 67, 36100 VICENZA (VI)",
    email: "gpsrlstp@pec.it",
    phone: "+39 02 1234 5678",
  },
  contactIcons: {
    address: MapPin,
    email: Mail,
    phone: Phone,
  },
}
