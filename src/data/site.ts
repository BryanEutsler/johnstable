export interface NavItem {
  href: string;
  label: string;
}

export interface ProjectHighlight {
  title: string;
  summary: string;
}

export interface ContactMethod {
  label: string;
  value: string;
  href?: string;
  note?: string;
}

export interface Supporter {
  name: string;
  group: "Community Partner" | "Benefactor";
  image: string;
  alt: string;
}

export interface DonationOption {
  title: string;
  summary: string;
  note: string;
}

export const siteMeta = {
  name: "John's Table",
  tagline: "501(c)(3) public charity",
  mission:
    "Healing our community one meal at a time by providing food, clothing, and resources to those in need.",
  vision:
    "Spreading love and care throughout the community by helping neighbors move toward more self-sustaining futures.",
  navItems: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/community-partners-and-sponsors", label: "Sponsors" },
    { href: "/donate", label: "Donate" },
    { href: "/contact", label: "Contact" }
  ] satisfies NavItem[]
};

export const projectHighlights: ProjectHighlight[] = [
  {
    title: "Meals and food access",
    summary:
      "Shared meals remain a visible expression of welcome, care, and practical support in the community."
  },
  {
    title: "Clothing and essentials",
    summary:
      "John's Table helps meet immediate needs with clothing, basic items, and direct material support."
  },
  {
    title: "Resource connection",
    summary:
      "The work also includes helping neighbors connect with community resources, recovery support, and next-step guidance."
  }
];

export const contactMethods: ContactMethod[] = [
  {
    label: "General outreach",
    value: "Questions, volunteer interest, or program follow-up",
    note: "This contact lane covers general questions, volunteer interest, and community outreach."
  },
  {
    label: "Partnerships",
    value: "Sponsor and community collaboration requests",
    note: "Use this path for local businesses, churches, and organizations that want to partner with John's Table."
  },
  {
    label: "Giving conversations",
    value: "Donation and in-kind support inquiries",
    note: "This is the right place for conversations about giving, benefactors, or in-kind support."
  }
];

export const supporters: Supporter[] = [
  {
    name: "Partnership HealthPlan of California",
    group: "Community Partner",
    image: "/logos/partnership-healthplan.png",
    alt: "Partnership HealthPlan of California logo"
  },
  {
    name: "Solano Recovery Project",
    group: "Community Partner",
    image: "/logos/solano-recovery-project.png",
    alt: "Solano Recovery Project logo"
  },
  {
    name: "Convergence",
    group: "Community Partner",
    image: "/logos/convergence.png",
    alt: "Convergence logo"
  },
  {
    name: "Archway Recovery Services",
    group: "Community Partner",
    image: "/logos/archway-recovery-services.png",
    alt: "Archway Recovery Services logo"
  },
  {
    name: "Lighthouse Covenant Fellowship",
    group: "Community Partner",
    image: "/logos/lighthouse-covenant-fellowship.png",
    alt: "Lighthouse Covenant Fellowship logo"
  },
  {
    name: "Drug Safe Solano",
    group: "Community Partner",
    image: "/logos/drug-safe-solano.png",
    alt: "Drug Safe Solano logo"
  },
  {
    name: "Bray 60V Outreach",
    group: "Community Partner",
    image: "/logos/bray-60v-outreach.png",
    alt: "Bray 60V Outreach logo"
  },
  {
    name: "St. Mark's Food Pantry",
    group: "Benefactor",
    image: "/logos/st-marks-food-pantry.png",
    alt: "St. Mark's Food Pantry logo"
  },
  {
    name: "Kaiser Permanente",
    group: "Benefactor",
    image: "/logos/kaiser-permanente.png",
    alt: "Kaiser Permanente logo"
  },
  {
    name: "The Matt Garcia Foundation",
    group: "Benefactor",
    image: "/logos/matt-garcia-foundation.png",
    alt: "The Matt Garcia Foundation logo"
  },
  {
    name: "Mission Samoa Inc.",
    group: "Benefactor",
    image: "/logos/mission-samoa.png",
    alt: "Mission Samoa Inc. logo"
  },
  {
    name: "Panera Bread",
    group: "Benefactor",
    image: "/logos/panera-bread.png",
    alt: "Panera Bread logo"
  },
  {
    name: "Public Employees Union Local 1",
    group: "Benefactor",
    image: "/logos/public-employees-union-local-1.png",
    alt: "Public Employees Union Local 1 logo"
  },
  {
    name: "Insulators Local 16",
    group: "Benefactor",
    image: "/logos/insulators-local-16.png",
    alt: "Insulators Local 16 logo"
  },
  {
    name: "Virtue Roofing Group",
    group: "Benefactor",
    image: "/logos/virtue-roofing-group.png",
    alt: "Virtue Roofing Group logo"
  },
  {
    name: "Right Way Garage Doors",
    group: "Benefactor",
    image: "/logos/right-way-garage-doors.png",
    alt: "Right Way Garage Doors logo"
  },
  {
    name: "Compassionate Coordinated Care",
    group: "Benefactor",
    image: "/logos/compassionate-coordinated-care.png",
    alt: "Compassionate Coordinated Care logo"
  }
];

export const donationOptions: DonationOption[] = [
  {
    title: "Support shared meals",
    summary: "Help make it possible to welcome people with food, conversation, and a sense of belonging.",
    note: "Gifts in this lane support meal ingredients, serving supplies, and the hospitality that makes people feel seen."
  },
  {
    title: "Provide essentials",
    summary: "Strengthen the clothing and basic-item support that meets immediate needs with dignity.",
    note: "This lane reflects the practical essentials named in the mission and can include both direct giving and in-kind support."
  },
  {
    title: "Back resource connection",
    summary: "Support the relational work that helps neighbors move from urgent help toward greater stability.",
    note: "This lane speaks to outreach, coordination, and the next-step support that helps care continue beyond the first response."
  }
];
