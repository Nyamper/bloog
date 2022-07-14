import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { bookItemFetchStart } from './reducers/bookItem';
import * as selectors from './selectors/bookItem';

import { useParams } from 'react-router-dom';

import Spinner from '../../components/Spinner';

import moment from 'moment';

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';
import { Container } from '@mui/system';

const BookDetails = () => {
  const book = useSelector(selectors.bookItemDataSelector);
  const isLoading = useSelector(selectors.bookItemLoadingSelector);
  const isError = useSelector(selectors.bookItemErrorSelector);
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookItemFetchStart({ bookId: params.id }));
  }, [dispatch, params.id]);

  return (
    <>
      <Container>
        {isLoading && !isError && <Spinner />}
        {isError && <Spinner status="error" />}
        {book && !isLoading && !isError && (
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="https://s.yimg.com/uu/api/res/1.2/k_8a7.DeuEJHGGgFo.KgEg--~B/Zmk9c3RyaW07aD00MzI7cT04MDt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-04/2e9a68b0-be5d-11ec-9efd-3edbf61b28d7.cf.jpg"
              alt="Book"
            />
            <CardHeader
              title={book.title}
              subheader={moment(book.publishDate).format('DD MMMM YYYY')}
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
