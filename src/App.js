import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      purchased: false,
      starred: false,
    };
  }

  togglePurchase() {
    this.setState({ purchased: !this.state.purchased });
  }

  toggleStarred() {
    this.setState({ starred: !this.state.starred });
  }

  render() {
    return (
      <Grocery name={'bananas'} starred={this.state.starred} purchased={this.state.purchased} onPurchase={() => {this.togglePurchase()}} onStar={() => { this.toggleStarred() }}/>
    );
  }

}


export default App;
