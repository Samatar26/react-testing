import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import List from './List';

describe('App', () => {
  it('Should add an item on submit', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(List).props().items.length).toEqual(0);
    const form = wrapper.find('form');
    form.simulate('submit', { preventDefault: jest.fn() });
    expect(wrapper.find(List).props().items.length).toEqual(1);
  });
  it('Should add a ref to state on change', () => {
    const value = 'hello world';
    const wrapper = shallow(<App />);
    const input = wrapper.find('input');
    const form = wrapper.find('form');
    input.simulate('change', { target: { value } });
    form.simulate('submit', { preventDefault: jest.fn() });

    expect(wrapper.find(List).props().items[0]).toBe(value);
  });
});
