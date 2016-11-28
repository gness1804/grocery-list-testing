import React, { Component } from 'react';

const Grocery = ({ name, quantity, notes, purchased, starred, onPurchase, onStar, onDelete}) => {
  return (
    <article className="Grocery">
      <h3>{name}</h3>
    </article>
  );
};


export default Grocery;
