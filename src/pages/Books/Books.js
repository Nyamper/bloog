import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  bookUpdateItemIdSetAction,
  bookDeleteItemDataSetAction,
} from './reducer/bookList';
import { modalOpenToggleAction } from '../../store/modal/reducer/modal';
import { modalStateSelector } from '../../store/modal/selectors/modal';
import * as selectors from './selectors/bookList';
import {
  bookItemCreate,
  bookItemDelete,
  bookItemUpdate,
  bookListFetch,
} from './thunk/booksThunk';

import { CreateBookModal } from './components/CreateBookModal';
import { UpdateBookModal } from './components/UpdateBookModal';
import { DeleteBookModal } from './components/DeleteBookModal';
import Pagination from '../../components/Pagination/Pagination';
import CardBook from './components/CardBook';
import Spinner from '../../components/Spinner';

import { Container } from '@mui/system';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {
  StyledBox,
  StyledBoxWrapper,
  StyledButtonContainer,
  StyledPaginationContainer,
} from './styles';

const Books = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(12);

  const { open, name } = useSelector(modalStateSelector);
  const books = useSelector(selectors.bookListDataSelector);
  const isLoading = useSelector(selectors.bookListLoadingSelector);
  const isError = useSelector(selectors.bookListErrorSelector);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  if (currentPage !== params.page) {
    setCurrentPage(params.page);
  }

  useEffect(() => {
    dispatch(bookListFetch());
  }, [dispatch]);

  const handleCreateBook = (values) => {
    dispatch(bookItemCreate(values));
  };

  const handleUpdateBook = (values) => {
    dispatch(bookItemUpdate(values));
  };

  const handleDeleteBook = (item) => {
    dispatch(bookItemDelete(item));
  };

  const handleCreateModalOpenToggle = () => {
    dispatch(modalOpenToggleAction({ name: 'Create' }));
  };

  const handleEditModalOpen = useCallback(
    (id) => {
      dispatch(bookUpdateItemIdSetAction({ id }));
      dispatch(modalOpenToggleAction({ name: 'Update' }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [dispatch]
  );

  const handleEditModalClose = useCallback(() => {
    dispatch(modalOpenToggleAction({ name: 'Update' }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  const handleDeleteModalOpen = useCallback(
    (item) => {
      dispatch(bookDeleteItemDataSetAction(item));
      dispatch(modalOpenToggleAction({ name: 'Delete' }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [dispatch]
  );

  const handleDeleteModalClose = useCallback(
    (item) => {
      dispatch(modalOpenToggleAction({ name: 'Delete' }));
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [dispatch]
  );

  return (
    <>
      {!isLoading && books <= 0 && (
        <Typography variant="h5" align="center">
          you have no books
        </Typography>
      )}
      <StyledButtonContainer>
        <Button
          size="large"
          variant="outlined"
          onClick={handleCreateModalOpenToggle}
        >
          Add book
        </Button>
      </StyledButtonContainer>
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
                  <CardBook
                    book={book}
                    onEdit={handleEditModalOpen}
                    onDelete={handleDeleteModalOpen}
                  />
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
      {open && name === 'Create' && (
        <CreateBookModal
          onSave={handleCreateBook}
          onCancel={handleCreateModalOpenToggle}
        />
      )}

      {open && name === 'Update' && (
        <UpdateBookModal
          onSave={handleUpdateBook}
          onCancel={handleEditModalClose}
        />
      )}

      {open && name === 'Delete' && (
        <DeleteBookModal
          onSave={handleDeleteBook}
          onCancel={handleDeleteModalClose}
        />
      )}
    </>
  );
};

export default Books;
