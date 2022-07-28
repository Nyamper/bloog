import React, { useState, useEffect } from 'react';

/**
 *
 * @param {function} getData
 * @returns {object} books, isError, isLoading
 */
export const useAxios = (getData) => {
  const [books, setBooks] = useState(null);
  const [isError, setIsError] = useState(null);

  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await getData();
      setBooks(response);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { books, isError, isLoading };
};
