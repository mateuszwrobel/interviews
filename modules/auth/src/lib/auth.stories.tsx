import type { Meta, StoryObj } from '@storybook/react';
import { Auth } from './auth';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Auth> = {
  component: Auth,
  title: 'Auth',
};
export default meta;
type Story = StoryObj<typeof Auth>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Auth!/gi)).toBeTruthy();
  },
};
