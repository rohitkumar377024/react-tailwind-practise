import React from 'react';
import './App.css';
import DarkCard from './DarkCard';
import LightCard from './LightCard';

function App() {
  return (
    <div className="flex flex-wrap justify-center">
      <LightCard date="Aug 05, 2020" title="Tailwind CSS" />
      <LightCard date="Aug 07, 2020" title="React Router" />
      <LightCard date="Aug 13, 2020" title="React Redux" />
      <LightCard date="Aug 13, 2020" title="React Redux" />
      <LightCard date="Aug 05, 2020" title="Tailwind CSS" />
      <LightCard date="Aug 07, 2020" title="React Router" />
    </div>
  );
}

export default App;
