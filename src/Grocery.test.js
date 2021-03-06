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

  it('should have a className of "purchased" if it is purchased', () => {
    const wrapper = shallow(<Grocery name="Bananas" purchased={true}/>);
    expect(wrapper.is('.purchased')).toEqual(true);
  });

  it('should not have a className of "purchased" if it is not purchased', () => {
    const wrapper = shallow(<Grocery name="Bananas" purchased={false}/>);
    expect(wrapper.is('.purchased')).toEqual(false);
  });

  it('should have a p.Grocery-quantity element if a quantity is passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Bananas" quantity={'17 bunches'}/>);
    expect(wrapper.find('.Grocery-quantity').length).toEqual(1);
  });

  it('should not have a p.Grocery-quantity element if a quantity is not passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);
    expect(wrapper.find('.Grocery-quantity').length).toEqual(0);
  });

  it('should have a p.Grocery-notes element if notes are passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Bananas" notes={'I want candy!'}/>);
    expect(wrapper.find('.Grocery-notes').length).toEqual(1);
  });

  it('should not have a p.Grocery-notes element if notes are not passed as a prop', () => {
    const wrapper = shallow(<Grocery name="Bananas" />);
    expect(wrapper.find('.Grocery-notes').length).toEqual(0);
  });

});

describe('.Grocery-purchase button', () => {
  it('should have a text of "Purchase" if purchased is false', () => {
    const wrapper = shallow(<Grocery name="Bananas" purchased={undefined} />);
    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Purchase');
  });

  it('should have a text of "Unpurchase" if purchase is true', () => {
    const wrapper = shallow(<Grocery name="Bananas" purchased={true} />);
    expect(wrapper.find('.Grocery-purchase').text()).toEqual('Unpurchase');
  });

  it('should call the onPurchase prop when clicked', () => {
    const onPurchaseMock = jest.fn();

    const wrapper = mount(
      <Grocery
        name="Bananas"
        purchased={true}
        onPurchase={onPurchaseMock}
      />
    );

    wrapper.find('.Grocery-purchase').simulate('click');
    expect(onPurchaseMock).toBeCalled();
  });

});

describe('.Starred button', () => {
  it('should have the text of "Star" if starred is false', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={undefined} />);
    expect(wrapper.find('.Starred').text()).toEqual('Star');
  });

  it('should have the text of "Unstar" if starred is true', () => {
    const wrapper = shallow(<Grocery name="Bananas" starred={true} />);
    expect(wrapper.find('.Starred').text()).toEqual('Unstar');
  });

  it('should call the onStar prop when clicked', () => {
    const onStarMock = jest.fn();

    const wrapper = mount(
      <Grocery
        name="Bananas"
        starred={true}
        onStar={onStarMock}
      />
    );

    wrapper.find('.Starred').simulate('click');
    expect(onStarMock).toBeCalled();
  });

});

describe('quantity field', () => {
  it('should display the correct quantity', () => {
    const wrapper = shallow(<Grocery name="Bananas" quantity={15} />);
    expect(wrapper.find('.Grocery-quantity').text()).toEqual('Quantity: 15');
  });

});

describe('notes field', () => {
  it('should display the correct notes', () => {
    const wrapper = shallow(<Grocery name="Bananas" notes={'Be sure to avoid store brand.'} />);
    expect(wrapper.find('.Grocery-notes').text()).toEqual('Notes: Be sure to avoid store brand.');
  });

});

describe('.Grocery-delete button', () => {
  it('should called the onDelete prop when clicked', () => {
    const onDeleteMock = jest.fn();

    const wrapper = mount(
      <Grocery
        name="Bananas"
        deleted={true}
        onDelete={onDeleteMock}
      />
    );

    wrapper.find('.Grocery-delete').simulate('click');
    expect(onDeleteMock).toBeCalled();
  });
});
