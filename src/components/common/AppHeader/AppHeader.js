import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import logo from '../../../assets/logo.png'
import { HEADER_LINKS } from '../../../constants/general'
import { logoutUser } from '../../../actions/users'
import { resetLinks, flagActiveLink } from '../../../actions/header'

import './styles.css'

const AppHeader = props => {
  return (
    <div className="app-header">
      <Link to="/">
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <div className="header-links">
        {props.header[HEADER_LINKS.LOGIN.KEY] && (
          <span className="header-item">
            <Link to={HEADER_LINKS.LOGIN.PATH}>{HEADER_LINKS.LOGIN.NAME}</Link>
          </span>
        )}
        {props.header[HEADER_LINKS.ADD_MOVIE.KEY] && (
          <span className="header-item">
            <Link to={HEADER_LINKS.ADD_MOVIE.PATH}>
              {HEADER_LINKS.ADD_MOVIE.NAME}
            </Link>
          </span>
        )}
        {props.header[HEADER_LINKS.DASHBOARD.KEY] && (
          <span className="header-item">
            <Link to={HEADER_LINKS.DASHBOARD.PATH}>
              {HEADER_LINKS.DASHBOARD.NAME}
            </Link>
          </span>
        )}
        {props.users.isLoggedIn && (
          <span className="header-item" onClick={props.logoutUser}>
            logout
          </span>
        )}
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  header: state.header,
  users: state.users
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  logoutUser: () => {
    dispatch(logoutUser(ownProps.history))
    dispatch(resetLinks())
    dispatch(flagActiveLink(HEADER_LINKS.LOGIN.KEY))
  }
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppHeader)
)
