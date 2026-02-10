/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sand: "#f7f9fe",
        brand: {
          primary: "#1f3b83",
          accent: "#f2a900",
          accent2: "#f47c20",
          light: "#e9f0ff",
        },
      },
      boxShadow: {
        inner: "inset 0 1px 4px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};
