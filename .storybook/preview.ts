import type { Preview } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [(storyFn, context) => withConsole()(storyFn)(context)],
};

export default preview;
