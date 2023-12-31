import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';

export default defineConfig4CustomTheme({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '购商云汇',
      description: '前端编码规范工程化',
    },
  },
  base: '/go2-fe-spec/',
  themeConfig: {
    nav: [
      { text: '首页', link: '/index.md' },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
        //   { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
          { text: 'Vue 编码规范', link: '/coding/vue.md' },
        ],
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git.md' },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'eslint-config-go2', link: '/npm/eslint.md' },
          { text: 'stylelint-config-go2', link: '/npm/stylelint.md' },
          { text: 'commitlint-config-go2', link: '/npm/commitlint.md' },
        ],
      },
      {
        text: '脚手架',
        items: [{ text: 'go2-fe-spec', link: '/cli/go2-fe-spec.md' }],
      },
    ],
    sidebar: [
      {
        title: '编码规范',
        children: [
          {
            title: 'HTML 编码规范',
            path: '/coding/html.md',
          },
          {
            title: 'CSS 编码规范',
            path: '/coding/css.md',
          },
          {
            title: 'JavaScript 编码规范',
            path: '/coding/javascript.md',
          },
          {
            title: 'Vue 编码规范',
            path: '/coding/vue.md',
          },
        ],
      },
      {
        title: '工程规范',
        children: [
          {
            title: 'Git 规范',
            path: '/engineering/git.md',
          },
          {
            title: '命名规范',
            path: '/engineering/name.md',
          },
        ],
      },
      {
        title: 'NPM包',
        children: [
          { title: 'eslint-config-go2', path: '/npm/eslint.md' },
          { title: 'stylelint-config-go2', path: '/npm/stylelint.md' },
          { title: 'commitlint-config-go2', path: '/npm/commitlint.md' },
        ],
      },
      {
        title: '脚手架',
        children: [{ title: 'go2-fe-lint', path: '/cli/go2-fe-spec.md' }],
      },
    ],
    repo: 'pbhahaha/go2-fe-spec',
    searchMaxSuggestions: 10,
    docsDir: 'docs',
    footer: {
      createYear: 2023,
      copyrightInfo:
        'go2 | <a href="https://github.com/pbhahaha/go2-fe-spec" target="_blank">github</a>',
    },

    extendFrontmatter: {
      author: {
        name: 'pub',
        link: 'https://github.com/pbhahaha/go2-fe-spec',
      },
    },
  },

  head: [
    // ['link', { rel: 'icon', href: '/img/logo.png' }],
    [
      'meta',
      {
        name: 'keywords',
        content: '前端编码规范工程化',
      },
    ],
  ],

  plugins: <UserPlugins>[
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],

    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],
  extraWatchFiles: ['.vuepress/config.ts'],
});