import { Navigate, createBrowserRouter } from "react-router-dom";

import { AccountBrokersPage } from "@/pages/account-brokers";
import { AccountProfilePage } from "@/pages/account-profile";
import { BondsPage } from "@/pages/bonds";
import { CurrencyMetalsPage } from "@/pages/currency-metals";
import { FundsPage } from "@/pages/funds";
import { FuturesPage } from "@/pages/futures";
import { NotFoundPage } from "@/pages/not-found";
import { OptionsPage } from "@/pages/options";
import { OverviewPage } from "@/pages/overview";
import { PortfolioPage } from "@/pages/portfolio";
import { StocksPage } from "@/pages/stocks";
import { StrategyDetailsPage } from "@/pages/strategy-details";
import { StrategiesOverviewPage } from "@/pages/strategies-overview";
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
      { path: "account", element: <Navigate to="/account/profile" replace /> },
      { path: "account/profile", element: <AccountProfilePage /> },
      { path: "account/brokers", element: <AccountBrokersPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
