import React from 'react';
import { connect } from 'react-redux';

import actions from '../actions';
import Toolbar from '../components/Toolbar';

const {
  newTask,
  save
} = actions.tasks;

const mapStateToProps = (state) => ({
  edited: state.edited
});

const mapDispatchToProps = {
  newTask,
  save
}

const ToolbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Toolbar);

export default ToolbarContainer;
