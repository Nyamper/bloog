import React, { useState } from 'react';

import { StyledPaginationLink, StyledPagination } from './styles';

const Pagination = ({ booksPerPage, totalBooks }) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.floor(totalBooks / booksPerPage) + 1; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <StyledPagination>
        {pageNumbers.map((page) => {
          return (
            <StyledPaginationLink key={page} to={`/books/page/${page}`}>
              {page}
            </StyledPaginationLink>
          );
        })}
      </StyledPagination>
    </>
  );
};

export default Pagination;
