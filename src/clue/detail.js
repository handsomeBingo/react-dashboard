import React, {Component} from 'react'
import PropTypes from 'prop-types'
class ClueDetail extends Component {
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
        id: {this.context.router.route.match.params.id}
      </div>
    )
  }
}

export default ClueDetail