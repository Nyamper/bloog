import React from 'react';

import { useAxios } from '../../hooks/use-Axios';

import CardBook from './CardBook';
import Spinner from '../../components/Spinner';

import { StyledBoxWrapper, StyledBox } from './styles';
import { Container } from '@mui/system';

const Books = () => {
  const { books, isLoading, isError } = useAxios();

  return (
    <>
      <Container maxWidth="xl">
        <StyledBoxWrapper>
          {isLoading && !isError && <Spinner />}
          {isError && <Spinner status="error" />}
          {!isLoading &&
            books.map((book) => {
              return (
                <StyledBox key={book.id}>
                  <CardBook book={book} />
                </StyledBox>
              );
            })}
        </StyledBoxWrapper>
      </Container>
    </>
  );
};

export default Books;
