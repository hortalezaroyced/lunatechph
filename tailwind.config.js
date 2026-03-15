/** @type {import('tailwindcss').Config} */

export default {

  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],

  theme: {

    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px"
      }
    },

    extend: {

      /* Brand Color System */

      colors: {

        primary: "#2563EB",   // main brand blue
        accent: "#06B6D4",    // cyan highlight
        neutral: "#111827",   // dark neutral text

      },

      /* Typography */

      fontFamily: {

        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif"
        ],

      },

      /* Apple-style shadows */

      boxShadow: {

        soft: "0 10px 30px rgba(0,0,0,0.08)",

        glass: "0 8px 40px rgba(0,0,0,0.12)",

        card: "0 20px 60px rgba(0,0,0,0.12)",

      },

      /* Border radius */

      borderRadius: {

        xl2: "1.25rem",
        xl3: "1.75rem",

      },

      /* Blur utilities */

      backdropBlur: {

        xs: "2px"

      },

      /* Animation system */

      keyframes: {

        float: {

          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },

        },

        glow: {

          "0%,100%": { opacity: 0.3 },
          "50%": { opacity: 0.6 },

        },

        fadeUp: {

          "0%": {
            opacity: "0",
            transform: "translateY(40px)"
          },

          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }

        },

        slideRight: {

          "0%": {
            opacity: "0",
            transform: "translateX(-30px)"
          },

          "100%": {
            opacity: "1",
            transform: "translateX(0)"
          }

        }

      },

      animation: {

        float: "float 6s ease-in-out infinite",

        glow: "glow 8s ease-in-out infinite",

        fadeUp: "fadeUp 0.7s ease forwards",

        slideRight: "slideRight 0.6s ease forwards",

      }

    }

  },

  plugins: []

};
