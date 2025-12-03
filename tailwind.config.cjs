/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        blob: {
          "0%, 100%": {
            transform: "translateY(0) scale(1)",
            borderRadius: "60% 40% 65% 35% / 60% 45% 55% 40%",
          },
          "33%": {
            transform: "translateY(-4px) scale(1.05)",
            borderRadius: "40% 60% 35% 65% / 45% 60% 40% 55%",
          },
          "66%": {
            transform: "translateY(2px) scale(0.98)",
            borderRadius: "55% 45% 60% 40% / 50% 40% 60% 50%",
          },
        },
      },
      animation: {
        blob: "blob 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
