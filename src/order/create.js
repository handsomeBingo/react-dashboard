import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './css/create.css'

class CreateOrder extends Component {
  constructor(props) {
    super(props);
    this.goBack = this.goBack.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: '',
      phone: '',
      address: '',
      sex: '1',
      firstBuy: '1',
      goods: ['1', '2']
    }
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  goBack() {
    this.context.router.history.push('/myorder')
  }

  handleChange(e, which) {
    let value = e.target.value
    if (which === 'goods') {
      this.setState((prev, cur) => {
        let g = prev.goods
        g.includes(value) ? g = g.filter((i) => i !== value)
          : g.push(value)
        return {
          goods: g
        }
      })
    } else {
      this.setState({
        [which]: e.target.value
      })
    }
  }

  handleSubmit() {
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div>
          <div className="row">
            <h2 className="col-md-2 txtlgnlft">
              新建订单
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
                         onChange={(e) => {
                           this.handleChange(e, 'name')
                         }}
                         placeholder="请输入名字"/>
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
                         onChange={(e) => {
                           this.handleChange(e, 'phone')
                         }}
                         placeholder="请输入电话"/>
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
                         onChange={(e) => {
                           this.handleChange(e, 'address')
                         }}
                         placeholder="请输入地址"/>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-1">
                  首次购买
                </label>
                <div className="radio radio-wrapper">
                  <label htmlFor="male" className="mgnlft20">
                    <input id="male"
                           type="radio"
                           name="sex"
                           onChange={(e) => {
                             this.handleChange(e, 'firstBuy')
                           }}
                           checked={this.state.firstBuy === '1'}
                           value="1"/> 是
                  </label>
                  <label htmlFor="female" className="mgnlft20">
                    <input id="female"
                           type="radio"
                           name="sex"
                           onChange={(e) => {
                             this.handleChange(e, 'firstBuy')
                           }}
                           checked={this.state.firstBuy === '2'}
                           value="2"/> 否
                  </label>
                </div>
              </div>
              <div className="form-group">
                <label className="control-label col-sm-1">
                  购买商品
                </label>
                <div className="radio radio-wrapper">
                  <label htmlFor="yes" className="">
                    <input id="yes"
                           type="checkbox"
                           name="goods"
                           onChange={(e) => {
                             this.handleChange(e, 'goods')
                           }}
                           checked={this.state.goods.includes('1')}
                           value="1"/> 充值卡
                  </label>
                  <label htmlFor="no">
                    <input id="no"
                           type="checkbox"
                           onChange={(e) => {
                             this.handleChange(e, 'goods')
                           }}
                           checked={this.state.goods.includes('2')}
                           name="goods"
                           value="2"/> 增值服务
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

export default CreateOrder;