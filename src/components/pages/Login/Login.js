import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import * as headerActions from '../../../actions/header'
import { HEADER_LINKS } from '../../../constants/general'
import LoginForm from './components/LoginForm/LoginForm'

class Login extends Component {
  componentDidMount() {
    const { activeDashboardLink } = this.props

    activeDashboardLink()
  }

  componentWillUnmount() {
    const { hideDashboardLink } = this.props

    hideDashboardLink()
  }

  render() {
    const { users } = this.props

    if (users.isLoggedIn) {
      return <Redirect to="/" />
    }

    return <LoginForm />
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  activeDashboardLink: () =>
    dispatch(headerActions.flagActiveLink(HEADER_LINKS.DASHBOARD)),
  hideDashboardLink: () =>
    dispatch(headerActions.flagHiddenLink(HEADER_LINKS.DASHBOARD))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
