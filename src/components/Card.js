import React from 'react';
import cn from 'classnames';

const Card = () => {
  const rating = 4;

  return (
    <div className="max-w-sm m-4 bg-white text-gray-900 rounded-lg shadow-lg">
      <img
        className="w-full h-64 object-cover"
        src="https://picsum.photos/500"
        alt="Hotel"
      />
      <div className="p-4">
        <h1 className="font-bold text-2xl">Hotel 12093</h1>
        <p className="inline-block px-3 py-1 font-bold text-xs uppercase tracking-wider rounded-full bg-red-300 text-red-800">
          Top Rated
        </p>
        <p className="ml-2 mt-2 inline-block px-3 py-1 font-bold text-xs uppercase tracking-wider rounded-full bg-red-300 text-red-800">
          Rank 1 This Week
        </p>
        <p className="mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore.
        </p>

        <div className="flex items-center mt-2">
          {[1, 2, 3, 4, 5].map(num => (
            <svg
              className={cn(
                'h-4',
                'w-4',
                'fill-current',
                { 'text-red-500': num <= rating },
                { 'text-red-200': num >= rating }
              )}
              viewBox="0 0 24 24"
            >
              <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
            </svg>
          ))}
          <p className="ml-2 font-semibold text-red-500">33 Reviews</p>
        </div>

        <p className="mt-2 text-xl font-semibold text-red-500">₹1499</p>
      </div>
    </div>
  );
};

export default Card;
