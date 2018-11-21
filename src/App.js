import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './auth/login'
import Layout from './layout/layout'
import { BrowserRouter, Link, Route, Router } from 'react-router-dom'
import PropTypes from 'prop-types';
class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLogin: true
    }
    this.quit = this.quit.bind(this);
    this.mixins = [ History ];
  }
  // 这一步是重点
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  quit() {
    this.setState({
      isLogin: false
    })
    this.context.router.history.push("/login");
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <div className="container">
              <button className="btn btn-primary" type="button" onClick={this.quit}>退出</button>
            </div>
            {this.state.isLogin ? <Layout /> : void 0}
            {!this.state.isLogin ? <Route path="/login" component={Login} /> : void 0}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
