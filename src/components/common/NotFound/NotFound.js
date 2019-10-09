import React from 'react'
import { Layout, Icon } from 'antd'
import { Link } from 'react-router-dom'

import styles from './NotFound.module.scss'

const { Content } = Layout

const NotFound = () => {
  return (
    <Content className={styles['fof-container']}>
      <div className={styles['fof']}>
        4<Icon type="frown" theme="twoTone" />4
      </div>
      <div className={styles['message']}>Oops ! Nothing found here</div>
      <div>
        Go back to <Link to="/">Dashboard</Link>
      </div>
    </Content>
  )
}

export default NotFound
