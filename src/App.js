/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.css';
// import DarkCard from './DarkCard';
// import LightCard from './LightCard';

import LogoInverted from './logo-inverted.svg';

function App() {
  // const [showDropdown, setShowDropdown] = useState(false);

  const [navOpen, setNavOpen] = useState(false);
  return (
    <div>
      <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-3">
        <div className="flex justify-between items-center px-4 py-3 sm:p-0">
          <div>
            <img className="h-8" src={LogoInverted} alt="" />
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setNavOpen(!navOpen)}
              className="text-gray-500 hover:text-white focus:outline-none"
              type="button"
            >
              <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {navOpen ? (
                  <path
                    fill-rule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {navOpen && (
          <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
            <a
              href="#"
              className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
            >
              List your property
            </a>
            <a
              href="#"
              className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
            >
              Trips
            </a>
            <a
              href="#"
              className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
            >
              Messages
            </a>
          </div>
        )}
      </header>
    </div>
  );
}

// Dropdown
// <div className="m-4 p-4">
//       <button class='bg-red-500 px-4 py-2 rounded text-white' onClick={() => setShowDropdown(!showDropdown)}>Hello there</button>
//       {showDropdown && (<div className="fixed inset-0 w-full h-full" onClick={() => setShowDropdown(false)}></div> )}
//       {showDropdown && (
//         <div className="w-48 bg-white rounded-lg py-2 shadow-lg">
//           <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Option 1</a>
//           <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Option 2</a>
//           <a className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white" href="#">Option 3</a>
//         </div>
//       )}
//     </div>

// Cards
// <div className="flex flex-wrap justify-center">
//   <LightCard date="Aug 05, 2020" title="Tailwind CSS" />
//   <LightCard date="Aug 07, 2020" title="React Router" />
//   <LightCard date="Aug 13, 2020" title="React Redux" />
//   <LightCard date="Aug 13, 2020" title="React Redux" />
//   <LightCard date="Aug 05, 2020" title="Tailwind CSS" />
//   <LightCard date="Aug 07, 2020" title="React Router" />
// </div>

export default App;
