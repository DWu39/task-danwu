import React from 'react';
import { shallow } from 'enzyme';

import Header from './index';

describe('Header', () => {
  it('should render correctly', () => {
    const output = shallow(<Header>Press</Header>);
    expect(output).toMatchSnapshot();
  });
});
