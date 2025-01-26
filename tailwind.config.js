/** @type {import('tailwindcss').Config} */
const { createThemes } = require("tw-colors");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Unchanged
  theme: {
    extend: {
      fontFamily: {
        Inconsolata: ["Inconsolata", "monospace"], // Unchanged
      },
      colors: {
        mainBg: "#0a0e14",
        bgText: "#101620",
        textColor: "#efefef",
        accentColor: "#e6b450",
        titlebarBg: "#1f2428",
        sidebarBg: "#0a0e14",
        sidebarHoverBg: "#00010a",
        explorerBg: "#0a0e14",
        explorerHoverBg: "#00010a",
        explorerBorder: "transparent",
        tabsBg: "#0a0e14",
        tabBg: "#0a0e14",
        tabActiveBg: "#0a0e14",
        tabBorder: "transparent",
        bottombarBg: "#0a0e14",
        bottombarBorder: "transparent",
        buttonBg: "#e6b450",
        buttonText: "#0a0e14",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#0a0e14",
        scrollbarThumbBg: "#454647",
        articleBg: "#10121a",
      }
    },
  },
  plugins: [
    createThemes({
      github: {
        mainBg: "#24292e",
        bgText: "rgba(56, 58, 61, 0.35)",
        textColor: "#efefef",
        accentColor: "#f9826c",
        titlebarBg: "#1f2428",
        sidebarBg: "#24292e",
        sidebarHoverBg: "#1f2428",
        explorerBg: "#1f2428",
        explorerHoverBg: "#24292e",
        explorerBorder: "#161a1d",
        tabsBg: "#1f2428",
        tabBg: "#1f2428",
        tabActiveBg: "#24292e",
        tabBorder: "#24292e",
        bottombarBg: "#24292e",
        bottombarBorder: "#1b1f23",
        buttonBg: "#176f2c",
        buttonText: "#dcffe4",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#24292e",
        scrollbarThumbBg: "#333536",
        articleBg: "#1f2428",
      },
      dracula: {
        mainBg: "#282a36",
        bgText: "#313340",
        textColor: "#efefef",
        accentColor: "#bd93f9",
        titlebarBg: "#1e1f29",
        sidebarBg: "#343746",
        sidebarHoverBg: "#3c3d51",
        explorerBg: "#21222c",
        explorerHoverBg: "#313241",
        explorerBorder: "#161a1d",
        tabsBg: "#191a21",
        tabBg: "#21222c",
        tabActiveBg: "#282a36",
        tabBorder: "#191a21",
        bottombarBg: "#191a21",
        bottombarBorder: "#191a21",
        buttonBg: "#44475a",
        buttonText: "#f8f8f2",
        bottombarHoverBg: "#4f4f52",
        scrollbarTrackBg: "#282a36",
        scrollbarThumbBg: "#454647",
        articleBg: "#21222c",
      },
      // Other themes like ayuDark, ayuMirage, nord, and nightOwl remain unchanged
      ayuDark: { /* Theme details */ },
      ayuMirage: { /* Theme details */ },
      nord: { /* Theme details */ },
      nightOwl: { /* Theme details */ },
    }),
  ],
  // safelist: [
  //   // Safelist dynamic theme classes
  //   {
  //     pattern: /bg-(github|dracula|nightOwl|ayuDark|ayuMirage|nord)-(mainBg|titlebarBg|textColor|accentColor|sidebarBg|tabsBg|tabActiveBg|buttonBg)/,
  //   },
  //   {
  //     pattern: /text-(github|dracula|nightOwl|ayuDark|ayuMirage|nord)-(textColor|accentColor)/,
  //   },
  // ],
};
