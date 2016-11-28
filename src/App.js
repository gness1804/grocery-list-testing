import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery';

class App extends Component {

  render() {
    return (
      <Grocery name={'bananas'} starred={false} purchased={false}/>
    );
  }

}


export default App;
