

const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./slices/**/*.{js,ts,jsx,tsx}", // Add your slices folder here!
  ],
  // theme:{
  //   extend :{
  //     fontFamily:{
  //       sans : ["var(--font-bowlby-sc)"],
  //       mono : ["var(--font-dm-mono)"],
  //     }
  //   }
  // }


};

export default config;
