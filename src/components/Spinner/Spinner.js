import React from 'react';

import { CircularProgress } from '@mui/material';
import { StyledContainer } from './styles';

const Spinner = (props) => {
  return (
    <>
      <StyledContainer>
        <CircularProgress size={100} color={props.status} />
      </StyledContainer>
    </>
  );
};

export default Spinner;
