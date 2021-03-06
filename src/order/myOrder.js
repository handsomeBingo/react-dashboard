import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './css/my-clues.css'
import {contextBinding} from '../libs/utils'
import Dialog from '../components/dialog'
import Pagination from '../components/pager'

const CLUES_STATUS_LIST = [
  {
    key: '1',
    value: '新分配'
  },
  {
    key: '2',
    value: '跟进中'
  }
];

const CLUES_ORIGIN_LIST = [
  {
    key: '1',
    value: '手动创建'
  },
  {
    key: '2',
    value: '上级分配'
  }
];

class MyOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogFlag: false,
      keywords: '',
      clueStatus: '1',
      cluesOrigin: '1',
      tableData: [
        {
          id: 1,
          name: '张三',
          sex: 1,
          sex_name: '男',
          createdAt: '2018-12-03 18:23:28',
          origin: '新建',
          buyDesire: 1
        },
        {
          id: 2,
          name: '李四',
          sex: 1,
          sex_name: '男',
          createdAt: '2018-12-04 18:23:28',
          origin: '新建',
          buyDesire: 1
        },
        {
          id: 3,
          name: '王五',
          sex: 2,
          sex_name: '女',
          createdAt: '2018-12-02 18:23:28',
          origin: '新建',
          buyDesire: 1
        }
      ],
      currentPage: 1,
      total: 98,
      size: 10
    };
    contextBinding([
      'createNewClue',
      'keywordsChange',
      'clueStatusChange',
      'clueOriginChange',
      'handleSearch',
      'handleCloseDialog',
      'handleConfirm',
      'giveUp',
      'handleSizeChange',
      'handlePageChange'
    ], this);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  handleCloseDialog() {
    this.setState({
      dialogFlag: false
    })
  }
  handleConfirm() {
    // do sth when confirm btn was clicked
    this.handleCloseDialog()
    // request the backend interface, pass data to them and then shutdown the dialog when they response.
  }

  createNewClue() {
    this.context.router.history.push('/myorder/create')
  }

  keywordsChange(e) {
    this.setState({
      keywords: e.target.value
    })
  }

  clueStatusChange(e) {
    this.setState({
      clueStatus: e.target.value
    })
  }

  clueOriginChange(e) {
    this.setState({
      cluesOrigin: e.target.value
    })
  }

  handleSearch() {
    console.log(this.state)
  }

  goEdit(item) {
    this.context.router.history.push(`/myorder/edit/${item.id}`)
  }

  goDetail(item) {
    this.context.router.history.push(`/myorder/detail/${item.id}`)
  }
  giveUp(item) {
    this.setState({
      dialogFlag: true
    })
  }
  handlePageChange(page) {
    // the page changed,request the api
    console.log(page)
    this.setState({
      currentPage: page
    })
  }
  handleSizeChange(e) {
    // the page size changed the api
    console.log(e.target.value)
    this.setState({
      size: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="row">
          <h2 className="col-md-2 txtlgnlft">
            订单列表
          </h2>
          <p className="col-md-1 col-md-offset-6 mgtp20">
            <button type="button"
                    className="btn btn-primary"
                    onClick={this.createNewClue}>
              新建订单
            </button>
          </p>
        </div>
        <hr className="mgtp20"/>
        <div className="clearfix">
          <form className="form-inline search-box" role="form">
            <div className="form-group">
              搜索条件：
            </div>
            <div className="form-group">
              <input type="text"
                     className="form-control"
                     value={this.state.keywords}
                     onChange={this.keywordsChange}
                     placeholder="请输入姓名/电话号码"/>
            </div>
            <div className="form-group mgnlft20">
              <select type="text"
                      value={this.state.clueStatus}
                      onChange={this.clueStatusChange}
                      className="form-control"
                      placeholder="请选择线索状态">
                {
                  CLUES_STATUS_LIST.map((item) => (
                    <option value={item.key} key={item.key}>{item.value}</option>)
                  )
                }
              </select>
            </div>
            <div className="form-group mgnlft20">
              <select type="text"
                      value={this.state.cluesOrigin}
                      onChange={this.clueOriginChange}
                      className="form-control"
                      placeholder="请选择线索来源">
                {
                  CLUES_ORIGIN_LIST.map((item) => (
                    <option value={item.key} key={item.key}>{item.value}</option>)
                  )
                }
              </select>
            </div>
            <button type="button"
                    onClick={this.handleSearch}
                    className="btn btn-primary mgnlft20">搜索
            </button>
          </form>
        </div>
        <hr className='mgtp20'/>
        <div className="table-wrapper row">
          <div className="col-md-8">
            <table className="table table-bordered table-hover">
              <thead>
              <tr>
                <th>
                  id
                </th>
                <th>
                  姓名
                </th>
                <th>
                  性别
                </th>
                <th>
                  录入时间
                </th>
                <th>
                  来源
                </th>
                <th>
                  意向级别
                </th>
                <th>
                  操作
                </th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.tableData.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        {item.id}
                      </td>
                      <td>
                        {item.name}
                      </td>
                      <td>
                        {item.sex}
                      </td>
                      <td>
                        {item.createdAt}
                      </td>
                      <td>
                        {item.origin}
                      </td>
                      <td>
                        {item.buyDesire}
                      </td>
                      <td>
                        <button type="button"
                                onClick={() => {
                                  this.goEdit(item)
                                }}
                                className="btn btn-primary">编辑
                        </button>
                        <button type="button"
                                onClick={() => {
                                  this.goDetail(item)
                                }}
                                className="btn btn-primary mgnlft20">详情
                        </button>
                        <button type="button" 
                                onClick={this.giveUp}
                                className="btn btn-primary mgnlft20">取消</button>
                      </td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </div>
          <Pagination currentPage={this.state.currentPage}
                      total={this.state.total}
                      size={this.state.size}
                      sizes={[10, 20, 50, 100]}
                      pageChange={this.handlePageChange}
                      sizeChange={this.handleSizeChange}></Pagination>
        </div>
        <Dialog visible={this.state.dialogFlag}
                title="确认"
                confirmMethod={this.handleConfirm}
                closeMethod={this.handleCloseDialog}>
          <div>
            <h2>您确定要取消该订单吗？</h2>
          </div>
        </Dialog>
      </div>
    )
  }
}

export default MyOrder;