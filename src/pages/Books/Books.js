import React, { useState, useEffect, useRef } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as selectors from './selectors/bookList';
import { booksFetchStart } from './reducers/bookList';

import { useParams } from 'react-router-dom';

import CardBook from './CardBook';

import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination/Pagination';

import {
  StyledBoxWrapper,
  StyledBox,
  StyledPaginationContainer,
} from './styles';
import { Container } from '@mui/system';

const Books = () => {
  const moveUpRef = useRef(null);
  const params = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);
  const books = useSelector(selectors.booksDataSelector);
  const isLoading = useSelector(selectors.booksLoadingSelector);
  const isError = useSelector(selectors.booksErrorSelector);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  useEffect(() => {
    dispatch(booksFetchStart());
  }, [dispatch]);

  if (currentPage !== params.page) {
    setCurrentPage(params.page);
  }

  const moveUp = () => {
    moveUpRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div ref={moveUpRef} />
      <Container maxWidth="xl">
        <StyledBoxWrapper>
          {isLoading && !isError && <Spinner />}
          {isError && <Spinner status="error" />}
          {books &&
            !isLoading &&
            !isError &&
            books.slice(indexOfFirstBook, indexOfLastBook).map((book) => {
              return (
                <StyledBox key={book._id}>
                  <CardBook book={book} />
                </StyledBox>
              );
            })}
        </StyledBoxWrapper>
      </Container>
      <StyledPaginationContainer>
        {!isLoading && !isError && (
          <Pagination
            booksPerPage={booksPerPage}
            totalBooks={books.length}
            moveUp={moveUp}
          />
        )}
      </StyledPaginationContainer>
    </>
  );
};

export default Books;
