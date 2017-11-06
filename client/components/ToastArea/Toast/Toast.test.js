import React from 'react';
import { mount, shallow } from 'enzyme';

import Toast from './index';
import theme from '../../../style/theme';

describe('Toast', () => {
  it('should render correctly', () => {
    const output = shallow(<Toast>Success!</Toast>);
    expect(output).toMatchSnapshot();
  });

  it('should close toast on button click', () => {
    const mockCloseHandler = jest.fn();
    const output = mount(<Toast onClickClose={mockCloseHandler}/>);
    const button = output.find('button');
    button.simulate('click');
    expect(mockCloseHandler).toHaveBeenCalledTimes(1);
  });
});
