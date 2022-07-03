import React, { useState, useEffect } from 'react';

import client from '../api/client';

export const useAxios = (params) => {
  const [books, setBooks] = useState(undefined);
  const [isError, setIsError] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const { data } = await client.get(params);
      setBooks(data);
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
