import React from 'react';
import { shallow, mount } from 'enzyme';

import Grocery from './Grocery';

describe('Grocery', () => {
  it('renders the name of the grocery in <h3> tags', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);
    const title = <h3>Bananas</h3>;
    expect(wrapper.contains(title)).toEqual(true);
  });

  it('has a class of .Grocery', ()=>{
    const wrapper = shallow(<Grocery name="Bananas" />);
    expect(wrapper.is('.Grocery')).toEqual(true);
  });
  
});
