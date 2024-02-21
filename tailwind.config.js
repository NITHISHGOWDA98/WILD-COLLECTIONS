/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        'bottom': '0 35px 60px -15px #a3e635',
      },
    },
    colors: {
      'primary': '#60a5fa',
      'danger': '#ef4444',
      'header': '#cffafe',
      'navbar': '#67e8f9',
      'grey': '#4b5563',
      'content': '#faf5ff',
      'purple-300': '#d8b4fe',
      'purple': '#a855f7',
      'rose': '#fecdd3',
      'cyan': '#67e8f9',
      'white': '#f8fafc',
      'black': '#1a2e05',
    },
  },
  plugins: [],
};
