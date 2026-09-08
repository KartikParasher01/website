import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--bg)",
        panel: "var(--panel)",
        "panel-2": "var(--panel-2)",
        border: "var(--border)",
        "border-2": "var(--border-2)",
        ink: "var(--ink)",
        muted: "var(--muted)",
        faint: "var(--faint)",
        em: "var(--em)",
        "em-bright": "var(--em-bright)",
        "em-deep": "var(--em-deep)"
      },
      fontFamily: {
        disp: ["var(--font-disp)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      }
    }
  },
  plugins: []
};

export default config;
