import React from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

import logo from '../../../assets/logo.png'
import { HEADER_LINKS } from '../../../constants/general'
import { logoutUser } from '../../../actions/users'
import { resetLinks } from '../../../actions/header'

import './styles.css'

const AppHeader = props => {
  return (
    <div className="app-header">
      <img src={logo} alt="logo" className="logo" />
      <div className="header-links">
        {props.header[HEADER_LINKS.LOGIN] && (
          <span className="header-item">
            <Link to="/login">Login</Link>
          </span>
        )}
        {props.header[HEADER_LINKS.ADD_MOVIE] && (
          <span className="header-item">
            <Link to="/add-movie">Add Movie</Link>
          </span>
        )}
        {props.header[HEADER_LINKS.DASHBOARD] && (
          <span className="header-item">
            <Link to="/">Dashboard</Link>
          </span>
        )}
        {props.users.isLoggedIn && (
          <span className="header-item" onClick={props.logoutUser}>
            Logout
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
  }
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(AppHeader)
)
