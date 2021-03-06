import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button, { ButtonTypes } from '../../src/components/button';

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        onClick: { action: 'clicked' },
        label: 'text',
        outlined: 'boolean'
      }
    }
  },
  parameters: {
    controls: { expanded: true }
  }
};

export default meta;

const Template: Story<ButtonTypes> = args => <Button {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const ButtonStory = Template.bind({});

ButtonStory.args = {};
