import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from './layout/layout'
import { Router } from 'react-router-dom'
import history from './history'

import PropTypes from "prop-types";
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLogin: true
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <Router history={history}>
            <Layout />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
