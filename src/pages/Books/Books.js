import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { bookItemFetchStart } from './actions/booksAction';
import * as selectors from './selectors/booksSelectors';

import { useParams } from 'react-router-dom';

import CardBook from './CardBook';

import Spinner from '../../components/Spinner';
import Pagination from '../../components/Pagination/Pagination';

import {
  StyledBoxWrapper,
  StyledBox,
  StyledPaginationContainer,
} from './styles';
import { Container } from '@mui/system';

const Books = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [booksPerPage, setBooksPerPage] = useState(20);
  const books = useSelector((state) => selectors.bookItemDataSelector(state));
  const isLoading = useSelector(selectors.bookItemLoadingSelector);
  const isError = useSelector(selectors.bookItemErrorSelector);

  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;

  if (currentPage !== params.page) {
    setCurrentPage(params.page);
  }

  useEffect(() => {
    dispatch(bookItemFetchStart(''));
  }, [dispatch]);

  return (
    <>
      <Container maxWidth="xl">
        <StyledBoxWrapper>
          {isLoading && !isError && <Spinner />}
          {isError && <Spinner status="error" />}
          {books &&
            !isLoading &&
            !isError &&
            books.slice(indexOfFirstBook, indexOfLastBook).map((book) => {
              return (
                <StyledBox key={book.id}>
                  <CardBook book={book} />
                </StyledBox>
              );
            })}
        </StyledBoxWrapper>
      </Container>
      <StyledPaginationContainer>
        {!isLoading && !isError && (
          <Pagination booksPerPage={booksPerPage} totalBooks={books.length} />
        )}
      </StyledPaginationContainer>
    </>
  );
};

export default Books;

// const Books = () => {
//   const params = useParams();
//   const { books, isLoading, isError } = useAxios(getBooks);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [booksPerPage, setBooksPerPage] = useState(20);

//   if (currentPage !== params.page) {
//     setCurrentPage(params.page);
//   }

//   const indexOfLastBook = currentPage * booksPerPage;
//   const indexOfFirstBook = indexOfLastBook - booksPerPage;

//   return (
//     <>
//       <Container maxWidth="xl">
//         <StyledBoxWrapper>
//           {isLoading && !isError && <Spinner />}
//           {isError && <Spinner status="error" />}
//           {books &&
//             !isLoading &&
//             !isError &&
//             books.slice(indexOfFirstBook, indexOfLastBook).map((book) => {
//               return (
//                 <StyledBox key={book.id}>
//                   <CardBook book={book} />
//                 </StyledBox>
//               );
//             })}
//         </StyledBoxWrapper>
//       </Container>
//       <StyledPaginationContainer>
//         {!isLoading && !isError && (
//           <Pagination booksPerPage={booksPerPage} totalBooks={books.length} />
//         )}
//       </StyledPaginationContainer>
//     </>
//   );
// };

// export default Books;
