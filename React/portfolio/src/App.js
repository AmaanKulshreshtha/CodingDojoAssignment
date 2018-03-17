import React, { Component } from 'react';
import './App.css';
import Header from './components/Header' 

// remember in React u don't include file extentions when importing them
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <p>hello world</p>
      </div>
    );
  }
}

export default App;
