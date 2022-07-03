import React, { useState, useEffect } from 'react';

import { useAxios } from '../../hooks/use-Axios';

import Spinner from '../../components/Spinner';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';

const Statistics = () => {
  const { books, isLoading, isError } = useAxios();
  return (
    <Container>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Date</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Pages</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading && !isError && <Spinner />}
            {isError && <Spinner status="error" />}
            {!isLoading &&
              books.map(
                ({ id, title, publishDate, description, pageCount }) => (
                  <TableRow
                    key={id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {id}
                    </TableCell>
                    <TableCell align="left">{title}</TableCell>
                    <TableCell align="left">
                      {publishDate.slice(0, 10)}
                    </TableCell>
                    <TableCell align="left">{description}</TableCell>
                    <TableCell align="left">{pageCount}</TableCell>
                  </TableRow>
                )
              )}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Statistics;
