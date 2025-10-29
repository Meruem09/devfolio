import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "briskly",
    title: "Briskly",
    period: {
      start: "06.2025",
      end: "07.2025"
    },
    link: "https://briskly-gaw3.vercel.app/",
    video:"./project-video/briskly.mp4",
    skills: [
      "Open Source",
      "React",
      "TypeScript",
      "Prisma",
      "NeonDB",
      "Clerk Auth",
      "Package Publishing",
      "Gemini Api",
      "GitHub Actions",
    ],
    description: `Briskly: AI-powered study companion for last-minute learning with smart summaries and instant quizzes. / Your cramming companion when time runs out.
- 📄 File upload & instant summarization
- 🎥 Smart YouTube video recommendations  
- 🧠 AI-generated quiz creation
- 📝 Centralized notes hub
- 🔐 Secure Clerk authentication
- ⚡️ Fast, focused learning when you need it most
`,
    logo: "./project-logo/briskly.svg",
  },
  {
    id: "boardmate",
    title: "BoardMate",
    period: {
      start: "03.2025",
    },
    link: "https://github.com/Meruem09/Board_Mate",
    video: "./project-video/boardmate.mp4",
    skills: [
      "Open Source",
      "React",
      "Motion",
      "Grid view",
      "Todo app",
    ],
    description: `BoardMate: Trello-inspired task management for organized, priority-driven workflows. / Your visual workspace for getting things done.
- 📋 Multiple project boards for clear organization
- ✅ Quick task creation and assignment
- 🎯 Drag-and-drop priority reordering
- 🔄 Flexible board management across projects
- 🚀 Simple, intuitive interface for maximum productivity
- ⚡️ Built for teams and solo workflows alike`,
    logo: "./project-logo/todo.svg",
  },
  {
    id: "Watchnext",
    title: "WatchNext Mobile",
    period: {
      start: "07.2025",
    },
    link: "https://github.com/Meruem09/watchnext",
    skills: [
      "React Native",
      "Tailwind CSS v3",
      "Expo",     
      "ExpoGo",
    ],
    description: `WatchNext: React Native movie discovery app with latest releases, ratings, and instant trailers. / Your personal guide to what's worth watching.
- 🎬 Latest movie releases and recommendations
- ⭐ Detailed ratings and reviews at a glance
- 🎥 Instant trailer previews in-app
- 📱 Smooth native mobile experience
- 🔍 Comprehensive movie details and cast info
- ⚡️ Fast, intuitive browsing for your next watch`,
    logo: "./project-logo/watchnext.svg",
  },
  {
    id: "billing-system",
    title: "Billing System",
    period: {
      start: "09.2025",
      end:"09.2025"
    },
    link: "https://github.com/Meruem09/BillingSystem",
    skills: [
      "hackathon project",
      "Open Source",
      "C++",
      "CLI",
      "MakeFile",
    ],
    description: `BillPoint: Standalone C++ billing system for seamless cash counter operations. / Ready-to-use software with no extra setup required.
- 💳 Direct cash counter billing interface
- 📦 Complete item inventory management
- 🧾 Automated receipt generation and printing
- 👥 Customer data tracking and history
- 📊 Receipt archive and record management
- ⚡️ Lightweight, standalone executable — no installation needed`,
    logo: "./project-logo/billing.svg",
  },
  {
    id: "weatherApp",
    title: "Weather App",
    period: {
      start: "01.2025",
      end: "01.2025",
    },
    link: "https://github.com/Meruem09/weather_app",
    skills: [
      "Html",
      "CSS",
      "JS",
      "Api",
    ],
    logo:"./project-logo/weather.svg"
  },
  {
    id: "funweb",
    title: "FunWeb",
    period: {
      start: "07.2024",
      end: "07.2024",
    },
    link: "https://github.com/Meruem09/funweb",
    skills: [
      "HTML CSS JS",
      "1st Project",
    ],
    description:
      "My first Project. A Simple yet beautiful website it does have tons of problems but it's still Dear to me 💖",
    logo:"kira"
    },
];
