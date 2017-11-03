import React from 'react';
import styled from 'styled-components';

import theme from '../style/theme';

const StyledHeader = styled.header`
  display: flex;
  height: 50px;
  background: ${theme.navy};
`;

const Header = () => (
  <StyledHeader/>
);

export default Header;
