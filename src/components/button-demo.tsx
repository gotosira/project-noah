//
import Wrapper from '@/components/wrapper';
import { ButtonV2 } from './ui/button-v2';
import { FigmaButton } from './ui/figma-button';
import { ExactFigmaButton } from './ui/exact-figma-button';
import { PerfectFigmaButton } from './ui/perfect-figma-button';
import { TokenButton } from './ui/token-button';
import { ArrowRight, Download, Heart, Settings, AlertTriangle, CheckCircle } from 'lucide-react';

const ButtonDemo = () => {
  return (
    <Wrapper className="bg-background">
      <div className="mx-auto max-w-7xl p-4 sm:p-6 space-y-8">
        <div className="text-center">
        <h1 className="text-heading-3xl font-aktiv-grotesk-thai font-light text-foreground mb-4">
          Button Component Demo
        </h1>
        <p className="text-body-md font-sarabun text-muted-foreground max-w-2xl mx-auto">
          A comprehensive button component built with your design tokens, featuring multiple variants, sizes, and icon support.
        </p>
        </div>

      {/* Primary Buttons */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-foreground">
          Primary Buttons
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 size="sm">
            Small Button
          </ButtonV2>
          <ButtonV2 size="md">
            Medium Button
          </ButtonV2>
          <ButtonV2 size="lg">
            Large Button
          </ButtonV2>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 size="md" iconLeft={<Download className="w-4 h-4" />}>
            Download
          </ButtonV2>
          <ButtonV2 size="md" iconRight={<ArrowRight className="w-4 h-4" />}>
            Continue
          </ButtonV2>
          <ButtonV2 size="md" iconLeft={<Heart className="w-4 h-4" />} iconRight={<ArrowRight className="w-4 h-4" />}>
            Like & Share
          </ButtonV2>
        </div>
      </section>

      {/* Secondary Buttons */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-foreground">
          Secondary Buttons
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 variant="secondary" size="sm">
            Small Secondary
          </ButtonV2>
          <ButtonV2 variant="secondary" size="md">
            Medium Secondary
          </ButtonV2>
          <ButtonV2 variant="secondary" size="lg">
            Large Secondary
          </ButtonV2>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 variant="secondary" size="md" iconLeft={<Settings className="w-4 h-4" />}>
            Settings
          </ButtonV2>
        </div>
      </section>

      {/* Outline Buttons */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-foreground">
          Outline Buttons
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 variant="outline" size="sm">
            Small Outline
          </ButtonV2>
          <ButtonV2 variant="outline" size="md">
            Medium Outline
          </ButtonV2>
          <ButtonV2 variant="outline" size="lg">
            Large Outline
          </ButtonV2>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 variant="outline" size="md" iconLeft={<Download className="w-4 h-4" />}>
            Download
          </ButtonV2>
        </div>
      </section>

      {/* Ghost Buttons */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-foreground">
          Ghost Buttons
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 variant="ghost" size="sm">
            Small Ghost
          </ButtonV2>
          <ButtonV2 variant="ghost" size="md">
            Medium Ghost
          </ButtonV2>
          <ButtonV2 variant="ghost" size="lg">
            Large Ghost
          </ButtonV2>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 variant="ghost" size="md" iconLeft={<Heart className="w-4 h-4" />}>
            Like
          </ButtonV2>
        </div>
      </section>

      {/* Icon Only Buttons */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-foreground">
          Icon Only Buttons
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 variant="primary" size="sm" iconOnly>
            <Settings className="w-4 h-4" />
          </ButtonV2>
          <ButtonV2 variant="primary" size="md" iconOnly>
            <Settings className="w-5 h-5" />
          </ButtonV2>
          <ButtonV2 variant="primary" size="lg" iconOnly>
            <Settings className="w-6 h-6" />
          </ButtonV2>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 variant="secondary" size="md" iconOnly>
            <Heart className="w-5 h-5" />
          </ButtonV2>
          <ButtonV2 variant="outline" size="md" iconOnly>
            <Download className="w-5 h-5" />
          </ButtonV2>
          <ButtonV2 variant="ghost" size="md" iconOnly>
            <ArrowRight className="w-5 h-5" />
          </ButtonV2>
        </div>
      </section>

      {/* Perfect Figma Button */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-slate-800">
          Perfect Figma Match (Flexible Width)
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <PerfectFigmaButton>
            Click here
          </PerfectFigmaButton>
          <PerfectFigmaButton>
            Download File
          </PerfectFigmaButton>
          <PerfectFigmaButton>
            Continue to Next Step
          </PerfectFigmaButton>
        </div>
        <p className="text-body-sm font-sarabun text-muted-foreground">
          These buttons have flexible width that adapts to text length, with exact padding (16px horizontal, 8px vertical) and styling from your Figma specifications.
        </p>
      </section>

      {/* Figma Original Button */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-foreground">
          Figma Original Design (Tailwind)
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <ExactFigmaButton>
            Click here
          </ExactFigmaButton>
        </div>
        <p className="text-body-sm font-sarabun text-muted-foreground">
          This button uses Tailwind classes with Figma styling.
        </p>
      </section>

      {/* Figma Button Variants */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-foreground">
          Figma Button Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <FigmaButton size="sm">
            Small Button
          </FigmaButton>
          <FigmaButton size="md">
            Medium Button
          </FigmaButton>
          <FigmaButton size="lg">
            Large Button
          </FigmaButton>
        </div>
        
        <div className="flex flex-wrap items-center gap-4">
          <FigmaButton size="md" iconLeft={<Download className="w-4 h-4" />}>
            Download
          </FigmaButton>
          <FigmaButton size="md" iconRight={<ArrowRight className="w-4 h-4" />}>
            Continue
          </FigmaButton>
        </div>
      </section>

      {/* Disabled States */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-slate-800">
          Disabled States
        </h2>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonV2 variant="primary" size="md" disabled>
            Disabled Primary
          </ButtonV2>
          <ButtonV2 variant="secondary" size="md" disabled>
            Disabled Secondary
          </ButtonV2>
          <ButtonV2 variant="outline" size="md" disabled>
            Disabled Outline
          </ButtonV2>
          <ButtonV2 variant="ghost" size="md" disabled>
            Disabled Ghost
          </ButtonV2>
        </div>
      </section>

      {/* Token Button Variants */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-slate-800">
          Token Button Variants (Using Design Tokens)
        </h2>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-muted-foreground font-medium">Primary:</p>
              <TokenButton variant="primary">
                Click here
              </TokenButton>
            </div>
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-muted-foreground font-medium">Secondary:</p>
              <TokenButton variant="secondary">
                Secondary Action
              </TokenButton>
            </div>
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-muted-foreground font-medium">Outline:</p>
              <TokenButton variant="outline">
                Cancel Operation
              </TokenButton>
            </div>
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-muted-foreground font-medium">Ghost:</p>
              <TokenButton variant="ghost">
                Skip This Step
              </TokenButton>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center gap-4">
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-muted-foreground font-medium">Danger:</p>
              <TokenButton variant="danger" iconLeft={<AlertTriangle className="w-4 h-4" />}>
                Delete
              </TokenButton>
            </div>
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-muted-foreground font-medium">Success:</p>
              <TokenButton variant="success" iconLeft={<CheckCircle className="w-4 h-4" />}>
                Save
              </TokenButton>
            </div>
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-muted-foreground font-medium">Warning:</p>
              <TokenButton variant="warning" iconLeft={<AlertTriangle className="w-4 h-4" />}>
                Warning
              </TokenButton>
            </div>
          </div>
        </div>
      </section>

      {/* Button Comparison */}
      <section className="space-y-6">
        <h2 className="text-heading-lg font-aktiv-grotesk-thai font-medium text-slate-800">
          Button Comparison
        </h2>
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-slate-600 font-medium">Perfect Figma (103x48px):</p>
              <PerfectFigmaButton>
                Click here
              </PerfectFigmaButton>
            </div>
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-slate-600 font-medium">Token Button (Primary):</p>
              <TokenButton variant="primary">
                Click here
              </TokenButton>
            </div>
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-slate-600 font-medium">Exact Figma (Tailwind):</p>
              <ExactFigmaButton>
                Click here
              </ExactFigmaButton>
            </div>
            <div className="space-y-2">
              <p className="text-body-sm font-sarabun text-slate-600 font-medium">ButtonV2 (Generic):</p>
              <ButtonV2 variant="primary" size="lg">
                Click here
              </ButtonV2>
            </div>
          </div>
        </div>
      </section>

      {/* Design Token Information */}
      <section className="space-y-4 p-6 bg-card text-card-foreground border border-border rounded-radii-4xs">
        <h3 className="text-heading-md font-aktiv-grotesk-thai font-medium text-foreground">
          Design Tokens Used
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-body-sm font-sarabun text-muted-foreground">
          <div>
            <p><strong>Dimensions:</strong> Flexible width × 48px min-height</p>
            <p><strong>Primary Color:</strong> #ff6900 (orange from Figma)</p>
            <p><strong>Text Color:</strong> white (from tokens)</p>
            <p><strong>Font:</strong> Sarabun Medium, 16px</p>
            <p><strong>Letter Spacing:</strong> 0.16px</p>
          </div>
          <div>
            <p><strong>Line Height:</strong> 24.8px</p>
            <p><strong>Padding:</strong> space-6 (16px) horizontal, space-2 (8px) vertical</p>
            <p><strong>Border Radius:</strong> rounded-lg (8px)</p>
            <p><strong>Spacing:</strong> gap-2.5 (10px) between elements</p>
            <p><strong>Colors from Tokens:</strong> slate, red, green, amber, blue</p>
          </div>
        </div>
      </section>

      {/* Color Palette from Tokens */}
      <section className="space-y-4">
        <h3 className="text-heading-md font-aktiv-grotesk-thai font-medium text-foreground">
          Color Palette from Design Tokens
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="space-y-2">
            <div className="w-16 h-16 bg-slate-50 rounded-radii-4xs border border-slate-200"></div>
            <p className="text-body-sm font-sarabun text-slate-600">slate-50</p>
          </div>
          <div className="space-y-2">
            <div className="w-16 h-16 bg-slate-100 rounded-radii-4xs border border-slate-200"></div>
            <p className="text-body-sm font-sarabun text-slate-600">slate-100</p>
          </div>
          <div className="space-y-2">
            <div className="w-16 h-16 bg-slate-200 rounded-radii-4xs border border-slate-300"></div>
            <p className="text-body-sm font-sarabun text-slate-600">slate-200</p>
          </div>
          <div className="space-y-2">
            <div className="w-16 h-16 bg-red-500 rounded-radii-4xs border border-red-600"></div>
            <p className="text-body-sm font-sarabun text-slate-600">red-500</p>
          </div>
          <div className="space-y-2">
            <div className="w-16 h-16 bg-green-500 rounded-radii-4xs border border-green-600"></div>
            <p className="text-body-sm font-sarabun text-slate-600">green-500</p>
          </div>
          <div className="space-y-2">
            <div className="w-16 h-16 bg-amber-500 rounded-radii-4xs border border-amber-600"></div>
            <p className="text-body-sm font-sarabun text-slate-600">amber-500</p>
          </div>
        </div>
      </section>
      </div>
    </Wrapper>
  );
};

export default ButtonDemo;
