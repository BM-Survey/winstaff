import {
  BadgeCheck,
  Briefcase,
  Building2,
  Database,
  Handshake,
  HeartHandshake,
  Layers,
  Mail,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Target,
  UserCheck,
  Users,
  Wallet,
  Zap,
  ClipboardCheck,
  Clock,
  FolderKanban,
  Repeat,
  Workflow,
  Hourglass,
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
  tagline: "Your Offshore Recruitment Partner for the USA",
  description:
    "WinStaff Solutions is an offshore recruitment partner for US employers and staffing firms, providing talent sourcing, full-cycle recruiting and RPO from our delivery center in Pune, India.",
  url: "https://www.winstaffsolutions.com", // TODO: confirm domain
  location: "Pune, Maharashtra, India",
  address: {
    street: "Office No: 1610, Tower 09, Bramhacorp Business Park",
    locality: "New Kalyani Nagar, Pune",
    region: "Maharashtra",
    postalCode: "411014",
    country: "India",
  },
  mapsUrl: "https://maps.google.com/?q=Bramhacorp+Business+Park,+New+Kalyani+Nagar,+Pune,+Maharashtra+411014",
  phone: "+91 92255 20510",
  phoneHref: "tel:+919225520510",
  email: "contact@beaconmartech.com",
  // Add real profile URLs here to show social icons in the footer and in search data.
  social: [] as { label: string; href: string; key: "linkedin" | "facebook" | "instagram" }[],
};

/* ---------- Navigation ---------- */
export type NavLink = { label: string; href: string };

export const nav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "RPO", href: "/services/rpo" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

export const ctas = {
  hire: { label: "Book a Meeting", href: "/contact" },
  job: { label: "Careers", href: "/contact#job-seeker" },
  enquiry: { label: "Get Started", href: "/contact" },
};

/* ---------- Hero ---------- */
export const hero = {
  eyebrow: "Offshore recruiting for US employers and staffing firms",
  badge: "Recruiting for US clients, on US hours",
  headline: { before: "Focus on what you do best. We'll handle the", highlight: "recruiting." },
  subtext:
    "WinStaff Solutions gives US companies and staffing firms dedicated offshore sourcers and recruiters who work your requisitions as an extension of your team, from sourcing and screening to submissions, interviews and offers.",
  proofPoints: ["Dedicated recruiters on US time zones", "Scale up or down as hiring changes", "Lower cost than in-house hiring"], // TODO: confirm
  image: {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    alt: "WinStaff recruiters reviewing candidate profiles for a US client",
  },
  imageSecondary: {
    src: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80",
    alt: "Recruiter on a video call with a hiring manager",
  },
};

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
    slug: "sourcing",
    title: "Talent Sourcing",
    description:
      "Vetted, interested candidates delivered straight to your recruiters, every day.",
    icon: Search,
    items: [
      "Candidate Sourcing",
      "Database Building & Pipelining",
      "Job Board & Boolean Search",
      "Talent Research & Market Mapping",
    ],
  },
  {
    slug: "recruiting",
    title: "Recruiting Services",
    description:
      "Full-cycle recruiting for your open roles, from intake call to offer accepted.",
    icon: UserCheck,
    items: [
      "Full-Cycle Recruiting",
      "Candidate Screening & Qualification",
      "Interview Coordination",
      "Offer & Onboarding Support",
    ],
  },
  {
    slug: "rpo",
    title: "RPO & Dedicated Teams",
    description:
      "A managed recruitment function or dedicated offshore recruiters who work as part of your team.",
    icon: Layers,
    items: [
      "Recruitment Process Outsourcing (RPO)",
      "Dedicated Sourcers & Recruiters",
      "Account Management",
      "Recruitment Operations & Reporting",
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
    eyebrow: "For US Employers",
    title: "Hire faster without growing your HR team",
    description:
      "Add recruiting capacity for hard-to-fill roles, new projects or hiring spikes, with recruiters who learn your business and work your hours.",
    icon: Building2,
    benefits: [
      "Specialist recruiting for IT, semiconductor, engineering and corporate roles",
      "Partial or end-to-end RPO, scoped around your hiring plan",
      "Clear reporting on pipeline, submissions and interviews",
    ],
    cta: { label: "Book a Meeting", href: "/contact" },
  },
  {
    key: "jobSeekers",
    eyebrow: "For Staffing & Recruiting Firms",
    title: "Grow your desk without growing your overhead",
    description:
      "Give your account managers more qualified submissions. Our offshore sourcers and recruiters work inside your ATS, on your requisitions, under your brand.",
    icon: Users,
    benefits: [
      "Dedicated sourcers and recruiters, billed monthly",
      "Experience with W2, C2C, 1099 and full-time requirements", // TODO: confirm
      "Single point of contact for coordination and quality",
    ],
    cta: { label: "Talk to an Expert", href: "/contact" },
  },
];

/* ---------- Process ---------- */
export type Step = { title: string; description: string };

export const process: Step[] = [
  {
    title: "Requirement intake",
    description:
      "We learn your roles, hiring criteria, tools and timelines, and agree on the scope and reporting.",
  },
  {
    title: "Sourcing & screening",
    description:
      "Our team searches job boards, databases and networks, then screens for skills, availability, location and rate.",
  },
  {
    title: "Submission & interviews",
    description:
      "You receive qualified profiles and we coordinate interviews, feedback and follow-ups with candidates.",
  },
  {
    title: "Offer & onboarding",
    description:
      "We support offer-stage communication and joining confirmation, and keep candidates engaged until day one.",
  },
];

/* ---------- Industries ---------- */
export type Industry = { name: string; icon: LucideIcon; blurb: string };

export const industries: Industry[] = [
  { name: "Information Technology", icon: Code, blurb: "Software, data, cloud, DevOps, security and AI/ML" },
  { name: "Semiconductor & Electronics", icon: Cpu, blurb: "VLSI, ASIC, design verification and embedded" },
  { name: "Engineering & Manufacturing", icon: Factory, blurb: "Controls, automation and plant operations" },
  { name: "Corporate & Professional", icon: Briefcase, blurb: "Operations, project management, finance and HR" },
];

/* ---------- Why choose us ---------- */
export type Feature = { title: string; description: string; icon: LucideIcon };

export const whyChooseUs = {
  eyebrow: "The offshore advantage",
  title: "More recruiting capacity, at a lower cost",
  description:
    "An offshore recruiting team lets you cover more requisitions and respond to hiring demand faster, without the cost and lead time of adding in-house recruiters.",
  image: {
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1000&q=80",
    alt: "WinStaff recruitment team collaborating in the Pune delivery center",
  },
  features: [
    {
      title: "Cost-Optimized Teams",
      description:
        "Skilled sourcers and recruiters for a fraction of the cost of building the same team in the US.",
      icon: Wallet,
    },
    {
      title: "US Time-Zone Coverage",
      description:
        "Our team works hours that overlap with your business day, so candidates and hiring managers get timely responses.",
      icon: Clock,
    },
    {
      title: "Scalability and Flexibility",
      description:
        "Add recruiters for a hiring spike or scale back when demand slows, based on the agreed scope.",
      icon: Scaling,
    },
    {
      title: "Dedicated Expertise",
      description:
        "Recruiters who specialize in your talent market, with an account manager responsible for quality.",
      icon: BadgeCheck,
    },
  ] satisfies Feature[],
};

/* ---------- FAQ ---------- */
export type FAQ = { question: string; answer: string };

export const faqs: FAQ[] = [
  {
    question: "What is offshore recruiting?",
    answer:
      "Offshore recruiting is when a company uses a recruitment team based in another country to source, screen and coordinate candidates for its open roles. US employers and staffing firms use offshore recruiters to add recruiting capacity at a lower cost than hiring more in-house recruiters.",
  },
  {
    question: "Who is WinStaff Solutions?",
    answer:
      "WinStaff Solutions is an offshore recruitment partner for US employers and staffing firms, with its delivery center in Pune, India. We provide talent sourcing, full-cycle recruiting, dedicated recruiters and recruitment process outsourcing (RPO) for IT, semiconductor, engineering and corporate roles.",
  },
  {
    question: "How does offshore recruiting with WinStaff work?",
    answer:
      "A WinStaff team in Pune, India works on your open requisitions as an extension of your recruiting function. We agree the scope with you, whether that is sourcing only, full-cycle recruiting or a managed RPO program, and report on progress throughout.",
  },
  {
    question: "Why do US staffing firms use offshore recruiters?",
    answer:
      "Staffing firms use offshore recruiters to cover more requisitions, send more qualified submissions and let their US account managers focus on clients. Offshore teams cost less than adding US-based recruiters and can be scaled up or down as hiring demand changes.",
  },
  {
    question: "Do your recruiters work US hours?",
    answer:
      "Yes. Our team works shifts that overlap with US business hours, so we can speak with candidates and hiring managers during your working day.", // TODO: confirm which US time zones you cover
  },
  {
    question: "Can your team work inside our ATS and tools?",
    answer:
      "Yes. Our recruiters can work in your applicant tracking system, CRM, job board accounts and communication tools, following your processes and templates.",
  },
  {
    question: "What types of roles and employment do you recruit for?",
    answer:
      "We recruit across information technology, semiconductor and electronics, engineering and manufacturing, and corporate and professional roles, for full-time, contract, W2, C2C and 1099 requirements.", // TODO: confirm
  },
  {
    question: "How quickly can we get started?",
    answer:
      "Once the scope is agreed, we can usually assign and onboard a dedicated sourcer or recruiter within about a week.", // TODO: confirm
  },
  {
    question: "How do you keep our data and candidate information secure?",
    answer:
      "We work under NDA, limit access to the people assigned to your account, and follow your data-handling requirements for candidate information.", // TODO: confirm
  },
];

export const rpoFaqs: FAQ[] = [
  {
    question: "What is recruitment process outsourcing (RPO)?",
    answer:
      "Recruitment process outsourcing (RPO) is when a company hands part or all of its hiring process to an external recruitment provider. The RPO provider works as an extension of the company's team, handling activities such as sourcing, screening, interview coordination and offer management.",
  },
  {
    question: "What RPO models does WinStaff offer?",
    answer:
      "WinStaff offers four RPO models: a dedicated sourcer or recruiter model, partial RPO for selected recruitment stages, end-to-end RPO covering requirement intake to offer, and project-based RPO for hiring campaigns or expansions.",
  },
  {
    question: "How is RPO different from a staffing agency?",
    answer:
      "A staffing agency fills individual roles, usually for a fee per placement. An RPO provider takes responsibility for your recruitment process itself, with dedicated recruiters, agreed responsibilities and regular reporting, so it suits ongoing or high-volume hiring.",
  },
  {
    question: "Which roles can WinStaff support through RPO?",
    answer:
      "Our RPO teams recruit for information technology, semiconductor and electronics, engineering and manufacturing, and corporate and professional services roles in the United States.",
  },
  {
    question: "How do you report on RPO performance?",
    answer:
      "We track the recruitment pipeline, recruiter productivity, submissions and interview progress, and share regular reports and periodic performance reviews so you always have visibility into hiring activity.",
  },
];

/* ---------- CTA banner ---------- */
export const ctaBanner = {
  title: "Not sure where to start?",
  description:
    "Book a 30-minute, no-obligation call. We will look at your hiring plan and suggest the recruiting model that fits it.",
  cta: { label: "Book a Meeting", href: "/contact" },
  secondary: { label: `Call ${company.phone}`, href: company.phoneHref },
};

/* ---------- Footer ---------- */
export const footer = {
  headline: "Focus on your business. We'll handle the recruiting.",
  blurb:
    "Offshore recruitment partner for US employers and staffing firms. Talent sourcing, full-cycle recruiting and RPO, delivered from Pune, India.",
  cta: { label: "Book a Meeting", href: "/contact" },
  newsletter: {
    title: "US hiring insights, once a month",
    description: "Talent market trends, recruiting tips and offshore staffing best practices.",
    placeholder: "Work email",
    button: "Subscribe",
    note: "No noise. Unsubscribe any time.",
  },
  serviceLinks: [
    { label: "Talent Sourcing", href: "/services#sourcing" },
    { label: "Database Building", href: "/services#sourcing" },
    { label: "Full-Cycle Recruiting", href: "/services#recruiting" },
    { label: "Interview Coordination", href: "/services#recruiting" },
    { label: "RPO Services", href: "/services/rpo" },
    { label: "Dedicated Recruiters", href: "/services#rpo" },
    { label: "Recruitment Reporting", href: "/services#rpo" },
    { label: "Industries", href: "/industries" },
  ] satisfies NavLink[],
  companyLinks: [
    ...nav,
    { label: "Why WinStaff", href: "/employers" },
  ] satisfies NavLink[],
  headOffice: {
    title: "Head office",
    lines: [
      "Office No: 1610, Tower 09,",
      "Bramhacorp Business Park,",
      "New Kalyani Nagar, Pune,",
      "Maharashtra 411014, India",
    ],
  },
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
  ] satisfies NavLink[],
  tagline: "Pune, India · Recruiting for clients across the USA",
  copyright: `© 2026 ${company.name}. All rights reserved.`,
  watermark: "WINSTAFF",
};

/* ---------- About page ---------- */
export const about = {
  hero: {
    eyebrow: "About WinStaff",
    title: { before: "The offshore recruiting team behind", highlight: "US hiring" },
    description:
      "WinStaff Solutions is an offshore recruitment partner for US employers and staffing firms. We help our clients:",
    pillars: ["Source faster", "Hire better", "Scale on demand"],
    cards: [
      { title: "Pune, India", text: "Delivery center" },
      { title: "USA", text: "Where our clients hire" },
    ],
    image: {
      src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
      alt: "WinStaff team members collaborating in a bright, modern office",
    },
  },
  story: {
    eyebrow: "Who we are",
    title: "Built on the belief that great companies are built by great teams",
    paragraphs: [
      "WinStaff Solutions was founded on a simple idea: give growing companies the recruiting capacity they need, without the cost of building it all in-house.",
      "Today our sourcers and recruiters in Pune, India support US employers and staffing firms across information technology, semiconductor and electronics, engineering and manufacturing, and corporate and professional roles.",
      "We work as an extension of our clients' teams, in their tools and on their hours. We are honest about the market, we report clearly on progress, and we take responsibility for the quality of every submission.",
    ],
    image: {
      src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
      alt: "Recruiter discussing a role on a call with a US hiring manager",
    },
  },
  missionVision: [
    {
      title: "Our mission",
      description:
        "To help our clients focus on what they do best by taking care of recruiting, delivering qualified talent quickly, consistently and cost-effectively.",
    },
    {
      title: "Our vision",
      description:
        "To be the most trusted offshore recruitment partner for US businesses, known for quality, reliability and people who stay.",
    },
  ],
  values: [
    {
      title: "Client Delight",
      description: "We measure success by our clients' hiring outcomes, not by the number of resumes we send.",
      icon: HeartHandshake,
    },
    {
      title: "Accountability",
      description: "Clear ownership of every requisition, with honest updates on progress and timelines.",
      icon: ShieldCheck,
    },
    {
      title: "Agility",
      description: "We adapt quickly when priorities, volumes or requirements change.",
      icon: Zap,
    },
    {
      title: "Integrity",
      description: "Straight answers about the market, and respect for every candidate we speak to.",
      icon: Handshake,
    },
  ] satisfies Feature[],
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
    eyebrow: "How we help",
    title: "Offshore sourcing, recruiting and RPO for US hiring teams",
    description:
      "Scale your core business by letting us handle recruiting. Choose a single service or hand us the whole process, delivered by a dedicated team that works as an extension of yours.",
    image: {
      src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80",
      alt: "Recruitment team reviewing a hiring plan on a whiteboard",
    },
  },
  groups: [
    {
      slug: "sourcing",
      eyebrow: "Talent Sourcing",
      title: "A steady pipeline of qualified candidates",
      description:
        "Our sourcing team finds candidates who match your requirements on skills, experience, location, availability and rate, then hands your recruiters profiles that are ready to work.",
      icon: Search,
      image: {
        src: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?auto=format&fit=crop&w=1200&q=80",
        alt: "Sourcer searching for candidates across job boards",
      },
      outcomes: ["Daily candidate pipelines", "Profiles matched to your criteria", "More time for your recruiters to close"],
      subServices: [
        {
          title: "Candidate Sourcing",
          description: "Targeted search across job boards, professional networks, databases and referrals for each requisition.",
          icon: Search,
        },
        {
          title: "Database Building & Pipelining",
          description: "Build and refresh talent pools for recurring roles, so you have candidates ready before the next requisition opens.",
          icon: Database,
        },
        {
          title: "Job Board & Boolean Search",
          description: "Advanced Boolean and X-ray searches to find passive candidates and niche skill sets.",
          icon: ListChecks,
        },
        {
          title: "Talent Research & Market Mapping",
          description: "Research on talent availability, competitors and compensation to support hiring decisions.",
          icon: Target,
        },
      ],
    },
    {
      slug: "recruiting",
      eyebrow: "Recruiting Services",
      title: "Full-cycle recruiting, from intake to offer",
      description:
        "Our recruiters handle the work between an open requisition and an accepted offer: screening, submissions, interview coordination and candidate follow-up.",
      icon: UserCheck,
      image: {
        src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
        alt: "Recruiter preparing a candidate shortlist for a client",
      },
      outcomes: ["Pre-screened, interested candidates", "Fewer delays between interview stages", "Consistent candidate experience"],
      subServices: [
        {
          title: "Full-Cycle Recruiting",
          description: "End-to-end recruiting for your open roles, from requirement intake to offer acceptance.",
          icon: Workflow,
        },
        {
          title: "Candidate Screening & Qualification",
          description: "Screening calls that validate experience, interest, availability, work authorization and rate before submission.",
          icon: ClipboardCheck,
        },
        {
          title: "Interview Coordination",
          description: "Scheduling, candidate communication, feedback follow-ups and status tracking.",
          icon: CalendarCheck,
        },
        {
          title: "Offer & Onboarding Support",
          description: "Offer-stage communication, joining confirmation and onboarding coordination.",
          icon: Handshake,
        },
      ],
    },
    {
      slug: "rpo",
      eyebrow: "RPO & Dedicated Teams",
      title: "A recruiting team that scales with you",
      description:
        "Get a fully managed recruitment program or dedicated offshore recruiters who work your requisitions, in your tools, as part of your team.",
      icon: Layers,
      image: {
        src: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1200&q=80",
        alt: "Dedicated recruitment team reviewing candidate pipelines together",
      },
      outcomes: ["Scale recruiters up or down", "One point of contact", "Regular pipeline and performance reporting"],
      subServices: [
        {
          title: "Recruitment Process Outsourcing (RPO)",
          description: "Partial or end-to-end RPO programs with clearly defined responsibilities and reporting.",
          icon: Workflow,
          href: "/services/rpo",
        },
        {
          title: "Dedicated Sourcers & Recruiters",
          description: "Full-time offshore sourcers, recruiters or senior recruiters assigned only to your account.",
          icon: UsersRound,
        },
        {
          title: "Account Management",
          description: "A single point of contact who coordinates priorities, quality and communication with your team.",
          icon: FolderKanban,
        },
        {
          title: "Recruitment Operations & Reporting",
          description: "Pipeline tracking, recruiter productivity, submission and interview reports, and periodic reviews.",
          icon: ChartBar,
        },
      ],
    },
  ] satisfies ServiceGroup[],
  engagementModels: {
    eyebrow: "Engagement models",
    title: "Work with us the way that suits you",
    description: "Start small and expand as you see results. Every engagement has an agreed scope, resources and reporting.",
    models: [
      {
        title: "Dedicated team",
        description: "Full-time sourcers or recruiters who work only on your requirements, as part of your team.",
        points: ["Monthly engagement", "Works in your ATS and tools", "Scale headcount as needed"],
        icon: UsersRound,
      },
      {
        title: "Partial RPO",
        description: "Outsource specific stages such as sourcing, screening or interview coordination and keep the rest in-house.",
        points: ["Extra capacity where you need it", "You keep control of hiring", "Fast to start"],
        icon: Puzzle,
      },
      {
        title: "End-to-end RPO",
        description: "Hand us an agreed portion or all of your recruitment process, from intake to offer.",
        points: ["Defined responsibilities", "Regular performance reporting", "Single accountable partner"],
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
    eyebrow: "Who we serve",
    title: "Specialist recruiting for technology-driven US talent markets",
    description:
      "Every talent market hires differently. Our sourcing strategies and screening priorities are tailored to the skills, experience and business context of each role.",
    image: {
      src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
      alt: "Team of professionals working together in a modern office",
    },
  },
  details: [
    {
      slug: "information-technology",
      name: "Information Technology",
      tagline: "Software, data, cloud & security",
      description:
        "Technical recruiting for US product companies, IT services firms and IT staffing agencies, from individual contributors to engineering leaders.",
      icon: Code,
      image: {
        src: "https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=1200&q=80",
        alt: "Software engineers collaborating at their desks",
      },
      roles: ["Software Development", "Data Engineering", "Cloud Computing", "DevOps", "Cybersecurity", "AI/ML", "Quality Engineering", "Enterprise Applications"],
      challenges: ["Competition for in-demand skills", "Candidates juggling multiple offers", "Screening for real technical depth"],
      howWeHelp: [
        "Technical sourcers who understand each stack",
        "Screening on skills, work authorization and rate before submission",
        "Offer-stage follow-ups to reduce drop-outs",
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
      challenges: ["Very small, highly specialized talent pools", "Niche tool and protocol expertise", "Confidential, program-linked hiring"],
      howWeHelp: [
        "Targeted search through professional and alumni networks",
        "Profiles screened on tools, nodes and protocols, not just titles",
        "NDA-backed confidential recruiting for new programs",
      ],
    },
    {
      slug: "engineering-manufacturing",
      name: "Engineering & Manufacturing",
      tagline: "Automation, controls & plant operations",
      description:
        "Engineering and operations talent for US manufacturers, EPC firms and automation companies, from the plant floor to plant leadership.",
      icon: Factory,
      image: {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
        alt: "Engineer working with industrial automation equipment",
      },
      roles: ["Controls Engineering", "Industrial Automation", "Mechanical Engineering", "Civil Engineering", "Manufacturing Operations"],
      challenges: ["Plant locations outside major metros", "High-volume hiring for new facilities", "Relocation and shift requirements"],
      howWeHelp: [
        "Sourcing across US industrial regions",
        "High-volume and project-based recruiting for plant ramp-ups",
        "Screening on certifications, shifts and relocation readiness",
      ],
    },
    {
      slug: "corporate-professional",
      name: "Corporate & Professional Services",
      tagline: "Operations, finance, HR & project roles",
      description:
        "Business and support functions for organizations of every size, from analysts and coordinators to functional heads.",
      icon: Briefcase,
      image: {
        src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
        alt: "Professionals in a corporate meeting room",
      },
      roles: ["Business Operations", "Project Management", "Finance", "Human Resources", "Administration", "Procurement"],
      challenges: ["Broad applicant pools, few strong fits", "Culture and stakeholder fit matter as much as skills", "Back-filling critical roles quickly"],
      howWeHelp: [
        "Structured screening on competencies and stakeholder fit",
        "Fast shortlists for business-critical back-fills",
        "Search support for functional leadership roles",
      ],
    },
  ] satisfies IndustryDetail[],
  otherSectors: {
    title: "Hiring in another field?",
    description:
      "We also take on roles outside these markets on a case-by-case basis. Tell us what you need.",
    cta: { label: "Talk to us", href: "/contact" },
  },
};

/* ---------- Contact page ---------- */
export const contactPage = {
  hero: {
    eyebrow: "Contact",
    title: "Get in touch with our recruiting experts",
    description:
      "Tell us about your hiring needs and we will respond within one business day. Candidates and people interested in working with us are welcome too.",
  },
  channels: [
    { label: "Call us", value: company.phone, href: company.phoneHref, note: "Available during US business hours", icon: Phone },
    { label: "Contact email", value: company.email, href: `mailto:${company.email}`, note: "Write to us", icon: Mail },
    { label: "Head office", value: "Office No: 1610, Tower 09, Bramhacorp Business Park", href: company.mapsUrl, note: "New Kalyani Nagar, Pune, Maharashtra 411014, India", icon: MapPin },
  ],
  form: {
    title: "Send us a message",
    description: "Fill in the form and the right person will get back to you.",
    audiences: [
      { value: "employer", label: "I'm hiring" },
      { value: "job-seeker", label: "I'm looking for a job" },
    ],
    serviceOptions: ["Talent sourcing", "Full-cycle recruiting", "Dedicated recruiters", "Partial RPO", "End-to-end RPO", "Project-based hiring", "Not sure yet"],
    roleOptions: ["Information Technology", "Semiconductor & Electronics", "Engineering & Manufacturing", "Corporate & Professional", "Recruiting career at WinStaff (Pune)", "Other"],
    success: {
      title: "Thanks, we have your message.",
      description: "A WinStaff team member will contact you within one business day.",
    },
  },
  nextSteps: {
    title: "What happens next",
    steps: [
      "A recruiting expert reviews your message and gets back to you within one business day.",
      "We schedule a 30-minute call to understand your roles, volumes and timelines.",
      "You receive a proposal with the recommended model, team and reporting.",
    ],
  },
  map: {
    title: "Our head office in Pune",
    link: company.mapsUrl,
    embedSrc: "https://www.google.com/maps?q=Bramhacorp+Business+Park,+New+Kalyani+Nagar,+Pune,+Maharashtra+411014,India&z=16&output=embed",
  },
};

/* ---------- For Employers page ---------- */
export const employersPage = {
  hero: {
    eyebrow: "Why WinStaff",
    title: "De-risk your hiring operations. At scale.",
    description:
      "Whether you need one dedicated sourcer, a full recruiting team or a managed RPO program, WinStaff gives US employers and staffing firms a single, accountable offshore partner.",
    image: {
      src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1600&q=80",
      alt: "Hiring manager and recruiter reviewing shortlisted candidates",
    },
    points: ["Source qualified candidates faster", "Outsource end-to-end recruiting", "Deploy dedicated offshore teams"],
  },
  painPoints: {
    eyebrow: "Sound familiar?",
    title: "Recruiting problems we solve every week",
    items: [
      { title: "Requisitions open too long", description: "Your recruiters cannot cover every role. We add sourcing and recruiting capacity so nothing sits idle.", icon: Hourglass },
      { title: "Rising cost per hire", description: "Adding US recruiters is expensive and slow. An offshore team gives you capacity at a lower cost.", icon: TrendingDown },
      { title: "Hiring demand that changes", description: "Scale your recruiting team up for new projects and back down when demand slows.", icon: Scaling },
      { title: "Recruiters stuck on admin", description: "We take on sourcing, scheduling and follow-ups so your team can focus on clients and closing.", icon: Clock },
    ],
  },
  offerings: {
    eyebrow: "What you can hand to us",
    title: "One partner for your recruiting",
    items: [
      { title: "Talent sourcing", description: "Vetted candidates delivered to your recruiters every day.", href: "/services#sourcing", icon: Search },
      { title: "Full-cycle recruiting", description: "From requirement intake to offer acceptance.", href: "/services#recruiting", icon: UserCheck },
      { title: "RPO programs", description: "Partial or end-to-end recruitment process outsourcing.", href: "/services/rpo", icon: Workflow },
      { title: "Dedicated recruiters", description: "Offshore sourcers and recruiters assigned only to your account.", href: "/services#rpo", icon: UsersRound },
      { title: "Interview coordination", description: "Scheduling, feedback and candidate follow-ups handled for you.", href: "/services#recruiting", icon: CalendarCheck },
      { title: "Reporting & analytics", description: "Pipeline, submission and recruiter productivity reports.", href: "/services#rpo", icon: ChartBar },
    ],
  },
  assurance: {
    eyebrow: "Our commitments",
    title: "What you get with every engagement",
    items: [
      { title: "Dedicated account manager", description: "One point of contact who knows your business and your open roles." },
      { title: "US-hours availability", description: "A team that works hours overlapping with your business day." },
      { title: "Works in your tools", description: "Your ATS, CRM, job boards and communication channels, your processes." },
      { title: "Data security", description: "NDA-backed engagements with access limited to your assigned team." },
      { title: "Transparent pricing", description: "Clear monthly fees agreed up front. No surprises on the invoice." },
      { title: "Regular reporting", description: "Pipeline, submission and interview reports on an agreed schedule." },
    ],
  },
  enquiryCta: {
    title: "Ready to add recruiting capacity?",
    description: "Tell us about your roles, volumes and timelines. We will come back within one business day with a recommended model and team.",
    cta: { label: "Book a Meeting", href: "/contact" },
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
