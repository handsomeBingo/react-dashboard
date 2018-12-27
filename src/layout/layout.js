import React, {Component} from 'react'
import './layout.css'
import {Link, Route, Router} from 'react-router-dom'
import LogOutBtn from '../auth/logoutbtn'
import Links from './navigator'
import {RouterContext} from '../auth/router-context';
import {mapExcludeLoginRoutes, loginRouter} from '../routes/router'
import PropTypes from "prop-types";

class Layout extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      activeIndex: 0,
      h: 'auto',
      w: 'auto',
      dropdown: 'none',
      isLogin: true
    };
    this.dropMenu = this.dropMenu.bind(this);
    this.loginIn = this.loginIn.bind(this);
    this.logout = this.logout.bind(this);
    this.restDrop = this.restDrop.bind(this);
    this.activeChange = this.activeChange.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  activeChange(i) {
    this.setState({
      activeIndex: i
    })
  }

  restDrop() {
    this.setState({
      dropdown: 'none'
    })
  }

  componentDidMount() {
    this.setState({
      dropdown: 'none'
    });
    var cH = document.documentElement.clientHeight;
    var cW = document.documentElement.getBoundingClientRect().width;
    this.setState({
      h: `${cH - 60}px`,
      w: `${cW}px`
    });
    window.onresize = () => {
      var cH = document.documentElement.clientHeight;
      this.setState({
        h: `${cH - 60}px`
      });
    }
  }

  dropMenu() {
    this.setState((state) => {
      if (state.dropdown === 'none') {
        return {
          dropdown: 'block'
        }
      } else {
        return {
          dropdown: 'none'
        }
      }
    })
  }

  loginIn(state) {
    this.setState({
      isLogin: state
    })
  }

  logout(state) {
    this.setState({
      isLogin: state
    })
  }

  render() {
    let curPath = /(\/\w+)\/?\w?/.exec(this.context.router.route.location.pathname);
    let activeName = curPath ?  curPath[1] : '/';
    if (this.state.isLogin) {
      return (
        <div>
          <RouterContext.Provider value={this.loginIn}>
            <div>
              <ul className="row tab-header">
                <li className="col-md-4">
                  <Link to="/">
                    <h2 className="sys-title">
                      CRM管理系统
                    </h2>
                  </Link>
                </li>
                <li className="col-md-1 col-md-offset-6 user-name">
                  <span className="userName">马宾</span>
                </li>
                <li className="col-md-1" onMouseEnter={this.dropMenu}
                    onMouseLeave={this.dropMenu}>
                  <button type="button"
                          className="btn btn-default dropdown-toggle title-ops"
                          data-toggle="dropdown">菜单<span className="caret"></span>
                  </button>
                  <ul className="dropdown-menu re-drop-width"
                      role="menu"
                      style={{display: this.state.dropdown}}>
                    <li>
                      <LogOutBtn loginIn={this.loginIn}
                                 logout={this.logout}
                                 restDrop={this.restDrop}/>
                    </li>
                    <li><Link to={'/changeInfo'}>修改密码</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="nav nav-pills nav-stacked col-md-2 left-nav"
                  style={{height: this.state.h, maxWidth: '200px'}}>
                <Links activeIndex={this.state.activeIndex}
                       activeName={activeName}
                       activeChange={this.activeChange}/>
              </ul>
              <div className="col-md-10" id="right"
                   style={{height: this.state.h, paddingLeft: '100px'}}>
                {mapExcludeLoginRoutes}
              </div>
            </div>
          </RouterContext.Provider>
        </div>
      )
    } else {
      return (
        <div>
          <RouterContext.Provider value={this.loginIn}>
            {loginRouter}
          </RouterContext.Provider>
        </div>
      )
    }
  }
}

export default Layout;