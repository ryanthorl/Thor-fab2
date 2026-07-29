@import "tailwindcss" source(none);
@source "../src";
@import "tw-animate-css";

@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-steel: var(--steel);
  --color-steel-light: var(--steel-light);
  --color-ember: var(--ember);
  --font-display: "Oswald", "Impact", sans-serif;
  --font-sans: "Barlow", "Inter", sans-serif;
}

:root {
  --radius: 0.25rem;
  /* Dark forge theme — black, gunmetal, brushed steel, signature red */
  --background: oklch(0.14 0.005 250);
  --foreground: oklch(0.96 0.005 250);
  --card: oklch(0.18 0.006 250);
  --card-foreground: oklch(0.96 0.005 250);
  --popover: oklch(0.16 0.005 250);
  --popover-foreground: oklch(0.96 0.005 250);
  --primary: oklch(0.58 0.22 25);            /* signature red */
  --primary-foreground: oklch(0.99 0 0);
  --secondary: oklch(0.24 0.006 250);
  --secondary-foreground: oklch(0.96 0.005 250);
  --muted: oklch(0.22 0.005 250);
  --muted-foreground: oklch(0.68 0.01 250);
  --accent: oklch(0.58 0.22 25);
  --accent-foreground: oklch(0.99 0 0);
  --destructive: oklch(0.58 0.22 25);
  --destructive-foreground: oklch(0.99 0 0);
  --border: oklch(0.28 0.006 250);
  --input: oklch(0.24 0.006 250);
  --ring: oklch(0.58 0.22 25);
  --steel: oklch(0.62 0.01 250);
  --steel-light: oklch(0.82 0.008 250);
  --ember: oklch(0.72 0.19 45);
  --gradient-steel: linear-gradient(135deg, oklch(0.22 0.005 250) 0%, oklch(0.32 0.008 250) 50%, oklch(0.18 0.005 250) 100%);
  --gradient-ember: linear-gradient(135deg, oklch(0.58 0.22 25) 0%, oklch(0.5 0.2 28) 100%);
  --shadow-forge: 0 20px 60px -20px oklch(0.58 0.22 25 / 0.35);
  --shadow-deep: 0 30px 80px -20px oklch(0 0 0 / 0.6);
}

@layer base {
  * { border-color: var(--color-border); }
  html { scroll-behavior: smooth; }
  body {
    background-color: var(--color-background);
    color: var(--color-foreground);
    font-family: var(--font-sans);
    background-image:
      radial-gradient(at 20% 0%, oklch(0.58 0.22 25 / 0.08) 0px, transparent 50%),
      radial-gradient(at 80% 100%, oklch(0.3 0.01 250 / 0.4) 0px, transparent 50%);
  }
  h1, h2, h3, h4, .font-display {
    font-family: var(--font-display);
    letter-spacing: 0.02em;
    text-transform: uppercase;
  }
}

@utility text-stroke {
  -webkit-text-stroke: 1px var(--color-steel-light);
  color: transparent;
}

@utility bg-grid {
  background-image:
    linear-gradient(oklch(0.3 0.01 250 / 0.4) 1px, transparent 1px),
    linear-gradient(90deg, oklch(0.3 0.01 250 / 0.4) 1px, transparent 1px);
  background-size: 48px 48px;
}

@utility bg-diagonal {
  background: repeating-linear-gradient(
    135deg,
    oklch(0.18 0.006 250),
    oklch(0.18 0.006 250) 12px,
    oklch(0.14 0.005 250) 12px,
    oklch(0.14 0.005 250) 24px
  );
}

@utility cut-corner {
  clip-path: polygon(0 0, calc(100% - 18px) 0, 100% 18px, 100% 100%, 18px 100%, 0 calc(100% - 18px));
}
