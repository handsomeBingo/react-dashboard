import React, {Component} from 'react'
import {Link} from "react-router-dom";

let arr = [
  {
    to: '/myclue',
    title: '线索列表'
  },
  {
    to: '/myfollow',
    title: '跟进列表'
  },
  {
    to: '/myorder',
    title: '我的业绩'
  }
];

class Links extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {activeName} = this.props
    return (
      <React.Fragment>
        {
          arr.map((item, index) => (
            <li className={item.to === activeName ? 'active' : ''}
                key={item.to}
                onClick={() => this.props.activeChange(item.to)}>
              <Link to={item.to}>{item.title}</Link>
            </li>
          ))
        }
      </React.Fragment>
    )
  }
}

export default Links;