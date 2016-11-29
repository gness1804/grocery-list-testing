import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      deleted: false,
      name: '',
      notes: '',
      purchased: false,
      quantity: null,
      starred: false,
    };
  }

  setNameState(e) {
    this.setState({ name: e.target.value });
  }

  toggleDelete() {
    this.setState({ deleted: !this.state.deleted });
  }

  togglePurchase() {
    this.setState({ purchased: !this.state.purchased });
  }

  toggleStarred() {
    this.setState({ starred: !this.state.starred });
  }

  render() {

    const { name, deleted, starred, quantity, notes, purchased } = this.state;

    return (
      <div className="main">
          <div className="input">
            <input placeholder="Name" onChange={(e) => {this.setNameState(e)} }/>
            <input placeholder="Quantity"/>
            <input placeholder="Notes"/>
            <button>Create Item</button>
          </div>
        <Grocery
          name={name}
          deleted={deleted}
          starred={starred}
          quantity={quantity}
          notes={notes}
          purchased={this.state.purchased}
          onDelete={() => { this.toggleDelete() }}
          onPurchase={() => {this.togglePurchase()}} onStar={() => { this.toggleStarred() }}
          />
      </div>
    );
  }

}


export default App;
