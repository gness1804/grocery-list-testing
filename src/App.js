import React, { Component } from 'react';
import './App.css';

import Grocery from './Grocery';

class App extends Component {
  constructor() {
    super();
    this.state = {
      groceries: [],
      deleted: false,
      name: '',
      notes: '',
      purchased: false,
      quantity: null,
      starred: false,
    };
  }

  addNewGroceryToList(newGrocery) {
    this.state.groceries.push(newGrocery);
  }

  setNameState(e) {
    this.setState({ name: e.target.value });
  }

  setNotesState(e) {
    this.setState({ notes: e.target.value });
  }

  setQuantityState(e) {
    this.setState({ quantity: e.target.value });
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

    const { name, deleted, starred, quantity, notes, purchased, groceries } = this.state;

    const newGrocery = {
      name,
      deleted,
      starred,
      quantity,
      notes,
      purchased,
    }

    let allGroceries = groceries.map(g => <Grocery {...g} onDelete={() => { this.toggleDelete() }} onPurchase={() => {this.togglePurchase()}} onStar={() => { this.toggleStarred() }} />);

    return (
      <div className="main">
          <div className="input">
            <p>Name: </p><input placeholder="Name" onChange={(e) => {this.setNameState(e)} } />
            <p>Quantity: </p><input placeholder="Quantity" onChange={(e) => {this.setQuantityState(e)} } />
            <p>Notes: </p><input placeholder="Notes" onChange={(e) => {this.setNotesState(e)} } />
            <button onClick={() => {this.addNewGroceryToList(newGrocery)} }>Create Item</button>
          </div>
          { allGroceries }
      </div>
    );
  }

}


export default App;
