import React from 'react'
import { connect } from 'react-redux'
import { Modal as AntModal } from 'antd'
import { withRouter } from 'react-router-dom'

import { HEADER_LINKS } from '../../../constants/general'
import { logoutUser } from '../../../actions/users'
import { resetLinks, flagActiveLink } from '../../../actions/header'
import { resetState } from '../../../actions/modals'

class Modal extends React.Component {
  componentDidUpdate(prevProps) {
    const { modals, logoutUser } = this.props

    if (!prevProps.modals.isVisible && modals.isVisible) {
      AntModal.info({
        title: modals.title,
        content: modals.content,
        onOk() {
          logoutUser()
          resetState()
        }
      })
    }
  }

  render() {
    return null
  }
}

const mapStateToProps = state => ({
  modals: state.modals
})

const mapDispathToProps = (dispatch, ownProps) => ({
  logoutUser: () => {
    dispatch(logoutUser(ownProps.history))
    dispatch(resetLinks())
    dispatch(flagActiveLink(HEADER_LINKS.LOGIN.KEY))
    dispatch(resetState())
  }
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispathToProps
  )(Modal)
)
