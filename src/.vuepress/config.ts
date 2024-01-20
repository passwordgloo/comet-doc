import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  plugins: [

  ],

  base: "/",

  locales: {
    "/": {
      lang: "zh-CN",
      title: "星辰文库",
      description: "风起云涌",
    },
    // "/en/": {
    //   lang: "en-US",
    //   title: "Comet Library",
    //   description: "code pragramme turtorial",
    // }
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
