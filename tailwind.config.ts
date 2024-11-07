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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        comfortaa: ["Comfortaa", "sans-serif"],
      },
      backgroundImage: {
        heroDekstop: "url('/Hero.svg')",
        heroLaptop: "url('/Hero Laptop.svg')",
        heroMobile: "url('/Hero Mobile.svg')",
      },
      borderRadius: {
        meliuk: "27% 74% 58% 41% / 38% 33% 67% 60% "
      }
    },
  },
  plugins: [],
};
export default config;
