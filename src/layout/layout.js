import React, {Component} from 'react'
import './layout.css'
import { Link, Route, Router } from 'react-router-dom'
import history from '../history'
import LogOutBtn from '../auth/logoutbtn'
import {RouterContext} from '../auth/router-context';
import {mapExcludeLoginRoutes, loginRouter} from '../routes/router'
let StateContext = React.createContext('none');
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
  }
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
    var cH= document.documentElement.clientHeight;
    var cW = document.documentElement.getBoundingClientRect().width;
    this.setState({
      h: `${cH - 60}px`,
      w: `${cW}px`
    });
    window.onresize = () => {
      var cH= document.documentElement.clientHeight;
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
    let arr = [
      {
        to: '/',
        active: '',
        title: '首页'
      },
      {
        to: '/home',
        active: '',
        title: 'HOME'
      },
      {
        to: '/slash',
        active: '',
        title: 'SLASH'
      }
    ];
    arr.forEach((item, i) => {
      if (this.state.activeIndex === i) {
        arr[i].active = 'active'
      }
    });
    let lis = arr.map((item, index) => (
      <li className={item.active}
          key={item.to}
          onClick={this.activeChange.bind(this, index)}>
        <Link to={item.to}>{item.title}</Link>
      </li>
    ));
    if (this.state.isLogin) {
      return (
        <div>
          <Router history={history} loginIn={this.loginIn} logout={this.logout}>
            <RouterContext.Provider value={this.loginIn}>
              <div>
                <ul className="row tab-header">
                  <li className="col-md-4">
                    <h2 className="sys-title">
                      CRM管理系统
                    </h2>
                  </li>
                  <li className="col-md-1 col-md-offset-6 user-name">
                    <span>马宾</span>
                  </li>
                  <li className="col-md-1">
                    <button type="button"
                            onClick={this.dropMenu}
                            className="btn btn-default dropdown-toggle title-ops"
                            data-toggle="dropdown">默认 <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu re-drop-width"
                        role="menu"
                        style={{display: this.state.dropdown}}>
                      <li>
                        <LogOutBtn loginIn={this.loginIn}
                                   logout={this.logout}
                                   restDrop={this.restDrop} />
                      </li>
                      <li><a>修改密码</a></li>
                    </ul>
                  </li>
                </ul>
                <ul className="nav nav-pills nav-stacked col-md-1 left-nav"
                    style={{height: this.state.h}}>
                  {lis}
                </ul>
                <div className="col-md-11" id="right" style={{height: this.state.h}}>
                  {mapExcludeLoginRoutes}
                </div>
              </div>
            </RouterContext.Provider>
          </Router>
        </div>
      )
    } else {
      return (
        <Router history={history} loginIn={this.loginIn} logout={this.logout}>
          <div>
            <RouterContext.Provider value={this.loginIn}>
              {loginRouter}
            </RouterContext.Provider>
          </div>
        </Router>
      )
    }
  }
}

export default Layout;