import React from 'react';
import Wrapper from '@/components/wrapper';

const SectionCard = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="bg-card text-card-foreground rounded-radii-4xs border border-border shadow-3xs p-4 sm:p-6">
    <h2 className="text-heading-md sm:text-heading-lg font-aktiv-grotesk-thai font-medium text-foreground mb-4">
      {title}
    </h2>
    {children}
  </section>
);

const Swatch = ({ className, label }: { className: string; label: string }) => (
  <div className="space-y-2">
    <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-radii-4xs border ${className}`}></div>
    <p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground truncate">{label}</p>
  </div>
);

const DesignTokensDemo = () => {
  return (
    <Wrapper className="bg-background">
      <div className="mx-auto max-w-7xl space-y-6 sm:space-y-8">
        <header className="px-2 sm:px-0">
          <h1 className="text-heading-2xl sm:text-heading-3xl font-aktiv-grotesk-thai font-light text-foreground">
            Design Tokens
          </h1>
          <p className="text-body-sm font-sarabun text-muted-foreground mt-1">Responsive overview of your system tokens</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          <SectionCard title="Colors">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
              <Swatch className="bg-slate-50 border-slate-200" label="slate-50" />
              <Swatch className="bg-slate-100 border-slate-200" label="slate-100" />
              <Swatch className="bg-slate-200 border-slate-300" label="slate-200" />
              <Swatch className="bg-slate-300 border-slate-400" label="slate-300" />
              <Swatch className="bg-slate-400 border-slate-500" label="slate-400" />
              <Swatch className="bg-slate-500 border-slate-600" label="slate-500" />
            </div>
          </SectionCard>

          <SectionCard title="Typography">
            <div className="space-y-4">
              <div>
                <h1 className="text-heading-xl sm:text-heading-3xl font-aktiv-grotesk-thai font-light text-foreground">
                  Heading Showcase
                </h1>
                <p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground mt-1">Aktiv Grotesk Thai, responsive</p>
              </div>
              <div>
                <p className="text-body-md sm:text-body-md font-sarabun text-foreground">
                  Body text sample using Sarabun with responsive sizing. Resize the window to see layout adapt.
                </p>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Spacing">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 h-space-4 w-space-4 rounded"></div>
                <span className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">space-4</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 h-space-6 w-space-6 rounded"></div>
                <span className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">space-6</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 h-space-8 w-space-8 rounded"></div>
                <span className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">space-8</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-blue-500 h-space-10 w-space-10 rounded"></div>
                <span className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">space-10</span>
              </div>
            </div>
          </SectionCard>

          <SectionCard title="Border Radius">
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              <Swatch className="bg-green-500 border-transparent rounded-radii-none" label="none" />
              <Swatch className="bg-green-500 border-transparent rounded-radii-4xs" label="4xs" />
              <Swatch className="bg-green-500 border-transparent rounded-radii-3xs" label="3xs" />
              <Swatch className="bg-green-500 border-transparent rounded-radii-2xs" label="2xs" />
              <Swatch className="bg-green-500 border-transparent rounded-radii-xs" label="xs" />
              <Swatch className="bg-green-500 border-transparent rounded-radii-full" label="full" />
            </div>
          </SectionCard>

          <SectionCard title="Shadows">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-card p-4 sm:p-6 rounded-radii-4xs shadow-3xs border border-border"><p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">shadow-3xs</p></div>
              <div className="bg-card p-4 sm:p-6 rounded-radii-4xs shadow-2xs border border-border"><p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">shadow-2xs</p></div>
              <div className="bg-card p-4 sm:p-6 rounded-radii-4xs shadow-xs border border-border"><p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">shadow-xs</p></div>
              <div className="bg-card p-4 sm:p-6 rounded-radii-4xs shadow-sm border border-border"><p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">shadow-sm</p></div>
              <div className="bg-card p-4 sm:p-6 rounded-radii-4xs shadow-md border border-border"><p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">shadow-md</p></div>
              <div className="bg-card p-4 sm:p-6 rounded-radii-4xs shadow-lg border border-border"><p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground">shadow-lg</p></div>
            </div>
          </SectionCard>

          <SectionCard title="Breakpoints">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              <p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground"><span className="font-medium">sm</span> 640px</p>
              <p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground"><span className="font-medium">md</span> 768px</p>
              <p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground"><span className="font-medium">lg</span> 1024px</p>
              <p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground"><span className="font-medium">xl</span> 1280px</p>
              <p className="text-body-xs sm:text-body-sm font-sarabun text-muted-foreground"><span className="font-medium">2xl</span> 1536px</p>
            </div>
          </SectionCard>
        </div>
      </div>
    </Wrapper>
  );
};

export default DesignTokensDemo;
