import React from 'react';
import './App.css';

// Componentes
import Canvas from './components/Canvas/Canvas.js'
import Sidebar from './components/Sidebar/Sidebar.js';
import Navbar from './components/Navbar/Navbar.js'

function App() {

  return (
    <div className="App">
      <Sidebar />
      <Navbar />
      <Canvas />
    </div>
  );
}

export default App;
