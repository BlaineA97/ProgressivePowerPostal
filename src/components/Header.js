import React, { Component } from 'react';
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

  imageTextOne() {
    return(<p>"Affordable & Reliable Shipping Services"</p>)
  }
  imageTextTwo() {
    return(<p>"Candles, Greeting Cards & Office Supplies"</p>)
  }
  imageTextThree() {
    return(<p>"Packing Services & Supplies"</p>)
  }

// Alternates Header background images when clicked
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
    this.state.backgroundSelection = setInterval(this.onClick, 3000);
  }

  render() {
    return (
      <div id={this.state.backgroundSelection} className="Header-container">

        <Navigation />
        <div className="Header-arrow-container">
          <a onClick={this.onClick}> {this.state.backgroundText} </a>
        </div>

      </div>
    );
  }
}

export default Header;
