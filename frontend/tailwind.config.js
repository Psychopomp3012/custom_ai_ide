/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Now you can use classes like 'bg-base', 'bg-panel', 'text-main'
        base: 'var(--ide-bg-base)',
        panel: 'var(--ide-bg-panel)',
        hover: 'var(--ide-bg-hover)',
        main: 'var(--ide-text-main)',
        muted: 'var(--ide-text-muted)',
      }
    },
  },
  plugins: [],
}
