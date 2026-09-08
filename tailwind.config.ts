import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem"
      },
      screens: {
        "2xl": "1200px"
      }
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        // Illoca Design Colors
        illoca: {
          bg: "#FBF8F2",
          paper: "#F6EFE3",
          card: "#FFFFFF",
          ink: "#1C1C1E",
          body: "#414141",
          muted: "#5B5B5B",
          light: "#8B8B8B",
          line: "#DCD5C8",
          border: "#9C9C9C",
          blue: "#3B60C5",
          "blue-dark": "#2B4FA8",
          coral: "#E76051",
          "coral-dark": "#CF4C3E",
          rust: "#EC633D",
          sand: "#F2E5D0"
        }
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        display: ["var(--font-display)"]
        sans: ["var(--font-sans)", "sans-serif"],
        display: ["var(--font-display)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top, rgba(70, 155, 255, 0.24), transparent 44%)"
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(77, 163, 255, 0.18), 0 24px 90px rgba(0, 0, 0, 0.38)",
        panel: "0 18px 40px rgba(0, 0, 0, 0.35)"
        paper: "3px 3px 0px rgba(0, 0, 0, 0.08)",
        "paper-lg": "5px 5px 0px rgba(0, 0, 0, 0.1)",
        "paper-card": "4px 4px 0px rgba(0, 0, 0, 0.08)",
        tab: "4px -2px 0px rgba(0, 0, 0, 0.06)",
        glow: "0 0 0 1px rgba(59, 96, 197, 0.18), 0 20px 60px rgba(0, 0, 0, 0.08)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" }
          "50%": { transform: "translateY(-6px)" }
        },
        spinSlow: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" }
        }
      },
      animation: {
        float: "float 6s ease-in-out infinite"
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spinSlow 12s linear infinite"
      }
    }
  },
  plugins: []
} satisfies Config;

export default config;
