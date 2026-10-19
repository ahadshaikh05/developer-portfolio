/**
 * Single source of truth for all portfolio content.
 * Edit this file to update the site — components only render what is here.
 */

export const site = {
  name: "Ahad Shaikh",
  title: "Senior Software Developer",
  tagline: "Mobile Application Development",
  experienceYears: "7+",
  email: "ahad.shaikh0507@gmail.com",
  phone: "+91 90490 320123",
  linkedin: "https://linkedin.com/in/ahadshaikh05",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Senior Software Developer with 7+ years of experience building mobile and web applications with React Native, React, Flutter, and TypeScript, plus AI-assisted development.",
  /** Path inside /public, e.g. "/profile.jpg". Leave null to show the placeholder. */
  profileImage: null as string | null,
  /** Small label shown in the hero. Change or hide it whenever you like. */
  availability: {
    show: true,
    label: "Open to conversations",
  },
  /** Optional JSON endpoint for the contact form. Falls back to mailto when empty. */
  contactEndpoint: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? "",
} as const;

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const heroStack = ["React Native", "React", "Flutter", "TypeScript", "Next.js"];

export type SkillCategory = {
  id: string;
  title: string;
  icon:
    | "mobile"
    | "frontend"
    | "languages"
    | "state"
    | "api"
    | "cloud"
    | "testing"
    | "ai"
    | "practices";
  items: string[];
};

export const skillCategories: SkillCategory[] = [
  {
    id: "mobile",
    title: "Mobile Development",
    icon: "mobile",
    items: ["React Native", "Flutter", "Cross-platform development"],
  },
  {
    id: "frontend",
    title: "Frontend Development",
    icon: "frontend",
    items: ["React", "Next.js", "Responsive web design"],
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: "languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Dart"],
  },
  {
    id: "state",
    title: "State Management",
    icon: "state",
    items: ["Redux", "Redux Toolkit", "Redux Saga", "MobX"],
  },
  {
    id: "api",
    title: "APIs & Integrations",
    icon: "api",
    items: ["REST APIs", "GraphQL", "Google Maps", "Payment gateways", "Deep linking", "IoT"],
  },
  {
    id: "cloud",
    title: "Cloud & Analytics",
    icon: "cloud",
    items: ["Firebase", "Firebase Analytics", "AWS", "Push notifications"],
  },
  {
    id: "testing",
    title: "Testing & Build Tools",
    icon: "testing",
    items: ["Jest", "Webpack", "Grunt", "Unit testing", "Build optimization"],
  },
  {
    id: "ai",
    title: "AI-Assisted Development",
    icon: "ai",
    items: ["Claude", "Antigravity", "Prompt engineering", "AI-assisted development"],
  },
  {
    id: "practices",
    title: "Engineering Practices",
    icon: "practices",
    items: ["Git", "CI/CD", "Agile", "Scrum", "Debugging", "Performance optimization"],
  },
];

export type Experience = {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    role: "Systems Engineer",
    company: "Tata Consultancy Services",
    location: "Bangalore, India",
    period: "November 2022 – April 2026",
    highlights: [
      "Developed and maintained features for the Belgian Train ticket-booking mobile application using React Native, TypeScript, and Redux Saga.",
      "Built and supported LabApp, a proof-of-concept application for evaluating new technologies and solutions before their integration into the production application.",
      "Collaborated with cross-functional teams on proof-of-concept initiatives and iterative improvements to the railway application experience.",
      "Built cash desk system features using Next.js.",
    ],
    tags: ["React Native", "TypeScript", "Redux Saga", "Next.js"],
  },
  {
    role: "Software Developer",
    company: "Creative Capsule",
    location: "Verna, Goa",
    period: "May 2020 – September 2022",
    highlights: [
      "Built mobile and web applications for tracking agricultural fields and farmer resources using React and Flutter.",
      "Developed a Chrome extension for demonstrating the C2FO platform to prospective clients, including offline functionality using mock APIs and predefined data.",
      "Contributed to C2FO product features using React and TypeScript, with testing using Jest.",
      "Developed the Pepper IoT mobile application using React Native, TypeScript, and MobX.",
    ],
    tags: ["React", "Flutter", "React Native", "TypeScript", "MobX", "Jest"],
  },
  {
    role: "React Native Developer",
    company: "CopperCodes",
    location: "Panjim, Goa",
    period: "February 2019 – April 2020",
    highlights: [
      "Designed and built Android and iOS applications from scratch using React Native.",
      "Developed a club and pub ticket-booking application and published it to the Google Play Store and Apple App Store.",
      "Built a restaurant food-ordering application with Google Maps integration.",
      "Implemented Firebase and Facebook Analytics to track application usage and user behavior.",
    ],
    tags: ["React Native", "Firebase", "Google Maps", "Facebook Analytics"],
  },
];

export type ProjectVisualKind = "rail" | "tickets" | "food" | "iot" | "extension";

export type Project = {
  id: string;
  title: string;
  summary: string;
  contribution?: string;
  tags: string[];
  visual: ProjectVisualKind;
  caseStudy: {
    context: string;
    points: string[];
  };
  /** Optional real links to the official website / product / store listings. */
  links?: ProjectLink[];
};

export type ProjectLink = {
  label: string;
  href: string;
  kind: "website" | "product" | "android" | "ios";
};

export const projects: Project[] = [
  {
    id: "belgian-train",
    title: "Belgian Train Ticket-Booking Application",
    summary: "A production mobile application for railway ticket booking in Belgium.",
    contribution:
      "Developed and maintained mobile application features using React Native, TypeScript, and Redux Saga.",
    tags: ["React Native", "TypeScript", "Redux Saga"],
    visual: "rail",
    links: [
      { label: "SNCB Website", href: "https://www.belgiantrain.be", kind: "website" },
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=be.sncbnmbs.b2cmobapp",
        kind: "android",
      },
      {
        label: "App Store",
        href: "https://apps.apple.com/be/app/sncb-nmbs-timetable-tickets/id1504870215",
        kind: "ios",
      },
      // SNCB Lab is the public test version of the app. Remove these two if it is not the LabApp you worked on.
      {
        label: "SNCB Lab (Android)",
        href: "https://play.google.com/store/apps/details?id=be.sncbnmbs.b2clabapp",
        kind: "android",
      },
      { label: "SNCB Lab (iOS)", href: "https://apps.apple.com/be/app/sncb-lab/id1622811565", kind: "ios" },
    ],
    caseStudy: {
      context: "Role: Systems Engineer at Tata Consultancy Services (Nov 2022 – Apr 2026).",
      points: [
        "Developed and maintained features for the production ticket-booking app.",
        "Worked with cross-functional teams on iterative improvements to the railway application experience.",
        "Built and supported LabApp, a proof-of-concept app used to evaluate new technologies before integrating them into the production application.",
      ],
    },
  },
  {
    id: "club-pub-tickets",
    title: "Club/Pub Ticket-Booking Application",
    summary:
      "A cross-platform mobile application built from scratch to support entry ticket bookings for clubs and pubs. Published to both major mobile app stores.",
    tags: ["React Native", "Firebase", "Facebook Analytics"],
    visual: "tickets",
    caseStudy: {
      context: "Role: React Native Developer at CopperCodes (Feb 2019 – Apr 2020).",
      points: [
        "Designed and built the Android and iOS apps from scratch using React Native.",
        "Published the application to the Google Play Store and Apple App Store.",
        "Implemented Firebase and Facebook Analytics to track application usage and user behavior.",
      ],
    },
  },
  {
    id: "restaurant-ordering",
    title: "Restaurant Food-Ordering Application",
    summary: "A mobile application for restaurant food ordering with location-based features.",
    tags: ["React Native", "Google Maps API"],
    visual: "food",
    caseStudy: {
      context: "Role: React Native Developer at CopperCodes (Feb 2019 – Apr 2020).",
      points: [
        "Built the food-ordering application with React Native.",
        "Integrated Google Maps to provide location-based features.",
      ],
    },
  },
  {
    id: "pepper-iot",
    title: "Pepper IoT Control Application",
    summary: "A mobile application used to control Pepper IoT devices.",
    tags: ["React Native", "TypeScript", "MobX"],
    visual: "iot",
    links: [{ label: "Pepper Website", href: "https://pepper.me", kind: "website" }],
    caseStudy: {
      context: "Role: Software Developer at Creative Capsule (May 2020 – Sep 2022).",
      points: [
        "Developed the mobile application with React Native and TypeScript.",
        "Used MobX for application state management.",
      ],
    },
  },
  {
    id: "c2fo",
    title: "C2FO Chrome Extension & Product Contributions",
    summary:
      "A Chrome extension for offline demonstrations of the C2FO platform using mock APIs and predefined data, alongside contributions to the core web product.",
    tags: ["React", "TypeScript", "Jest"],
    visual: "extension",
    links: [
      { label: "C2FO Website", href: "https://c2fo.com", kind: "website" },
      { label: "C2FO Early Pay", href: "https://c2fo.com/supplier-solutions/early-pay/", kind: "product" },
    ],
    caseStudy: {
      context: "Role: Software Developer at Creative Capsule (May 2020 – Sep 2022).",
      points: [
        "Built a Chrome extension used to demonstrate the C2FO platform to prospective clients.",
        "Enabled offline demos through mock APIs and predefined data.",
        "Contributed to C2FO product features using React and TypeScript, with tests written in Jest.",
      ],
    },
  },
];

export const aiHighlights = [
  { title: "Claude", text: "Problem-solving, code exploration, and implementation support." },
  { title: "Antigravity", text: "AI-assisted development workflows for day-to-day productivity." },
  { title: "Prompt Engineering", text: "Writing clear, structured prompts to get dependable results." },
  { title: "AI-Assisted Development", text: "Faster iteration, with human review and testing kept in the loop." },
];

export const education = [
  {
    title: "Bachelor of Engineering in Computer Science",
    place: "Padre Conceicao College of Engineering, Verna, Goa",
    period: "July 2014 – June 2018",
  },
  {
    title: "Higher Secondary School, Science",
    place: "Infant Jesus Higher Secondary School, Colva, Goa",
    period: "June 2012 – May 2014",
  },
  {
    title: "High School",
    place: "St Joseph High School, Margao, Goa",
    period: "June 2002 – May 2012",
  },
];
