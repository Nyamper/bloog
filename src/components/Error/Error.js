import React from 'react';

import { Alert, AlertTitle } from '@mui/material';
import { Box } from '@mui/system';

const Error = (cerror) => {
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
        <Alert severity="error">
          <AlertTitle>Something went wrong</AlertTitle>
          Don't panic — <strong>we will fix it later!</strong> Maybe
        </Alert>
      </Box>
    </>
  );
};

export default Error;
