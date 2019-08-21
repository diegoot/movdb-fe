import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import { HEADER_LINKS } from '../../../constants/general'

import './styles.css'

const AppHeader = props => {
  return (
    <div className="app-header">
      <img src={logo} alt="logo" className="logo" />
      {props.header[HEADER_LINKS.LOGIN] && (
        <span className="header-item">
          <Link to="/login">Login</Link>
        </span>
      )}
      {props.header[HEADER_LINKS.ADD_MOVIE] && (
        <span className="header-item">
          <Link to="/">Add Movie</Link>
        </span>
      )}
      {props.header[HEADER_LINKS.DASHBOARD] && (
        <span className="header-item">
          <Link to="/">Dashboard</Link>
        </span>
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  header: state.header
})

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHeader)
