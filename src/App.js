import React from 'react';
import './App.css';
import Services from './components/Services';

function App() {
  return (
    <div className="App">
      <header className="hero">
        <h1>Welcome to Codantix</h1>
        <p>Innovative Tech Solutions for Your Business</p>
      </header>

      <Services />

      <footer>
        <p>&copy; 2025 Codantix. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
