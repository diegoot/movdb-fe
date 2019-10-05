import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { notification } from 'antd'

import { resetState } from '../../../actions/notifications'

class Notifications extends React.Component {
  componentDidUpdate(prevProps) {
    const { notifications } = this.props

    if (!prevProps.notifications.isVisible && notifications.isVisible) {
      notification[notifications.type]({
        message: notifications.message,
        onClose: this.onClose
      })
    }
  }

  onClose = () => {
    const { dispatch } = this.props

    dispatch(resetState())
  }

  render() {
    return null
  }
}

Notifications.propTypes = {
  notifications: PropTypes.object
}

const mapStateToProps = state => ({
  notifications: state.notifications
})

export default connect(
  mapStateToProps,
  null
)(Notifications)
