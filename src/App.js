import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout';

import Books from './pages/Books';
import HomePage from './pages/Home';
import BookDetails from './pages/BookDetails';
import Statistics from './pages/Statistics';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="books/" element={<Books />} />
          <Route path="books/page/:page" element={<Books />} />
          <Route path="books/id/:id" element={<BookDetails />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={2000} />
    </>
  );
};

export default App;
