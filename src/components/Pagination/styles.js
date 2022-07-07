import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const StyledPaginationLink = styled(NavLink)`
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  border: 1px solid #dddddd;

  &.active {
    background-color: #2081e8;
    color: white;
  }
`;

export const StyledPagination = styled.div`
  display: inline-block;
  margin: 0 auto;
`;
