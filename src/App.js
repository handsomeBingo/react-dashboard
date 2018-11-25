import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './auth/login'
import Layout from './layout/layout'
import { Link, Route, Router } from 'react-router-dom'
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
          <Layout />
        </div>
      </div>
    );
  }
}

export default App;
