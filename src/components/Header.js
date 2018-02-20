import React, { Component } from 'react';
import './Header.css';
import Navigation from './Navigation';

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        <Navigation />
      </div>
    );
  }
}

export default Header;
