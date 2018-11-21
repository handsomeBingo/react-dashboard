import React, {Component} from 'react'
import { BrowserRouter, Link, Route, Router } from 'react-router-dom'
import Login from '../auth/login'
function home() {
  return <h2>home Page</h2>
}
function slashPage() {
  return <h1>THIS IS SLASH PAGE</h1>
}
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
      <div className="container-fluid">
        <div>
          <BrowserRouter>
            <div>
              <ul className="nav nav-pills nav-stacked col-md-1">
                {lis}
              </ul>

              <div className="col-md-11">
                <div>这是top</div>
                <div style={{border: '1px solid #00b38a', marginTop: '20px'}}>
                  <Route exact path="/" component={slashPage}></Route>
                  <Route path="/home" component={home}></Route>
                </div>
              </div>
            </div>
          </BrowserRouter>
        </div>
      </div>
    )
  }
}

export default Layout;