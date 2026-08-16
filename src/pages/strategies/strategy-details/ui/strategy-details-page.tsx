import { useParams } from "react-router-dom";

import { PagePlaceholder } from "@/shared/ui/page-placeholder";

export function StrategyDetailsPage() {
  const { id } = useParams();

  return (
    <PagePlaceholder
      title={`Стратегия ${id ?? ""}`.trim()}
      description="Здесь появится подробное описание выбранной стратегии."
    />
  );
}
