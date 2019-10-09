import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import AddMovie from './pages/AddMovie/AddMovie'
import NotFound from './common/NotFound/NotFound'
import AppHeader from './common/AppHeader/AppHeader'
import PrivateRoute from './common/PrivateRoute/PrivateRoute'
import { checkLoggedInUser } from '../actions/users'
import { HEADER_LINKS } from '../constants/general'
import Notification from './common/Notification/Notification'
import Modal from './common/Modal/Modal'

import 'antd/dist/antd.css'
import './styles.css'

const { Header } = Layout

class App extends React.Component {
  componentDidMount() {
    const { checkLoggedInUser } = this.props

    checkLoggedInUser()
  }

  render() {
    return (
      <React.Fragment>
        <Modal />
        <Notification />
        <Layout className="layout">
          <Header className="header">
            <AppHeader />
          </Header>
          <Switch>
            <Route
              exact
              path={HEADER_LINKS.DASHBOARD.PATH}
              component={Dashboard}
            />
            <Route path={HEADER_LINKS.LOGIN.PATH} component={Login} />
            <PrivateRoute
              path={HEADER_LINKS.ADD_MOVIE.PATH}
              component={AddMovie}
            />
            <Route render={NotFound} />
          </Switch>
        </Layout>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  checkLoggedInUser: () => dispatch(checkLoggedInUser())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
