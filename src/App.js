import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-navigation">
          <Header />
        </div>
        <div className="App-body">
          <Body />
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
