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

export interface SponsorProfile {
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

export const sponsorProfiles: SponsorProfile[] = [
  {
    title: "Neighborhood partners",
    image: "/placeholders/sponsor-community.svg",
    alt: "Illustration representing neighborhood partner organizations working alongside John's Table.",
    note: "Community groups, churches, and local organizers can help extend the reach of meals, care, and follow-up support."
  },
  {
    title: "Local business sponsors",
    image: "/placeholders/sponsor-market.svg",
    alt: "Illustration representing local businesses supporting John's Table.",
    note: "Businesses can underwrite supplies, sponsor gatherings, or support the practical needs that keep direct service moving."
  },
  {
    title: "Founding supporters",
    image: "/placeholders/sponsor-foundation.svg",
    alt: "Illustration representing long-term financial supporters of John's Table.",
    note: "Individual donors, foundations, and lead supporters can help create the consistency that makes community care sustainable."
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
