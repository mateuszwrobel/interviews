import type { Meta, StoryObj } from '@storybook/react';
import { Auth } from './auth';

// import { within } from '@storybook/testing-library';
// import { expect } from '@storybook/jest';
import { reactRouterDecorator } from '@interviewspnpm/utils';
import { auth } from '@interviewspnpm/core';

const meta: Meta<typeof Auth> = {
  component: Auth,
  title: 'Auth',
  decorators: [
    reactRouterDecorator,
    (Story) => (
      <auth.AuthProvider>
        <Story />
      </auth.AuthProvider>
    ),
  ],
};
export default meta;
type Story = StoryObj<typeof Auth>;

export const SighIn = {
  args: {},
};
