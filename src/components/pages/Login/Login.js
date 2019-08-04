import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Icon, Input, Button, Alert } from 'antd'
import * as headerActions from '../../../actions/headerLinks'
import { HEADER_LINKS } from '../../../constants/general'

import './styles.css'

class Login extends Component {
  handleSubmit = e => {
    const { form } = this.props
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  componentDidMount() {
    const { flagActiveLink, form } = this.props

    flagActiveLink()
    form.validateFields()
  }

  componentWillUnmount() {
    const { flagHiddenLink } = this.props

    flagHiddenLink()
  }

  hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field])
  }

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      isFieldTouched,
      getFieldError
    } = this.props.form
    const usernameError =
      isFieldTouched('username') && getFieldError('username')
    const passwordError =
      isFieldTouched('password') && getFieldError('password')

    return (
      <div className="form-wrapper">
        <Alert
          type="error"
          message="Invalid email or password"
          banner
          className="invalid-login"
        />

        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item
            validateStatus={usernameError ? 'error' : ''}
            help={usernameError || ''}
            hasFeedback
          >
            {getFieldDecorator('username', {
              rules: [
                { required: true, message: 'Please input your username!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Username"
              />
            )}
          </Form.Item>
          <Form.Item
            validateStatus={passwordError ? 'error' : ''}
            help={passwordError || ''}
            hasFeedback
          >
            {getFieldDecorator('password', {
              rules: [
                { required: true, message: 'Please input your Password!' }
              ]
            })(
              <Input
                prefix={
                  <Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              disabled={this.hasErrors(getFieldsError())}
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  headerLinks: state.headerLinks
})

const mapDispatchToProps = dispatch => ({
  flagActiveLink: () =>
    dispatch(headerActions.flagActiveLink(HEADER_LINKS.DASHBOARD)),
  flagHiddenLink: () =>
    dispatch(headerActions.flagHiddenLink(HEADER_LINKS.DASHBOARD))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form.create({ name: 'login' })(Login))
