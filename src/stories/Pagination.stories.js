import React from 'react';
import Pagination from '../components/Pagination';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {},
};

const Template = (arg) => <Pagination {...arg} />;

export const Default = Template.bind({});
Default.args = {
  booksPerPage: 12,
  totalBooks: 50,
};
