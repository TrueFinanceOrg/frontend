import { Navigate, createBrowserRouter, redirect } from "react-router-dom";

import { AccountBrokersPage } from "@/pages/account/account-brokers";
import { AccountProfilePage } from "@/pages/account/account-profile";
import { BondsPage } from "@/pages/portfolio/bonds";
import { CurrencyMetalsPage } from "@/pages/portfolio/currency-metals";
import { FundsPage } from "@/pages/portfolio/funds";
import { FuturesPage } from "@/pages/portfolio/futures";
import { NotFoundPage } from "@/pages/not-found";
import { OptionsPage } from "@/pages/portfolio/options";
import { OverviewPage } from "@/pages/overview";
import { PortfolioPage } from "@/pages/portfolio";
import { StocksPage } from "@/pages/portfolio/stocks";
import { StrategyDetailsPage } from "@/pages/strategies/strategy-details";
import { StrategiesOverviewPage } from "@/pages/strategies/strategies-overview";
import { StrategiesPage } from "@/pages/strategies";
import { AppLayout } from "@/widgets/app-layout";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      { index: true, element: <OverviewPage /> },
      { path: "portfolio", element: <PortfolioPage /> },
      { path: "portfolio/stocks", element: <StocksPage /> },
      { path: "portfolio/bonds", element: <BondsPage /> },
      { path: "portfolio/futures", element: <FuturesPage /> },
      { path: "portfolio/options", element: <OptionsPage /> },
      {
        path: "portfolio/currency-metals",
        element: <CurrencyMetalsPage />,
      },
      { path: "portfolio/funds", element: <FundsPage /> },
      { path: "strategies/overview", element: <StrategiesOverviewPage /> },
      { path: "strategies", element: <StrategiesPage /> },
      { path: "strategies/:id", element: <StrategyDetailsPage /> },
      {
        path: "stratagies/:id",
        loader: ({ params }) =>
          redirect(`/strategies/${encodeURIComponent(params.id ?? "")}`),
      },
      { path: "account", element: <Navigate to="/account/profile" replace /> },
      { path: "account/profile", element: <AccountProfilePage /> },
      { path: "account/brokers", element: <AccountBrokersPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
