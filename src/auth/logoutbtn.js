import React, {Component} from 'react'
import PropTypes from 'prop-types';

class LogOutBtn extends Component {
  constructor(props) {
    super(props);
    this.quit = this.quit.bind(this);
  }
  // 这一步是重点
  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  quit() {
    this.context.router.history.push("/login");
  }

  render () {
    return (
      <div>
        <button className="btn btn-primary" type="button"onClick={this.quit}>退出</button>
      </div>
    )
  }
}

export default LogOutBtn