import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      purchased: false,
    };
  }

  togglePurchase() {
    this.setState({ purchased: !this.state.purchased });
  }

  render() {
    return (
      <Grocery name={'bananas'} starred={false} purchased={this.state.purchased} onPurchase={() => {this.togglePurchase()}}/>
    );
  }

}


export default App;
