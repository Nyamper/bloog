import React from 'react';

import {
  StyledNavLink,
  StyledLink,
  StyledAppBar,
  StyledYardIcon,
  StyledLogo,
} from './styles';
import { MenuItem, Toolbar, Typography } from '@mui/material';

const Header = () => {
  return (
    <>
      <StyledAppBar position="sticky">
        <Toolbar>
          <StyledYardIcon />
          <StyledLogo variant="h5">
            <StyledLink to={'/home'}>BLOG</StyledLink>
          </StyledLogo>

          <MenuItem>
            <Typography textAlign="center" variant="h6">
              <StyledNavLink to={'/home'}>Home</StyledNavLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center" variant="h6">
              <StyledNavLink to={'/books/page/1'}>Books</StyledNavLink>
            </Typography>
          </MenuItem>
          <MenuItem>
            <Typography textAlign="center" variant="h6">
              <StyledNavLink to={'/statistics'}>Statistics</StyledNavLink>
            </Typography>
          </MenuItem>
        </Toolbar>
      </StyledAppBar>
    </>
  );
};

export default Header;
