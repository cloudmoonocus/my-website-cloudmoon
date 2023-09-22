// @ts-check

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "成长茅屋 - Cloudmoon",
  tagline: "走在变强的路上",
  favicon: "img/hovel.png",

  url: "https://cloudmoon.asia",
  baseUrl: "/",

  organizationName: "cloudmoonocus",
  projectName: "blog",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/cloudmoonocus/cloudmoonocus.github.io/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/cloudmoonocus/cloudmoonocus.github.io/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "记录成功的一个「茅屋🛖」",
        logo: {
          alt: "Cloudmoon",
          src: "img/hovel.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "笔记",
          },
          { to: "/blog", label: "博客", position: "right" },
          { to: "/project", label: "项目", position: "right" },
          {
            href: "https://github.com/cloudmoonocus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "本站",
            items: [
              {
                label: "笔记",
                to: "/docs",
              },
              {
                label: "博客",
                to: "/blog",
              },
              {
                label: "项目",
                to: "/project",
              },
            ],
          },
          {
            title: "社交媒体",
            items: [
              {
                label: "关于我",
                to: "/about",
              },
              {
                label: "稀土掘金",
                href: "https://juejin.cn/user/1095541400549022",
              },
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/users/19636805/moon-cloud",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/moonClo57056359",
              },
            ],
          },
          {
            title: "更多",
            items: [
              // {
              // label: "友情链接",
              // to: "/friendLinks",
              // },
              {
                html: `
                <a href="https://docusaurus.io" target="_blank">
                  <img src="/img/buildwith.png" alt="Docusaurus" height="70" style="margin-top: 20px;" />
                </a>
                `,
              },
            ],
          },
        ],
        copyright: `Copyright ©${new Date().getFullYear()} ShaokangFeng. All rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "appId",
        apiKey: "apiKey",
        indexName: "YOUR_INDEX_NAME",
        contextualSearch: true,
        externalUrlRegex: "external\\.com|domain\\.com",
        replaceSearchResultPathname: {
          from: "/docs/", // or as RegExp: /\/docs\//
          to: "/",
        },
        searchParameters: {},
        searchPagePath: "search",
      },
    }),
};

module.exports = config;
