import React, {Component} from 'react';
import './login.css';
import http from '../libs/http';

let {httpPost} = http()

class Login extends Component {
  constructor() {
    super();
    this.state = {
      user_name: '',
      password: ''
    };
    this.login = this.login.bind(this);
    this.uNameChange = this.uNameChange.bind(this);
    this.pwdChange = this.pwdChange.bind(this);
  }
  login () {
    httpPost('/user/auth/login', this.state).then((r) => {
      console.log(r)
    }).catch((e) => {
      console.log(e)
    })
  }
  uNameChange(e) {
    this.setState(
      {
        user_name: e.target.value
      }
    )
  }
  pwdChange(e) {
    this.setState({
      password: e.target.value
    })
  }

  render () {
    return (
      <div className="full-screen">
        <div className="container login-form-wrapper" style={{width: '400px'}}>
          <form className="form-horizontal row" role="form">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="userName" className="control-label col-md-3">
                  用户名
                </label>
                <div className="col-md-9">
                  <input type="text"
                         className="form-control"
                         vlaue={this.state.password}
                         onChange={this.uNameChange}
                         placeholder="请输入用户名"/>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="pwd" className="control-label col-md-3">
                  密&nbsp;&nbsp;&nbsp;码
                </label>
                <div className="col-md-9">
                  <input className="form-control"
                         placeholder="请输入密码"
                         value={this.state.password}
                         onChange={this.pwdChange}
                         type="password" />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <button className="btn btn-primary col-md-offset-2 col-md-9"
                          onClick={this.login}
                          type="button">
                    登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login;