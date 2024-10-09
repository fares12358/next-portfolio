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
        myBlack: "#1d1c22",
        myGreen: "#00f594",
      },
      animationDelay: {
        0: "0s",
        0.5: "500ms",
        1: "1000ms",
        1.5: "1500ms",
        // Add as many custom delays as you need
      },
      boxShadow: {
        'my': '0px 12px 20px 0px #00000080',
      },
      keyframes: {
        move: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'infinite-line': 'move 5s linear infinite',
      },
    },
  },
  plugins: [],
};
