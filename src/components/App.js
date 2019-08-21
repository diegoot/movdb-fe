import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import AddMovie from './pages/AddMovie/AddMovie'
import NotFound from './pages/NotFound/NotFound'
import AppHeader from './common/AppHeader/AppHeader'

import 'antd/dist/antd.css'
import './styles.css'

const { Header } = Layout

const App = () => {
  return (
    <Layout className="layout">
      <Header className="header">
        <AppHeader />
      </Header>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/add-movie" component={AddMovie} />
        <Route render={NotFound} />
      </Switch>
    </Layout>
  )
}

export default App
