import React from 'react';

import { DatePicker } from 'antd';

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {
    mode: {
      options: ['time', 'date', 'month', 'year', 'decade'],
      control: {
        type: 'select',
      },
      type: 'string',
      description: 'The picker panel mode',
    },
    inputReadOnly: {
      description:
        'Set the readonly attribute of the input tag (avoids virtual keyboard on touch devices)',
    },
    picker: {
      options: ['date', 'week', 'month', 'quarter', 'year'],
      control: {
        type: 'select',
      },
    },
    placement: {
      options: ['bottomLeft', 'bottomRight', 'topLeft', 'topRight'],
      control: {
        type: 'select',
      },
      description: 'The position where the selection box pops up',
    },
    size: {
      options: ['large', 'middle', 'small'],
      control: {
        type: 'select',
      },
      description:
        'To determine the size of the input box, the height of large and small, are 40px and 24px respectively, while default size is 32px',
    },
    status: {
      options: ['none', 'error', 'warning'],
      control: {
        type: 'select',
      },
      description: 'Set validation status',
    },
  },
};

const Template = (arg) => <DatePicker {...arg} />;

export const Default = Template.bind({});
Default.args = {
  bordered: true,
  disabled: false,
  inputReadOnly: false,
  mode: 'date',
  showNow: true,
};

export const Open = Template.bind({});
Open.args = {
  bordered: true,
  disabled: false,
  inputReadOnly: true,
  open: true,
  picker: 'date',
  showNow: true,
};
