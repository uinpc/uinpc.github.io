import { viteBundler } from '@vuepress/bundler-vite';
import { defaultTheme } from '@vuepress/theme-default';
import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        // 导航栏配置
        nav: [
            { text: '首页', link: '/' },
            { text: '配置参考', link: '/reference/config.md' },
            { text: '快速上手', link: '/guide/getting-started.md' },
            { text: '指南', link: '/guide/introduction.md' }
        ],
        // 侧边栏配置
        sidebar: {
            '/': [
                '',
                'guide/getting-started',
                'guide/introduction',
                'reference/config'
            ]
        },
        locales: {
            // 键名是该语言所属的子路径
            // 作为特例，默认语言可以使用 '/' 作为其路径。
            '/': {
                lang: 'en-US',
                title: 'VuePress',
                description: 'Vue-powered Static Site Generator',
            },
            '/zh/': {
                lang: 'zh-CN',
                title: 'VuePress',
                description: 'Vue 驱动的静态网站生成器',
            },
        },
    }),
});