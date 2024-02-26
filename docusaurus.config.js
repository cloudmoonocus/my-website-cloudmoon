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
          editUrl: "https://github.com/cloudmoonocus/my-website-cloudmoon/blob/master/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/cloudmoonocus/my-website-cloudmoon/blob/master/",
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
      metadata: [
        {
          name: "keywords",
          content:
            "Frontend 前端 Vue React Bolg 博客 Note 笔记 Learn 学习 面试 Project 项目 Route 学习路线 成长 Cloudmoon 云月 茅屋 编程 Coding",
        },
        { name: "twitter:card", content: "Cloudmoon-Website" },
      ],
      navbar: {
        title: "记录成长过程的一个「茅屋🛖」",
        logo: {
          alt: "Cloudmoon",
          src: "img/hovel.png",
        },
        items: [
          // {
          //   type: "docSidebar",
          //   sidebarId: "tutorialSidebar",
          //   position: "right",
          //   label: "笔记",
          // },
          {
            href: "https://www.yuque.com/cloudmoon",
            label: "笔记",
            position: "right",
          },
          { to: "/blog", label: "博客", position: "right" },
          { to: "/project", label: "项目", position: "right" },
          {
            href: "https://github.com/cloudmoonocus/my-website-cloudmoon",
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
                href: "https://www.yuque.com/cloudmoon",
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
              {
                html: `
                <a href="https://vercel.com" target="_blank">
                  <img src="/img/power-by-vercel.svg" alt="Powered by Vercel" height="60" style="margin-top: 10px;" />
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
    }),

  plugins: [
    // 搜索
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexDocs: true,
        indexBlog: true,
        language: "zh",
      },
    ],
  ],
};

module.exports = config;
