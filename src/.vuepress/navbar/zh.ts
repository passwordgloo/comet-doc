import { navbar } from "vuepress-theme-hope";

export const zhNavbar = navbar([
  {
    text: '主页',
    icon: "home",
    link: '/',
    // 该元素将一直处于激活状态
    activeMatch: '/',
  },
  {
    text: "图书",
    icon: "book",
    children: [// { text: "计算机",icon:"computer",link: "computer" },
      { text: "政治", icon: "bookmark", link: "politics" },
      { text: "教育学", icon: "bookmark", link: "education" },
    ],
  },
  {
    text: "职业",
    icon: "briefcase",
    prefix: "/",
    children: [ { text: "社会工作", icon: 'fan', link: "social" },
      { text: "事业/公务", icon: 'fan', link: "public" },
    ],
  },
  {
    text: "软件",
    icon: "block-question",
    prefix: "/",
    children: [
      { text: "PS", icon: 'image', link: "ps" },
      { text: "AI", icon: 'droplet', link: "illustrator" },
      // { text: "Access", icon: 'database', link: "access" },
    ],
  },
]);
