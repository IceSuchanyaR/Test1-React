import React, { Component } from 'react';
import Header from './Header.js';
import CarList from './components/CarList';


import './App.css';


 class App extends React.Component {

    state = {
            data: []
        }
    
        

  render() {
   
    return (
      <div className="App col-lg-6">
      <CarList/>
      </div>
    )
  }
}

export default App;



