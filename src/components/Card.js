import React from 'react';
import Image from './Image';
import Chip from './Chip';
import Rating from './Rating';
import Dropdown from './Dropdown';

const Card = () => {
  return (
    <div className="max-w-sm m-4 bg-white text-gray-900 rounded-lg shadow-lg">
      <Image size={64} />

      <div className="p-4">
        <h1 className="font-bold text-2xl">Hotel 12093</h1>

        <div className="mt-1">
          <Chip text="Top Rated" textColor="red-800" backgroundColor="red-300" />
          <Chip
            text="Rank 1 This Week"
            textColor="red-800"
            backgroundColor="red-300"
            marginLeft={2}
          />
        </div>

        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore.
        </p>

        <div className="flex items-center mt-2">
          <Rating stars={4} max={5} filledColor="red-500" emptyColor="red-200" />
          <p className="w-full ml-2 font-semibold text-red-500">33 Reviews</p>
          <Dropdown options={['Share', 'Favorite', 'Hide']} />
        </div>

        <p className="mt-2 text-2xl font-semibold text-red-500">₹1499</p>
      </div>
    </div>
  );
};

export default Card;
