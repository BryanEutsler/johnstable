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

export interface SponsorPlaceholder {
  title: string;
  image: string;
  alt: string;
  note: string;
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

export const sponsorPlaceholders: SponsorPlaceholder[] = [
  {
    title: "Community partner placeholder",
    image: "/placeholders/sponsor-community.svg",
    alt: "Placeholder image for a future community partner logo.",
    note: "Use this slot for a neighborhood organization, church, or outreach partner."
  },
  {
    title: "Local sponsor placeholder",
    image: "/placeholders/sponsor-market.svg",
    alt: "Placeholder image for a future local sponsor logo.",
    note: "Use this slot for a business helping fund meals, clothing, or logistics."
  },
  {
    title: "Founding supporter placeholder",
    image: "/placeholders/sponsor-foundation.svg",
    alt: "Placeholder image for a future founding supporter logo.",
    note: "Use this slot for a grantmaker, donor circle, or long-term backer."
  }
];

export const donationOptions: DonationOption[] = [
  {
    title: "Meals and table service",
    summary: "Support the direct work of gathering people around food, care, and conversation.",
    note: "A future donation processor can map gifts here for meal ingredients, serving supplies, and hospitality."
  },
  {
    title: "Clothing and essentials",
    summary: "Help stock the practical items that restore comfort, dignity, and immediate relief.",
    note: "This lane is suited for both cash gifts and in-kind support once fulfillment details are confirmed."
  },
  {
    title: "Resource connection",
    summary: "Back the coordination work that helps neighbors move from crisis support toward steadier footing.",
    note: "Use this area later for sponsor-backed outreach, transit help, and referral support."
  }
];
