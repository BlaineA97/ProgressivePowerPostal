import React, { Component } from 'react';
import './Header.css';
import Navigation from './Navigation';

class Header extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      backgroundSelection: "Header-background-1"
    };
  }

  onClick() {
    if (this.state.backgroundSelection === "Header-background-1") {
      this.setState({
        backgroundSelection: "Header-background-2"
      })
    } else if (this.state.backgroundSelection === "Header-background-2") {
      this.setState({
        backgroundSelection: "Header-background-3"
      })
    } else {
      this.setState({
        backgroundSelection: "Header-background-1"
      })
    }
  }

  componentDidMount() {
    this.state.backgroundSelection = setInterval(this.onClick, 5000);
  }

  render() {
    return (
      <div id={this.state.backgroundSelection} className="Header-container">

        <Navigation />
        <div className="Header-arrow-container">
          <a onClick={this.onClick}> press me </a>
        </div>

      </div>
    );
  }
}

export default Header;
