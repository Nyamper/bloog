import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBook } from '../../../api/books';

export const fetchBook = createAsyncThunk('bookItem/fetchBook', (id) =>
  getBook(id)
);
