/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "morado": "rgba(124, 58, 237, 100%)",
		"blanco": "rgba(0,0,0,0)"
			},
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [false],
  },
  
};
