import React from 'react';
// import logo from './logo.svg';
import './App.css';
import MyList from './components/MyList';
import Recommand from './components/Recommandation';
import Header from './components/Header';

function App() {
  return (
    <div className="ui container">
      <Header />
      <MyList />
      <Recommand />
    </div>
  );
}

export default App;
