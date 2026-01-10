import {
  type LucideIcon,
  Briefcase,
  Shield,
  Cloud,
  Users,
  PenTool,
  Lightbulb,
  PlaneTakeoff,
  FileText,
} from "lucide-react";

export interface HeroSection {
  heading: string;
  content: string;
  heroImg: string;
  trustedText: string;
}

export interface PartnerSection {
  heading: string;
  logos: string[];
}

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  img: string;
  features: string[];
}

export interface ProductsSection {
  heading: string;
  description: string;
  items: ProductItem[];
}

export interface ServiceCardWithIcon {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  button: {
    label: string;
    href: string;
  };
}

export interface ServicesSection {
  heading: string;
  description: string;
  cards: ServiceCardWithIcon[];
}
export interface whySection {
  heading: string;
  content: string;
  items: string[];
  button: {
    label: string;
    href: string;
  };
}
export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  rating: number;
  content: string;
}

export interface TestimonialSection {
  tag: string;
  logo: string;
  heading: string;
  highlightText: string;
  testimonials: TestimonialItem[];
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface FAQSection {
  tag: string;
  heading: string;
  highlightText: string;
  items: FAQItem[];
}
export interface Button {
  label: string;
  href: string;
}

export interface DescSegment {
  text: string;
  highlight?: boolean;
}

export interface ServiceCard {
  id: string;
  logo: LucideIcon;
  title: string;
  desc: string;
  items: string[];
}

export interface RecruitStep {
  number: number | string;
  heading: string;
  desc: string;
}

export interface WhyItem {
  id: number;
  heading: string;
  desc: string;
}

export interface AboutData {
  title: string;
  desc: string;
  buttons: Button[];
  whoWeAre: {
    img: string;

    paragraphs: DescSegment[][];
  };
  Service: {
    title: string;
    content: string;
    cards: ServiceCard[];
  };
  recruit: {
    title: string;
    content: string;
    items: RecruitStep[];
  };
  why360: {
    heading: string;
    item: WhyItem[];
    button: Button;
    img: string;
  };
}
export interface ServiceButton {
  label: string;
  href: string;
}

export interface ServiceCardItem {
  id: string;
  slug: string;
  img: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  button: ServiceButton;
  details?: {
    intro: string;
    scopeTitle: string;
    steps: Array<{
      title: string;
      desc: string;
    }>;
  };
}

export interface ServiceDataPageType {
  heading: string;
  subHeading: string;
  highlightText: string;
  cards: ServiceCardItem[];
}

export const heroData: HeroSection = {
  heading: "Empowering Businesses through People, Process & Technology",
  content:
    "From matching organizations with exceptional talent to designing efficient HR processes and implementing the right digital tools that help businesses build compliant, scalable and future-ready workforce systems that drive sustainable growth.",
  heroImg: "/hero-img.png",
  trustedText: "Trusted by 100+ growing businesses across borders",
};

export const partnersData: PartnerSection = {
  heading: "From startups to Fortune 500, we partner with brands of all sizes",
  logos: [
    "/partners/factorial.png",
    "/partners/ami.png",
    "/partners/engage.png",
    "/partners/rock.png",
    "/partners/beem.png",
  ],
};

export const productsData: ProductsSection = {
  heading: "Our Products",
  description:
    "We integrate the best-in-class technology to deliver faster, smarter, and more scalable HR solutions.",
  items: [
    {
      id: "factorial-1",
      name: "Factorial",
      description:
        "Our platform combines smart tech and human expertise to simplify hiring, onboarding, and HR for SMEs — saving time, cutting costs, and helping you grow your people and business.",
      img: "/fact-dash.png",
      features: ["Automate HR tasks", "Centralize employee management"],
    },
    {
      id: "factorial-pro",
      name: "Bree AI",
      description:
        "Advanced analytics and custom workflows designed for scaling enterprises needing robust workforce management.",
      img: "/bree-dash.png",
      features: [
        "Save time & reduce admin work",
        "Job-Specific Keyword Optimization",
      ],
    },
  ],
};

export const servicesData: ServicesSection = {
  heading: "Our Services",
  description:
    "End-to-end services designed to help your organization grow efficiently and sustainably.",
  cards: [
    {
      id: "talent-acquisition",
      icon: Briefcase,
      title: "Talent Acquisition & Recruitment Services",
      description: "We find and onboard the right talent for your team.",
      button: {
        href: "/services/talent",
        label: "Learn More",
      },
    },
    {
      id: "hr-process",
      icon: Cloud,
      title: "HR Systems & Digitization",
      description: "Automate and streamline your HR processes.",
      button: {
        href: "/services/process",
        label: "Learn More",
      },
    },
    {
      id: "growth-strategy",
      icon: Shield,
      title: " HR Administration & Compliance",
      description: "Manage records, policies, and compliance easily.",
      button: {
        href: "/services/growth",
        label: "Learn More",
      },
    },
  ] as ServiceCardWithIcon[],
};

export const whySection: whySection = {
  heading: "Why Choose Us",
  content:
    "We don’t just manage people—we empower organizations to grow smarter, faster, and more sustainably.",
  items: [
    `Local expertise backed by global business understanding`,
    `One-stop solution from setup to staffing and operations`,
    `Tailored support tailored around your company's unique objectives`,
  ],
  button: {
    href: "/",
    label: "Get Started",
  },
};

export const testimonialSection: TestimonialSection = {
  tag: "Testimonial",
  logo: "/logos/brand-logo.png",
  heading: "Hear it from Our",
  highlightText: "Happy Clients",
  testimonials: [
    {
      id: "t1",
      name: "Desmond Mukolwe,",
      role: "COO, The design Gallery.",
      rating: 5,
      content:
        "My experience as a candidate with Brenda from 360 Staffing was superb. From our first friendly screening call, where her approach helped me respond at my best, to her crucial role in providing prompt, actionable feedback throughout, she was a constant source of support. Her guidance was directly instrumental in my successful placement as COO. I am thrilled with the outcome and would recommend her to any serious professional. Our engagement continued and evolved at my current place of work, to offering recruitment support and leadership engagement crucial for scaling up the business.",
    },
    {
      id: "t2",
      name: "Roselyn Maina",
      role: "CEO",
      rating: 5,
      content:
        "Brenda is an exceptional Talent Acquisition Specialist and the Founder & CEO of 360 Staffing Limited. She brings clarity, intention, and depth to her work, with a strong focus on understanding roles thoroughly and ensuring the right fit beyond just technical skills. Through 360 Staffing Limited, she is thoughtfully building a holistic talent and advisory ecosystem that responds to real organizational needs. Her HCM offering via Factorial further strengthens this vision, enabling organizations to manage their people with ease while leveraging technology and AI to build efficient, future-ready workplaces."
    }
  ],
};

export const faqSection: FAQSection = {
  tag: "FAQ",
  heading: "Frequently Asked",
  highlightText: "Questions",
  items: [
    {
      id: "q1",
      question: "What kind of customer support do you offer?",
      answer:
        "We offer 24/7 dedicated support via live chat, email, and phone. Enterprise clients also receive a dedicated Customer Success Manager to ensure smooth operations.",
    },
    {
      id: "q2",
      question: "Can 360 integrate with my existing HR tech stack?",
      answer:
        "Yes, we feature seamless API integrations with major payroll and HR systems like ADP, Workday, BambooHR, and Slack, ensuring your data flows automatically without manual entry.",
    },
    {
      id: "q3",
      question: "Do you only serve businesses in specific locations?",
      answer:
        "No, we are a global company. Our platform supports multi-currency payroll and complies with local labor laws in over 50 countries, serving clients worldwide.",
    },
    {
      id: "q4",
      question: "How secure is my employee data?",
      answer:
        "Security is our top priority. We use bank-grade AES-256 encryption for data at rest and in transit, and we are fully SOC2 Type II and GDPR compliant.",
    },
    {
      id: "q5",
      question: "Do you offer custom HR packages for large enterprises?",
      answer:
        "Absolutely. While we have standard tiers, our sales team can build a tailored enterprise package that fits your specific headcount and feature requirements.",
    },
  ],
};

export const AboutData: AboutData = {
  title: "ABOUT 360 STAFFING",
  desc: "Your trusted partner for workforce and business growth solutions across Africa and beyond. We bridge the gap between people, systems, and businesses.",
  buttons: [
    { label: "Our Service", href: "/" },
    { label: "Our Service", href: "/" },
  ],
  whoWeAre: {
    img: "/images/who-we-are.jpg",
    paragraphs: [
      [
        {
          text: "At 360 Staffing, we are your trusted partner for workforce and business growth solutions across Africa and beyond. Headquartered in Nairobi, Kenya, we bridge the gap between people, systems, and businesses — helping organizations ",
        },
        {
          text: "'build, manage, and scale with confidence.'",
          highlight: true,
        },
      ],
      [
        {
          text: "Our strength lies in our holistic approach — we don’t just recruit; ",
        },
        {
          text: "'we create ecosystems for businesses to thrive'.",
          highlight: true,
        },
        {
          text: " From company setup and compliance to talent acquisition and HR digitization, we provide end-to-end support that empowers our clients to focus on what truly matters — growth and impact.",
        },
      ],
    ],
  },
  Service: {
    title: "Our Service",
    content:
      "We provide comprehensive solutions to help your business thrive in the African market",
    cards: [
      {
        id: "1",
        logo: PenTool,
        title: "Business Support Services",
        desc: "Comprehensive support for establishing operations in Kenya and East Africa, from concept to full operational readiness.",
        items: [
          "Market Assessment & Feasibility",
          "Company Registration & Licensing",
          "Office Setup & Location",
        ],
      },
      {
        id: "2",
        logo: Users,
        title: "HR Services",
        desc: "Comprehensive support for establishing operations in Kenya and East Africa, from concept to full operational readiness.",
        items: [
          "End-to-End Recruitment",
          "Performance Management",
          "Training & Development",
        ],
      },
      {
        id: "3",
        logo: Lightbulb,
        title: "HR Digitization",
        desc: "Transform your HR operations with modern technology for smarter decision-making and streamlined workflows.",
        items: [
          "HR Management Systems",
          "Process Automation",
          "Data Migration & Training",
        ],
      },
    ],
  },
  recruit: {
    title: "Our recruitment process",
    content:
      "A structured yet personalized approach to ensure every placement is the right fit",
    items: [
      {
        number: "01",
        heading: "Need Assessment",
        desc: "Understanding your organization and culture",
      },
      {
        number: "02",
        heading: "Job profiling",
        desc: "Creating clear job Descriptions",
      },
      {
        number: "03",
        heading: "Talent Sourcing",
        desc: "Levereging our extensive networks",
      },
      {
        number: "04",
        heading: "Screening",
        desc: "Thorough assessments and checks",
      },
      {
        number: "05",
        heading: "Recommendations",
        desc: "Detailed candidate reports",
      },
      {
        number: "06",
        heading: "Interviews",
        desc: "Coordinated client interviews",
      },
      {
        number: "07",
        heading: "Onboarding",
        desc: "Complete transition Support",
      },
    ],
  },
  why360: {
    heading: "Why Choose 360 Staffing",
    item: [
      {
        id: 1,
        heading: "Local Expertise, Global Standards",
        desc: "Deep knowledge of the Kenyan and African markets, powered by global best practices.",
      },
      {
        id: 1,
        heading: "Local Expertise, Global Standards",
        desc: "Deep knowledge of the Kenyan and African markets, powered by global best practices.",
      },

      {
        id: 1,
        heading: "Local Expertise, Global Standards",
        desc: "Deep knowledge of the Kenyan and African markets, powered by global best practices.",
      },
      {
        id: 1,
        heading: "Local Expertise, Global Standards",
        desc: "Deep knowledge of the Kenyan and African markets, powered by global best practices.",
      },
    ],
    button: {
      label: "Get Started",
      href: "/",
    },
    img: "/360.jpg",
  },
};

export const ServiceDataPage = {
  heading: "Our Services",
  subHeading: "Empowering Businesses Through Smarter HR Solutions",
  highlightText: "Smarter HR",
  cards: [
    {
      id: "1",
      slug: "talent-acquisition-staffing",
      img: "/service/card1.jpg",
      icon: Briefcase,
      title: "Talent Acquisition & Staffing",
      desc: "We find and onboard the right talent for your team.",
      button: {
        label: "Learn more",
        href: "/services/talent-acquisition-staffing",
      },

      details: {
        intro:
          "At 360 Staffing, we provide complete recruitment and staffing solutions — from planning and sourcing to onboarding and retention. Our approach blends technology, data, and human insight to help organizations build capable, high-performing teams that drive business growth.",
        scopeTitle: "Scope Of Our Staffing Services",
        steps: [
          {
            title: "Workforce Planning & Role Definition",
            desc: "Identify talent needs, define job roles, and set clear candidate profiles to align with business goals.",
          },
          {
            title: "Sourcing & Employer Branding",
            desc: "Leverage multi-channel sourcing and enhance employer branding to attract top-tier candidates.",
          },
          {
            title: "Screening & Shortlisting",
            desc: " rigorous screening processes including resume analysis and preliminary assessments to shortlist the best fits.",
          },
          {
            title: "Interviewing & Evaluation",
            desc: "Structured interviews and skill-based evaluations to ensure candidates meet both technical and cultural requirements.",
          },
          {
            title: "Selection & Offer Management",
            desc: "Facilitating final selection and managing salary negotiations and offer letters seamlessly.",
          },
          {
            title: "Onboarding & Integration",
            desc: "Comprehensive onboarding support to ensure new hires integrate quickly and effectively into the company culture.",
          },
        ],
      },
    },
    {
      id: "2",
      slug: "hr-systems-digitization",
      img: "/service/card2.jpg",
      icon: Cloud,
      title: "HR Systems & Digitization",
      desc: "Automate and streamline your HR processes.",
      button: {
        label: "Learn more",
        href: "/services/hr-systems-digitization",
      },
      details: {
        intro:
          "Modernize your workforce management with cutting-edge HR technology. We help you transition from manual spreadsheets to automated, cloud-based systems.",
        scopeTitle: "Scope Of Our Digital Services",
        steps: [
          {
            title: "System Audit & Needs Analysis",
            desc: "Evaluating current processes to recommend the right tech stack.",
          },
          {
            title: "Software Implementation",
            desc: "Deploying HRIS, Payroll, and ATS systems tailored to your needs.",
          },
          {
            title: "Data Migration",
            desc: "Securely moving your employee data to new digital platforms.",
          },
          {
            title: "Staff Training",
            desc: "Training your team to utilize new HR tools effectively.",
          },
        ],
      },
    },
    {
      id: "3",
      slug: "hr-compliance-administration",
      img: "/service/card3.jpg",
      icon: Shield,
      title: "HR Administration & Compliance",
      desc: "Manage records, policies, and compliance easily.",
      button: {
        label: "Learn more",
        href: "/services/hr-compliance-administration",
      },
      details: {
        intro:
          "Navigate the complexities of labor laws and administrative burdens with confidence. We ensure your business remains compliant while reducing operational risks.",
        scopeTitle: "Scope Of Our Compliance Services",
        steps: [
          {
            title: "Policy Development",
            desc: "Creating employee handbooks and HR policies compliant with local laws.",
          },
          {
            title: "Contract Management",
            desc: "Drafting and reviewing employment contracts.",
          },
          {
            title: "Labor Law Advisory",
            desc: "Expert advice on labor relations and dispute resolution.",
          },
          {
            title: "Audit Services",
            desc: "Regular HR health checks to ensure ongoing compliance.",
          },
        ],
      },
    },
    {
      id: "4",
      slug: "work-permits-visas",
      img: "/service/card4.jpg",
      icon: FileText,
      title: "Work Permits & Visas",
      desc: "Quick, compliant work permit and visa handling.",
      button: { label: "Learn more", href: "/services/work-permits-visas" },
      details: {
        intro:
          "We simplify the bureaucratic process of securing work permits and visas, ensuring your expatriate staff can work legally and without delay.",
        scopeTitle: "Scope Of Our Visa Services",
        steps: [
          {
            title: "Document Verification",
            desc: "Ensuring all required paperwork is accurate and complete.",
          },
          {
            title: "Application Processing",
            desc: "Liaising with immigration authorities for permit approvals.",
          },
          {
            title: "Renewal Management",
            desc: "Tracking expiry dates and handling timely renewals.",
          },
        ],
      },
    },
    {
      id: "5",
      slug: "immigration-relocation",
      img: "/service/card5.jpg",
      icon: PlaneTakeoff,
      title: "Immigration & Relocation Services",
      desc: "Supporting global mobility through visa, housing, and relocation solutions.",
      button: { label: "Learn more", href: "/services/immigration-relocation" },
      details: {
        intro:
          "Moving talent across borders requires more than just paperwork. We provide holistic relocation support to ensure a smooth transition for employees and their families.",
        scopeTitle: "Scope Of Our Relocation Services",
        steps: [
          {
            title: "Housing Assistance",
            desc: "Helping expatriates find suitable accommodation.",
          },
          {
            title: "Schooling & Settling In",
            desc: "Assisting with school search and local orientation.",
          },
          {
            title: "Cultural Training",
            desc: "Preparing employees for cultural nuances in their new location.",
          },
        ],
      },
    },
  ],
};
