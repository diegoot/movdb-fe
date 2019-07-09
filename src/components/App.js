import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
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
        <Route path="/login" render={Login} />
        <Route render={NotFound} />
      </Switch>
    </Layout>
  )
}

export default App
