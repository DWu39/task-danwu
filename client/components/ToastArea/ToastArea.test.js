import React from 'react';
import { shallow } from 'enzyme';

import ToastArea from './index';

const mockToasts = [
  {
    id: 'id1',
    success: true,
    text: 'win!'
  },
  {
    id: 'id2',
    text: 'fail!'
  }
];

describe('ToastArea', () => {
  it('should render empty correctly', () => {
    const output = shallow(<ToastArea/>);
    expect(output).toMatchSnapshot();
  });

  it('should render toasts correctly', () => {
    const output = shallow(<ToastArea toasts={mockToasts}/>);
    expect(output).toMatchSnapshot();
  });
});
