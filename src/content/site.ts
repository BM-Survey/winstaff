import {
  BadgeCheck,
  Briefcase,
  Building2,
  ClipboardList,
  Database,
  Handshake,
  Headphones,
  HeartHandshake,
  Landmark,
  Layers,
  Mail,
  MapPin,
  Phone,
  RadioTower,
  Search,
  ShieldCheck,
  Truck,
  UserCheck,
  Users,
  Wallet,
  Zap,
  ClipboardCheck,
  Clock,
  Crown,
  FileSignature,
  FileText,
  FolderKanban,
  Gauge,
  Lightbulb,
  Repeat,
  Workflow,
  Hourglass,
  ShieldAlert,
  TrendingDown,
  CalendarCheck,
  ChartBar,
  Code,
  Cpu,
  Factory,
  ListChecks,
  Puzzle,
  Rocket,
  Scaling,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

/* ---------- Company ---------- */
export const company = {
  name: "WinStaff Solutions",
  tagline: "Your Partner in HR Success",
  description:
    "A leading HR consultancy in India helping businesses reach their full potential through effective talent management.",
  url: "https://www.winstaffsolutions.com", // TODO: confirm domain
  location: "Pune, Maharashtra, India",
  phone: "+91 92255 20510",
  phoneHref: "tel:+919225520510",
  email: "hr@brown-boar-197111.hostingersite.com",
  foundedYear: 2014, // TODO: confirm
  social: [
    { label: "LinkedIn", href: "https://linkedin.com", key: "linkedin" }, // TODO: confirm
    { label: "Facebook", href: "https://facebook.com", key: "facebook" }, // TODO: confirm
    { label: "Instagram", href: "https://instagram.com", key: "instagram" }, // TODO: confirm
  ],
};

/* ---------- Navigation ---------- */
export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const ctas = {
  hire: { label: "Hire Talent", href: "/employers" },
  job: { label: "Find a Job", href: "/contact#job-seeker" },
  enquiry: { label: "Send an Enquiry", href: "/contact" },
};

/* ---------- Hero ---------- */
export const hero = {
  eyebrow: "HR Consultancy & Staffing · Pune, India",
  badge: "Hiring across India right now",
  headline: { before: "Build teams that move your business", highlight: "forward." },
  subtext:
    "From executive search to payroll and compliance, WinStaff Solutions gives growing companies the people and HR expertise they need, without the overhead of an in-house team.",
  proofPoints: ["No fees for job seekers", "Shortlist in 7 days", "PF, ESIC & payroll handled"], // TODO: confirm
  trust: {
    rating: "4.9/5", // TODO: confirm
    text: "Rated by 150+ hiring managers", // TODO: confirm
    avatars: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=96&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=96&q=80",
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&q=80",
    ],
  },
  image: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    alt: "Indian HR professionals reviewing candidate profiles together in a modern Pune office",
  },
  imageSecondary: {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    alt: "Candidate shaking hands with a recruiter after a successful interview",
  },
  floatingStats: [
    { value: "5,000+", label: "Successful placements", trend: "+18% this year" }, // TODO: confirm
    { value: "98%", label: "Client retention", trend: "Across 10 industries" }, // TODO: confirm
  ],
};

/* ---------- Clients ---------- */
export const clients = [
  { name: "DBS", logo: "/clients/client-1.png" },
  { name: "Zielotech", logo: "/clients/client-2.png" },
  { name: "Xpressbees", logo: "/clients/client-3.png" },
  { name: "AS Enterprises", logo: "/clients/client-4.png" },
  { name: "Fashion and tailoring client", logo: "/clients/client-5.png" }, // TODO: confirm company name (logo is a monogram only)
];

/* ---------- Stats ---------- */
export type Stat = { value: number; suffix?: string; label: string };

export const stats: Stat[] = [
  { value: 10, suffix: "+", label: "Years of experience" }, // TODO: confirm
  { value: 5000, suffix: "+", label: "Placements made" }, // TODO: confirm
  { value: 150, suffix: "+", label: "Clients served" }, // TODO: confirm
  { value: 10, label: "Industries covered" },
];

/* ---------- Services ---------- */
export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const services: Service[] = [
  {
    slug: "recruitment",
    title: "Recruitment Services",
    description:
      "Find the right people faster, from entry-level hires to senior executives.",
    icon: Search,
    items: [
      "Executive Recruitment",
      "Recruitment Process Outsourcing (RPO)",
      "Permanent Placement",
      "Related Services",
    ],
  },
  {
    slug: "hr-consulting",
    title: "HR Consulting",
    description:
      "Practical HR advice and systems that help your people and policies scale.",
    icon: ClipboardList,
    items: [
      "HR Consulting",
      "Performance Management",
      "Project-based Assignments",
      "HR Documentation",
    ],
  },
  {
    slug: "outsourcing",
    title: "Outsourcing Services",
    description:
      "Hand us the admin so your team can focus on the work that matters.",
    icon: Layers,
    items: [
      "Manpower Outsourcing",
      "Statutory Compliance",
      "Temp Staffing",
      "Payroll Management",
    ],
  },
];

/* ---------- Audience split ---------- */
export type Audience = {
  key: "employers" | "jobSeekers";
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  benefits: string[];
  cta: { label: string; href: string };
};

export const audiences: Audience[] = [
  {
    key: "employers",
    eyebrow: "For Employers",
    title: "Hire talent or outsource your HR",
    description:
      "Permanent, contract and temp-to-perm staffing, plus payroll, compliance and background checks, all under one roof.",
    icon: Building2,
    benefits: [
      "Pre-screened candidates across BPO, KPO, logistics, banking and telecom",
      "Flexible models: permanent, contract or temp-to-perm",
      "Payroll, statutory compliance and verification handled for you",
    ],
    cta: { label: "Hire Talent", href: "/employers" },
  },
  {
    key: "jobSeekers",
    eyebrow: "For Job Seekers",
    title: "Find a role that fits your ambition",
    description:
      "We match your skills with trusted employers across India and support you from application to onboarding.",
    icon: UserCheck,
    benefits: [
      "Openings from entry level to senior leadership",
      "Interview preparation and honest, timely feedback",
      "No fees for candidates, ever",
    ],
    cta: { label: "Find a Job", href: "/contact#job-seeker" },
  },
];

/* ---------- Process ---------- */
export type Step = { title: string; description: string };

export const process: Step[] = [
  {
    title: "Understand your needs",
    description:
      "We learn your business, culture and role requirements before we search.",
  },
  {
    title: "Source & screen",
    description:
      "We tap our talent pool and networks, then screen for skills and fit.",
  },
  {
    title: "Interview & shortlist",
    description:
      "You meet only the strongest candidates, with our notes and assessments.",
  },
  {
    title: "Onboard & support",
    description:
      "We handle documentation and stay involved well after day one.",
  },
];

/* ---------- Industries ---------- */
export type Industry = { name: string; icon: LucideIcon; blurb: string };

export const industries: Industry[] = [
  { name: "BPO", icon: Headphones, blurb: "Voice, chat and back-office teams at scale" },
  { name: "KPO", icon: Database, blurb: "Analysts, researchers and domain specialists" },
  { name: "RPO", icon: Users, blurb: "End-to-end recruitment as a managed service" },
  { name: "Logistics", icon: Truck, blurb: "Warehouse, fleet and supply chain staffing" },
  { name: "Banking", icon: Landmark, blurb: "Operations, sales and compliance roles" },
  { name: "Telecom", icon: RadioTower, blurb: "Network, support and field workforce" },
  { name: "Information Technology", icon: Code, blurb: "Software, data, cloud, DevOps and security" },
  { name: "Semiconductor & Electronics", icon: Cpu, blurb: "VLSI, ASIC, verification and embedded" },
  { name: "Engineering & Manufacturing", icon: Factory, blurb: "Automation, controls and plant operations" },
  { name: "Corporate & Professional", icon: Briefcase, blurb: "Operations, finance, HR and project roles" },
];

/* ---------- Why choose us ---------- */
export type Feature = { title: string; description: string; icon: LucideIcon };

export const whyChooseUs = {
  eyebrow: "Why WinStaff",
  title: "A partner, not just a vendor",
  description:
    "We combine deep industry knowledge with a hands-on approach, so every hire and every HR process works for your business long term.",
  image: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    alt: "Indian business team collaborating around a table in a bright office",
  },
  features: [
    {
      title: "Industry Expertise",
      description:
        "Specialist recruiters who understand the roles, pay bands and pace of your sector.",
      icon: Briefcase,
    },
    {
      title: "Extensive Talent Pool",
      description:
        "A ready network of candidates from entry level to senior executives.",
      icon: Users,
    },
    {
      title: "100% Satisfaction",
      description:
        "Our commitment continues beyond the hire, with replacement support and follow-ups.",
      icon: BadgeCheck,
    },
    {
      title: "Cost-Effective Outsourcing",
      description:
        "Get a full HR function for less than the cost of an in-house team.",
      icon: Wallet,
    },
  ] satisfies Feature[],
};

/* ---------- Testimonials ---------- */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "WinStaff filled 40 customer-support seats in under three weeks, with attrition far below what we were used to.", // TODO: confirm
    name: "Placeholder Name", // TODO: confirm
    role: "Head of Operations",
    company: "BPO client, Pune",
  },
  {
    quote:
      "Moving payroll and compliance to WinStaff freed up our small HR team to focus on people instead of paperwork.", // TODO: confirm
    name: "Placeholder Name", // TODO: confirm
    role: "Director",
    company: "Logistics client",
  },
  {
    quote:
      "They understood the brief, sent a tight shortlist and we closed a senior finance role in our first round.", // TODO: confirm
    name: "Placeholder Name", // TODO: confirm
    role: "CFO",
    company: "Banking client",
  },
];

/* ---------- FAQ ---------- */
export type FAQ = { question: string; answer: string };

export const faqs: FAQ[] = [
  {
    question: "What is the difference between permanent, contract and temp-to-perm staffing?",
    answer:
      "Permanent staffing places a candidate directly on your payroll. Contract staffing keeps the employee on WinStaff's payroll for a defined period. Temp-to-perm starts as a contract and converts to a permanent role once you are confident in the fit.",
  },
  {
    question: "How quickly can you fill a position?",
    answer:
      "Volume roles in BPO, logistics or telecom are typically filled within one to three weeks. Specialist and leadership searches usually take four to eight weeks depending on the brief.", // TODO: confirm
  },
  {
    question: "Which statutory compliances do you manage for outsourced staff?",
    answer:
      "We handle PF, ESIC, professional tax, labour welfare fund, gratuity and related filings, along with offer letters, contracts and exit formalities, so you stay compliant with Indian labour law.",
  },
  {
    question: "Do you provide background verification?",
    answer:
      "Yes. We verify identity, education, employment history and address, and can add criminal record and reference checks as required by your industry.",
  },
  {
    question: "Is there any charge for job seekers?",
    answer:
      "No. Candidates never pay WinStaff a fee. Our services are paid for by employers.",
  },
];

/* ---------- CTA banner ---------- */
export const ctaBanner = {
  title: "Ready to build your team?",
  description:
    "Tell us what you need and we will come back within one working day with a plan and a shortlist timeline.",
  cta: ctas.enquiry,
  secondary: { label: `Call ${company.phone}`, href: company.phoneHref },
};

/* ---------- Footer ---------- */
export const footer = {
  headline: "Let's build your team together.",
  blurb:
    "HR consultancy and staffing partner for growing businesses across India. Recruitment, HR consulting and outsourcing from Pune.",
  cta: { label: "Start a Conversation", href: "/contact" },
  newsletter: {
    title: "Hiring insights, once a month",
    description: "Salary trends, compliance updates and hiring tips for Indian employers.",
    placeholder: "Work email",
    button: "Subscribe",
    note: "No noise. Unsubscribe any time.",
  },
  serviceLinks: [
    { label: "Executive Recruitment", href: "/services#recruitment" },
    { label: "Permanent Placement", href: "/services#recruitment" },
    { label: "RPO", href: "/services/rpo" },
    { label: "HR Consulting", href: "/services#hr-consulting" },
    { label: "Performance Management", href: "/services#hr-consulting" },
    { label: "HR Documentation", href: "/services#hr-consulting" },
    { label: "Manpower Outsourcing", href: "/services#outsourcing" },
    { label: "Temp Staffing", href: "/services#outsourcing" },
    { label: "Payroll Management", href: "/services#outsourcing" },
    { label: "Statutory Compliance", href: "/services#outsourcing" },
  ] satisfies NavLink[],
  companyLinks: [
    ...nav,
    { label: "For Employers", href: "/employers" },
    { label: "LinkedIn", href: company.social[0].href },
  ] satisfies NavLink[],
  headOffice: {
    title: "Head office",
    lines: ["Pune, Maharashtra", "India"], // TODO: add street address if you want it shown
  },
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ] satisfies NavLink[],
  tagline: "Pune, India · Serving clients across India",
  copyright: `© 2026 ${company.name}. All rights reserved.`,
  watermark: "WINSTAFF",
};

/* ---------- About page ---------- */
export const about = {
  hero: {
    eyebrow: "About WinStaff",
    title: { before: "People-first HR, built for", highlight: "growing Indian businesses" },
    description:
      "WinStaff Solutions is a Pune-based HR consultancy and staffing firm. We help companies:",
    pillars: ["Hire well", "Stay compliant", "Build teams that last"],
    cards: [
      { title: "Pune, India", text: "Serving clients across India" },
      { title: "10 industries", text: "Covered by our teams" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
      alt: "WinStaff team members collaborating in a bright, modern office",
    },
  },
  story: {
    eyebrow: "Our story",
    title: "From a small recruitment desk to a full HR partner",
    paragraphs: [
      `WinStaff Solutions started in ${company.foundedYear} with a simple idea: hiring should be faster, fairer and less stressful for everyone involved. We began by placing customer-support and back-office talent for BPO and KPO firms in Pune.`, // TODO: confirm
      "As our clients grew, so did their needs. Today we offer end-to-end recruitment, HR consulting and outsourcing, from executive search to payroll, statutory compliance and background verification.",
      "What has not changed is how we work: we take time to understand each business, we tell clients the truth about the market, and we stay involved long after a candidate has joined.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Recruiter discussing a role with a candidate across a desk",
    },
  },
  missionVision: [
    {
      title: "Our mission",
      description:
        "To help businesses reach their full potential through effective talent management, and to connect every job seeker with work that fits their skills and ambition.",
    },
    {
      title: "Our vision",
      description:
        "To be the most trusted HR partner for growing businesses in India, known for honest advice, reliable delivery and people who stay.",
    },
  ],
  values: [
    {
      title: "Integrity",
      description: "Straight answers on timelines, salaries and fit, even when they are not what you hoped to hear.",
      icon: ShieldCheck,
    },
    {
      title: "Speed with care",
      description: "Fast shortlists without cutting corners on screening or verification.",
      icon: Zap,
    },
    {
      title: "Partnership",
      description: "We work as an extension of your team, not a vendor at arm's length.",
      icon: Handshake,
    },
    {
      title: "Respect for candidates",
      description: "Clear communication, timely feedback and never a fee for job seekers.",
      icon: HeartHandshake,
    },
  ] satisfies Feature[],
  leadership: {
    eyebrow: "Leadership",
    title: "The people behind WinStaff",
    description: "A small, experienced team with backgrounds in recruitment, HR operations and labour compliance.",
    members: [
      {
        name: "Placeholder Name", // TODO: confirm
        role: "Founder & Director",
        bio: "15+ years in recruitment and HR operations across BPO and banking.", // TODO: confirm
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Placeholder Name", // TODO: confirm
        role: "Head of Recruitment",
        bio: "Leads sourcing and screening for volume and specialist hiring.", // TODO: confirm
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      },
      {
        name: "Placeholder Name", // TODO: confirm
        role: "Head of Compliance & Payroll",
        bio: "Keeps clients on the right side of PF, ESIC and labour law.", // TODO: confirm
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      },
    ],
  },
};

/* ---------- Services page ---------- */
export type SubService = { title: string; description: string; icon: LucideIcon; href?: string };

export type ServiceGroup = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  icon: LucideIcon;
  image: { src: string; alt: string };
  outcomes: string[];
  subServices: SubService[];
};

export const servicesPage = {
  hero: {
    eyebrow: "Our services",
    title: "Recruitment, HR consulting and outsourcing under one roof",
    description:
      "Pick a single service or hand us the whole HR function. Every engagement starts with understanding your business and ends with people who stay.",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
      alt: "HR consultants reviewing a hiring plan on a whiteboard",
    },
  },
  groups: [
    {
      slug: "recruitment",
      eyebrow: "Recruitment Services",
      title: "The right people, from entry level to the boardroom",
      description:
        "We combine an active talent pool with targeted search to fill roles quickly and accurately. Every candidate is screened, verified and briefed before you meet them.",
      icon: Search,
      image: {
        src: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=1200&q=80",
        alt: "Candidate interview in progress at a Pune office",
      },
      outcomes: ["Shortlist within 7 working days", "Replacement guarantee on permanent hires", "Verified education, employment and identity"], // TODO: confirm
      subServices: [
        {
          title: "Executive Recruitment",
          description: "Confidential search for leadership and senior specialist roles, with market mapping and structured assessment.",
          icon: Crown,
        },
        {
          title: "Recruitment Process Outsourcing (RPO)",
          description: "A dedicated WinStaff team runs part or all of your hiring, from job briefs to offer letters, under your brand.",
          icon: Workflow,
          href: "/services/rpo",
        },
        {
          title: "Permanent Placement",
          description: "Mid-level and volume hiring for roles that join your payroll directly, backed by a replacement guarantee.",
          icon: UserCheck,
        },
        {
          title: "Related Services",
          description: "Salary benchmarking, job description writing, interview panels and candidate assessments on request.",
          icon: ClipboardCheck,
        },
      ],
    },
    {
      slug: "hr-consulting",
      eyebrow: "HR Consulting",
      title: "HR systems that scale with your business",
      description:
        "Practical, hands-on consulting for companies that need HR expertise without a large in-house team. We build the policies, processes and documents, then help you run them.",
      icon: ClipboardList,
      image: {
        src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        alt: "HR consultant presenting a performance framework to a client team",
      },
      outcomes: ["Policies aligned with Indian labour law", "Clear KPIs and review cycles", "Fixed-scope, fixed-fee projects"],
      subServices: [
        {
          title: "HR Consulting",
          description: "Audit of your current HR setup, followed by a prioritised roadmap for policies, structure and compliance.",
          icon: Lightbulb,
        },
        {
          title: "Performance Management",
          description: "Goal setting, KPI frameworks, appraisal cycles and manager training that people actually use.",
          icon: Gauge,
        },
        {
          title: "Project-based Assignments",
          description: "Short-term HR projects such as restructuring, handbook rewrites, engagement surveys or audits.",
          icon: FolderKanban,
        },
        {
          title: "HR Documentation",
          description: "Offer letters, contracts, policies, handbooks and exit paperwork drafted and kept current.",
          icon: FileText,
        },
      ],
    },
    {
      slug: "outsourcing",
      eyebrow: "Outsourcing Services",
      title: "Hand us the admin and stay compliant",
      description:
        "From deploying a contract workforce to running monthly payroll and statutory filings, our outsourcing services cost less than an in-house HR team and remove the compliance risk.",
      icon: Layers,
      image: {
        src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
        alt: "Payroll specialist processing monthly salaries and statutory filings",
      },
      outcomes: ["Staff on WinStaff payroll within days", "PF, ESIC, PT and LWF filed on time", "Single monthly invoice, full reporting"],
      subServices: [
        {
          title: "Manpower Outsourcing",
          description: "Deploy skilled and semi-skilled staff on our payroll for projects, seasonal peaks or ongoing operations.",
          icon: Users,
        },
        {
          title: "Statutory Compliance",
          description: "Registrations, monthly filings, registers and audits under PF, ESIC, professional tax, LWF and shops & establishments acts.",
          icon: ShieldCheck,
        },
        {
          title: "Temp Staffing",
          description: "Short-term and temp-to-perm staffing with quick deployment and the option to absorb staff later.",
          icon: Clock,
        },
        {
          title: "Payroll Management",
          description: "End-to-end monthly payroll: attendance, salary processing, payslips, TDS, Form 16 and full-and-final settlements.",
          icon: Wallet,
        },
      ],
    },
  ] satisfies ServiceGroup[],
  engagementModels: {
    eyebrow: "Engagement models",
    title: "Hire the way that suits you",
    description: "Three ways to bring people on board. Mix them across teams as your needs change.",
    models: [
      {
        title: "Permanent staffing",
        description: "Candidates join your payroll directly. Best for core roles and long-term growth.",
        points: ["Success-fee pricing", "Replacement guarantee", "Full-cycle recruitment"],
        icon: Briefcase,
      },
      {
        title: "Contract hiring",
        description: "Staff work for you but stay on WinStaff's payroll for a defined period.",
        points: ["Fast deployment", "We handle payroll & compliance", "Scale up or down monthly"],
        icon: FileSignature,
      },
      {
        title: "Temp-to-perm",
        description: "Start on contract, convert to permanent once you are confident in the fit.",
        points: ["Try before you commit", "Reduced hiring risk", "Smooth transfer to your payroll"],
        icon: Repeat,
      },
    ],
  },
};

/* ---------- Industries page ---------- */
export type IndustryDetail = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  icon: LucideIcon;
  image: { src: string; alt: string };
  roles: string[];
  challenges: string[];
  howWeHelp: string[];
};

export const industriesPage = {
  hero: {
    eyebrow: "Industries",
    title: "Specialist hiring for the sectors that power India's services economy",
    description:
      "Every industry hires differently. Our recruiters work in sector teams, so they know the roles, the pay bands, the attrition patterns and the compliance rules before the first call.",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
      alt: "Team of professionals working together in a modern Indian office",
    },
  },
  details: [
    {
      slug: "bpo",
      name: "BPO",
      tagline: "Business Process Outsourcing",
      description:
        "High-volume hiring for voice, chat, email and back-office processes, with the speed and retention that BPO margins depend on.",
      icon: Headphones,
      image: {
        src: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80",
        alt: "Customer support agents on calls at a BPO floor",
      },
      roles: ["Customer Support Executives", "Technical Support", "Team Leaders & QA", "Trainers", "Operations Managers"],
      challenges: ["Ramp-ups of 50 to 500 seats in weeks", "High early attrition", "Shift and language requirements"],
      howWeHelp: [
        "Dedicated volume-hiring desks with daily pipelines",
        "Voice, accent and typing assessments before shortlist",
        "Replacement cover for early attrition", // TODO: confirm
      ],
    },
    {
      slug: "kpo",
      name: "KPO",
      tagline: "Knowledge Process Outsourcing",
      description:
        "Analysts, researchers and domain specialists for finance, legal, healthcare and market-research processes.",
      icon: Database,
      image: {
        src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        alt: "Analyst reviewing charts and reports on a laptop",
      },
      roles: ["Financial Analysts", "Research Associates", "Data Analysts", "Legal Process Associates", "Medical Coders"],
      challenges: ["Niche skill sets with small talent pools", "Domain certification requirements", "Client-specific confidentiality"],
      howWeHelp: [
        "Sector-specific sourcing via alumni and professional networks",
        "Skill tests and case-based interviews",
        "NDA-backed, confidential hiring processes",
      ],
    },
    {
      slug: "rpo",
      name: "RPO",
      tagline: "Recruitment Process Outsourcing",
      description:
        "For companies that want to outsource hiring itself: a WinStaff team runs your recruitment end to end, under your brand and your metrics.",
      icon: Users,
      image: {
        src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80",
        alt: "Recruitment team reviewing candidate pipelines together",
      },
      roles: ["Embedded Recruiters", "Sourcing Specialists", "Recruitment Coordinators", "Employer Branding Support"],
      challenges: ["Unpredictable hiring volumes", "Cost of a full in-house TA team", "Inconsistent candidate experience"],
      howWeHelp: [
        "Scalable recruiter capacity, billed monthly",
        "Shared ATS, dashboards and SLA reporting",
        "Consistent, branded candidate communication",
      ],
    },
    {
      slug: "logistics",
      name: "Logistics",
      tagline: "Supply chain, warehousing & fleet",
      description:
        "Blue-collar and supervisory staffing for warehouses, distribution hubs, last-mile delivery and transport operations across Maharashtra and beyond.",
      icon: Truck,
      image: {
        src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
        alt: "Warehouse staff moving packages on a loading dock",
      },
      roles: ["Warehouse Associates", "Pickers & Packers", "Fleet Supervisors", "Delivery Coordinators", "Inventory Executives"],
      challenges: ["Seasonal peaks and sudden volume spikes", "Multi-site deployment", "Contract labour compliance"],
      howWeHelp: [
        "Temp and contract staff deployed within days",
        "Staff on WinStaff payroll with full statutory cover",
        "Site-level supervisors and attendance management",
      ],
    },
    {
      slug: "banking",
      name: "Banking",
      tagline: "Banking, NBFC & financial services",
      description:
        "Sales, operations and compliance talent for banks, NBFCs, insurers and fintechs, with the verification standards the sector demands.",
      icon: Landmark,
      image: {
        src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
        alt: "Bank relationship manager meeting a customer",
      },
      roles: ["Relationship Managers", "Loan & Credit Officers", "Collections Executives", "Branch Operations", "KYC & Compliance Analysts"],
      challenges: ["Strict background and credit checks", "Target-driven roles with high churn", "Regulatory training requirements"],
      howWeHelp: [
        "Full background verification including credit and criminal checks",
        "Pre-assessed sales talent with track records",
        "Contract staffing for collections and KYC drives",
      ],
    },
    {
      slug: "telecom",
      name: "Telecom",
      tagline: "Telecom & network services",
      description:
        "Field, network and customer-facing workforce for telecom operators, tower companies and ISPs, from technicians to regional managers.",
      icon: RadioTower,
      image: {
        src: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=80",
        alt: "Technician inspecting network and electrical equipment",
      },
      roles: ["Field Technicians", "Network Engineers", "Retail & Store Staff", "Customer Care Executives", "Area Sales Managers"],
      challenges: ["Geographically spread field teams", "Rapid rollouts for new circles", "Skilled technician shortages"],
      howWeHelp: [
        "Pan-India sourcing for field and retail roles",
        "Manpower outsourcing with payroll and compliance handled",
        "Technician skill checks and safety certification tracking",
      ],
    },
    {
      slug: "information-technology",
      name: "Information Technology",
      tagline: "Software, data, cloud & security",
      description:
        "Technical recruitment for product companies, IT services firms and GCCs, from individual contributors to engineering leadership, delivered through our RPO and permanent hiring teams.",
      icon: Code,
      image: {
        src: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1200&q=80",
        alt: "Software engineers collaborating at their desks",
      },
      roles: ["Software Development", "Data Engineering", "Cloud Computing", "DevOps", "Cybersecurity", "AI/ML", "Quality Engineering", "Enterprise Applications"],
      challenges: ["Competition for in-demand skills", "Long notice periods and offer drop-outs", "Screening for real technical depth"],
      howWeHelp: [
        "Technical sourcers who speak the language of each stack",
        "Skill-based screening and coding assessments before submission",
        "Offer management and joining follow-ups to reduce drop-outs",
      ],
    },
    {
      slug: "semiconductor-electronics",
      name: "Semiconductor & Electronics",
      tagline: "VLSI, design verification & embedded",
      description:
        "Specialist search for chip design, verification, test and hardware teams, where the talent pool is small and every profile needs a technical eye.",
      icon: Cpu,
      image: {
        src: "https://images.unsplash.com/photo-1555664424-778a1e5e1b48?auto=format&fit=crop&w=1200&q=80",
        alt: "Engineer inspecting a printed circuit board",
      },
      roles: ["VLSI", "ASIC Design", "Design Verification", "ATE Test Engineering", "Embedded Systems", "Hardware Engineering"],
      challenges: ["Very small, highly specialised talent pools", "Niche tool and protocol expertise", "Confidential, project-linked hiring"],
      howWeHelp: [
        "Targeted search through alumni, conference and professional networks",
        "Profiles screened on tools, nodes and protocols, not just titles",
        "NDA-backed confidential recruitment for new programmes",
      ],
    },
    {
      slug: "engineering-manufacturing",
      name: "Engineering & Manufacturing",
      tagline: "Automation, controls & plant operations",
      description:
        "Engineering and operations talent for manufacturers, EPC firms and automation companies, from the shop floor to plant leadership.",
      icon: Factory,
      image: {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
        alt: "Engineer working with industrial automation equipment",
      },
      roles: ["Controls Engineering", "Industrial Automation", "Mechanical Engineering", "Civil Engineering", "Manufacturing Operations"],
      challenges: ["Plant locations outside major cities", "Mix of permanent and contract workforce", "Safety and certification requirements"],
      howWeHelp: [
        "Sourcing across industrial clusters in Maharashtra and beyond",
        "Contract and permanent staffing under one engagement",
        "Certification and compliance tracking for deployed staff",
      ],
    },
    {
      slug: "corporate-professional",
      name: "Corporate & Professional Services",
      tagline: "Operations, finance, HR & project roles",
      description:
        "Business and support functions for organisations of every size, from analysts and coordinators to functional heads.",
      icon: Briefcase,
      image: {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        alt: "Professionals in a corporate meeting room",
      },
      roles: ["Business Operations", "Project Management", "Finance", "Human Resources", "Administration", "Procurement"],
      challenges: ["Broad applicant pools, few strong fits", "Culture and stakeholder fit matter as much as skills", "Back-filling critical roles quickly"],
      howWeHelp: [
        "Structured screening on competencies and stakeholder fit",
        "Shortlists in days for business-critical back-fills",
        "Executive search for functional leadership roles",
      ],
    },
  ] satisfies IndustryDetail[],
  otherSectors: {
    title: "Not on the list?",
    description:
      "We also support retail, healthcare, education and hospitality clients on a case-by-case basis. Tell us what you need.",
    cta: { label: "Talk to us", href: "/contact" },
  },
};

/* ---------- Contact page ---------- */
export const contactPage = {
  hero: {
    eyebrow: "Contact",
    title: "Let's talk about your hiring",
    description:
      "Tell us what you need and we will respond within one working day. Employers and job seekers are both welcome.",
  },
  channels: [
    { label: "Call us", value: company.phone, href: company.phoneHref, note: "Mon–Sat, 9:30am–6:30pm IST", icon: Phone }, // TODO: confirm hours
    { label: "Email us", value: company.email, href: `mailto:${company.email}`, note: "We reply within one working day", icon: Mail },
    { label: "Visit us", value: "Pune, Maharashtra", href: "https://maps.google.com/?q=Pune,Maharashtra", note: "India", icon: MapPin },
  ],
  form: {
    title: "Send an enquiry",
    description: "Fill in the form and the right person will get back to you.",
    audiences: [
      { value: "employer", label: "I'm an employer" },
      { value: "job-seeker", label: "I'm a job seeker" },
    ],
    serviceOptions: ["Permanent staffing", "Contract / temp staffing", "Executive search", "RPO", "Payroll & compliance", "HR consulting", "Not sure yet"],
    roleOptions: ["BPO / Customer support", "KPO / Analytics", "Logistics & warehousing", "Banking & finance", "Telecom", "Other"],
    success: {
      title: "Thanks, we have your enquiry.",
      description: "A WinStaff consultant will contact you within one working day. For anything urgent, call us directly.",
    },
  },
  nextSteps: {
    title: "What happens next",
    steps: [
      "A consultant reviews your enquiry and calls you within one working day.",
      "We agree the brief, timelines and commercials in a short discovery call.",
      "You receive a shortlist or a proposal, depending on what you need.",
    ],
  },
  map: {
    title: "Our office in Pune",
    link: "https://maps.google.com/?q=Pune,Maharashtra", // TODO: replace with exact office link
    embedSrc: "https://www.google.com/maps?q=Pune,Maharashtra,India&z=12&output=embed", // TODO: replace with exact office pin
  },
};

/* ---------- For Employers page ---------- */
export const employersPage = {
  hero: {
    eyebrow: "For Employers",
    title: "Hire faster, stay compliant, keep your focus on the business",
    description:
      "Whether you need one senior hire, fifty support agents by month end, or someone to run payroll and compliance, WinStaff gives you a single accountable partner.",
    image: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
      alt: "Hiring manager and recruiter reviewing shortlisted candidates",
    },
    points: ["Shortlist in 7 working days", "Replacement guarantee", "No upfront fees on permanent hiring"], // TODO: confirm
  },
  painPoints: {
    eyebrow: "Sound familiar?",
    title: "Hiring problems we solve every week",
    items: [
      { title: "Roles open for months", description: "Job boards bring volume, not fit. We bring pre-screened candidates who are ready to interview.", icon: Clock },
      { title: "Attrition eating your margins", description: "We screen for stability and fit, and cover early attrition on volume roles.", icon: TrendingDown },
      { title: "Compliance keeping you up at night", description: "PF, ESIC, PT, LWF and contract labour rules handled by people who do this daily.", icon: ShieldAlert },
      { title: "No bandwidth for HR", description: "Get a working HR function, from documentation to payroll, without hiring a team.", icon: Hourglass },
    ],
  },
  offerings: {
    eyebrow: "What you can hand to us",
    title: "One partner for hiring and HR",
    items: [
      { title: "Permanent hiring", description: "Mid-level to leadership roles on your payroll, with a replacement guarantee.", href: "/services#recruitment", icon: UserCheck },
      { title: "Contract & temp staffing", description: "Staff on WinStaff's payroll, deployed in days, scaled monthly.", href: "/services#outsourcing", icon: Clock },
      { title: "Executive search", description: "Confidential leadership search with market mapping and assessment.", href: "/services#recruitment", icon: Crown },
      { title: "RPO", description: "An embedded WinStaff team runs your hiring end to end under your brand.", href: "/services/rpo", icon: Workflow },
      { title: "Payroll & compliance", description: "Monthly payroll, statutory filings, registers and audits, done on time.", href: "/services#outsourcing", icon: Wallet },
      { title: "HR consulting", description: "Policies, performance frameworks and documentation that scale.", href: "/services#hr-consulting", icon: ClipboardList },
    ],
  },
  assurance: {
    eyebrow: "Our commitments",
    title: "What you get with every engagement",
    items: [
      { title: "Dedicated account manager", description: "One point of contact who knows your business and your open roles." },
      { title: "Verified candidates", description: "Identity, education and employment checks before anyone reaches your inbox." },
      { title: "Transparent pricing", description: "Clear fees agreed up front. No surprises on the invoice." },
      { title: "Replacement guarantee", description: "If a permanent hire leaves early, we replace them at no extra cost." }, // TODO: confirm period
      { title: "Monthly reporting", description: "Pipeline, time-to-fill and payroll reports delivered every month." },
      { title: "Compliance ownership", description: "We carry the statutory responsibility for staff on our payroll." },
    ],
  },
  enquiryCta: {
    title: "Tell us about your next hire",
    description: "Share the role, location and timeline. We will come back within one working day with a plan and a timeline.",
    cta: { label: "Send a hiring brief", href: "/contact" },
  },
};

/* ---------- RPO service page ---------- */
export const rpoPage = {
  hero: {
    eyebrow: "Your Recruitment Function. Our Delivery Expertise.",
    title: "Recruitment Process Outsourcing (RPO) Services",
    description:
      "At WinStaff Solutions, we help organizations streamline their recruitment operations through flexible, scalable, and results-driven Recruitment Process Outsourcing (RPO) solutions. From talent sourcing and candidate screening to interview coordination and recruitment delivery, our team works as an extension of your organization to support your hiring goals.",
    secondary:
      "Whether you need support for specific positions, ongoing recruitment requirements, or a dedicated recruitment team, we deliver solutions aligned with your business objectives.",
    image: {
      src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1600&q=80",
      alt: "WinStaff recruitment team working on a client's hiring pipeline",
    },
  },
  services: {
    eyebrow: "Our RPO services",
    title: "Support for one stage of recruitment, or all of it",
    description:
      "Every organization has different hiring priorities, recruitment challenges, and workforce requirements. WinStaff Solutions offers flexible RPO services that can support individual stages of recruitment or a broader, integrated hiring process.",
    items: [
      {
        title: "End-to-End Recruitment Process Outsourcing",
        description:
          "We manage the recruitment lifecycle from requirement intake and talent sourcing through screening, interview coordination, candidate submission, and offer-stage support. Our process is designed to help clients manage hiring demands while maintaining quality and consistency throughout recruitment.",
        icon: Workflow,
      },
      {
        title: "Sourcing and Talent Identification",
        description:
          "Our sourcing team identifies qualified candidates through professional networks, job portals, databases, referrals, and targeted search strategies. We focus on finding talent that aligns with the required skills, experience, location, availability, and compensation expectations.",
        icon: Search,
      },
      {
        title: "Candidate Screening and Qualification",
        description:
          "We evaluate candidate profiles against job descriptions, conduct initial screening discussions, validate relevant experience, assess interest and availability, and confirm key hiring criteria before submission. This helps clients receive more relevant and better-qualified candidate profiles.",
        icon: UserCheck,
      },
      {
        title: "Interview and Recruitment Coordination",
        description:
          "We support interview scheduling, candidate communication, feedback follow-ups, interview status tracking, and ongoing coordination between candidates and hiring teams. Our goal is to maintain a smooth recruitment experience and reduce delays during the selection process.",
        icon: CalendarCheck,
      },
      {
        title: "Dedicated Recruitment Teams",
        description:
          "We provide dedicated recruitment resources based on your hiring volume, skill requirements, and business priorities. Clients can engage individual sourcers, recruiters, senior recruiters, or a coordinated recruitment team to support ongoing hiring operations.",
        icon: Users,
      },
      {
        title: "Recruitment Operations and Reporting",
        description:
          "We support recruitment pipeline tracking, recruiter productivity monitoring, submission updates, interview progress reporting, and periodic performance reviews. These insights help clients maintain visibility into recruitment activity and make informed decisions about their hiring pipeline.",
        icon: ChartBar,
      },
      {
        title: "High-Volume and Project-Based Hiring",
        description:
          "For clients managing multiple vacancies, new projects, business expansions, or time-sensitive hiring initiatives, we can scale recruitment support according to the agreed scope, hiring priorities, and delivery timelines.",
        icon: Rocket,
      },
      {
        title: "Offer Management and Onboarding Coordination",
        description:
          "We assist with offer-stage communication, candidate follow-ups, joining confirmation, and coordination of onboarding-related activities within the agreed recruitment scope. This helps maintain candidate engagement through the final stages of the hiring process.",
        icon: Handshake,
      },
    ] satisfies SubService[],
  },
  models: {
    eyebrow: "Our RPO engagement models",
    title: "How you can work with us",
    description: "Choose the level of involvement that fits your team, your volumes and your budget.",
    items: [
      {
        title: "Dedicated Sourcer / Recruiter Model",
        description:
          "Get dedicated sourcing and recruitment professionals who work on your hiring requirements as an extension of your internal team.",
        fit: "Suitable for organizations and staffing firms with continuous recruitment needs.",
        icon: UsersRound,
      },
      {
        title: "Partial RPO Model",
        description:
          "Outsource selected recruitment activities, such as sourcing, screening, or interview coordination, while retaining control over the remaining hiring process.",
        fit: "Ideal for teams that need additional capacity in specific areas.",
        icon: Puzzle,
      },
      {
        title: "End-to-End RPO Model",
        description:
          "Delegate an agreed portion or the entirety of the recruitment process to WinStaff Solutions, from workforce requirement intake to candidate selection and offer-stage coordination, with clearly defined responsibilities and reporting.",
        fit: "Best for organizations that want a fully managed recruitment function.",
        icon: ListChecks,
      },
      {
        title: "Project-Based RPO",
        description:
          "Add recruitment capacity for a defined hiring campaign, project, business expansion, or temporary increase in open positions.",
        fit: "Scope, resources, deliverables, and timelines are agreed upon before engagement.",
        icon: Scaling,
      },
    ],
  },
  expertise: {
    eyebrow: "Our industry expertise",
    title: "Recruitment across technology-driven and specialized talent markets",
    description:
      "Our sourcing strategies and screening priorities are tailored to the skills, experience, and business context associated with each role.",
    sectors: [
      {
        name: "Information Technology",
        icon: Code,
        skills: ["Software Development", "Data Engineering", "Cloud Computing", "DevOps", "Cybersecurity", "AI/ML", "Quality Engineering", "Enterprise Applications"],
      },
      {
        name: "Semiconductor and Electronics",
        icon: Cpu,
        skills: ["VLSI", "ASIC Design", "Design Verification", "ATE Test Engineering", "Embedded Systems", "Hardware Engineering"],
      },
      {
        name: "Engineering and Manufacturing",
        icon: Factory,
        skills: ["Controls Engineering", "Industrial Automation", "Mechanical Engineering", "Civil Engineering", "Manufacturing Operations"],
      },
      {
        name: "Corporate and Professional Services",
        icon: Briefcase,
        skills: ["Business Operations", "Project Management", "Finance", "Human Resources", "Other professional positions"],
      },
    ],
  },
  cta: {
    title: "Add recruitment capacity without adding headcount",
    description: "Tell us your open roles, volumes and timelines. We will propose an RPO model and a delivery plan within one working day.",
    cta: { label: "Discuss an RPO engagement", href: "/contact" },
  },
};
