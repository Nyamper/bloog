import React from 'react';

import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import HomePage from './pages/Home';
import Books from './pages/Books';
import BookDetails from './pages/Books/BookDetails';
import Statistics from './pages/Statistics';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<Books />} />
          <Route path="books/:id" element={<BookDetails />} />
          <Route path="Statistics" element={<Statistics />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
