const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
        about: "./mentions.html",
        partenaires: "./partenaires.html",
        tableau: "./pages/tableau.html",
        tableau1: "./pages/tableau1.html",
        tableau2: "./pages/tableau2.html",
        tableau3: "./pages/tableau3.html",
        tableau4: "./pages/tableau4.html",
        tableau5: "./pages/tableau5.html",
        tableau6: "./pages/tableau6.html",
        tableau7: "./pages/tableau7.html",
        tableau8: "./pages/tableau8.html",
        tableau9: "./pages/tableau9.html",
        tableau10: "./pages/tableau10.html",
        tableau11: "./pages/tableau11.html",
        tableau12: "./pages/tableau12.html",
        tableau13: "./pages/tableau13.html",
        tableau14: "./pages/tableau14.html",
        tableau15: "./pages/tableau15.html",

        // ...
        // List all files you want in your build
      },
    },
  },
});
