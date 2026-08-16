import { Link, useLocation } from "react-router-dom";

import type { NavigationItem } from "@/shared/config/navigation";
import { cn } from "@/shared/lib/utils";

interface SectionNavProps {
  items: NavigationItem[];
}

function isNavigationItemActive(pathname: string, item: NavigationItem) {
  if (item.href === "/strategies") {
    return (
      pathname === "/strategies" ||
      (pathname.startsWith("/strategies/") &&
        pathname !== "/strategies/overview")
    );
  }

  return pathname === item.href;
}

export function SectionNav({ items }: SectionNavProps) {
  const { pathname } = useLocation();

  return (
    <div className="border-b bg-card/80 backdrop-blur-sm">
      <nav
        aria-label="Навигация раздела"
        className="mx-auto max-w-[1440px] overflow-x-auto px-4 [scrollbar-width:none] sm:px-6 lg:px-8 [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex justify-center min-w-max items-center gap-7">
          {items.map((item) => {
            const isActive = isNavigationItemActive(pathname, item);

            return (
              <li key={item.href}>
                <Link
                  to={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative inline-flex h-12 items-center text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                    isActive &&
                      "text-foreground after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:rounded-full after:bg-primary",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
