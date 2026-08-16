import { LayoutDashboard } from "lucide-react";

interface PagePlaceholderProps {
  title: string;
  description?: string;
}

export function PagePlaceholder({
  title,
  description = "Страница подготовлена для дальнейшей разработки.",
}: PagePlaceholderProps) {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <div className="mb-8">
        <p className="mb-2 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
          TrueFinance
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
          {title}
        </h1>
      </div>

      <div className="flex min-h-[360px] items-center justify-center rounded-xl border border-dashed border-border bg-card/70 px-6 text-center shadow-[0_1px_2px_rgba(15,23,42,0.02)]">
        <div className="max-w-sm">
          <div className="mx-auto mb-4 flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
            <LayoutDashboard aria-hidden="true" className="size-5" />
          </div>
          <p className="text-sm font-medium text-foreground">
            Пока здесь пусто
          </p>
          <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
