import React from 'react';
import Card from './Card';

const Cards = () => {
  return (
    <div className="p-4 flex flex-wrap justify-center">
      {[...Array(12).keys()].map(_ => (
        <Card />
      ))}
    </div>
  );
};

export default Cards;
