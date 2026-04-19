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

export interface SupportSheet {
  title: string;
  image: string;
  alt: string;
  caption: string;
}

export interface SupportGroup {
  title: string;
  intro: string;
  members: string[];
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
      "Community meals and food support remain central to the organization's direct service approach."
  },
  {
    title: "Clothing and essentials",
    summary:
      "Practical care includes helping people access clothing and basic items that restore comfort and dignity."
  },
  {
    title: "Resource connection",
    summary:
      "John's Table aims to connect neighbors with the guidance and community support needed to move forward."
  }
];

export const contactMethods: ContactMethod[] = [
  {
    label: "General outreach",
    value: "Questions, volunteer interest, or program follow-up",
    note: "Route this to the main inbox once the organization confirms its preferred contact address."
  },
  {
    label: "Partnerships",
    value: "Sponsor and community collaboration requests",
    note: "Use this lane for local businesses, churches, and community groups looking to support the work."
  },
  {
    label: "Giving conversations",
    value: "Donation and in-kind support inquiries",
    note: "This is the right path for future online giving questions or larger support commitments."
  }
];

export const supportSheets: SupportSheet[] = [
  {
    title: "Community partners",
    image: "/partners/community-partners.png",
    alt: "Community partners image sheet provided by John's Table.",
    caption: "Current community partners shown from the source materials provided by John's Table."
  },
  {
    title: "Benefactors",
    image: "/partners/benefactors-a.png",
    alt: "Benefactors image sheet provided by John's Table.",
    caption: "Benefactors and supporting organizations shown from the source materials provided by John's Table."
  },
  {
    title: "Additional benefactors",
    image: "/partners/benefactors-b.png",
    alt: "Additional benefactors image sheet provided by John's Table.",
    caption: "Additional benefactors and community supporters shown from the source materials provided by John's Table."
  }
];

export const supportGroups: SupportGroup[] = [
  {
    title: "Community partners",
    intro:
      "These organizations reflect the collaborative network surrounding the work and helping John&apos;s Table stay connected to care, recovery, and neighborhood support.",
    members: [
      "Partnership HealthPlan of California",
      "Solano Recovery Project",
      "Convergence",
      "Archway Recovery Services",
      "Lighthouse Covenant Fellowship",
      "Drug Safe Solano",
      "Bray 60V Outreach"
    ]
  },
  {
    title: "Benefactors",
    intro:
      "These benefactors and supporting organizations represent the broader circle of financial, in-kind, and institutional backing visible in the materials you provided.",
    members: [
      "St. Mark's Food Pantry",
      "Kaiser Permanente",
      "The Matt Garcia Foundation",
      "Mission Samoa Inc.",
      "Public Employees Union Local 1",
      "Panera Bread",
      "Insulators Local 16",
      "Virtue Roofing Group",
      "Right Way Garage Doors",
      "Compassionate Coordinated Care"
    ]
  }
];

export const donationOptions: DonationOption[] = [
  {
    title: "Support shared meals",
    summary: "Help make it possible to welcome people with food, conversation, and a sense of belonging.",
    note: "This lane speaks to ingredients, serving supplies, and the hospitality that turns a meal into a point of care."
  },
  {
    title: "Provide essentials",
    summary: "Strengthen the clothing and basic-item support that meets immediate needs with dignity.",
    note: "This lane works for financial support today and can later expand to in-kind giving campaigns."
  },
  {
    title: "Back resource connection",
    summary: "Support the relational work that helps neighbors move from urgent help toward greater stability.",
    note: "This lane is well suited to sponsor-backed outreach, coordination, and other forms of practical follow-through."
  }
];
