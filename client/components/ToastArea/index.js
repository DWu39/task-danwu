import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import Toast from './Toast';
import theme from '../../style/theme';

const StyledToastArea = styled.section`
  bottom: 50px;
  position: fixed;
  right: 50px;
  width: 35%;
`;

const ToastArea = ({
  closeToast,
  toasts
}) => {
  return (
    <StyledToastArea>
      {toasts.length
        ? toasts.map((toast) => (
          <Toast
            key={toast.id}
            onClickClose={() => { closeToast(toast.id); }}
            {...toast}
          />
        ))
        : null
      }
    </StyledToastArea>
  );
};

ToastArea.propTypes = {
  closeToast: PropTypes.func,
  toasts: PropTypes.array
}

ToastArea.defaultProps = {
  closeToast: null,
  toasts: []
}

export default ToastArea;
