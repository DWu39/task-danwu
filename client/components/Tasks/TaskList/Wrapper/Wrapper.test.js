import React from 'react';
import { shallow } from 'enzyme';

import Wrapper from './index';

describe('Wrapper', () => {
  it('should render correctly', () => {
    const output = shallow(<Wrapper/>);
    expect(output).toMatchSnapshot();
  });
});
