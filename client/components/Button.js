import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import theme from '../style/theme';

const StyledButton = styled.button`
  background: ${({primary}) => primary ? theme.green : theme.gray};
  border: none;
  color: ${theme.white};
  cursor: pointer;
  padding: 8px;
  text-transform: capitalize;
`;

const Button = ({
  children,
  className,
  onClick,
  primary
}) => {
  return (
    <StyledButton
      className={className}
      onClick={onClick}
      primary={primary}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  children: PropTypes.any,
  className: PropTypes.any,
  onClick: PropTypes.func,
  primary: PropTypes.bool
}

Button.defaultProps = {
  children: null,
  className: null,
  onClick: null,
  primary: true
}

export default Button;
