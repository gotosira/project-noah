import Wrapper from "@/components/wrapper";
import { useAuth } from "@/components/providers/auth-provider";
import { Link } from "react-router-dom";
import { TokenButton } from "@/components/ui/token-button";
import { ArrowRight, Palette, Type, Component } from "lucide-react";

const Home = () => {
  const { user } = useAuth();

  return (
    <Wrapper className="bg-background">
      <div className="mx-auto max-w-7xl px-2 sm:px-0 pt-6">
        <section className="rounded-radii-4xs bg-gradient-to-r from-[hsl(var(--card))] to-[hsl(var(--accent))] dark:from-slate-900 dark:to-slate-800 text-foreground border border-border shadow-3xs p-6 sm:p-10">
          <p className="text-body-sm font-sarabun text-muted-foreground">Welcome back</p>
          <h1 className="text-heading-2xl sm:text-heading-3xl font-aktiv-grotesk-thai font-light text-foreground mt-1">
            {user?.name || 'User'}
          </h1>
          <p className="text-body-md font-sarabun text-muted-foreground mt-2 max-w-2xl">Explore your design system tokens and UI components. Start with tokens or jump into interactive button demos.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/design-tokens">
              <TokenButton variant="primary" size="lg" iconRight={<ArrowRight className="w-4 h-4" />}>Design Tokens</TokenButton>
            </Link>
            <Link to="/button-demo">
              <TokenButton variant="secondary" size="lg">Button Demo</TokenButton>
            </Link>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-6">
          <div className="bg-card text-card-foreground rounded-radii-4xs border border-border shadow-3xs p-5">
            <div className="flex items-center gap-3">
              <Palette className="w-5 h-5 text-primary" />
              <h3 className="text-heading-md font-aktiv-grotesk-thai text-foreground">Tokens</h3>
            </div>
            <p className="text-body-sm font-sarabun text-muted-foreground mt-2">Colors, spacing, radii, shadows with responsive preview.</p>
            <Link to="/design-tokens" className="inline-block mt-3">
              <TokenButton variant="outline" size="md">Open</TokenButton>
            </Link>
          </div>
          <div className="bg-card text-card-foreground rounded-radii-4xs border border-border shadow-3xs p-5">
            <div className="flex items-center gap-3">
              <Component className="w-5 h-5 text-primary" />
              <h3 className="text-heading-md font-aktiv-grotesk-thai text-foreground">Buttons</h3>
            </div>
            <p className="text-body-sm font-sarabun text-muted-foreground mt-2">Variants, sizes, icons and disabled states.</p>
            <Link to="/button-demo" className="inline-block mt-3">
              <TokenButton variant="outline" size="md">Open</TokenButton>
            </Link>
          </div>
          <div className="bg-card text-card-foreground rounded-radii-4xs border border-border shadow-3xs p-5">
            <div className="flex items-center gap-3">
              <Type className="w-5 h-5 text-primary" />
              <h3 className="text-heading-md font-aktiv-grotesk-thai text-foreground">Typography</h3>
            </div>
            <p className="text-body-sm font-sarabun text-muted-foreground mt-2">Headings and body styles using Sarabun & Aktiv Grotesk Thai.</p>
          </div>
        </section>
      </div>
    </Wrapper>
  );
};

export default Home;
