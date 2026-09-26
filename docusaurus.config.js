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

  url: 'https://godotsensei.github.io',
  baseUrl: '/',

  organizationName: 'godotsensei',
  projectName: 'godotsenei',

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'ignore',

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

  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
      type: 'text/css',
    },
    {
      href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
      type: 'text/css',
    },
    {
      href: 'https://unpkg.com/aos@2.3.1/dist/aos.css',
      type: 'text/css',
    },
  ],

  scripts: [
    {
      src: 'https://unpkg.com/aos@2.3.1/dist/aos.js',
      async: true,
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
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
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },

      navbar: {
        title: 'Godot Sensei',
        logo: {
          alt: 'Godot Sensei Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/intro',
            label: 'All Docs',
            position: 'left',
            activeBaseRegex: '^/docs/(?!category/walking-sim|walking-sim).*',
          },
          {
            to: '/docs/category/walking-sim',
            label: 'Beginner Course',
            position: 'left',
            activeBaseRegex: '^/docs/(category/)?walking-sim.*',
          },
          {
            href: '/#testimonials',
            label: 'Reviews',
            position: 'left',
          },
          {
            href: 'https://www.youtube.com/@godotsensei',
            label: 'YouTube',
            position: 'right',
          },
        ],
      },

      footer: {
        links: [
          {
            title: 'Courses and Docs',
            items: [
              {
                label: 'All Documentation',
                to: '/docs/intro',
              },
              {
                label: 'Walking Simulator Course',
                to: '/docs/category/walking-sim',
              },
              {
                label: 'Environment and Shaders',
                to: '/docs/walking-sim/Grass Water Sky',
              },
              {
                label: 'Project Settings and Export',
                to: '/docs/walking-sim/Project settings and export',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'YouTube (@godotsensei)',
                href: 'https://www.youtube.com/@godotsensei',
              },
              {
                label: 'Godot Engine Official',
                href: 'https://godotengine.org',
              },
            ],
          },
          {
            title: 'Platform',
            items: [
              {
                label: 'Learner Reviews',
                href: '/#testimonials',
              },
              {
                label: 'Frequently Asked Questions',
                href: '/#faq',
              },
            ],
          },
        ],
        copyright: `Copyright ${new Date().getFullYear()} Godot Sensei. Free and open Godot education.`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;