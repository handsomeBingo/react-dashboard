import React, {Component} from 'react'
import './pager.css'

class Pagination extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
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
    )
  }
}

export default Pagination