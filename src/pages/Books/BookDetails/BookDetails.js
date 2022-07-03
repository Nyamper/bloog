import React from 'react';

import { useAxios } from '../../../hooks/use-Axios';

import { useParams } from 'react-router-dom';

import Spinner from '../../../components/Spinner';

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';

const BookDetails = () => {
  const params = useParams();
  const { books: book, isLoading, isError } = useAxios(`/${params.id}`);

  return (
    <>
      <Container>
        {isLoading && !isError && <Spinner />}
        {isError && <Spinner status="error" />}
        {!isLoading && (
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://s.yimg.com/uu/api/res/1.2/k_8a7.DeuEJHGGgFo.KgEg--~B/Zmk9c3RyaW07aD00MzI7cT04MDt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-04/2e9a68b0-be5d-11ec-9efd-3edbf61b28d7.cf.jpg"
              alt="Book"
            />
            <CardHeader
              title={book.title}
              subheader={book.publishDate.slice(0, 10)}
            />
            <CardContent>
              <Typography variant="h6">{`Pages: ${book.pageCount}`}</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="body1">{book.description}</Typography>
            </CardContent>
            <CardContent>
              <Typography variant="subtitle2">{book.excerpt}</Typography>
            </CardContent>
          </Card>
        )}
      </Container>
    </>
  );
};
export default BookDetails;
