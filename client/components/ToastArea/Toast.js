import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Button from '../Button';
import theme from '../../style/theme';

const StyledToast = styled.div`
  background: ${({ success }) => success ? theme.greenLight : theme.redLight};
  border: 1px solid;
  border-color: ${({ success }) => success ? theme.green : theme.red};
  border-radius: 4px;
  color: ${({ success }) => success ? theme.green : theme.red};
  margin: 12px;
  padding: 8px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledToastText = styled.p`
  margin: 0;
`;

const CloseButton = styled(Button)`
  background: none;
  color: ${({ success }) => success ? theme.green : theme.red};
  font-size: 16px;
  padding: 0;
`;

const Toast = ({
  onClickClose,
  success,
  text
}) => (
  <StyledToast success={success}>
    <StyledToastText>{text}</StyledToastText>
    <CloseButton onClick={onClickClose} success={success}>
      <i className="fa fa-times"></i>
    </CloseButton>
  </StyledToast>
);

Toast.propTypes = {
  onClickClose: PropTypes.func,
  success: PropTypes.bool,
  text: PropTypes.string
}

Toast.defaultProps = {
  onClickClose: null,
  success: false,
  text: ''
}

export default Toast;
