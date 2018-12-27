import React, {Component} from 'react'
import './home.css'
let now = new Date().getHours();
let calGreetings = (when) => {
  let phrase = '';
  let now = +when
  if (now <= 12) {
    phrase = '新的一天开始了，加油哦~~~~';
  } else if (now > 12 && now <14) {
    phrase = '忙碌了一上午，赶紧休息一下吧~';
  } else if(now => 14 && now < 19) {
    phrase = '下午的工作开始了，赶紧打起精神哦~';
  } else if (now => 19) {
    phrase = '夜深了，辛苦啦~';
  }
  return phrase
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: calGreetings(now)
    }
  }
  render () {
    return (
      <div className="home-img-wrapper" >
        <h2>
          {this.state.greeting}
        </h2>
        <p>
          <img className="home-img" src='./img/1.jpg'/>
        </p>
      </div>
    )
  }
}

export default Home