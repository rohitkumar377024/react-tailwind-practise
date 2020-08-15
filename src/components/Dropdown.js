import React, { useState } from 'react';
import ThreeDots from '../img/threedots.svg';

const Dropdown = ({ options }) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen(!isOpen);

  return (
    <div className="relative">
      <img onClick={toggle} className="w-12 h-12 mr-1" src={ThreeDots} alt="" />
      {isOpen && (
        <div className="absolute right-0 border border-gray-200 bg-white text-gray-900 rounded-lg shadow-lg">
          {options.map(option => (
            <div>
              <p className="pl-8 pr-16 py-3 font-semibold hover:bg-gray-100">
                {option}
              </p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
