import React, {Component} from 'react'
import {Link} from "react-router-dom";

let arr = [
  {
    to: '/',
    title: '首页'
  },
  {
    to: '/myclue',
    title: '线索列表'
  },
  {
    to: '/myfllowing',
    title: '我的跟进'
  },
  {
    to: '/myorder',
    title: '我的订单'
  }
];

class Links extends Component {
  constructor(props) {
    super(props);
  }
  render() {
   return (
     <React.Fragment>
       {
         arr.map((item, index) => (
           <li className={index === this.props.activeIndex ? 'active' : ''}
               key={item.to}
               onClick={() => this.props.activeChange(index)}>
             <Link to={item.to}>{item.title}</Link>
           </li>
         ))
       }
     </React.Fragment>
   )
  }
}

export default Links;