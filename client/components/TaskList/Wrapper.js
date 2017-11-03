import React from 'react';
import styled from 'styled-components';

import theme from '../../style/theme';

const Wrapper = styled.section`
  background: ${theme.white};
  border-radius: 4px;
  box-shadow: 0 1px 1px 0 ${theme.gray};
  box-sizing: border-box;
  height: 180px;
  margin-top: 14px;
`;

export default Wrapper;
