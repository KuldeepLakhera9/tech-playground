// Central course data for LearnSphere.
// Kept as plain JS objects (no backend) per assignment requirements.

export const categories = ["All", "Development", "Cloud", "Design", "DevOps"];

// Every category maps to ONE fixed accent color. Defined once here so the
// whole app (filters, card accents, chips) stays visually consistent instead
// of re-deciding colors in each component.
export const categoryStyles = {
  Development: {
    chip: "bg-primary-100 text-primary-700 dark:bg-primary-500/10 dark:text-primary-400",
    bar: "bg-primary-500",
    active: "bg-primary-500 text-white",
  },
  Cloud: {
    chip: "bg-sky-100 text-sky-600 dark:bg-sky-500/10 dark:text-sky-400",
    bar: "bg-sky-500",
    active: "bg-sky-500 text-white",
  },
  Design: {
    chip: "bg-violet-100 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
    bar: "bg-violet-500",
    active: "bg-violet-500 text-white",
  },
  DevOps: {
    chip: "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
    bar: "bg-amber-500",
    active: "bg-amber-500 text-white",
  },
};

export const statusStyles = {
  Completed: "bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
  "In Progress": "bg-amber-100 text-amber-600 dark:bg-amber-500/10 dark:text-amber-400",
  "Not Started": "bg-slate-100 text-slate-500 dark:bg-slate-500/10 dark:text-slate-400",
};

export const courses = [
  {
    id: 1,
    title: "React for Beginners",
    description: "Learn the fundamentals of React and build modern, component-driven web applications.",
    category: "Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    progress: 60,
    status: "In Progress",
    lessons: [
      "Introduction to React & Virtual DOM",
      "JSX Syntax & Element Rendering",
      "Functional Components & Props",
      "React useState & Basic Interactions",
      "Handling Forms & User Inputs"
    ]
  },
  {
    id: 2,
    title: "Advanced JavaScript Patterns",
    description: "Master closures, prototypes, async patterns and design patterns used in production apps.",
    category: "Development",
    image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?q=80&w=800&auto=format&fit=crop",
    progress: 100,
    status: "Completed",
    lessons: [
      "Scope, Closures & Lexical Environments",
      "Prototypes & Object-Oriented JS",
      "Asynchronous JS: Promises & Async/Await",
      "Creational & Structural Design Patterns",
      "Functional Programming in JS"
    ]
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    description: "Get hands-on with core AWS services: EC2, S3, IAM, and cost-aware architecture.",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    progress: 40,
    status: "In Progress",
    lessons: [
      "Cloud Computing Concepts & AWS Global Infrastructure",
      "Compute Services: EC2, Lambda, & Elastic Beanstalk",
      "Storage & Databases: S3, RDS, & DynamoDB",
      "AWS Networking: VPC, Route 53, & CloudFront",
      "IAM Security & Billing Management"
    ]
  },
  {
    id: 4,
    title: "Azure Fundamentals",
    description: "Understand Azure's core services, pricing, and governance for cloud-first teams.",
    category: "Cloud",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=800&auto=format&fit=crop",
    progress: 0,
    status: "Not Started",
    lessons: [
      "Azure Architectural Components & Services",
      "Virtual Machines, App Services & Container Options",
      "Azure Virtual Networks & Storage Solutions",
      "Azure Active Directory & Security Fundamentals",
      "Azure Governance, SLAs & Lifecycle Management"
    ]
  },
  {
    id: 5,
    title: "UI Design Foundations",
    description: "Learn layout, color theory, and typography to design clean, usable interfaces.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    progress: 80,
    status: "In Progress",
    lessons: [
      "Visual Hierarchy & Layout Grids",
      "Color Theory & High-Contrast Schemes",
      "Typography Scales & Readability",
      "Design Systems & Component Library Setup",
      "Interactive Prototyping Basics"
    ]
  },
  {
    id: 6,
    title: "Figma for Product Teams",
    description: "Prototype, hand off, and collaborate on design systems using Figma.",
    category: "Design",
    image: "https://images.unsplash.com/photo-1613909207039-6b173b755cc1?q=80&w=800&auto=format&fit=crop",
    progress: 100,
    status: "Completed",
    lessons: [
      "Figma Workspace & Pen Tool Mastery",
      "Auto Layout v4 & Responsive Components",
      "Variants & Component Properties",
      "Advanced Smart Animate & Interactive Prototyping",
      "Developer Hand-off & Collaboration Workflows"
    ]
  },
  {
    id: 7,
    title: "Docker & Kubernetes Essentials",
    description: "Containerize applications and orchestrate them reliably at scale.",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?q=80&w=800&auto=format&fit=crop",
    progress: 20,
    status: "In Progress",
    lessons: [
      "Docker Engine & Basic Container Commands",
      "Writing Custom Dockerfiles & Building Images",
      "Multi-container Apps with Docker Compose",
      "Kubernetes Core Concepts: Pods, Services & Deployments",
      "Scaling & Rolling Updates in K8s"
    ]
  },
  {
    id: 8,
    title: "CI/CD Pipelines with GitHub Actions",
    description: "Automate build, test, and deployment workflows for faster, safer releases.",
    category: "DevOps",
    image: "https://images.unsplash.com/photo-1618477247222-acbdb0e159b3?q=80&w=800&auto=format&fit=crop",
    progress: 0,
    status: "Not Started",
    lessons: [
      "YAML Syntax & Workflow Structuring",
      "GitHub Actions Events & Trigger Scenarios",
      "Job Execution, Matrices, & Environment Secrets",
      "Self-Hosted Runners & Custom Actions Creation",
      "Automating Releases & Server Deployments"
    ]
  },
  {
    id: 9,
    title: "React State Management Deep Dive",
    description: "Compare Context, Redux, and Zustand to choose the right tool for your app's scale.",
    category: "Development",
    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800&auto=format&fit=crop",
    progress: 40,
    status: "In Progress",
    lessons: [
      "React Context API & Prop Drilling Solutions",
      "Redux Toolkit: Store, Slices, & Thunks",
      "Zustand: Lightweight & Atomic State Management",
      "Recoil & Jotai: Primitive/Atom-based states",
      "Server State caching with TanStack Query"
    ]
  },
];
