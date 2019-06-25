import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import NotFound from './pages/NotFound/NotFound'
import 'antd/dist/antd.css'

const { Header, Footer } = Layout

const App = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/login" render={Login} />
        <Route render={NotFound} />
      </Switch>
      <Footer>Footer</Footer>
    </Layout>
  )
}

export default App
