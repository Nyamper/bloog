import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks } from '../../../api/books';

export const fetchStatistics = createAsyncThunk(
  'books/fetchStatistics',
  getBooks
);
