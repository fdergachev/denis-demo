/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{html,js,svelte,ts}'],
   theme: {
      extend: {
         colors: {
            Accent: "#455CE9",
            DarkAccent: "#334bd3",
            Background: "rgb(41,41,41)",
            Dark: "#1c1d20",
            Secondary: "#999",
            BackgroundDark: "#141516",
         }
      },
   },
   plugins: [],
}

