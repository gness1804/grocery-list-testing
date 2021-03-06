import React from 'react';
import classnames from 'classnames';
import './Grocery.css';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete }) => {

  return (
    <article className={classnames('Grocery', { starred, purchased })}>
      <h3>{name}</h3>
      { quantity ? <p className="Grocery-quantity">Quantity: {quantity}</p> : ''}
      {notes ? <p className="Grocery-notes">Notes: {notes}</p> : ''}
      <button onClick={ onPurchase } className="Grocery-purchase">{purchased ? 'Unpurchase' : 'Purchase'}</button>
      <button onClick={ onStar } className="Starred">{starred ? 'Unstar' : 'Star'}</button>
      <button onClick={ onDelete } className="Grocery-delete">Remove</button>
    </article>
  );
};


export default Grocery;
