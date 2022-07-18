import { createAsyncThunk } from '@reduxjs/toolkit';

import { deleteBook } from '../../../api/books';

export const removeBook = createAsyncThunk('deleteBookModal/removeBook', (id) =>
  deleteBook(id)
);
