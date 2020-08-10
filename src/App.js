/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import './App.css';
// import DarkCard from './DarkCard';
// import LightCard from './LightCard';

// import LogoInverted from './logo-inverted.svg';

function App() {
  // const [showDropdown, setShowDropdown] = useState(false);
  // const [navOpen, setNavOpen] = useState(false);

  const [property, setProperty] = useState({
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Modern house',
    beds: 3,
    baths: 2,
    title: 'Modern home in central location.',
    priceInRupees: 75000,
    formattedPrice: '₹75,000',
    reviewCount: 24,
    rating: 4
  });

  return (
    <div className="antialiased text-gray-900">
      <div>
        <div
          className="relative bg-red-500"
          style={{
            paddingBottom: '80%'
          }}
        >
          <img
            className="absolute h-full w-full object-cover rounded-lg shadow-md"
            src={property.imageUrl}
            alt="Property"
          />
        </div>
        <div className="relative px-4 -mt-16">
          <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
            <div className="flex items-center">
              <span className="inline-block bg-teal-200 text-teal-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide">
                New
              </span>
              <div className="ml-2 text-gray-600 text-xs uppercase font-semibold tracking-wide">
                {property.beds} beds &bull; {property.baths} baths
              </div>
            </div>
            <h4 className="mt-1 font-semibold text-lg leading-tight truncate">
              {property.title}
            </h4>
            <div className="mt-1">
              {property.formattedPrice}
              <span className="text-gray-600 text-sm"> / wk</span>
            </div>
            <div className="mt-2 flex items-center">
              {[1, 2, 3, 4, 5].map(i => (
                <svg
                  key={i}
                  className={
                    i <= property.rating
                      ? 'h-4 w-4 fill-current text-teal-500'
                      : 'h-4 w-4 fill-current text-gray-400'
                  }
                  viewBox="0 0 24 24"
                >
                  <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z" />
                </svg>
              ))}
              <span className="ml-2 text-gray-600 text-sm">
                {property.reviewCount} reviews
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Nav bar
// <div>
//       <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between sm:px-4 sm:py-3">
//         <div className="flex justify-between items-center px-4 py-3 sm:p-0">
//           <div>
//             <img className="h-8" src={LogoInverted} alt="" />
//           </div>
//           <div className="sm:hidden">
//             <button
//               onClick={() => setNavOpen(!navOpen)}
//               className="text-gray-500 hover:text-white focus:outline-none"
//               type="button"
//             >
//               <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
//                 {navOpen ? (
//                   <path
//                     fill-rule="evenodd"
//                     d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
//                   />
//                 ) : (
//                   <path
//                     fill-rule="evenodd"
//                     d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
//                   />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//         {navOpen && (
//           <div className="px-2 pt-2 pb-4 sm:flex sm:p-0">
//             <a
//               href="#"
//               className="block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
//             >
//               List your property
//             </a>
//             <a
//               href="#"
//               className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
//             >
//               Trips
//             </a>
//             <a
//               href="#"
//               className="mt-1 block px-2 py-1 text-white font-semibold rounded hover:bg-gray-800 sm:mt-0 sm:ml-2"
//             >
//               Messages
//             </a>
//           </div>
//         )}
//       </header>
//     </div>

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
