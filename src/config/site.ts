import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "",
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Devfolio",
    href: "/",
  },
];

export const GITHUB_USERNAME = "meruem09";
export const SOURCE_CODE_GITHUB_REPO = "https://github.com/Meruem09/Devfolio.git";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/Meruem09/Devfolio";

export const UTM_PARAMS = {
  utm_source: "",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
