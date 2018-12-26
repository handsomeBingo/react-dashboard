import React, {Component} from 'react'
import './pager.css'
import {contextBinding} from '../../libs/utils'


class Pagination extends Component {
  constructor(props) {
    super(props);
    let {currentPage, total, size} = this.props;
    let groups = Math.ceil(total / 10);
    let start = Math.floor(currentPage / 10);
    let totalPge = Math.ceil(total / size);
    this.state = {
      start,
      groups,
      localPage: '',
      totalPge
    };
    contextBinding([
      'preGroup',
      'nextGroup',
      'handleLocalChange'
    ], this);
  }

  preGroup() {
    let {start} = this.state
    if (start > 0) this.setState(prev => ({start: prev.start -= 1}))
  }

  nextGroup() {
    let {start, groups} = this.state;
    if (start < groups - 1) this.setState(prev => ({start: prev.start += 1}))
  }

  handleLocalChange(e) {
    this.setState({
      localPage: e.target.value
    })
  }

  goToPage() {
    let {localPage} = this.state;
    this.props.pageChange(localPage);
    this.setState({
      start: Math.floor(localPage / 10)
    })
  }

  render() {
    let {start, groups} = this.state;
    let {total} = this.props;
    let pageAry = [];
    for (let s = 10 * start + 1; s <= (10 * (start + 1) > total ? total : 10 * (start + 1)); s++) {
      pageAry.push(s)
    }
    let current = this.props.currentPage;
    return (
      <div className="col-md-8 clearfix">
        <p className="fl pager-diy">
          第 <span>{this.props.currentPage}</span> 页，共{this.state.totalPge}页
        </p>
        <div className="fl mgtp20">
          <select className="form-control pager-size"
                  value={this.props.size}
                  onChange={this.props.sizeChange}>
            {
              this.props.sizes.map((item, index) =>
                (<option value={item} key={index}>{item} 条/页</option>)
              )
            }
          </select>
        </div>
        <ul className="pagination fl pager-mgnlft15">
          <li onClick={this.preGroup}
              className={start <= 0 ? 'disabled pager-item' : 'pager-item'}>
            <a>&laquo;</a>
          </li>
          {
            pageAry.map((item, index) => (
              <li className={item == current ? 'active pager-item' : 'pager-item'}
                  onClick={(e) => this.props.pageChange(item)}
                  key={index}><a>{item > 10 ? item : <span>{item}&nbsp;&nbsp;</span>}</a>
              </li>))
          }
          <li onClick={this.nextGroup}
              className={start >= groups - 1 ? 'disabled pager-item' : 'pager-item'}>
            <a>&raquo;</a>
          </li>
        </ul>
        <div className="fl mgtp20 pager-mgnlft15 pager-input">
          <input type="text"
                 className="form-control"
                 value={this.state.localPage}
                 onKeyDown={e => +e.keyCode === 13 && this.goToPage()}
                 onChange={this.handleLocalChange}/>
        </div>
        <div className="fl mgtp20 pager-mgnlft15">
          <button type="button"
                  onClick={e => this.goToPage()}
                  className="btn-primary btn">GO
          </button>
        </div>
      </div>
    )
  }
}

export default Pagination