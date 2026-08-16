import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { PagePlaceholder } from "./page-placeholder";

describe("PagePlaceholder", () => {
  it("renders the page title and description", () => {
    render(
      <PagePlaceholder title="Акции" description="Раздел для анализа акций" />,
    );

    expect(screen.getByRole("heading", { name: "Акции" })).toBeInTheDocument();
    expect(screen.getByText("Раздел для анализа акций")).toBeInTheDocument();
  });
});
