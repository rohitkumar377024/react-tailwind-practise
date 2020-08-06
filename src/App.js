/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './App.css';
import logo from './assets/images/logo.svg';
import splash from './assets/images/beach-work.jpg';

function App() {
  return (
    <div className="px-8 py-12">
      <img className="h-10" src={logo} alt="Workcation" />
      <img className="mt-6 rounded-lg shadow-xl" src={splash} alt="Splash" />
      <h1 className="mt-6 text-2xl font-bold text-gray-900 leading-tight">
        You can work from anywhere.
        <span className="text-indigo-500">Take advantage of it.</span>
      </h1>
      <p className="mt-2 text-gray-600">
        Workcation helps you find work-friendly rentals in beautiful locations so you
        can enjoy some nice weather even when you are not on a vacation.
      </p>
      <div className="mt-4">
        <a
          href="#"
          className="inline-block px-5 py-3 rounded-lg shadow-lg bg-indigo-500 text-sm text-white uppercase tracking-wider font-semibold"
        >
          Book your escape
        </a>
      </div>
    </div>
  );
}

export default App;
