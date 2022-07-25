import React from 'react';
import { CircularProgress } from '@mui/material';

export default {
  title: 'Spinner',
  component: CircularProgress,
  argTypes: {
    variant: {
      options: ['determinate', 'indeterminate'],
      control: {
        type: 'radio',
      },
      type: 'string',
      description: 'the variant to use',
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

const Template = (arg) => <CircularProgress {...arg} />;

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  size: 40,
  variant: 'indeterminate',
  thickness: 3.6,
};

export const Determinate = Template.bind({});
Determinate.args = {
  size: 40,
  variant: 'determinate',
  thickness: 3.6,
  value: 100,
};
