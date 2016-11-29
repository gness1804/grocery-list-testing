import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { shallow, mount } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('should show the correct number of groceries on the page', () => {
    const wrapper = mount(<App />);
    wrapper.find('.name-input').simulate('change', {target: {value: 'Apples'}});
    wrapper.find('.create-item-button').simulate('click');
    wrapper.find('.name-input').simulate('change', {target: {value: 'Oranges'}});
    wrapper.find('.create-item-button').simulate('click');
    expect(wrapper.find('.Grocery').length).toEqual(2);
});

describe('the clear all groceries button', () => {
  it('should clear all of the groceries on click', () => {
    const wrapper = mount(<App />);
    wrapper.find('.name-input').simulate('change', {target: {value: 'Apples'}});
    wrapper.find('.create-item-button').simulate('click');
    wrapper.find('.name-input').simulate('change', {target: {value: 'Oranges'}});
    wrapper.find('.create-item-button').simulate('click');
    wrapper.find('.clear-all-button').simulate('click');
    expect(wrapper.find('.Grocery').length).toEqual(0);
  });
});

describe('the counter of all groceries on the page', () => {
  it('should correctly display the number of items on the page', () => {
    const wrapper = mount(<App />);
    wrapper.find('.name-input').simulate('change', {target: {value: 'Apples'}});
    wrapper.find('.create-item-button').simulate('click');
    wrapper.find('.name-input').simulate('change', {target: {value: 'Oranges'}});
    wrapper.find('.create-item-button').simulate('click');
    wrapper.find('.name-input').simulate('change', {target: {value: 'Soda'}});
    wrapper.find('.create-item-button').simulate('click');
    expect(wrapper.find('.counter').text()).toEqual('You have 3 grocery/ies on your list');
  });
});
