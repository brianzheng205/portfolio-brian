import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Brian Zheng's Portfolio",
  description: "6.1040 Fall 2024",
  base: "/portfolio-brian/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Blogs", link: "/blogs" },
      { text: "Assignments", link: "/assignments" },
      { text: "About Me", link: "/aboutMe" },
    ],

    sidebar: [
      {
        text: "Blogs",
        link: "/blogs",
      },
      {
        text: "Assignments",
        link: "/assignments",
      },
      {
        text: "About Me",
        link: "/aboutMe",
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/61040-fa24" }],
  },
});
