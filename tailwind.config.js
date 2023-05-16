/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "soft-peach": {
          50: "#f9f4f4",
          100: "#f5ebeb",
          200: "#eddbdb",
          300: "#dfc2c2",
          400: "#cc9d9d",
          500: "#b77c7c",
          600: "#a06262",
          700: "#855050",
          800: "#704444",
          900: "#5f3d3d",
          950: "#321d1d",
        },
        secondary: "#0F0F0F",
        tertiary: "#363636",
      },
      screens: {
        xs: "480px",
        "2xs": "380px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
};
