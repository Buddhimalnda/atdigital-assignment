import { light } from "@mui/material/styles/createPalette";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      primary: "#6B3CC9",
      secondary: "#F28D35",
      "analogous-1": "#6A44F2",
      "analogous-2": "#1CBDDD",
      "triadic-1": "#52378C",
      dark: {
        100: "#78BF91",
        200: "#4DCA79",
      },
      "tricorn-black": "#2F2F2F",
      acier: {
        100: "#545A75",
        200: "#9C9991",
      },
      light: {
        100: "#FAF8FF",
      },
      "wizard-white": "#E2F2FE",
      "cuddyl-yarn": "#FFF8E0",
      error: "#FF0335",
      success: "#5EB30B",
    },
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
export default config;
