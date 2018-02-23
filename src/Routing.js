import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={App} />
            {/* <Route path="/list" component={Body} /> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
