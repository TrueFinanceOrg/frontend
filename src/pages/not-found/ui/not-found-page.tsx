import { Link } from "react-router-dom";

export function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[calc(100vh-72px)] max-w-[1440px] items-center justify-center px-4 py-10 text-center sm:px-6 lg:px-8">
      <div>
        <p className="text-sm font-semibold text-primary">404</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight">
          Страница не найдена
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">
          Проверьте адрес или вернитесь в общий раздел.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
        >
          Вернуться на главную
        </Link>
      </div>
    </section>
  );
}
