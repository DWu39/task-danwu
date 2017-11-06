import React from 'react';
import { shallow } from 'enzyme';

import TaskList from './index';

const mockTasks = [
  {
    id: 'id1',
    text: 'Buy milk'
  },
  {
    id: 'id2',
    text: 'Walk the dog'
  },
  {
    id: 'id3',
    text: 'Task'
  }
];

describe('TaskList', () => {
  it('should render empty correctly', () => {
    const output = shallow(<TaskList/>);
    expect(output).toMatchSnapshot();
  });

  it('should render tasks correctly', () => {
    const output = shallow(<TaskList tasks={mockTasks}/>);
    expect(output).toMatchSnapshot();
  });
});
