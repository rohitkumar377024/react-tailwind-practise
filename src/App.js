import React from 'react';
import './App.css';

function App() {
  return (
    <div className="bg-gray-900 text-white p-8">
      <p className="text-gray-600 text-sm">Article • Aug 05, 2020</p>
      <h1 className="text-2xl font-bold">Tailwind CSS</h1>
      <p className="font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
      </p>
      <div className="flex mt-4">
        <p className="border-2 border-white rounded-full text-sm px-4 py-2 mr-2">
          Tailwind
        </p>
        <p className="border-2 border-white rounded-full text-sm px-4 py-2 mr-2">
          React
        </p>
        <p className="border-2 border-white rounded-full text-sm px-4 py-2">Redux</p>
      </div>
    </div>
  );
}

export default App;
