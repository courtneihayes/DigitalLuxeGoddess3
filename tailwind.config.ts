import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        goddessGold: "#E0B755",
        goddessBlack: "#090909",
        goddessRose: "#F7E5F0",
        goddessPlum: "#2B1026"
      }
    }
  },
  plugins: []
};

export default config;
