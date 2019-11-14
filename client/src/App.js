import React from 'react';
import './App.css';
import Header from './components/Header';
import ShowList from './components/ShowList';

const App = () => {  
  return (
    <div className="ui container">
      <Header />
      <ShowList 
      title="My List" 
      buttonText="Remove"
      />
      <ShowList 
      title="Recommendations" 
      buttonText="Add" />
    </div>
  );  
}

export default App;
