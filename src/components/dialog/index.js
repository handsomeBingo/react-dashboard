import React, {Component} from 'react'
import './dialog.css'
class Dialog extends Component {
  constructor(props) {
    super(props);
  }
  render () {
    let display = this.props.visible ? 'block' : 'none';
    return (
      <div className="modal"
           id="myModal"
           tabIndex="-1"
           role="dialog"
           style={{display: display}}
           aria-labelledby="myModalLabel">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button"
                      className="close"
                      data-dismiss="modal"
                      onClick={this.props.closeMethod}
                      aria-hidden="true">×
              </button>
              <h4 className="modal-title"
                  id="myModalLabel">
                {this.props.title}
              </h4>
            </div>
            <div className="modal-body">
              {this.props.children}
            </div>
            <div className="modal-footer">
              <button type="button"
                      onClick={this.props.closeMethod}
                      className="btn btn-default"
                      data-dismiss="modal">取消
              </button>
              <button type="button"
                      onClick={this.props.confirmMethod}
                      className="btn btn-primary">
                确定
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Dialog;