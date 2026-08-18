// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '正中活动中心',
  tagline: '中政集团 · 河北正定中学活动中心',
  favicon: 'img/zdzx.ico',

  url: 'https://zdzx.zhoeng.com.cn',
  baseUrl: '/',

  organizationName: 'ZHOENGGROUP',
  projectName: 'zdzx',

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // ==================== 多语言配置 ====================
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans', 'en'],
    localeConfigs: {
      'zh-Hans': { label: '中文（中国）' },
      'en': { label: 'English' },
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          showLastUpdateTime: false,
          // editUrl: 'https://github.com/ZHOENGGROUP/docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: '记录',
          blogDescription: '事件与活动记录',
          postsPerPage: 10,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  // ==================== 主题插件 ====================
  themes: [],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-nB0miv6/jRmo5UMMR1wu3Gz6NLsoTkbqJghGIsx//Rlm+ZU03BU6SQNC66uf4l5+',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',

      // ==================== 颜色模式 ====================
      colorMode: {
        defaultMode: undefined,
        respectPrefersColorScheme: true,
        disableSwitch: false,
      },

      // ==================== Algolia 搜索配置 ====================
      algolia: {
        // 替换为你的真实值（申请方式见后文）
        appId: 'YOUR_APP_ID',
        apiKey: 'YOUR_SEARCH_API_KEY',   // 注意：这是 Search-Only API Key
        indexName: 'YOUR_INDEX_NAME',
        contextualSearch: true,
        // 可选：搜索参数
        searchParameters: {},
      },

      navbar: {
        title: '正中 · 中心',
        logo: {
          alt: '正中 · 中心',
          src: 'img/zdzx.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'helpSidebar',
            position: 'left',
            label: '帮助中心',
          },
          {
            type: 'docSidebar',
            sidebarId: 'newsSidebar',
            position: 'left',
            label: '新闻中心',
          },
          {
            type: 'docSidebar',
            sidebarId: 'articleSidebar',
            position: 'left',
            label: '文章中心',
          },
          {
            type: 'docSidebar',
            sidebarId: 'activitySidebar',
            position: 'left',
            label: '活动中心',
          },
          { to: '/blog', label: '记录', position: 'left' },
          
          // ==================== 右侧菜单 ====================
          {
            type: 'dropdown',
            label: '页面',
            position: 'right',
            items: [
              { to: '/about', label: '关于' },
              { to: '/services', label: '服务' },
              { to: '/friends', label: '友链' },
              { to: '/resources', label: '资源' },
            ],
          },
          {
            type: 'dropdown',
            label: '网站',
            position: 'right',
            items: [
              { to: '/settings', label: '设置' },
              { to: '/insights', label: '洞察' },
              { to: '/changelog', label: '更新日志' },
              { to: '/privacy', label: '隐私政策' },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/ZHOENGGROUP/zdzx',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: '文档',
            items: [
              { label: '关于我们', to: '/docs/help/about-us' },
              { label: '用户协议', to: '/docs/help/useragreement' },
              { label: '隐私政策', to: '/docs/help/privacypolicy' },
              { label: '免责声明', to: '/docs/help/disclaimer' },
            ],
          },
          {
            title: '页面',
            items: [
              { label: '关于', to: '/about' },
              { label: '服务', to: '/services' },
              { label: '友链', to: '/friends' },
              { label: '资源', to: '/resources' },
            ],
          },
          {
            title: '网站',
            items: [
              { label: '设置', to: '/settings' },
              { label: '洞察', to: '/insights' },
              { label: '更新日志', to: '/changelog' },
              { label: '隐私政策', to: '/privacy' },
            ],
          },
          {
            title: '更多',
            items: [
              { label: 'GitHub', href: 'https://github.com/ZHOENGGROUP/zdzx' },
              { label: 'ZZAAC.CC', href: 'https://zzaac.cc/' },
              { label: 'ZZA.AC.CN', href: 'https://zza.ac.cn/' },
              { label: 'ZHOENG.COM.CN', href: 'https://www.zhoeng.com.cn/' },
            ],
          },
        ],
        copyright: `Copyright © 2025 - ${new Date().getFullYear()} 中政集团 ZHONG ZHENG GROUP   Copyright © 2025 - ${new Date().getFullYear()} 中政科技 ZHONG ZHENG TECHNOLOGY\nBuilt with Docusaurus.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['bash', 'yaml', 'json', 'powershell'],
      },
    }),
};

export default config;
