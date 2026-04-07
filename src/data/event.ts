import { CTA_LINKS } from "./ctaLinks";

export const eventMeta = {
  title: "UoM Engineering & IT Innovation Competition 2026",
  subtitle:
    "A cross-disciplinary innovation challenge bringing together students, recent graduates, and early-stage builders to turn bold ideas into practical solutions.",
  date: "9 May 2026",
  time: "14:00–17:45",
  venue: "University of Melbourne, Parkville Campus",
  venueSuffix: "Venue TBA",
  hostedBy: "Hosted by the University of Melbourne FEIT",
  deliveredBy: "Delivered by Innovate Connect Alliance",
  supporters: ["SEEYA", "UoMCAN"],
  competitionDeadline: "11:59 PM, 10 April 2026",
  primaryCta: {
    label: "Apply to Compete",
    href: CTA_LINKS.compete,
  },
  secondaryCta: {
    label: "Join Info Session",
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
  { label: "FAQ", href: "#faq" },
  { label: "Sponsor", href: "#organiser" },
];

export const overviewContent = {
  eyebrow: "Why Join",
  title: "Practical ideas, strong teams, real visibility",
  intro:
    "A university-backed competition for students and early-stage builders who want to turn ideas into real solutions.",
  whyJoinHighlights: [
    {
      title: "Practical Challenge",
      body: "Work on ideas that solve real problems and can be clearly tested, explained, and presented.",
    },
    {
      title: "Cross-Disciplinary Teams",
      body: "Collaborate with people from different backgrounds and build stronger solutions together.",
    },
    {
      title: "Judge Visibility",
      body: "Gain feedback and exposure in front of judges, academics, and a wider innovation audience.",
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
  eyebrow: "Competition Journey",
  title: "A clear path from first step to Final Day",
  intro:
    "Follow the key milestones from info sessions and workshops through to submission and live pitching.",
  timelineTitle: "Key stages",
  timeline: [
    {
      step: "01",
      date: "10 Apr 2026",
      title: "Online Info Session",
      format: "Online",
      description:
        "A free introductory session covering the competition format, key dates, judging expectations, and how to get started.",
      registerHref: CTA_LINKS.infoSession,
      registerLabel: "Register",
      isDeadline: false,
    },
    {
      step: "02",
      date: "18 Apr 2026",
      title: "Onsite Team-Up Session",
      format: "In person",
      description:
        "A free in-person session for meeting potential collaborators, learning more about the competition, and forming cross-disciplinary teams.",
      registerHref: "",
      registerLabel: "Coming Soon",
      comingSoon: true,
      isDeadline: false,
    },
    {
      step: "03",
      date: "22 Apr 2026",
      title: "Hybrid Pitch Workshop",
      format: "Hybrid",
      description:
        "A practical workshop on how to structure, present, and communicate technical ideas effectively.",
      registerHref: "",
      registerLabel: "Coming Soon",
      comingSoon: true,
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
      registerLabel: "",
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
      registerLabel: "",
      isDeadline: true,
    },
    {
      step: "06",
      date: "9 May 2026",
      title: "Final Pitch Day",
      format: "Live Event",
      description:
        "Shortlisted teams pitch live, followed by awards, audience engagement, and networking.",
      registerHref: "",
      registerLabel: "Coming Soon",
      comingSoon: true,
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
        "Includes competition participation, Team-Up Info Sessions, Pitch Workshop, and Final Day entry.",
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
      time: "14:00–14:15",
      title: "Opening Remarks",
      description: "Opening of Final Pitch Day",
    },
    {
      time: "14:15–14:30",
      title: "Industry Insight Talk",
      description:
        "A short industry talk exploring the current landscape and future direction of engineering and innovation.",
    },
    {
      time: "14:30–15:45",
      title: "First Pitching Session",
      description: "",
    },
    {
      time: "15:45–16:00",
      title: "Break",
      description: "15-minute intermission",
    },
    {
      time: "16:00–17:00",
      title: "Second Pitching Session",
      description: "",
    },
    {
      time: "17:00–17:15",
      title: "Industry Reflection Talk",
      description:
        "A closing industry perspective on innovation, collaboration, and future opportunities.",
    },
    {
      time: "17:15–17:45",
      title: "Awards and Closing Celebration",
      description:
        "Recognising top teams and closing the event with a final celebration.",
    },
  ],
};

export const judgesContent = {
  eyebrow: "Judges",
  title: "Meet the confirmed judging panel",
  intro:
    "The judging panel brings together academic, technical, and research perspectives relevant to innovation, engineering, and applied technology.",
  judges: [
    {
      name: "Yifei Wang",
      title:
        "Founder, AIBUILD & Global Elite School\nAcademic, University of Melbourne",
      expertise:
        "AI product strategy, applied innovation, and commercialisation",
      imageSrc: "/judges/yifei-wang.jpeg",
      imagePlaceholder: "[JUDGE_IMAGE_1]",
    },
    {
      name: "Shuangmin Shi",
      title: "Lecturer in Engineering Management\nThe University of Melbourne",
      expertise:
        "Engineering management, systems thinking, and innovation education",
      imageSrc: "/judges/shuangmin-shi.jpeg",
      imagePlaceholder: "[JUDGE_IMAGE_2]",
    },
    {
      name: "Pooria Pasbakhsh",
      title:
        "R&D Material Scientist\nResearch Fellow and Adjunct Associate Professor",
      expertise:
        "Materials research, technical evaluation, and interdisciplinary research translation",
      imageSrc: "/judges/pooria-pasbakhsh.jpeg",
      imagePlaceholder: "[JUDGE_IMAGE_3]",
    },
  ],
  note: "More judges and guests may be announced.",
};

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
  eyebrow: "Ready to join the competition?",
  title:
    "Apply now and start building your idea with collaborators, mentors, and judges across disciplines.",
  primaryCta: {
    label: "Apply to Compete",
    href: CTA_LINKS.compete,
  },
  secondaryCta: {
    label: "Join Info Session",
    href: CTA_LINKS.infoSession,
  },
  contactTitle: "For partnerships, sponsorships, or general enquiries",
  contactEmail: "admin@innovateconnectalliance.org",
};

export const faqContent = [
  {
    question: "Can I apply without a team?",
    answer:
      "Yes. Individual applications are welcome, and participants can form teams during the onsite Team-Up Session.",
  },
  {
    question:
      "What is the difference between the Info Session and the Team-Up Session?",
    answer:
      "The Online Info Session introduces the competition format and key details. The Onsite Team-Up Session is designed for networking, idea exchange, and team formation.",
  },
  {
    question: "Is the Pitch Workshop available online?",
    answer:
      "Yes. The Pitch Workshop will be offered in a hybrid format, with both onsite and online participation options.",
  },
  {
    question: "What needs to be submitted for the draft round?",
    answer:
      "Teams need to submit a 5-page draft pitch deck together with a short demo progress update.",
  },
  {
    question: "Where will the Final Pitch Day be held?",
    answer:
      "The event will take place at the University of Melbourne, Parkville Campus. Exact venue details will be announced closer to the date.",
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
      title: "Individuals and teams",
      description: "Open to solo applicants and existing teams",
    },
    {
      title: "Team-up support",
      description: "Join the Team-Up Info Session to connect with others",
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
  eyebrow: "Team-Up Info Sessions",
  title: "Choose a session and take the first step",
  description:
    "Designed for solo applicants, curious builders, and anyone who wants a clearer path into the competition before applying.",
  helperTitle: "Why attend",
  helperPoints: [
    "Meet potential teammates and cross-disciplinary collaborators",
    "Ask practical questions about the competition format and process",
    "Choose the session option that best fits your schedule and format preference",
  ],
  sessions: [
    {
      badge: "Session 1",
      title: "Online Info Session",
      date: "10 Apr 2026",
      time: "TBA",
      format: "Online",
      description:
        "An online introduction to the competition, including key dates, participation format, judging expectations, and how to get started.",
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
        "Meet potential collaborators in person, exchange ideas, and form cross-disciplinary teams ahead of submission.",
      registerHref: CTA_LINKS.teamUp,
      registerLinkPlaceholder: "",
    },
  ],
};

export const pastEventsContent = {
  eyebrow: "Past Events & Community",
  title: "A glimpse of the community behind the event",
  description:
    "Use this section to show real event atmosphere, community energy, and the kind of engagement participants can expect around the competition.",
  note: "",
  items: [
    {
      title: "Community moments",
      subtitle: "",
      src: "/community/event-photo1.png",
      placeholder: "[PAST_EVENT_IMAGE_1]",
      size: "hero",
    },
    {
      title: "Networking and connections",
      subtitle: "",
      src: "/community/event-photo3.png",
      placeholder: "[PAST_EVENT_IMAGE_2]",
      size: "tall",
    },
    {
      title: "Talks and panel moments",
      subtitle: "",
      src: "/community/event-photo2.png",
      placeholder: "[PAST_EVENT_IMAGE_3]",
      size: "wide",
    },
    {
      title: "Event highlights",
      subtitle: "",
      src: "/community/event-photo4.jpg",
      placeholder: "[PAST_EVENT_IMAGE_4]",
      size: "standard",
    },
    {
      title: "Audience atmosphere",
      subtitle: "",
      src: "/community/event-photo5.jpg",
      placeholder: "[PAST_EVENT_IMAGE_5]",
      size: "standard",
    },
    {
      title: "Team and community energy",
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