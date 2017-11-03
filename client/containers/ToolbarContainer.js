import React from 'react';
import { connect } from 'react-redux';

import {
  newTask,
  save
} from '../actions';
import Toolbar from '../components/Toolbar';

const mapDispatchToProps = {
  newTask,
  save
}

const ToolbarContainer = connect(
  null,
  mapDispatchToProps
)(Toolbar);

export default ToolbarContainer;
