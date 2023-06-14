/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx,html}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'soccer': "url('/images/webp/Soccer.webp')",
        'stadium': "url('/images/webp/stadium.webp')",
        'Argentina': "url('/images/webp/banderaArgentina.webp')",
        'Polonia': "url('/images/webp/banderaPolonia.webp')",
        'Noruega': "url('/images/webp/banderaNoruega.webp')",
        'Francia': "url('/images/webp/banderaFrancia.webp')"
      }
    },
  },
  plugins: [],
}

