import client from './client';

export const getBook = async (bookId) => {
  try {
    const book = await client.get(`/books/${bookId}`);
    return book;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBooks = async () => {
  try {
    const books = await client.get('/books');
    return books;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const postBook = async (data) => {
  try {
    const book = await client.post(`/books/`, data);
    return book;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const updateBook = async (data, id) => {
  try {
    const book = await client.patch(`/books/${id}`, data);
    return book;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const deleteBook = async (bookId) => {
  try {
    const book = await client.delete(`/books/${bookId}`);
    return book;
  } catch (error) {
    return Promise.reject(error);
  }
};
