import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import List from './List';

describe('List', () => {
  it('Should snapshot list', () => {
    const items = ['first', 'second'];
    const wrapper = shallow(<List items={items} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Should test item props as undefined', () => {
    const wrapper = shallow(<List />);
  });

  it('Should render the right text', () => {
    const items = ['Hello world'];
    const wrapper = shallow(<List items={items} />);
    expect(wrapper.find('li').first().text()).toBe(items[0]);
  });
});
