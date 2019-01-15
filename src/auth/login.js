import React, {Component} from 'react';
import './login.css';
import http from '../libs/http';
import PropTypes from "prop-types";
import {RouterContext} from './router-context';

let {httpPost} = http()

class Login extends Component {
  constructor() {
    super();
    this.state = {
      phone: '',
      password: ''
    };
    this.login = this.login.bind(this);
    this.uNameChange = this.uNameChange.bind(this);
    this.pwdChange = this.pwdChange.bind(this);
    this.register = this.register.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  login(cb) {
    return httpPost('/auth/login', this.state).then((r) => {
      if (r.data.status === 0) {
        localStorage.setItem('isLogin', true);
        cb(true);
        this.context.router.history.push("/");
      } else {
        localStorage.clear()
      }
    }).catch((e) => {
      console.log(e)
    })
  }

  uNameChange(e) {
    this.setState(
      {
        phone: e.target.value
      }
    )
  }

  register() {
    this.context.router.history.push('/registry')
  }

  pwdChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <div className="full-screen">
        <div className="container login-form-wrapper" style={{width: '400px'}}>
          <form className="form-horizontal row" role="form">
            <div className="form-group">
              <label htmlFor="userName" className="control-label col-md-4">
                电&nbsp;&nbsp;&nbsp;&nbsp;话
              </label>
              <div className="col-md-8">
                <input type="text"
                       className="form-control"
                       vlaue={this.state.password}
                       onChange={this.uNameChange}
                       placeholder="请输入用户名"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="pwd" className="control-label col-md-4">
                密&nbsp;&nbsp;&nbsp;码
              </label>
              <div className="col-md-8">
                <input className="form-control"
                       placeholder="请输入密码"
                       value={this.state.password}
                       onChange={this.pwdChange}
                       type="password"/>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <RouterContext.Consumer>
                  {
                    (value) => {
                      return <button className="btn btn-primary col-md-offset-2 col-md-4"
                                     onClick={() => {
                                       this.login(value)
                                     }}
                                     type="button">
                        登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
                      </button>
                    }
                  }
                </RouterContext.Consumer>
                <button className="btn btn-primary col-md-offset-2 col-md-4"
                        onClick={this.register}
                        type="button">
                  注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;
