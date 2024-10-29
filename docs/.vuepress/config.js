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
        }
    }),
});