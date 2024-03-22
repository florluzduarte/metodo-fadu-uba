import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      black: "#1D1D1B",
      white: '#ffffff',
      green: {
        200: "#FFCA80",
        400: "#FFB650"
      },
      gray: {
        100: "#FDFDFD",
        200: "#FAFAFA",
        300: "#D9D9D9",
        400: "#BDBDBD"
      }
    }
  },
  plugins: [],
};
export default config;
