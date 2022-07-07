import React from 'react';

import { Alert, AlertTitle } from '@mui/material';

import { StyledBoxContainer } from './styles';

const Error = () => {
  return (
    <>
      <StyledBoxContainer>
        <Alert severity="error">
          <AlertTitle>Something went wrong</AlertTitle>
          Don't panic — <strong>we will fix it later!</strong> Maybe
        </Alert>
      </StyledBoxContainer>
    </>
  );
};

export default Error;
