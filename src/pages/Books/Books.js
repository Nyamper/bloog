import React, { useState, useEffect } from 'react';

import { useAxios } from '../../hooks/use-Axios';

import CardBook from './CardBook';
import Spinner from '../../components/Spinner';

import { Box } from '@mui/material';
import { Container } from '@mui/system';

const Books = () => {
  const { books, isLoading, isError } = useAxios();

  return (
    <>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'flex-start',
          }}
        >
          {isLoading && !isError && <Spinner />}
          {isError && <Spinner status="error" />}
          {!isLoading &&
            books.map((book) => {
              return (
                <Box
                  key={book.id}
                  sx={{
                    mx: 2,
                    width: 280,
                    height: 400,
                  }}
                >
                  <CardBook book={book} />
                </Box>
              );
            })}
        </Box>
      </Container>
    </>
  );
};

export default Books;
