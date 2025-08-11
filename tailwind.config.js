var colors = require('tailwindcss/colors');
var plugin = require('tailwindcss/plugin');
var types = ['primary', 'secondary', 'neutral', 'warning', 'success', 'error'];

function generateSafeList(types) {
  var safelist = ['dark','from-primary-variation'];
  types.forEach(type => {
    safelist.push(
      ...[
        `text-on-${type}`,
        `dark:text-on-${type}-dark`,
        `text-${type}`,
        `dark:text-${type}-dark`,
        `hover:text-${type}-variant`,
        `dark:hover:text-${type}-variant-dark`,
        `bg-${type}`,
        `bg-${type}/25`,
        `from-${type}-variant`,
        `to-${type}`,
        `dark:bg-${type}-dark`,
        `dark:bg-${type}-dark/25`,
        `hover:bg-${type}-variant`,
        `hover:bg-${type}-variant/25`,
        `hover:dark:bg-${type}-variant-dark`,
        `border-${type}`,
        `dark:border-${type}-dark`,
        `hover:border-${type}-variant`,
        `dark:hover:border-${type}-variant-dark`,
      ]
    );
  });
  return safelist;
}

/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'selector',
  content: ['./src/**/*.{html,js,ts}'],
  safelist: generateSafeList(types),
  theme: {
    extend: {
      aspectRatio: {
        '16/9': '16 / 9',
        '4/5': '4 / 5',
        '1/1': '1 / 1',
      },
      fontFamily: {
        primary: 'var(--font-primary)',
        title: 'var(--font-title)',
        logo: 'var(--font-logo)',
      },
      fontWeight: {
        thin: '100',
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      colors: {
        ...colors,
        primary: {
          "50": 'rgb(var(--primary-50) / <alpha-value>)',
          "100": 'rgb(var(--primary-100) / <alpha-value>)',
          "200": 'rgb(var(--primary-200) / <alpha-value>)',
          "300": 'rgb(var(--primary-300) / <alpha-value>)',
          "400": 'rgb(var(--primary-400) / <alpha-value>)',
          "500": 'rgb(var(--primary-500) / <alpha-value>)',
          "600": 'rgb(var(--primary-600) / <alpha-value>)',
          "700": 'rgb(var(--primary-700) / <alpha-value>)',
          "800": 'rgb(var(--primary-800) / <alpha-value>)',
          "900": 'rgb(var(--primary-900) / <alpha-value>)',
          "950": 'rgb(var(--primary-950) / <alpha-value>)',
          DEFAULT: 'rgb(var(--primary-400) / <alpha-value>)',
          dark: 'rgb(var(--primary-800) / <alpha-value>)',
          container: {
            DEFAULT: 'rgb(var(--primary-200) / <alpha-value>)',
            dark: 'rgb(var(--primary-800) / <alpha-value>)',
          },
          variant: {
            DEFAULT: 'rgb(var(--primary-600) / <alpha-value>)',
            dark: 'rgb(var(--primary-700) / <alpha-value>)',
          },
        },
        secondary: {
          "50": 'rgb(var(--primary-50) / <alpha-value>)',
          "100": 'rgb(var(--secondary-100) / <alpha-value>)',
          "200": 'rgb(var(--secondary-200) / <alpha-value>)',
          "300": 'rgb(var(--secondary-300) / <alpha-value>)',
          "400": 'rgb(var(--secondary-400) / <alpha-value>)',
          "500": 'rgb(var(--secondary-500) / <alpha-value>)',
          "600": 'rgb(var(--secondary-600) / <alpha-value>)',
          "700": 'rgb(var(--secondary-700) / <alpha-value>)',
          "800": 'rgb(var(--secondary-800) / <alpha-value>)',
          "900": 'rgb(var(--secondary-900) / <alpha-value>)',
          "950": 'rgb(var(--secondary-950) / <alpha-value>)',
          DEFAULT: 'rgb(var(--secondary-300) / <alpha-value>)',
          dark: 'rgb(var(--secondary-800) / <alpha-value>)',
          container: {
            DEFAULT: 'rgb(var(--secondary-100) / <alpha-value>)',
            dark: 'rgb(var(--secondary-800) / <alpha-value>)',
          },
          variant: {
            DEFAULT: 'rgb(var(--secondary-500) / <alpha-value>)',
            dark: 'rgb(var(--secondary-700) / <alpha-value>)',
          },
        },
        neutral: {
          "50": 'rgb(var(--monochrome-50) / <alpha-value>)',
          "100": 'rgb(var(--monochrome-100) / <alpha-value>)',
          "200": 'rgb(var(--monochrome-200) / <alpha-value>)',
          "300": 'rgb(var(--monochrome-300) / <alpha-value>)',
          "400": 'rgb(var(--monochrome-400) / <alpha-value>)',
          "500": 'rgb(var(--monochrome-500) / <alpha-value>)',
          "600": 'rgb(var(--monochrome-600) / <alpha-value>)',
          "700": 'rgb(var(--monochrome-700) / <alpha-value>)',
          "800": 'rgb(var(--monochrome-800) / <alpha-value>)',
          "900": 'rgb(var(--monochrome-900) / <alpha-value>)',
          "950": 'rgb(var(--monochrome-950) / <alpha-value>)',
          DEFAULT: 'rgb(var(--monochrome-400) / <alpha-value>)',
          dark: 'rgb(var(--monochrome-700) / <alpha-value>)',
          variant: {
            DEFAULT: 'rgb(var(--monochrome-500) / <alpha-value>)',
            dark: 'rgb(var(--monochrome-500) / <alpha-value>)',
          },
        },
        background: {
          DEFAULT: 'rgb(var(--primary-50) / <alpha-value>)',
          dark: 'rgb(var(--primary-950) / <alpha-value>)',
        },
        surface: {
          DEFAULT: 'rgb(var(--primary-100) / <alpha-value>)',
          dark: 'rgb(var(--primary-900) / <alpha-value>)',
          variant: {
            DEFAULT: 'rgb(var(--primary-400) / <alpha-value>)',
            dark: 'rgb(var(--primary-700) / <alpha-value>)',
          },
        },
        success: {
          DEFAULT: colors.green[400],
          dark: colors.green[600],
          variant: {
            DEFAULT: colors.green[500],
            dark: colors.green[500],
          },
        },
        warning: {
          DEFAULT: colors.amber[400],
          dark: colors.amber[600],
          variant: {
            DEFAULT: colors.amber[500],
            dark: colors.amber[500],
          },
        },
        error: {
          DEFAULT: colors.red[400],
          dark: colors.red[600],
          variant: {
            DEFAULT: colors.red[500],
            dark: colors.red[500],
          },
        },
        on: {
          primary: {
            DEFAULT: 'rgb(var(--primary-950) / <alpha-value>)',
            dark: 'rgb(var(--primary-50) / <alpha-value>)',
            container: {
              DEFAULT: 'rgb(var(--primary-900) / <alpha-value>)',
              dark: 'rgb(var(--primary-50) / <alpha-value>)',
            },
          },
          secondary: {
            DEFAULT: 'rgb(var(--secondary-950) / <alpha-value>)',
            dark: 'rgb(var(--secondary-50) / <alpha-value>)',
            container: {
              DEFAULT: 'rgb(var(--secondary-900) / <alpha-value>)',
              dark: 'rgb(var(--secondary-50) / <alpha-value>)',
            },
          },
          neutral: {
            DEFAULT: 'rgb(var(--monochrome-950) / <alpha-value>)',
            dark: 'rgb(var(--monochrome-10) / <alpha-value>)',
            variant: {
              DEFAULT: 'rgb(var(--monochrome-800) / <alpha-value>)',
              dark: 'rgb(var(--monochrome-50) / <alpha-value>)',
            },
          },
          background: {
            DEFAULT: 'rgb(var(--monochrome-950) / <alpha-value>)',
            dark: 'rgb(var(--monochrome-10) / <alpha-value>)',
          },
          surface: {
            DEFAULT: 'rgb(var(--monochrome-950) / <alpha-value>)',
            dark: 'rgb(var(--monochrome-100) / <alpha-value>)',
            variant: {
              DEFAULT: 'rgb(var(--monochrome-700) / <alpha-value>)',
              dark: 'rgb(var(--monochrome-200) / <alpha-value>)',
            },
          },
          success: {
            DEFAULT: colors.green[950],
            dark: colors.green[50],
            variant: {
              DEFAULT: colors.green[400],
              dark: colors.green[600],
            },
          },
          warning: {
            DEFAULT: colors.amber[950],
            dark: colors.amber[50],
            variant: {
              DEFAULT: colors.amber[400],
              dark: colors.amber[600],
            },
          },
          error: {
            DEFAULT: colors.red[950],
            dark: colors.red[50],
            variant: {
              DEFAULT: colors.red[400],
              dark: colors.red[600],
            },
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: { fontSize: theme('fontSize.3xl'), fontWeight: theme('fontWeight.bold') },
        h2: { fontSize: theme('fontSize.2xl'), fontWeight: theme('fontWeight.bold') },
        h3: { fontSize: theme('fontSize.xl'), fontWeight: theme('fontWeight.semibold') },
        h4: { fontSize: theme('fontSize.lg'), fontWeight: theme('fontWeight.semibold') },
      });
    }),
  ],
};
