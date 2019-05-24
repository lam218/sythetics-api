import React from 'react';
import Dashboard from './components/Dashboard';
import './App.css';
import QueueListing from './components/QueueListing';

function App() {
  return (
    <div className="App">
      <Dashboard />
      <QueueListing/>
    </div>
  );
}

export default App;
