import styled from 'styled-components';

import { NavLink, Link } from 'react-router-dom';
import { AppBar, Typography } from '@mui/material';
import YardIcon from '@mui/icons-material/Yard';

export const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;

  &.active {
    color: yellow;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

export const StyledAppBar = styled(AppBar)`
  position: 'sticky';
  margin-bottom: 2rem;
`;

export const StyledYardIcon = styled(YardIcon)`
  margin-right: 0.5rem;
`;

export const StyledLogo = styled(Typography)`
  flex-grow: 1;
`;
