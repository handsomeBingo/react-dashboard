import React, {Component} from 'react'
import PropTypes from 'prop-types'
class ClueEdit extends Component {
  constructor(props) {
    super(props);
    super(props);
    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      phone: '',
      address: '',
      sex: '1',
      buyDesire: '1',
      followDesire: '1'
    };
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  };
  componentDidMount() {
    console.log(this.context.router)
  }
  goBack() {
    this.context.router.history.push('/myclue')
  }
  handleChange(e, which) {
    this.setState({
      [which]: e.target.value
    })
  }
  handleSubmit() {
    console.log(this.state)
  }
  render() {
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
    return (
      <div>
        <div>
          <div className="row">
            <h2 className="col-md-2 txtlgnlft">
              新建线索
            </h2>
            <p className="col-md-1 col-md-offset-6 mgtp20">
              <button type="button"
                      className="btn btn-primary"
                      onClick={this.goBack}>
                返回
              </button>
            </p>
          </div>
          <hr className="mgtp20"/>
          <div>
            <form role="form" className="form-horizontal">
              <div className="form-group">
                <label className="col-sm-1 control-label" htmlFor="clueName">
                  姓名
                </label>
                <div className="col-sm-5">
                  <input type="text"
                         className="form-control"
                         value={this.state.name}
                         onChange={(e) => {this.handleChange(e, 'name')}}
                         placeholder="请输入名字" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-1">
                  电话
                </label>
                <div className="col-sm-5">
                  <input type="text"
                         className="form-control"
                         value={this.state.phone}
                         onChange={(e) => {this.handleChange(e, 'phone')}}
                         placeholder="请输入电话" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-1">
                  地址
                </label>
                <div className="col-sm-5">
                  <input type="text"
                         className="form-control"
                         value={this.state.address}
                         onChange={(e) => {this.handleChange(e, 'address')}}
                         placeholder="请输入地址" />
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-1">
                  性别
                </label>
                <div className="radio radio-wrapper">
                  <label htmlFor="male" className="mgnlft20">
                    <input id="male"
                           type="radio"
                           name="sex"
                           onChange={(e) => {this.handleChange(e, 'sex')}}
                           checked={this.state.sex === '1'}
                           value="1" /> 男
                  </label>
                  <label htmlFor="female" className="mgnlft20">
                    <input id="female"
                           type="radio"
                           name="sex"
                           onChange={(e) => {this.handleChange(e, 'sex')}}
                           checked={this.state.sex === '2'}
                           value="2" /> 女
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="col-sm-1 control-label">
                  客户购买意向
                </label>
                <div className="col-sm-5">
                  <select className="form-control"
                          value={this.state.buyDesire}
                          onChange={(e) => {this.handleChange(e, 'buyDesire')}}>
                    {
                      BUY_DESIRE_LIST.map(
                        (item) => (<option value={item.key} key={item.key}>{item.value}</option>)
                      )
                    }
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-1">
                  愿意再次跟进
                </label>
                <div className="radio radio-wrapper">
                  <label htmlFor="yes" className="mgnlft20">
                    <input id="yes"
                           type="radio"
                           name="followDesire"
                           onChange={(e) => {this.handleChange(e, 'followDesire')}}
                           checked={this.state.followDesire === '1'}
                           value="1" /> 是
                  </label>
                  <label htmlFor="no" className="mgnlft20">
                    <input id="no"
                           type="radio"
                           onChange={(e) => {this.handleChange(e, 'followDesire')}}
                           checked={this.state.followDesire === '2'}
                           name="followDesire"
                           value="2" /> 否
                  </label>
                </div>
              </div>
            </form>
            <div className="row">
              <div className="col-sm-5 col-sm-offset-3">
                <button className="btn btn-primary" onClick={this.goBack}>取消</button>
                <button className="btn btn-primary mgnlft20" onClick={this.handleSubmit}>确定</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ClueEdit