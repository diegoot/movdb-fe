import React from 'react'
import { connect } from 'react-redux'
import * as exampleActions from '../../../actions/example'

import './Dashboard.css'

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.asyncAction()
    this.props.syncAction()
  }

  render() {
    return (
      <div>
        {this.props.syncMessage}
        {this.props.isFetching && <div>Fetching</div>}
        {!this.props.isFetching && this.props.error && <div>Error</div>}
        {!this.props.isFetching && <div>{this.props.asyncMessage}</div>}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  syncMessage: state.example.syncMessage,
  asyncMessage: state.example.asyncMessage,
  isFetching: state.example.isFetching
})

export default connect(
  mapStateToProps,
  exampleActions
)(Dashboard)
