import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as headerActions from '../../../actions/headerLinks'
import { HEADER_LINKS } from '../../../constants/general'

class Login extends Component {
  componentDidMount() {
    const { flagActiveLink } = this.props

    flagActiveLink()
  }

  componentWillUnmount() {
    const { flagHiddenLink } = this.props

    flagHiddenLink()
  }

  render() {
    return <div>Login</div>
  }
}

const mapStateToProps = state => ({
  headerLinks: state.headerLinks
})

const mapDispatchToProps = dispatch => ({
  flagActiveLink: () =>
    dispatch(headerActions.flagActiveLink(HEADER_LINKS.DASHBOARD)),
  flagHiddenLink: () =>
    dispatch(headerActions.flagHiddenLink(HEADER_LINKS.DASHBOARD))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
