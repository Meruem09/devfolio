import dynamic from "next/dynamic";
import NavbarDown from "@/features/profile/components/nav1";
import { SiteHeader } from "@/components/site-header";
import FollowingEyes from "@/components/animation/eye-follow";
const ScrollTop = dynamic(() =>
  import("@/components/scroll-top").then((mod) => mod.ScrollTop)
);

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="max-w-screen overflow-x-hidden px-2">{children}
            <NavbarDown/>

      </main>
      <ScrollTop />
    </>
  );
}
