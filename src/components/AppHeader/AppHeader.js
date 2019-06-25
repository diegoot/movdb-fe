import React from 'react'
import logo from '../../assets/logo.png'

import './styles.css'

const AppHeader = () => {
  return (
    <div className="app-header">
      <img src={logo} alt="logo" className="logo" />
      <span className="header-item">Login</span>
    </div>
  )
}

export default AppHeader
