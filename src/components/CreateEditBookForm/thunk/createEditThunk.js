import { createAsyncThunk } from '@reduxjs/toolkit';
import { postBook, updateBook } from '../../../api/books';

export const createBook = createAsyncThunk(
  'createBookModal/createBook',
  (book) => postBook(book)
);

export const editBook = createAsyncThunk(
  'createBookModal/editBook',
  (payload) => updateBook(payload)
);
