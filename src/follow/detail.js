import React, {Component} from 'react'
import PropTypes from 'prop-types'

const BUY_DESIRE_LIST = [
  {
    key: 1,
    value: '购买意愿强烈'
  },
  {
    key: 2,
    value: '期待更多了解'
  },
  {
    key: 3,
    value: '毫无兴趣，不希望再次被打扰'
  }
]
class FollowDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'xx',
      phone: 'xxx',
      address: 'xxx',
      sex: '1',
      buyDesire: '1',
      followDesire: '1'
    }
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  componentDidMount() {
    console.log(this.context.router)
  }
  goBack() {
    this.context.router.history.push('/myclue')
  }
  render() {
    return (
      <div>
        <div className="row">
          <h2 className="col-md-2 txtlgnlft">
            线索详情
          </h2>
          <p className="col-md-1 col-md-offset-6 mgtp20">
            <button type="button"
                    className="btn btn-primary"
                    onClick={() => {this.goBack()}}>
              返回
            </button>
          </p>
        </div>
        <hr className="mgtp20"/>
        <ul>
          <li className="row">
            <p className="col-sm-2">
              姓名：
            </p>
            <p className="col-sm-2">
              {this.state.name}
            </p>
          </li>
          <li className="row">
            <p className="col-sm-2">电话：</p>
            <p className="col-sm-2">
              {this.state.phone}
            </p>
          </li>
          <li className="row">
            <p className="col-sm-2">
              地址：
            </p>
            <p className="col-sm-2">
              {this.state.address}
            </p>
          </li>
          <li className="row">
            <p className="col-sm-2">
              客户购买欲望：
            </p>
            <p className="col-sm-2">
              {BUY_DESIRE_LIST[this.state.buyDesire].value}
            </p>
          </li>
          <li className="row">
            <p className="col-sm-2">
              是否再次跟进：
            </p>
            <p className="col-sm-2">
              {this.state.followDesire == 1 ? '是' : '否'}
            </p>
          </li>
        </ul>
        <div className="row">
          <div className="col-sm-3 col-sm-offset-7">
            <button className="btn btn-primary" onClick={() => {this.goBack()}}>返回</button>
          </div>
        </div>
      </div>
    )
  }
}

export default FollowDetail