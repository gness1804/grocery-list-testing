import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      deleted: false,
      purchased: false,
      starred: false,
    };
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
    return (
      <div className="main">
          <div className="input">
            <input placeholder="Name"/>
            <input placeholder="Quantity"/>
            <input placeholder="Notes"/>
            <button>Create Item</button>
          </div>
        <Grocery
          name={'bananas'}
          deleted={this.state.deleted}
          starred={this.state.starred}
          purchased={this.state.purchased}
          onDelete={() => { this.toggleDelete() }}
          onPurchase={() => {this.togglePurchase()}} onStar={() => { this.toggleStarred() }}
          />
      </div>
    );
  }

}


export default App;
