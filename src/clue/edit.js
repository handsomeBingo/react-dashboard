import React, {Component} from 'react'
import PropTypes from 'prop-types'
class ClueEdit extends Component {
  constructor(props) {
    super(props);
  }
  static contextTypes = {
    router: PropTypes.object.isRequired
  }
  componentDidMount() {
    console.log(this.context.router)
  }
  render() {
    return (
      <div>
       </div>
    )
  }
}

export default ClueEdit