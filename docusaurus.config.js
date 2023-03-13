// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const organizationName = 'gran-software-solutions';
const projectName = 'rest-api-guidelines';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'GRAN Software Solutions REST API Guidelines',
  tagline: 'We believe that REST API is the way to go',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: `https://${organizationName}.github.io`,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: `/${projectName}/`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
              `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'GRAN REST API Guidelines',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark-mode.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'start',
            position: 'left',
            label: "Get started"
          },
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'GRAN',
            items: [
              {
                label: 'Website',
                to: 'https://www.gransoftware.de'
              },
              {
                label: 'LinkedIn',
                to: 'https://www.linkedin.com/company/gran-software-solutions/'
              }
            ]
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/gran-software-solutions/rest-api-guidelines',
              },
              {
                label: 'Credits',
                href: '/credits'
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} GRAN Software Solutions GmbH. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['yaml', 'http', 'json'],
        theme: require('prism-react-renderer/themes/vsLight'),
        darkTheme: require('prism-react-renderer/themes/vsDark'),
      },
    }),
};

module.exports = config;
