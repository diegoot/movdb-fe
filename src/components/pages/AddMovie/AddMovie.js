import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as headerActions from '../../../actions/header'
import { HEADER_LINKS } from '../../../constants/general'

import './styles.css'

class AddMovie extends Component {
  componentDidMount() {
    const { activeDashboardLink } = this.props

    activeDashboardLink()
  }

  componentWillUnmount() {
    const { hideDashboardLink } = this.props

    hideDashboardLink()
  }

  render() {
    return <div className="add-movie">Add Movie</div>
  }
}

const mapDispatchToProps = dispatch => ({
  activeDashboardLink: () =>
    dispatch(headerActions.flagActiveLink(HEADER_LINKS.DASHBOARD)),
  hideDashboardLink: () =>
    dispatch(headerActions.flagHiddenLink(HEADER_LINKS.DASHBOARD))
})

export default connect(
  null,
  mapDispatchToProps
)(AddMovie)
