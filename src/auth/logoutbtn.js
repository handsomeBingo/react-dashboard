import React, {Component} from 'react'
import PropTypes from 'prop-types';

class LogOutBtn extends Component {
  constructor(props) {
    super(props);
    this.quit = this.quit.bind(this);
    this.login = this.login.bind(this);
  }
  // 这一步是重点
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  login() {
    setTimeout(() => {
      this.props.loginIn(true);
      this.props.restDrop();
      this.context.router.history.push("/home");
    })
  }
  quit() {
    this.props.logout(false);
    this.props.restDrop();
    this.context.router.history.push("/login");
  }

  render () {
    return (<a onClick={this.quit}>退出</a>)
  }
}

export default LogOutBtn
