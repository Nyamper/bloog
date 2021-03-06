import React from 'react';

import { ImageListItem, Typography } from '@mui/material';
import { Container } from '@mui/system';
import { StyledImageList } from './styles';

import { itemData } from '../../constants';

const HomePage = () => {
  return (
    <>
      <Container>
        <Typography variant="h3">
          Some information about me will be here. Maybe.
        </Typography>
        <Typography variant="h4">You can look at the cats for now</Typography>
        <StyledImageList cols={4} rowHeight={164}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </StyledImageList>
      </Container>
    </>
  );
};

export default HomePage;
