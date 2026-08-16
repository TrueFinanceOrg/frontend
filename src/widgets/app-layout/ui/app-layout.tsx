import { Outlet, useLocation } from "react-router-dom";

import {
  accountNavigation,
  portfolioNavigation,
  strategiesNavigation,
  type NavigationItem,
} from "@/shared/config/navigation";
import { AppHeader } from "@/widgets/app-header";
import { SectionNav } from "@/widgets/section-nav";

function getSectionNavigation(pathname: string): NavigationItem[] | null {
  if (pathname.startsWith("/portfolio")) return portfolioNavigation;
  if (pathname.startsWith("/strategies")) return strategiesNavigation;
  if (pathname.startsWith("/account")) return accountNavigation;
  return null;
}

export function AppLayout() {
  const { pathname } = useLocation();
  const sectionNavigation = getSectionNavigation(pathname);

  return (
    <div className="min-h-screen bg-background">
      <AppHeader />
      {sectionNavigation && <SectionNav items={sectionNavigation} />}
      <main>
        <Outlet />
      </main>
    </div>
  );
}
