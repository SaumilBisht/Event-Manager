import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubikVinyl: ['var(--font-rubik-vinyl)', 'cursive'],
        rubikStatic: ['var(--font-rubik-static)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
