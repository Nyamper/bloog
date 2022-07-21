import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { fetchStatistics } from './thunk/statisticsThunk';

import * as selectors from './selectors/bookList';

import Spinner from '../../components/Spinner';

import { StyledTable } from './styles';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/system';

const Statistics = () => {
  const dispatch = useDispatch();
  const books = useSelector(selectors.statisticsDataSelector);
  const isLoading = useSelector(selectors.statisticsLoadingSelector);
  const isError = useSelector(selectors.statisticsErrorSelector);

  useEffect(() => {
    dispatch(fetchStatistics());
  }, [dispatch]);

  return (
    <Container>
      <TableContainer component={Paper}>
        <StyledTable aria-label="simple table">
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
                ({ _id, title, publishDate, description, pageCount }) => (
                  <TableRow key={_id}>
                    <TableCell component="th" scope="row">
                      {_id}
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
        </StyledTable>
      </TableContainer>
    </Container>
  );
};

export default Statistics;
