import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from './App';
import Body from './components/Body';
import Services from './components/Pages/Services';

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
          <div>
            <Route exact path="/" component={App} />
            <Route path="/services" component={Services} />
            <Route path="/tracking" component={Body} />
            <Route path="/contact" component={Body} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Routing;
