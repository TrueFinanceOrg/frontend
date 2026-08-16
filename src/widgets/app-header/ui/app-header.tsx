import { Bell, ChartNoAxesCombined, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { primaryNavigation } from "@/shared/config/navigation";
import { cn } from "@/shared/lib/utils";
import { Button } from "@/shared/ui/button";

export function AppHeader() {
  const { pathname } = useLocation();

  return (
    <header className="border-b bg-card">
      <div className="mx-auto flex justify-between h-16 max-w-[1440px] items-center gap-5 px-4 sm:px-6 lg:h-[72px] lg:px-8">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5 rounded-md"
          aria-label="TrueFinance — на главную"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_5px_16px_rgba(0,145,82,0.18)]">
            <ChartNoAxesCombined aria-hidden="true" className="size-5" />
          </span>
          <span className="hidden text-lg font-semibold tracking-[-0.03em] text-foreground sm:inline">
            True<span className="text-primary">Finance</span>
          </span>
        </Link>

        <nav aria-label="Основная навигация" className="w-fit">
          <ul className="flex w-fit items-center gap-1">
            {primaryNavigation.map((item) => {
              const isActive =
                item.matchPrefix === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.matchPrefix);

              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "inline-flex h-9 items-center rounded-lg px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground lg:px-4",
                      isActive && "bg-accent text-accent-foreground",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1.5">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label="Уведомления"
            title="Уведомления"
            className="text-muted-foreground"
          >
            <Bell aria-hidden="true" className="size-[18px]" />
          </Button>
          <Button
            type="button"
            variant="ghost"
            className="h-10 gap-2 rounded-xl px-1.5 sm:pr-2.5"
            aria-label="Открыть меню профиля"
          >
            <span className="flex size-7 items-center justify-center rounded-lg bg-foreground text-xs font-semibold text-background">
              А
            </span>
            <span className="hidden text-sm font-medium text-foreground md:inline">
              Александр
            </span>
            <ChevronDown
              aria-hidden="true"
              className="hidden size-4 text-muted-foreground md:block"
            />
          </Button>
        </div>
      </div>
    </header>
  );
}
