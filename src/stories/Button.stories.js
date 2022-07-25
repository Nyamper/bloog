import React from 'react';
import { Button } from '@mui/material';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      options: ['outlined', 'text', 'contained'],
      control: {
        type: 'radio',
      },
      default: 'contained',
      type: 'string',
      description: 'the variant to use',
    },

    size: {
      options: ['small', 'medium', 'large'],
      control: {
        type: 'radio',
      },
      default: 'medium',
      type: 'string',
      description: 'button size',
    },
    disabled: {
      default: false,
      description: 'disable button',
    },
    color: {
      options: [
        'inherit',
        'primary',
        'secondary',
        'success',
        'error',
        'info',
        'warning',
      ],
      control: {
        type: 'select',
      },
      type: 'string',
      description: 'button color',
    },
  },
};

const Template = (arg) => <Button {...arg} />;

export const Contained = Template.bind({});
Contained.args = {
  children: 'click',
  variant: 'contained',
  size: 'medium',
  disabled: false,
  color: 'primary',
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: 'click',
  variant: 'outlined',
  size: 'medium',
  disabled: false,
  color: 'primary',
};

export const Text = Template.bind({});
Text.args = {
  children: 'click',
  variant: 'text',
  size: 'medium',
  disabled: false,
  color: 'primary',
};
