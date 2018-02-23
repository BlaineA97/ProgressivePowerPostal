import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Navigation from './Navigation';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.imageTextOne = this.imageTextOne.bind(this);
    this.state = {
      backgroundSelection: "Header-background-1",
      backgroundText: this.imageTextOne()
    };
  }

// Returns text to sit over images.
  imageTextOne() {
    return(<p className="Header-background-text">Affordable & Reliable Shipping Services</p>)
  }
  imageTextTwo() {
    return(<p className="Header-background-text">Candles, Greeting Cards & Office Supplies</p>)
  }
  imageTextThree() {
    return(<p className="Header-background-text">Packing Services & Supplies</p>)
  }

// Alternates Header background images & text when clicked
  onClick() {
    if (this.state.backgroundSelection === "Header-background-1") {
      this.setState({
        backgroundSelection: "Header-background-2",
        backgroundText: this.imageTextTwo()
      })
    } else if (this.state.backgroundSelection === "Header-background-2") {
      this.setState({
        backgroundSelection: "Header-background-3",
        backgroundText: this.imageTextThree()
      })
    } else {
      this.setState({
        backgroundSelection: "Header-background-1",
        backgroundText: this.imageTextOne()
      })
    }
  }

// Clicks "onClick" every 5 seconds to change the background picture automatically
  componentDidMount() {
    this.state.backgroundSelection = setInterval(this.onClick, 5000);
  }

  render() {
    return (
      <div id={this.state.backgroundSelection} className="Header-container">
        <div className="Header-imageText-container">
          <a onClick={this.onClick}>
            {this.state.backgroundText}
          </a>
        </div>

      </div>
    );
  }
}

export default Header;
