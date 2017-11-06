import React from 'react';
import { shallow } from 'enzyme';

import Tasks from './index';

describe('Tasks', () => {
  it('should render correctly', () => {
    const output = shallow(<Tasks>Press</Tasks>);
    expect(output).toMatchSnapshot();
  });
});
