import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/guide/": [
    {
      text: "CMS Component",
      icon: "article",
      link: "/guide",
      // children: [
      //   {
      //     text: 'Form Components',
      //     collapsible: true,
      //     icon: 'edit',
      //     children: ['/guide/form-complete', '/guide/form-case'],
      //   },
      // ],
    },
    {
      text: "Table Components",
      icon: "editor",
      collapsible: true,
      // link: '/guide/table-complete',
      children: [{ text: "Table Examples", link: "/guide/table-complete" }],
    },
    {
      text: "Form Components",
      collapsible: true,
      icon: "edit",
      children: ["/guide/form-complete", "/guide/form-case"],
    },
    {
      text: "Form Rules Validation",
      icon: "enum",
      link: "/guide/rules/rules",
    },
    {
      text: "Form Table Generator",
      icon: "code",
      link: "/guide/form-gen",
    },
  ],
  "/flow/": [
    // { text: 'Introduction', link: '/flow/' },
    {
      text: "Button",
      link: "/flow/",
    },
    {
      text: "Viewport",
      link: "/flow/viewport",
    },
    {
      text: "Dialog",
      link: "/flow/dialog",
    },
    {
      text: "Area",
      link: "/flow/area",
    },
    {
      text: "Toast",
      link: "/flow/toast",
    },
    {
      text: "Badge",
      link: "/flow/badge",
    },
    {
      text: "Flow Chart",
      link: "/flow/flow-chart",
    },
  ],
});
