import React, { ComponentProps } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '../Button';

export default {
  title: 'Button',
  component: Button,
} as Meta;

const Template: Story<ComponentProps<typeof Button>> = (args) => (
  <Button {...args}>Button</Button>
);

// Color
export const Primary = Template.bind({});
Primary.args = {
  size: 'small',
  color: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'small',
  color: 'secondary',
};

export const Inherit = Template.bind({});
Inherit.args = {
  size: 'small',
  color: 'inherit',
};

export const White = Template.bind({});
White.args = {
  size: 'small',
  color: 'white',
};

export const Orange = Template.bind({});
Orange.args = {
  size: 'small',
  color: 'orange',
};

export const Yellow = Template.bind({});
Yellow.args = {
  size: 'small',
  color: 'yellow',
};

// Size
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  color: 'primary',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  color: 'primary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  color: 'primary',
};