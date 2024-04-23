import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      }
    },
    extend: {
      colors: {
        primary: {
          100: "#faf7de",
          300: "#fff9c7",
          500: "#ffeb3c",
          800: "#f5dc05",
          900: "#ffcd05"
        },
        secondary: {
          100: "#f7f5f5",
          200: "#e0dede",
          300: "#6590a3",
          800: "#5e636a"
        },
        ternary: {
          300: "#3d3d3d",
          500: "#212121"
        },
        "accent-blue": "#000",
      },
      boxShadow: {
        "light-100":
          "0px 12px 20px 0px rgba(184, 184, 184, 0.03), 0px 6px 12px 0px rgba(184, 184, 184, 0.02), 0px 2px 4px 0px rgba(184, 184, 184, 0.03)",
        "light-200": "10px 10px 20px 0px rgba(218, 213, 213, 0.01)",
        "light-300": "-10px 10px 20px 0px rgba(218, 213, 213, 0.0)",
        "dark-100": "0px 2px 10px 0px rgba(46, 52, 56, 0.10)",
        "dark-200": "2px 0px 20px 0px rgba(39, 36, 36, 0.04)"
      }
    },
    backgroundImage: {
      "main-slider": "url('/assets/images/bg-slider.jpg')",
    },
    screens: {
      sm: "576px",
      // => @media (min-width: 576px) { ... }
      md: "768px",
      // => @media (min-width: 768px) { ... }
      lg: "992px",
      // => @media (min-width: 992px) { ... }
      xl: "1200px"
      // => @media (min-width: 1200px) { ... }
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" }
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" }
      }
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out"
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")]
}
export default config
