import React, { useState } from 'react';

import { useAxios } from '../../hooks/useAxios';
import { getBooks } from '../../api/books';

import { useParams } from 'react-router-dom';

import CardBook from './CardBook';
import Spinner from '../../components/Spinner';

import {
  StyledBoxWrapper,
  StyledBox,
  StyledPaginationContainer,
} from './styles';
import { Container } from '@mui/system';
import Pagination from '../../components/Pagination/Pagination';

const Books = () => {
  const params = useParams();
  const { books, isLoading, isError } = useAxios(getBooks);
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);

  if (currentPage !== params.page) {
    setCurrentPage(params.page);
  }

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  return (
    <>
      <Container maxWidth="xl">
        <StyledBoxWrapper>
          {isLoading && !isError && <Spinner />}
          {isError && <Spinner status="error" />}
          {books &&
            !isLoading &&
            !isError &&
            books.slice(indexOfFirstBook, indexOfLastBook).map((book) => {
              return (
                <StyledBox key={book.id}>
                  <CardBook book={book} />
                </StyledBox>
              );
            })}
        </StyledBoxWrapper>
      </Container>
      <StyledPaginationContainer>
        {!isLoading && !isError && (
          <Pagination booksPerPage={booksPerPage} totalBooks={books.length} />
        )}
      </StyledPaginationContainer>
    </>
  );
};

export default Books;
