import { Meta, StoryObj } from '@storybook/react';
import Heading from './Heading';

const meta: Meta<typeof Heading> = {
  component: Heading,
  title: 'Example/Heading',
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'radio' },
      options: ['black', 'red', 'green'],
    },
    label: {
      control: { type: 'text' },
      defaultValue: 'Heading',
      type: 'string',
    },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: 'small',
    color: 'black',
    label: 'Heading small',
  },
  name: 'Heading Small',
};

export const Medium: Story = {
  args: {
    size: 'medium',
    color: 'black',
    label: 'Heading medium',
  },
  name: 'Heading Medium',
};

export const Large: Story = {
  args: {
    size: 'large',
    color: 'black',
    label: 'Heading large',
  },
  name: 'Heading Large',
};
