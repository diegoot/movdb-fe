import React from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import AddMovie from './pages/AddMovie/AddMovie'
import NotFound from './pages/NotFound/NotFound'
import AppHeader from './common/AppHeader/AppHeader'
import PrivateRoute from './common/PrivateRoute/PrivateRoute'
import { checkLoggedInUser } from '../actions/users'

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
      <Layout className="layout">
        <Header className="header">
          <AppHeader />
        </Header>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/add-movie" component={AddMovie} />
          <Route render={NotFound} />
        </Switch>
      </Layout>
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
