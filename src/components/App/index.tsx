import React from 'react';
import Header from '../common/Header';
import './App.scss';
import LandingPage from '../LandingPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header/>
      <LandingPage/>
    </div>
  );
}

export default App;
