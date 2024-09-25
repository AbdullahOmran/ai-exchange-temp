import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#C41E3A",
        lightPrimary: "#2563eb",
        secondary: "#1f2937",
        lightSecondary: "#b9bfc4",
        SecondText: "#a39ca8",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
export default config;
