import type { Config } from "tailwindcss";

const config: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        brand: {
          gold: "#B8923A",
          "gold-light": "#D4A94E",
          "gold-dark": "#96762E",
          black: "#0A0A0A",
          dark: "#111111",
          "dark-card": "#1A1A1A",
          "off-white": "#F5F5F5",
          muted: "#999999",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
};

export default config;
