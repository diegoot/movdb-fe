import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import AppHeader from './AppHeader/AppHeader'
import AppFooter from './AppFooter/AppFooter'

import 'antd/dist/antd.css'
import './styles.css'

const { Header, Footer } = Layout

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
      <Footer className="footer">
        <AppFooter />
      </Footer>
    </Layout>
  )
}

export default App
