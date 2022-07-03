import React from 'react';

import { CircularProgress, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Spinner = (props) => {
  return (
    <>
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CircularProgress size={100} color={props.status} />
      </Box>
    </>
  );
};

export default Spinner;
