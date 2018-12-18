import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './my-clues.css'

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

class MyClues extends Component {
  constructor(props) {
    super(props);
    this.createNewClue = this.createNewClue.bind(this);
    this.state = {
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
      ]
    };
    this.keywordsChange = this.keywordsChange.bind(this);
    this.clueStatusChange = this.clueStatusChange.bind(this);
    this.clueOriginChange = this.clueOriginChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  };

  createNewClue() {
    this.context.router.history.push('/createNewClue')
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
    this.context.router.history.push(`/myclue/edit/${item.id}`)
  }

  goDetail(item) {
    this.context.router.history.push(`/myclue/detail/${item.id}`)
  }

  render() {
    return (
      <div>
        <div className="row">
          <h2 className="col-md-2 txtlgnlft">
            线索列表
          </h2>
          <p className="col-md-1 col-md-offset-6 mgtp20">
            <button type="button"
                    className="btn btn-primary"
                    onClick={this.createNewClue}>
              新建线索
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
                                onClick={() => {this.goEdit(item)}}
                                className="btn btn-primary">编辑</button>
                        <button type="button"
                                onClick={() => {this.goDetail(item)}}
                                className="btn btn-primary mgnlft20">详情</button>
                        <button type="button" className="btn btn-primary mgnlft20">放弃</button>
                      </td>
                    </tr>
                  )

                })
              }
              </tbody>
            </table>
          </div>
          <div className="col-md-8 clearfix">
            <p className="fl pager-diy">第 <span>2</span> 页，共100页</p>
            <ul className="pagination fl">
              <li><a href="#">&laquo;</a></li>
              <li className="active"><a href="#">1</a></li>
              <li className="disabled"><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">4</a></li>
              <li><a href="#">5</a></li>
              <li><a href="#">&raquo;</a></li>
            </ul>
            <div className="fl mgtp20 mgnlft20 pager-input">
              <input type="text" className="form-control"/>
            </div>
            <div className="fl mgtp20 mgnlft20">
              <button type="button" className="btn-primary btn">GO</button>
            </div>
          </div>
        </div>

        <div className="modal"
             id="myModal" tabIndex="-1"
             role="dialog"
             style={{display: 'block'}}
             aria-labelledby="myModalLabel">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal"
                        aria-hidden="true">×
                </button>
                <h4 className="modal-title" id="myModalLabel">
                  模态框（Modal）标题
                </h4>
              </div>
              <div className="modal-body">
                按下 ESC 按钮退出。
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default"
                        data-dismiss="modal">关闭
                </button>
                <button type="button" className="btn btn-primary">
                  提交更改
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MyClues;