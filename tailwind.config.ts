import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ragilac: ["var(--font-ragilac)", "sans-serif"],
        redHat: ["var(--font-redHat)", "sans-serif"],
      },
      colors: {
        // Custom color "test" defined here
        brown: "#EAD5C4",
        dark_brown: "#A78B88",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // themes: false,
    themes: [
      {
        mytheme: {
          primary: "#1f2937", // Primary color
          secondary: "#f000b8", // Secondary color
          accent: "#BD6D6D", // Accent color
          neutral: "#3d4451", // Neutral color
          "base-100": "#fbf7f4", // Background color
          info: "#2094f3", // Info color
          success: "#009485", // Success color
          warning: "#ff9900", // Warning color
          error: "#ff5724", // Error color
          "primary-content": "#242424",
          "secondary-content": "#C95c5c",
          // "test": "red"
        },
      },
      // Optional: DaisyUI’s default themes can be enabled alongside your custom theme
      // "light",
      // "dark",
    ],
  },
};
export default config;
