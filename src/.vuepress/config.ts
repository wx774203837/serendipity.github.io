import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "Serendipity",
      description: "Serendipity",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
