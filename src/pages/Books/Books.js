import React, { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import * as selectors from './selectors/bookList';

import { fetchBooks } from './thunk/booksThunk';
import {
  showCreateEditModal,
  setTitle,
  createModal,
} from '../../components/CreateEditBookForm/reducers/createEditModalSlice';

import CardBook from './components/CardBook';

import CreateBookModal from '../../components/CreateEditBookForm/';
import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination/Pagination';

import {
  StyledBoxWrapper,
  StyledBox,
  StyledPaginationContainer,
} from './styles';
import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Books = () => {
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
    dispatch(fetchBooks());
  }, [dispatch]);

  if (currentPage !== params.page) {
    setCurrentPage(params.page);
  }

  const handleAddBook = () => {
    dispatch(createModal());
    dispatch(setTitle('Create new book'));
    dispatch(showCreateEditModal());
  };

  return (
    <>
      {!isLoading && books <= 0 && (
        <Typography variant="h5" align="center">
          you have no books
        </Typography>
      )}
      <Button variant="outlined" onClick={handleAddBook}>
        Add book
      </Button>
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
            onClick={window.scrollTo(0, 0)}
          />
        )}
      </StyledPaginationContainer>
      <CreateBookModal />
    </>
  );
};

export default Books;
