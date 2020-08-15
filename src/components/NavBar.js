import React, { useState } from 'react';
import cn from 'classnames';

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:justify-between px-8 py-4 bg-gray-100 text-gray-900">
      <div className="flex justify-between items-center">
        <p className="font-bold">Brand Name</p>

        <button className="md:hidden" onClick={() => setOpen(!isOpen)}>
          <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
            {isOpen && (
              <path
                fill-rule="evenodd"
                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
              />
            )}

            {!isOpen && (
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col md:flex-row list-none font-medium">
          <li className="md:ml-8 mt-3 mb-3 cursor-pointer hover:text-gray-700">
            Home
          </li>
          <hr />
          <li className="md:ml-8 mt-3 mb-3 cursor-pointer hover:text-gray-700">
            Search
          </li>
          <hr />
          <li className="md:ml-8 mt-3 mb-3 cursor-pointer hover:text-gray-700">
            About
          </li>
          <hr />
          <li className="md:ml-8 mt-3 mb-3 cursor-pointer hover:text-gray-700">
            Contact
          </li>
          <hr />
        </nav>
      )}
    </div>
  );
};

export default NavBar;
