import { createAsyncThunk } from '@reduxjs/toolkit';
import { getBooks } from '../../../api/books';

export const fetchBooks = createAsyncThunk('books/fetchBooks', getBooks);
