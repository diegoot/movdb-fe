import React from 'react'
import { Icon } from 'antd'

import './styles.css'

const AppFooter = () => {
  return (
    <div className="app-footer">
      <ul>
        <li>Who we are?</li>
        <li>Join us</li>
      </ul>
      <ul>
        <li>FAQ</li>
        <li>Press</li>
      </ul>
      <ul>
        <li>Legal terms</li>
        <li>Contact us</li>
      </ul>
      <ul className="social">
        <li>
          <Icon type="twitter" className="footer-icon" />
        </li>
        <li>
          <Icon type="linkedin" theme="filled" className="footer-icon" />
        </li>
        <li>
          <Icon type="facebook" theme="filled" className="footer-icon" />
        </li>
        <li>
          <Icon type="instagram" theme="filled" className="footer-icon" />
        </li>
      </ul>
    </div>
  )
}

export default AppFooter
