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
    this.setState({ deleted: false });
    this.setState({ name: '' });
    this.setState({ notes: '' });
    this.setState({ purchased: false });
    this.setState({ quantity: null });
    this.setState({ starred: false });
  }

  clearGroceries() {
    this.setState({ groceries: [] });
    this.setState({ deleted: false });
    this.setState({ name: '' });
    this.setState({ notes: '' });
    this.setState({ purchased: false });
    this.setState({ quantity: null });
    this.setState({ starred: false });
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
      id: Date.now(),
    }

    return (
      <div className="main">
          <div className="input">
            <p>Name: </p><input className="name-input" value={name ? name : ''} placeholder="Name" onChange={(e) => {this.setNameState(e)} } />
            <p>Quantity: </p><input className="quantity-input" value={quantity ? quantity : ''} placeholder="Quantity" onChange={(e) => {this.setQuantityState(e)} } />
            <p>Notes: </p><input className="notes-input" value={notes ? notes : ''} placeholder="Notes" onChange={(e) => {this.setNotesState(e)} } />
            <button onClick={() => {this.addNewGroceryToList(newGrocery)} }>Create Item</button>
            <button disabled={groceries.length > 0 ? false : true} onClick={() => {this.clearGroceries()}}>Clear Groceries</button>
            {groceries.length > 0 ? <p>You have {groceries.length} grocery/ies on your list</p> : ''}
          </div>
          { groceries.map(g => <Grocery {...g} key={g.id} onDelete={() => { this.toggleDelete() }} onPurchase={() => {this.togglePurchase()}} onStar={() => { this.toggleStarred() }} />) }
      </div>
    );
  }

}


export default App;
