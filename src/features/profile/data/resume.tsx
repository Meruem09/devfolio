import { Icon2 } from "@/components/icon2";
import { HomeIcon} from "lucide-react";

export const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Meruem09",
        icon: Icon2.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/rahul-varma-1129a9328/",
        icon: Icon2.linkedin,

        navbar: true,
      },
      Peerlist: {
        name: "Peerlist",
        url: "https://peerlist.io/shiva1",
        icon: Icon2.peerlist,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icon2.youtube,
        navbar: true,
      },
    },
  },
} as const;