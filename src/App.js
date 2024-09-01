import React from 'react';
import Navbar from './components/Navbar';
import SortingVisualizer from './components/SortingVisualizer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SortingVisualizer />
    </div>
  );
}

export default App;
