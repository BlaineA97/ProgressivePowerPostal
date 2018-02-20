import React, { Component } from 'react';
import './Header.css';
import Navigation from './Navigation';
import backgroundOne from '../images/storefront.png'

class Header extends Component {
  render() {
    return (
      <div className="Header-container">
        {/* <img id="Header-background" src={backgroundOne} alt="StoreImage"/> */}
        <Navigation />
      </div>
    );
  }
}

export default Header;
