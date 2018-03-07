import React, { Component } from 'react';
// import logo from './logo.svg';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <Navigation />
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
/*
things to do:
Add cursor on links


*/
