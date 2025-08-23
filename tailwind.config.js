const { parseDesignTokens } = require('./src/lib/tokens-parser.cjs');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // Design tokens from tokens.json
      colors: {
        // Keep existing shadcn/ui colors
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Add design token colors
        ...parseDesignTokens().colors,
      },
      spacing: {
        ...parseDesignTokens().spacing,
      },
      borderRadius: {
        ...parseDesignTokens().borderRadius,
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      boxShadow: {
        ...parseDesignTokens().boxShadow,
      },
      screens: {
        ...parseDesignTokens().screens,
      },
      blur: {
        ...parseDesignTokens().blur,
      },
      fontFamily: {
        'aktiv-grotesk-thai': ['Aktiv Grotesk Thai', 'sans-serif'],
        'sarabun': ['Sarabun', 'sans-serif'],
      },
      fontSize: {
        // Add typography tokens as font sizes
        'heading-3xl': ['57px', { lineHeight: '1.3', letterSpacing: '-0.01px' }],
        'heading-2xl': ['47px', { lineHeight: '1.3', letterSpacing: '-0.01px' }],
        'heading-xl': ['39px', { lineHeight: '1.3', letterSpacing: '-0.01px' }],
        'heading-lg': ['33px', { lineHeight: '1.3', letterSpacing: '-0.01px' }],
        'heading-md': ['27px', { lineHeight: '1.3', letterSpacing: '-0.01px' }],
        'heading-sm': ['23px', { lineHeight: '1.3', letterSpacing: '-0.01px' }],
        'heading-xs': ['19px', { lineHeight: '1.3', letterSpacing: '-0.01px' }],
        'body-md': ['16px', { lineHeight: '1.55', letterSpacing: '0.01px' }],
        'body-sm': ['14px', { lineHeight: '1.55', letterSpacing: '0.01px' }],
        'body-xs': ['12px', { lineHeight: '1.55', letterSpacing: '0.01px' }],
        'body-2xs': ['11px', { lineHeight: '1.55', letterSpacing: '0.01px' }],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}