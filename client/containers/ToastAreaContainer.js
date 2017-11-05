import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import ToastArea from '../components/ToastArea';

const {
  closeToast
} = actions.toasts;

const mapStateToProps = ({ toasts }) => ({
  toasts
});

const mapDispatchToProps = {
  closeToast
}

const ToastAreaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToastArea);

export default ToastAreaContainer;
