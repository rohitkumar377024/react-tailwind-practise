/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.css';
// import DarkCard from './DarkCard';
// import LightCard from './LightCard';

function App() {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <div className="m-4 p-4">
      <button class='bg-red-500 px-4 py-2 rounded text-white' onClick={() => setShowDropdown(!showDropdown)}>Hello there</button>
      {showDropdown && (<div className="fixed inset-0 w-full h-full" onClick={() => setShowDropdown(false)}></div> )}
      {showDropdown && (
        <div className="w-48 bg-white rounded-lg py-2 shadow-lg">
          <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Option 1</a>
          <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Option 2</a>
          <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Option 3</a>
        </div>
      )}
    </div>
  );
}

// <div className="flex flex-wrap justify-center">
//   <LightCard date="Aug 05, 2020" title="Tailwind CSS" />
//   <LightCard date="Aug 07, 2020" title="React Router" />
//   <LightCard date="Aug 13, 2020" title="React Redux" />
//   <LightCard date="Aug 13, 2020" title="React Redux" />
//   <LightCard date="Aug 05, 2020" title="Tailwind CSS" />
//   <LightCard date="Aug 07, 2020" title="React Router" />
// </div>

export default App;
