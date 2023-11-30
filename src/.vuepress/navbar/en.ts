import { navbar } from "vuepress-theme-hope";

export const enNavbar = navbar([
  {
    text: 'Home',
    icon: "home",
    link: '/',
    // 该元素将一直处于激活状态
    activeMatch: '/',
  },
  {
    text: "Front end",
    icon: "lightbulb",
    prefix: "/en/",
    children: [
      {
        text: "",
        icon: "lightbulb",
        prefix: "html/",
        children: [{ text: "HTML", icon: "html5", link: "" }],
      },
      {
        text: "Beautify",
        icon: "brush",
        children: [{ text: "CSS", icon: "css3-alt", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" }],
      },
      {
        text: "Javascript",
        icon: "square",
        prefix: "js/",
        children: [{ text: "javascript", icon: "square-js", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }],
      },
      {
        text: "Framework",
        icon: "brush",
        children: [{ text: "Vue", icon: "circle-dot", link: "https://vuejs.org/index.html" },
        { text: "React", icon: "circle-dot", link: "https://react.dev/" },
      ],
      },
    ],
  },
  {
    text:'Note',
    icon:'pen-to-square',
    children:[
        { text: 'Markdown', link: 'https://1m29yg5p67.k.topthink.com/@markdown' },
        {text:'Vuepress',link:'https://blog.csdn.net/passwordgloo/category_12211122.html'},
        {text:'hexo',link:'https://hexo.io/zh-cn/index.html'}
    ]
}
]);
