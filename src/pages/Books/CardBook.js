import React, { useState } from 'react';

import DropMenu from './components/DropMenu';

import moment from 'moment';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
} from '@mui/material';

import { Link } from 'react-router-dom';

const CardBook = ({ book }) => {
  const { _id, title, description } = book;

  return (
    <>
      <Card>
        <CardMedia
          component="img"
          height="160"
          image="https://s.yimg.com/uu/api/res/1.2/0mVsrHXWIVdF2.YzhrRTWQ--~B/Zmk9c3RyaW07aD0yMDA7cT04MDt3PTM1NjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2022-04/2e9a68b0-be5d-11ec-9efd-3edbf61b28d7.cf.jpg"
          alt="Book"
        />
        <CardHeader
          title={title}
          subheader={moment(book.publishDate).format('DD MMMM YYYY')}
          action={<DropMenu bookId={_id} title={title} />}
        />
        <CardContent>
          <Typography variant="body2">{description.slice(0, 200)}</Typography>
        </CardContent>
        <CardActions>
          <Link to={`/books/id/${_id}`}>
            <Button size="small">Read More</Button>
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default CardBook;
