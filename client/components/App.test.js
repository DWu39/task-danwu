import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

describe('App', () => {
  it('should render correctly', () => {
    const output = shallow(<App>Press</App>);
    expect(output).toMatchSnapshot();
  });
});
