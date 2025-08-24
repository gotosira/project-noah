import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <main className="pt-24 px-4">
      <section className="max-w-5xl mx-auto grid gap-6">
        <div className="rounded-xl border bg-card text-card-foreground p-8 shadow-sm">
          <h1 className="text-3xl font-semibold tracking-tight">Project Noah</h1>
          <p className="mt-2 text-muted-foreground">
            A modern React + Vite + Tailwind boilerplate with Supabase Auth and design tokens.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/auth" className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground hover:opacity-90">
              Sign in / Sign up
            </Link>
            <a href="https://github.com/gotosira/project-noah" target="_blank" rel="noreferrer noopener" className="inline-flex items-center rounded-md border px-4 py-2">
              View source
            </a>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-lg border p-4 bg-background">
            <h3 className="font-medium">Performance</h3>
            <p className="text-sm text-muted-foreground mt-1">Split chunks, pre-bundled deps, and lazy-loaded routes.</p>
          </div>
          <div className="rounded-lg border p-4 bg-background">
            <h3 className="font-medium">Auth</h3>
            <p className="text-sm text-muted-foreground mt-1">Email/password and Google Sign-In with redirect-safe routing.</p>
          </div>
          <div className="rounded-lg border p-4 bg-background">
            <h3 className="font-medium">Design tokens</h3>
            <p className="text-sm text-muted-foreground mt-1">Token-driven theming with accessible dark mode.</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Welcome;


