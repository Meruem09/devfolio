import type { User } from "@/features/profile/types/user";

export const USER: User = {
  firstName: "Rahul",
  lastName: "Varma",
  displayName: "Rahul Varma",
  username: "Rahul",
  gender: "male",
  pronouns: "he/him",
  bio: "Creating with code. Small details matter.",
  flipSentences: [
    "Developer.",
    "Graphic Designer.",
    "Freelancer.",
  ],
  address: "Ahmedabad, India",
  email: "dnJhaHVsLmVuZ2luZWVyQGdtYWlsLmNvbQ==", // base64 encoded
  website: " ",
  jobTitle: "Developer",
  jobs: [
    {
      title: "",
      company: "",
      website: "",
    },
  ],
  about: `
Hello, World! I’m Rahul Varma aka shiva. I build fast, beautiful software that people actually want to use.

I work with Next.js, React, and TypeScript to create web and mobile applications that don't just look good... they perform.
I'm all about clean code, smooth interactions, and experiences that feel effortless.

Outside of client work, I'm constantly tinkering with new tech and bringing ideas to life through side projects.

Let’s build something together!
  `,
  avatar: "img_bento.jpg",
  keywords: [
    "Rahul",
    "Rahul Varma",
    "Shiva",
    "VRAHUL",
  ],
  dateCreated: "2023-10-20", // YYYY-MM-DD
};
