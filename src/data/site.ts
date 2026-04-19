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
    {
      href: "/community-partners-and-sponsors",
      label: "Partners & Sponsors"
    },
    { href: "/contact", label: "Contact" }
  ] satisfies NavItem[],
  socialLinks: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" }
  ]
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
    label: "General inquiries",
    value: "Contact details coming soon",
    note: "Replace with the primary email or phone number once confirmed."
  },
  {
    label: "Partnerships",
    value: "Partner and sponsor outreach coming soon",
    note: "Use this area later for sponsor inquiries and collaboration requests."
  }
];
