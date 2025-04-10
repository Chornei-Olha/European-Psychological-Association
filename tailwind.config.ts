import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dm: ["var(--font-dm-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
        reem: ["var(--font-reem)", "sans-serif"],
        prosto: ["var(--font-prosto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
