import React, {Component} from 'react'
import './layout.css'
import { Link, Route, Router } from 'react-router-dom'
import history from '../history'
import LogOutBtn from '../auth/logoutbtn'
import Routes from '../routes/router'
class Layout extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      activeIndex: 0
    };
  }

  activeChange(i) {
    this.setState({
      activeIndex: i
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
    arr.forEach((i) => {
      if (i == this.state.activeIndex) {
        i.acitve = 'active'
      }
    });
    let lis = arr.map((item, index) => (
      <li className={item.active}
          key={item.to}
          onClick={this.activeChange.bind(this, index)}>
        <Link to={item.to}>{item.title}</Link>
      </li>
    ));
    return (
      <div>
        <Router history={history}>
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
                <select className="form-control title-ops">
                  <option value="1">退出</option>
                  <option value="2">修改密码</option>
                </select>
              </li>
            </ul>
            <ul className="nav nav-pills nav-stacked col-md-1 left-nav">
              {lis}
            </ul>
            <div className="col-md-10">
              {Routes}
            </div>
          </div>
        </Router>
      </div>
    )
  }
}

export default Layout;