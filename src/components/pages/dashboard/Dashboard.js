import React from 'react'
import { connect } from 'react-redux'
import * as exampleActions from '../../../actions/example'
import { Layout } from 'antd'

import './Dashboard.css'

const { Sider, Content } = Layout

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.asyncAction()
    this.props.syncAction()
  }

  render() {
    return (
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  syncMessage: state.example.syncMessage,
  asyncMessage: state.example.asyncMessage,
  isFetching: state.example.isFetching
})

export default connect(
  mapStateToProps,
  exampleActions
)(Dashboard)
