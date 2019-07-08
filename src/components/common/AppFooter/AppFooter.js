import React from 'react'
import { Icon, Row, Col } from 'antd'

import './styles.css'

const AppFooter = () => {
  return (
    <Row className="app-footer">
      <Col lg={6}>
        <ul>
          <li>Who we are?</li>
          <li>Join us</li>
        </ul>
      </Col>
      <Col lg={6}>
        <ul>
          <li>FAQ</li>
          <li>Press</li>
        </ul>
      </Col>
      <Col lg={6}>
        <ul>
          <li>Legal terms</li>
          <li>Contact us</li>
        </ul>
      </Col>
      <Col lg={6}>
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
      </Col>
    </Row>
  )
}

export default AppFooter
