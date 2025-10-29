import type { TechStack } from "../types/tech-stack";

// <Image
//                           src={`https://assets.chanhdai.com/images/tech-stack-icons/${tech.key}-light.svg`}
//                           alt={`${tech.title} light icon`}
//                           width={32}
//                           height={32}
//                           className="hidden [html.light_&]:block"
//                           unoptimized

export const TECH_STACK: TechStack[] = [
  {
    key: "typescript",
    title: "TypeScript",
    href: "https://www.typescriptlang.org/",
    categories: ["Language"],
  },
  {
    key: "javascript",
    title: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    categories: ["Language"],
  },
  {
    key: "python",
    title: "Python",
    href: "https://www.python.org/",
    categories: ["Language"],
  },
  {
    key: "nodejs",
    title: "Node.js",
    href: "https://nodejs.org/",
    categories: ["Runtime Environment"],
  },

  {
    key: "reactjs",
    title: "React",
    href: "https://react.dev/",
    categories: ["Library", "UI Library"],
  },
  {
    key: "nextjs",
    title: "Next.js",
    href: "https://nextjs.org/",
    categories: ["Framework"],
    theme: true,
  },
  {
    key: "tailwindcss",
    title: "Tailwind CSS",
    href: "https://tailwindcss.com/",
    categories: ["Framework"],
  },
  {
    key: "shadcn",
    title: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    categories: ["Library", "Component Library"],
    theme: true,
  },
  {
    key: "motion",
    title: "Motion",
    href: "https://motion.dev/",
    categories: ["Library", "Animation"],
  },

  {
    key: "git",
    title: "Git",
    href: "https://git-scm.com/",
    categories: ["Version Control"],
  },

  {
    key: "mysql",
    title: "MySQL",
    href: "https://www.mysql.com/",
    categories: ["Database"],
  },
  {
    key: "mongo",
    title: "MongoDB",
    href: "https://www.mongodb.com/",
    categories: ["Database"],
  },

  {
    key: "figma",
    title: "Figma",
    href: "https://www.figma.com/",
    categories: ["Tools", "Design"],
  },

  {
  key: "postman",
  title: "Postman",
  href: "https://www.postman.com/",
  categories: ["Tools"],
  },

  {
  key: "canva",
  title: "Canva",
  href: "https://www.canva.com/",
  categories: ["Tools, Design"],
  },
  
  {
  key: "prisma",
  title: "Prisma-Orm",
  href: "https://www.prisma.com/",
  categories: ["Tools"],
  },  
];
