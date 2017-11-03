import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { injectGlobal } from 'styled-components';

import App from './components/App.js';
import reducer from './reducers';
import theme from './style/theme';
import Lato from './fonts/lato/Lato-Regular.ttf';
import 'font-awesome/css/font-awesome.css';

injectGlobal`
  @font-face {
    font-family: 'Lato';
    src: url(${Lato});
  }

  body {
    background: ${theme.grayLight};
    font-family: 'Lato';
    font-size: 14px;
    font-weight: 600;
  }
`;

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
