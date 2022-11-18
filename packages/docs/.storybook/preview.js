import { themes } from '@storybook/theming'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },

  options: {
    categorySort: {
      method: 'alphabetical',
      order: ['Typography', '*'],
      locales: 'en-US'
    },
  },

  docs: {
    theme: themes.dark
  },

  backgrounds: {
    default: 'Dark',
    values: [
      {
        name: 'Dark',
        value: '#202024',
      },
      {
        name: 'Light',
        value: '#ffffff',
      },
    ],
  },
}