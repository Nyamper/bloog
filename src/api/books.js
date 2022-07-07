import client from './client';

export const getBooks = async () => {
  try {
    const books = await client.get('/books');
    return books;
  } catch (error) {
    return Promise.reject(error);
  }
};

export const getBook = async (bookId) => {
  try {
    const book = await client.get(`/books/${bookId}`);
    return book;
  } catch (error) {
    return Promise.reject(error);
  }
};
