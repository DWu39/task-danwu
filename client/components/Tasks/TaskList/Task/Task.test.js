import React from 'react';
import { mount, shallow } from 'enzyme';

import Task from './index';

describe('Task', () => {
  it('should render correctly', () => {
    const output = shallow(<Task/>);
    expect(output).toMatchSnapshot();
  });

  it('should be closed by default', () => {
    const output = shallow(<Task/>);
    expect(output.props().isOpened).toBeFalsy();
  });

  it('should remove task on trash can click', () => {
    const mockDeleteHandler = jest.fn();
    const output = mount(<Task deleteTask={mockDeleteHandler}/>);
    const button = output.find('button');
    button.simulate('click');
    expect(mockDeleteHandler).toHaveBeenCalledTimes(1);
  });

  it('should autofocus input when opened', () => {
    const output = mount(<Task isOpened/>);
    const input = output.find('input');
    expect(input.props().autoFocus).toBeTruthy();
  });

  describe('opening tasks', () => {
    it('should open task when clicking on text', () => {
      const mockOpenHandler = jest.fn();
      const output = mount(<Task openTask={mockOpenHandler}/>);
      output.find('p').simulate('click');
      expect(mockOpenHandler).toHaveBeenCalledTimes(1);
    });

    it('should open task when focusing on text', () => {
      const mockOpenHandler = jest.fn();
      const output = mount(<Task openTask={mockOpenHandler}/>);
      output.find('p').simulate('focus');
      expect(mockOpenHandler).toHaveBeenCalledTimes(1);
    });
  });

  describe('closing tasks', () => {
    it('should close task when pressing escape', () => {
      const mockCloseHandler = jest.fn();
      const output = mount(<Task isOpened closeTask={mockCloseHandler}/>);
      output.find('input').simulate('keydown', {key: 'Enter'});
      expect(mockCloseHandler).toHaveBeenCalledTimes(1);
    });

    it('should close task when pressing tab', () => {
      const mockCloseHandler = jest.fn();
      const output = mount(<Task isOpened closeTask={mockCloseHandler}/>);
      output.find('input').simulate('keydown', {keyCode: 27});
      expect(mockCloseHandler).toHaveBeenCalledTimes(1);
    });

    it('should close task when pressing enter', () => {
      const mockCloseHandler = jest.fn();
      const output = mount(<Task isOpened closeTask={mockCloseHandler}/>);
      output.find('input').simulate('keydown', {keyCode: 9});
      expect(mockCloseHandler).toHaveBeenCalledTimes(1);
    });

    it('should close task when blurred', () => {
      const mockCloseHandler = jest.fn();
      const output = mount(<Task isOpened closeTask={mockCloseHandler}/>);
      output.find('input').simulate('blur');
      expect(mockCloseHandler).toHaveBeenCalledTimes(1);
    });
  });
});
