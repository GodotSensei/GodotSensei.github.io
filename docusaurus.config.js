// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Godot Sensei',
  tagline: 'Level Up in Godot',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://godot.yoogameart.com',
  baseUrl: '/',

  organizationName: 'yoogameart',
  projectName: 'godotsenei',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      stylesheets: [
        {
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
          type: 'text/css',
        },
      ],
      // Default OG image when sharing any page (1200x630px recommended)
      image: 'img/social-card.png',

      // Site-wide meta tags
      metadata: [
        {
          name: 'keywords',
          content: 'godot, godot engine, godot tutorials, learn godot, game development, godot 4, indie game dev, godot beginners',
        },
        { name: 'author', content: 'Godot Sensei' },

        // Open Graph
        { property: 'og:site_name', content: 'Godot Sensei' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en_US' },
      ],

      colorMode: {
        respectPrefersColorScheme: true,
      },

      navbar: {
        title: 'Godot Sensei',
        logo: {
          alt: 'Godot Sensei Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://www.youtube.com/@godotsensei',
            label: 'YouTube',
            position: 'right',
          },
        ],
      },

      footer: {
        copyright: `© ${new Date().getFullYear()} Godot Sensei - Made with 💙`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;