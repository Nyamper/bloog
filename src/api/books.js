import client from './client';
export const controller = new AbortController();

/**
 *
 * @param {string} bookId The identifier of the book to be received
 * @returns {Promise<object|error>} Book or error
 */
export const getBook = async (bookId) => {
  console.log('getBook ', bookId);
  try {
    const book = await client.get(`/books/${bookId}`);
    return book;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 *
 * @returns {Promise<object|error>} List of books or error
 */
export const getBooks = async () => {
  try {
    const books = await client.get('/books');
    return books;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 *
 * @param {object} book
 * @param {string} book.title
 * @param {string} book.description
 * @param {string} book.excerpt
 * @param {number} book.pageCount
 * @param {date} book.publishDate
 * @returns {Promise<object|error>} Successful book creation or error
 */
export const postBook = async (book) => {
  try {
    const response = await client.post(`/books/`, book);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 *
 * @param {object} book
 * @param {string} book.title
 * @param {string} book.description
 * @param {string} book.excerpt
 * @param {number} book.pageCount
 * @param {date} book.publishDate
 * @param {string} id The ID of the book to update
 * @returns {Promise<object|error>} Successful book updating or error
 */
export const updateBook = async (book, id) => {
  try {
    const response = await client.patch(`/books/${id}`, book);
    return response;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 *
 * @param {string} bookId The ID of the book to delete
 * @returns {Promise<object|error>} Successful deletion or error
 */
export const deleteBook = async (bookId) => {
  try {
    const book = await client.delete(`/books/${bookId}`);
    return book;
  } catch (error) {
    return Promise.reject(error);
  }
};
