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
  const pages = ['Home', 'Books', 'Statistics'];
  return (
    <>
      <StyledAppBar position="sticky">
        <Toolbar>
          <StyledYardIcon />
          <StyledLogo variant="h5">
            <StyledLink to={'/home'}>BLOG</StyledLink>
          </StyledLogo>

          {pages.map((page) => (
            <MenuItem key={page}>
              <Typography textAlign="center" variant="h6">
                <StyledNavLink to={`/${page.toLowerCase()}`}>
                  {page}
                </StyledNavLink>
              </Typography>
            </MenuItem>
          ))}
        </Toolbar>
      </StyledAppBar>
    </>
  );
};
export default Header;
