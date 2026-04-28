import { CTA_LINKS, SOCIAL_LINKS } from "./ctaLinks";

export const eventMeta = {
  title: "UoM Engineering & IT Innovation Competition 2026",
  subtitle:
    "Join Final Pitch Day to watch finalist teams present live, hear opening speakers and industry guests, and experience awards plus networking with the university innovation community.",
  date: "9 May 2026",
  time: "14:00–17:45",
  venue: "University of Melbourne, Parkville Campus",
  venueSuffix: "Venue TBA",
  hostedBy: "Hosted by the University of Melbourne FEIT",
  deliveredBy: "Delivered by Innovate Connect Alliance",
  supporters: ["SEEYA", "UoMCAN"],
  competitionDeadline: "11:59 PM, 10 April 2026",
  primaryCta: {
    label: "Buy Pitch Day Ticket",
    href: CTA_LINKS.audience,
  },
  secondaryCta: {
    label: "Watch Info Session Recording",
    href: CTA_LINKS.infoSession,
  },
  sponsorCta: {
    label: "Download Sponsor Package",
    href: CTA_LINKS.sponsorPackage,
  },
};

export const navItems = [
  { label: "Overview", href: "#overview" },
  { label: "Sessions", href: "#info-sessions" },
  { label: "Agenda", href: "#final-day-agenda" },
  { label: "Judges", href: "#judges" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "FAQ", href: "#faq" },
  { label: "Sponsor", href: "#organiser" },
];

export const overviewContent = {
  eyebrow: "Why Join",
  title: "A live innovation showcase worth attending in person",
  intro:
    "Final Pitch Day brings together finalist teams, guest speakers, judges, and the wider innovation community for an engaging live event.",
  whyJoinHighlights: [
    {
      title: "Live finalist pitches",
      body: "Watch shortlisted teams present practical ideas and prototypes to judges in a live showcase format.",
    },
    {
      title: "Speakers and insights",
      body: "Hear from guest speakers across industry, academia, and innovation throughout Final Pitch Day.",
    },
    {
      title: "Awards and networking",
      body: "Stay for awards, meet founders and supporters, and connect with Melbourne's innovation community.",
    },
  ],
  competitionThemeEyebrow: "Competition Theme",
  competitionThemeTitle: "Innovate Melbourne Future",
  competitionThemeIntro:
    "This year's challenge invites participants to develop practical solutions for a smarter, more sustainable, and more connected Melbourne.",
  themes: [
    {
      title: "Smart City & Infrastructure",
      description:
        "Design solutions that improve urban systems, infrastructure, and the way cities function.",
      icon: "city",
    },
    {
      title: "AI & Digital System",
      description:
        "Apply data, AI, and digital technologies to create smarter and more efficient systems.",
      icon: "ai",
    },
    {
      title: "Sustainable Energy & Climate Tech",
      description:
        "Develop innovations that support clean energy, sustainability, and environmental resilience.",
      icon: "climate",
    },
  ],
};

export const highlightsContent = {
  eyebrow: "Why this event stands out",
  title: "A stronger entry point into innovation, building, and community",
  intro:
    "The competition is designed to be accessible, credible, and genuinely useful for participants who want structure, feedback, and meaningful exposure.",
  items: [
    {
      title: "Practical innovation challenge",
      description:
        "Move beyond abstract ideas and work on something that can be tested, explained, and developed with purpose.",
    },
    {
      title: "Cross-disciplinary collaboration",
      description:
        "Meet people from different backgrounds and build stronger solutions through mixed-skill teamwork.",
    },
    {
      title: "Judge and academic visibility",
      description:
        "Receive feedback in a university-backed setting with judges connected to research, engineering, and industry.",
    },
    {
      title: "Final Day exposure",
      description:
        "Pitch live, gain visibility, and connect with mentors, collaborators, and community supporters.",
    },
  ],
  valueStats: [
    { label: "Hosted by", value: "UoM FEIT" },
    { label: "Finalist teams", value: "12" },
    { label: "Format", value: "Individuals + teams" },
  ],
  finalDayTitle: "Planned Final Day experience",
  finalDayDescription:
    "The Final Pitch Day is positioned as a live showcase of shortlisted teams, expert perspectives, and broader community connection.",
  finalDayItems: [
    "Final team pitches",
    "Keynote content",
    "Judges panel",
    "Award presentation",
    "Startup showcase",
    "Networking",
  ],
};

export const agendaContent = {
  eyebrow: "Registration Journey",
  title: "Choose how you want to join the competition",
  intro:
    "Competition applications are now closed. Here is the clearest path to attend Final Pitch Day and follow key milestones.",
  registrationNote:
    "Final Pitch Day is now open for audience attendance. You can register as an audience member and use the info session recording to understand event flow and judging context.",
  timelineTitle: "Key stages",
  timeline: [
    {
      step: "01",
      date: "10 Apr 2026",
      title: "Online Info Session",
      format: "Online · Free · 7:00 – 8:00 PM",
      description:
        "Watch the recorded info session for an overview of the competition format, timeline, judging expectations, and how to get started.",
      eligibilityNote:
        "Open to everyone. No competition registration is required to watch the recording.",
      registerHref: CTA_LINKS.infoSession,
      registerLabel: "Watch Info Session Recording",
      isDeadline: false,
    },
    {
      step: "02",
      date: "18 Apr 2026",
      title: "Onsite Team-Up Session",
      format: "In person · Competitor-only",
      description:
        "Designed for registered competitors who want to meet collaborators, exchange ideas, and form teams before submission.",
      eligibilityNote:
        "This session has concluded.",
      registerHref: "",
      registerLabel: "Completed",
      statusOnly: true,
      isDeadline: false,
    },
    {
      step: "03",
      date: "22 Apr 2026",
      title: "Hybrid Pitch Workshop",
      format: "Hybrid",
      description:
        "A practical workshop on how to structure, present, and communicate technical ideas effectively.",
      eligibilityNote:
        "This workshop has concluded.",
      registerHref: "",
      registerLabel: "Event Concluded",
      statusOnly: true,
      isDeadline: false,
    },
    {
      step: "04",
      date: "24 Apr 2026",
      title: "Draft Submission",
      format: "Submission Deadline",
      description:
        "Teams submit a 5-page draft deck and a short demo progress update for review and shortlisting.",
      registerHref: "",
      registerLabel: "Completed",
      statusOnly: true,
      isDeadline: true,
    },
    {
      step: "05",
      date: "1 May 2026",
      title: "Final Submission",
      format: "Submission Deadline",
      description:
        "Teams finalise and submit their full pitch deck and prototype or concept demonstration materials.",
      registerHref: "",
      registerLabel: "Completed",
      statusOnly: true,
      isDeadline: true,
    },
    {
      step: "06",
      date: "9 May 2026",
      title: "Final Pitch Day",
      format: "Live Event",
      description:
        "Watch shortlisted teams pitch live, followed by awards, audience engagement, and networking.",
      eligibilityNote:
        "Free for registered competitors. Non-competitors may attend by purchasing an audience ticket.",
      registerHref: CTA_LINKS.audience,
      registerLabel: "Buy Pitch Day Ticket",
      isDeadline: false,
    },
  ],
  submissionTitle: "Submission requirements",
  submissionRequirements: {
    draft: ["5-page pitch deck", "Demo progress update"],
    final: [
      "1 × 10-page pitch deck",
      "Prototype or concept demonstration",
      "May include a technical prototype, process model, data analysis or simulation, or conceptual system design",
    ],
  },
  shortlisting: {
    title: "Finalist selection",
    description:
      "All applicants submit a draft. Twelve finalist teams will be selected after review and invited to pitch live on Final Day.",
  },
  pricingTitle: "Pricing",
  pricing: {
    competitor: {
      title: "Competitor Pass",
      price: "AUD 25",
      description:
        "Competition applications are closed for this cycle.",
    },
    audience: {
      title: "Audience Tickets",
      earlyBird: "Early Bird — AUD 25",
      regular: "Regular — AUD 40",
      earlyBirdDeadline: "Early Bird ends: 11:59 PM, 25 April 2026",
      regularDeadline: "Regular sales close: 11:59 PM, 8 May 2026",
      note: "Ticket release details coming soon. Ticketing platform: TBD.",
    },
  },
  finalDayAgendaTitle: "Final Pitch Day · 9 May 2026",
  finalDayAgenda: [
    {
      time: "13:00-13:30",
      title: "Opening Ceremony",
      description: "Opening of Final Pitch Day",
    },
    {
      time: "13:30-14:30",
      title: "Final Pitch Session (Top Teams)",
      description:
        "",
    },
    {
      time: "14:30-14:45",
      title: "Industry Insight & Sponsor Acknowledgement",
      description: "",
    },
    {
      time: "14:45-15:15",
      title: "Awards & Closing",
      description: "Recognising top teams and closing the event with a final celebration.",
    },
    {
      time: "15:15-16:00",
      title: "Networking & Sponsor Interaction",
      description: "",
    },
  ],
};

export const judgesContent = {
  eyebrow: "Judges",
  title: "Confirmed Judges",
  intro:
    "The judging panel brings together academic, technical, and research perspectives relevant to innovation, engineering, and applied technology.",
  judges: [] as {
    name: string;
    title: string;
    expertise: string;
    imageSrc?: string;
    imagePlaceholder: string;
  }[],
  additionalJudges: [
    {
      name: "Ms Kathy Coultas",
      subtitle:
        "A Leader, Advocate and Advisor connecting Business, Government and Community",
      imageSrc: "/judges/kathy-coultas.jpeg",
      imagePlaceholder: "[KATHY_COULTAS]",
    },
    {
      name: "Jeanette Cheah",
      subtitle: "HEX",
      badge: "HEX Choice Award · 1:1 Feedback",
      imageSrc: "/judges/jeanette-cheah.jpeg",
      imagePlaceholder: "[JEANETTE_CHEAH]",
    },
    {
      name: "Dr. Shuangmin Shi",
      subtitle:
        "Lecturer in Engineering Management, The University of Melbourne",
      imageSrc: "/judges/shuangmin-shi.jpeg",
      imagePlaceholder: "[SHUANGMIN_SHI]",
    },
    {
      name: "Dr. Golnar Khomami",
      subtitle: "Optus",
      imageSrc: "/judges/golnar-khomami.jpeg",
      imagePlaceholder: "[GOLNAR_KHOMAMI]",
    },
    {
      name: "Dr. Suryani Lim",
      subtitle: "Federation University",
      imageSrc: "/judges/suryani-lim.jpeg",
      imagePlaceholder: "[SURYANI_LIM]",
    },
    {
      name: "Dr. Pooria Pasbakhsh",
      subtitle:
        "R&D Material Scientist · Research Fellow and Adjunct Associate Professor",
      imageSrc: "/judges/pooria-pasbakhsh.jpeg",
      imagePlaceholder: "[POORIA_PASBAKHSH]",
    },
    {
      name: "Tim Tso",
      subtitle: "EdTex · Founder & President, Cambridge EdTech Society",
      imageSrc: "/judges/tim-tso.jpeg",
      imagePlaceholder: "[TIM_TSO]",
    },
    {
      name: "Yifei Wang",
      subtitle:
        "Founder, AIBUILD & Global Elite School\nAcademic, University of Melbourne",
      imageSrc: "/judges/yifei-wang.jpeg",
      imagePlaceholder: "[YIFEI_WANG]",
    },
  ],
};

export const openingSpeakersContent = {
  eyebrow: "Opening Speakers",
  title: "Opening Speakers",
  speakers: [
    {
      name: "UoM Representative",
      subtitle: "HoS / HoD, The University of Melbourne",
      topic: "Acknowledgement of Country and school / department welcome",
      imageSrc: "/opening-speakers/placeholder.png",
    },
    {
      name: "Prof. Lihai Zhang",
      subtitle:
        "Discipline Leader, Engineering Management, The University of Melbourne · Co-chair, ICA",
      topic: "Welcome speech on behalf of ICA",
      imageSrc: "/opening-speakers/lihai-zhang.jpeg",
    },
    {
      name: "Cr Gladys Liu",
      subtitle:
        "City of Melbourne Councillor · Invest Melbourne Advisory Board Member",
      topic:
        "City of Melbourne's commitment to the innovation ecosystem and Invest Melbourne's vision for supporting deep-tech startups and student founders in Melbourne",
      imageSrc: "/opening-speakers/gladys-liu.jpeg",
    },
    {
      name: "Dr Yew-Chin Koay FIEAust CPEng NER",
      subtitle:
        "2025 Professional Engineer of the Year · Senior Structural Engineering Advisor, Major Road Projects Victoria",
      topic:
        "Engineering innovation and commercialisation from the perspectives of Engineers Australia and Victorian infrastructure delivery",
      imageSrc: "/opening-speakers/yew-chin-koay.jpeg",
    },
    {
      name: "Prof. Eduard Hovy",
      subtitle: "Executive Director, Melbourne Connect",
      topic:
        "Melbourne Connect's role in advancing research, innovation and commercialisation",
      imageSrc: "/opening-speakers/eduard-hovy.jpeg",
    },
  ],
} as const;

export const organiserContent = {
  eyebrow: "Organiser",
  title: "Organiser",
  hostedByLabel: "Hosted by",
  organisedByLabel: "Organised by",
  supportersLabel: "Community Supporters",
  sponsorTitle: "Interested in supporting the event?",
  sponsorDescription:
    "Download our sponsor package to learn more about partnership opportunities and event exposure.",
  sponsorButtonLabel: "Download Sponsor Package",
  sponsorButtonHref: CTA_LINKS.sponsorPackage,
};

export const footerContent = {
  eyebrow: "Final Pitch Day",
  title:
    "Join us for Final Pitch Day",
  primaryCta: {
    label: "Buy Pitch Day Ticket",
    href: CTA_LINKS.audience,
  },
  secondaryCta: {
    label: "Watch Info Session Recording",
    href: CTA_LINKS.infoSession,
  },
  description:
    "Watch finalist teams present live, hear from guest speakers, and connect with the innovation community at the University of Melbourne.",
  socialLinks: [
    { label: "LinkedIn", href: SOCIAL_LINKS.linkedIn },
    { label: "Instagram", href: SOCIAL_LINKS.instagram },
    { label: "Xiaohongshu", href: SOCIAL_LINKS.xiaohongshu },
    { label: "WeChat / Other", href: SOCIAL_LINKS.wechatOrOther },
  ],
  contactTitle: "For partnerships, sponsorships, or general enquiries",
  contactEmail: "admin@innovateconnectalliance.org",
};

export const faqContent = [
  {
    question: "What can audience members expect on Final Pitch Day?",
    answer:
      "You can watch finalist pitches, hear opening speakers and industry insights, and join the awards plus networking session.",
  },
  {
    question: "Do I need to be a competitor to attend?",
    answer:
      "No. Audience attendance is open and welcomed. You can register as an audience member for Final Pitch Day.",
  },
  {
    question: "Will there be networking opportunities?",
    answer:
      "Yes. Final Pitch Day includes networking after the live judging and awards segments.",
  },
  {
    question: "Where will the Final Pitch Day be held?",
    answer:
      "The event will take place at the University of Melbourne, Parkville Campus.",
  },
];

export const brandAssets = {
  icaLogo: {
    name: "Innovate Connect Alliance",
    shortName: "ICA",
    src: "/logos/ica logo white.png",
    placeholder: "[ICA_LOGO]",
  },
  feitLogo: {
    name: "University of Melbourne FEIT",
    shortName: "FEIT",
    src: "/logos/uom-logo.jpg",
    placeholder: "[FEIT_LOGO]",
  },
  supporterLogos: [
    {
      name: "SEEYA",
      shortName: "SEEYA",
      src: "/logos/SeeYa.jpg",
      placeholder: "[PARTNER_LOGO_1]",
    },
    {
      name: "UoMCAN",
      shortName: "UoMCAN",
      src: "/logos/uomcan logo.png",
      placeholder: "[PARTNER_LOGO_2]",
    },
  ],
  additionalPartners: [
    {
      name: "MATE POWER",
      shortName: "MATE",
      src: "/logos/mate-power.jpg",
      placeholder: "[PARTNER_LOGO_3]",
    },
    {
      name: "Additional Partner",
      shortName: "P4",
      src: "",
      placeholder: "[PARTNER_LOGO_4]",
    },
  ],
};

export const heroV2Content = {
  eyebrow: "University-backed innovation challenge",
  trustPoints: [
    {
      title: "University-backed",
      description: "Hosted by the University of Melbourne FEIT",
    },
    {
      title: "Audience welcome",
      description: "Open to students, founders, and the wider community",
    },
    {
      title: "Community connection",
      description: "Experience finalist pitches, awards, and networking live",
    },
  ],
  visualCards: [
    {
      title: "Past event atmosphere",
      subtitle: "",
      src: "/community/event-photo3.png",
      placeholder: "[PAST_EVENT_IMAGE_1]",
    },
    {
      title: "Networking and audience",
      subtitle: "",
      src: "/community/event-photo4.jpg",
      placeholder: "[PAST_EVENT_IMAGE_2]",
    },
    {
      title: "Pitch and panel moments",
      subtitle: "",
      src: "/community/event-photo1.png",
      placeholder: "[PAST_EVENT_IMAGE_3]",
    },
  ],
  visualHighlight: {
    eyebrow: "Final Day · 9 May 2026",
    title: "Live pitches, judges, showcase, and networking",
  },
};

export const infoSessionsContent = {
  eyebrow: "Info Session Resources",
  title: "Catch up and stay event-ready",
  description:
    "Use these resources to understand the competition journey, event flow, and what to expect on Final Pitch Day.",
  helperTitle: "Why watch",
  helperPoints: [
    "Understand the timeline and judging process before Final Pitch Day",
    "Get context on event format, speakers, and audience experience",
    "Prepare key details before registering to attend",
  ],
  sessions: [
    {
      badge: "Session 1",
      title: "Online Info Session",
      date: "10 Apr 2026",
      time: "TBA",
      format: "Online",
      description:
        "A recorded overview of the competition format, key dates, judging expectations, and what to expect on Final Pitch Day.",
      registerHref: CTA_LINKS.infoSession,
      registerLinkPlaceholder: "",
    },
    {
      badge: "Session 2",
      title: "Onsite Team-Up Session",
      date: "18 Apr 2026",
      time: "TBA",
      format: "In person",
      description:
        "This in-person team-up session has concluded and is kept here for timeline reference.",
      registerHref: CTA_LINKS.teamUp,
      registerLinkPlaceholder: "",
    },
  ],
};

export const pastEventsContent = {
  eyebrow: "Past Events & Community",
  title: "A community built around ideas, collaboration, and momentum",
  description:
    "Beyond the competition itself, the event brings together students, builders, researchers, and community partners in a setting designed for connection, exchange, and shared ambition.",
  note: "",
  items: [
    {
      title: "Community moments",
      subtitle: "",
      src: "/community/event-photo3.png",
      placeholder: "[PAST_EVENT_IMAGE_1]",
      size: "hero",
    },
    {
      title: "Networking",
      subtitle: "",
      src: "/community/event-photo4.jpg",
      placeholder: "[PAST_EVENT_IMAGE_2]",
      size: "tall",
    },
    {
      title: "Community moments",
      subtitle: "",
      src: "/community/event-photo5.jpg",
      placeholder: "[PAST_EVENT_IMAGE_3]",
      size: "wide",
    },
    {
      title: "Networking",
      subtitle: "",
      src: "/community/event-photo1.png",
      placeholder: "[PAST_EVENT_IMAGE_4]",
      size: "standard",
    },
    {
      title: "Community moments",
      subtitle: "",
      src: "/community/event-photo2.png",
      placeholder: "[PAST_EVENT_IMAGE_5]",
      size: "standard",
    },
    {
      title: "Community moments",
      subtitle: "",
      src: "/community/event-photo6.jpg",
      placeholder: "[PAST_EVENT_IMAGE_6]",
      size: "standard",
    },
  ],
};
export const logoStripContent = [
  {
    label: "Host / Institutional Support",
    logos: [brandAssets.icaLogo, brandAssets.feitLogo],
  },
  {
    label: "Community Partners",
    logos: brandAssets.supporterLogos,
  },
  {
    label: "Additional Partners",
    logos: brandAssets.additionalPartners,
  },
];
export const partnerWallContent = {
  eyebrow: "Partners & Supporters",
  title: "Community and institutional support behind the event",
  description:
    "Show supporting organisations, community partners, and relevant institutional backing to strengthen trust and credibility.",
  groups: [
    {
      label: "Host / Institutional Support",
      description:
        "Core organisers and institutional affiliations connected to the event.",
      logos: [brandAssets.icaLogo, brandAssets.feitLogo],
    },
    {
      label: "Community & Supporting Partners",
      description:
        "Community groups and collaborators helping promote and support the event.",
      logos: [
        ...brandAssets.supporterLogos,
        ...brandAssets.additionalPartners,
      ],
    },
  ],
} as const;