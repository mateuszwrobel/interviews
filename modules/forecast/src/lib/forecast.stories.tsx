import type { Meta, StoryObj } from '@storybook/react';
import { Forecast } from './forecast';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { reactRouterDecorator } from '@interviewspnpm/utils';

const meta: Meta<typeof Forecast> = {
  component: Forecast,
  title: 'Forecast',
  decorators: [reactRouterDecorator],
};
export default meta;
type Story = StoryObj<typeof Forecast>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Forecast!/gi)).toBeTruthy();
  },
};
