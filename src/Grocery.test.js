import React from 'react';
import { shallow, mount } from 'enzyme';

import Grocery from './Grocery';

describe('Grocery', () => {
  it('renders the name of the grocery in <h3> tags', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);
    const title = <h3>Bananas</h3>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('has a class of .Grocery', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);
    expect(wrapper.is('.Grocery')).toEqual(true);
  });

  it('should have a className of "starred" if it is starred', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={true}/>);
    expect(wrapper.is('.starred')).toEqual(true);
  });

  it('should not have a className of "starred" if it is not starred', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={false}/>);
    expect(wrapper.is('.starred')).toEqual(false);

  });

});
