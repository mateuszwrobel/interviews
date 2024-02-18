import type { Meta, StoryObj } from '@storybook/react';
import { Forecast } from './forecast';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { reactRouterDecorator } from '@interviewspnpm/utils';
import { fireEvent } from '@testing-library/react';

// import '/src/styles.scss';

const meta: Meta<typeof Forecast> = {
  component: Forecast,
  title: 'Forecast',
  decorators: [reactRouterDecorator],
};
export default meta;
type Story = StoryObj<typeof Forecast>;

export const WaitingForCity = {
  args: {},
};

export const CityProvided: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText(/City/i);
    const submit = canvas.getByText(/Submit/i);

    fireEvent.change(input, { target: { value: 'London' } });
    fireEvent.click(submit);
  },
};
