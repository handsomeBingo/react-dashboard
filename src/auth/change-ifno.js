import React, {Component} from 'react';
import {RouterContext} from "./router-context";
import './registry.css'
import PropTypes from 'prop-types';
import http from "../libs/http";
let {httpPost} = http()

const DEPARTMENT_LIST = [
  {
    key: '1',
    value: '总经办'
  },
  {
    key: '2',
    value: '领导力学院'
  },
  {
    key: '3',
    value: '销售-华北一区'
  },
  {
    key: '4',
    value: '销售-华南一区'
  }
]
class ChangeInfo extends Component {
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: '',
      repassword: '',
      phone: '',
      nickname: '',
      department: '1'
    };
    this.uNameChange = this.uNameChange.bind(this);
    this.nNameChange = this.nNameChange.bind(this);
    this.pwdChange = this.pwdChange.bind(this);
    this.rpwdChange = this.rpwdChange.bind(this);
    this.phoneChange = this.phoneChange.bind(this);
    this.dptChange = this.dptChange.bind(this);
    this.register = this.register.bind(this);
    this.cancel = this.cancel.bind(this);
  }
  register() {
    console.log(this.state)
  }
  cancel() {
    this.context.router.history.push("/");
  }
  uNameChange(e) {
    this.setState({
      userName: e.target.value
    })
  }
  phoneChange(e) {
    this.setState({
      phone: e.target.value
    })
  }
  nNameChange(e) {
    this.setState({
      nickname: e.target.value
    })
  }
  pwdChange(e) {
    this.setState({
      password: e.target.value
    })
  }
  rpwdChange(e) {
    this.setState({
      repassword: e.target.value
    })
  }
  dptChange(e) {
    this.setState({
      department: e.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <h2 className="pageTitle">
          修改用户信息
        </h2>
        <hr/>
        <div className="col-md-8">
          <form className="form-horizontal row" role="form">
            <div className="form-group">
              <label htmlFor="userName" className="control-label col-md-4">
                用户名
              </label>
              <div className="col-md-8">
                <input type="text"
                       className="form-control"
                       vlaue={this.state.userName}
                       onChange={this.uNameChange}
                       placeholder="请输入用户名"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="userName" className="control-label col-md-4">
                昵称
              </label>
              <div className="col-md-8">
                <input type="text"
                       className="form-control"
                       vlaue={this.state.nickname}
                       onChange={this.nNameChange}
                       placeholder="请输入昵称"/>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="phone" className="control-label col-md-4">
                电话
              </label>
              <div className="col-md-8">
                <input type="text"
                       className="form-control"
                       vlaue={this.state.phone}
                       onChange={this.phoneChange}
                       placeholder="请输入电话"/>
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
                       type="password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="pwd" className="control-label col-md-4">
                重复密码
              </label>
              <div className="col-md-8">
                <input className="form-control"
                       placeholder="请再次输入密码"
                       value={this.state.repassword}
                       onChange={this.rpwdChange}
                       type="password" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="pwd" className="control-label col-md-4">
                部门
              </label>
              <div className="col-md-8">
                <select className="form-control"
                       placeholder="请选择部门"
                       value={this.state.department}
                       onChange={this.dptChange}>
                  {
                    DEPARTMENT_LIST.map((item) => (
                      <option value={item.key} key={item.key}>{item.value}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <button className="btn btn-primary col-md-offset-5 col-md-2"
                        onClick={this.cancel}
                        type="button">取消</button>
                <button className="btn btn-primary col-md-offset-2 col-md-2"
                        onClick={this.register}
                        type="button">注册</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ChangeInfo;