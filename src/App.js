import React from 'react';
import Dashboard from './components/Dashboard';
import './App.scss';
import QueueListing from './components/QueueListing';

function App() {
  return (
    <div className="App">
      <h1 className="App__heading">Live chat Dashboard</h1>
      <Dashboard />
      <QueueListing/>
    </div>
  );
}

export default App;
