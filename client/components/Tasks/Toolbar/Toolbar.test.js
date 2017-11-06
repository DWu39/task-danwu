import React from 'react';
import { mount, shallow } from 'enzyme';

import Toolbar from './index';

describe('Toolbar', () => {
  it('should render correctly', () => {
    const output = shallow(<Toolbar/>);
    expect(output).toMatchSnapshot();
  });

  it('should add task on \'Add Task\' click', () => {
    const mockNewTaskHandler = jest.fn();
    const output = mount(<Toolbar newTask={mockNewTaskHandler}/>);
    const button = output.find('button').first();
    button.simulate('click');
    expect(mockNewTaskHandler).toHaveBeenCalledTimes(1);
  });

  it('should NOT save on \'Save\' click when state is NOT edited', () => {
    const saveTasks = jest.fn();
    const output = mount(<Toolbar saveTasks={saveTasks}/>);
    const button = output.find('button').at(1);
    button.simulate('click');
    expect(saveTasks).not.toHaveBeenCalled();
  });

  it('should save on \'Save\' click when state is edited', () => {
    const saveTasks = jest.fn();
    const output = mount(<Toolbar edited saveTasks={saveTasks}/>);
    const button = output.find('button').at(1);
    button.simulate('click');
    expect(saveTasks).toHaveBeenCalledTimes(1);
  });
});
