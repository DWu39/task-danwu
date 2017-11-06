import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

describe('Button', () => {
  it('should render correctly', () => {
    const output = shallow(<Button>Press</Button>);
    expect(output).toMatchSnapshot();
  });
});
