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
      <Grocery name={'bananas'}
        deleted={this.state.deleted}
        starred={this.state.starred} purchased={this.state.purchased}
        onDelete={() => { this.toggleDelete() }}
        onPurchase={() => {this.togglePurchase()}} onStar={() => { this.toggleStarred() }}/>
    );
  }

}


export default App;
