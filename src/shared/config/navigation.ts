export interface NavigationItem {
  label: string;
  href: string;
}

export interface PrimaryNavigationItem extends NavigationItem {
  matchPrefix: string;
}

export const primaryNavigation: PrimaryNavigationItem[] = [
  { label: "Общее", href: "/", matchPrefix: "/" },
  { label: "Портфель", href: "/portfolio", matchPrefix: "/portfolio" },
  {
    label: "Стратегии",
    href: "/strategies/overview",
    matchPrefix: "/strategies",
  },
  {
    label: "Личный кабинет",
    href: "/account/profile",
    matchPrefix: "/account",
  },
];

export const portfolioNavigation: NavigationItem[] = [
  { label: "Портфель", href: "/portfolio" },
  { label: "Акции", href: "/portfolio/stocks" },
  { label: "Облигации", href: "/portfolio/bonds" },
  { label: "Фьючерсы", href: "/portfolio/futures" },
  { label: "Опционы", href: "/portfolio/options" },
  {
    label: "Валюта и металлы",
    href: "/portfolio/currency-metals",
  },
  { label: "Фонды", href: "/portfolio/funds" },
];

export const strategiesNavigation: NavigationItem[] = [
  { label: "Общее", href: "/strategies/overview" },
  { label: "Стратегии", href: "/strategies" },
];

export const accountNavigation: NavigationItem[] = [
  { label: "Профиль", href: "/account/profile" },
  { label: "Брокеры", href: "/account/brokers" },
];
