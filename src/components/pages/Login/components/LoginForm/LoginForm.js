import React from 'react'
import { Form, Icon, Input, Button, Alert } from 'antd'

import styles from './LoginForm.module.scss'

class LoginForm extends React.Component {
  handleSubmit = e => {
    const { form, loginUser } = this.props
    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        loginUser(values.email, values.password)
      }
    })
  }

  componentDidMount() {
    const { form } = this.props

    form.validateFields()
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
    const emailError = isFieldTouched('email') && getFieldError('email')
    const passwordError =
      isFieldTouched('password') && getFieldError('password')
    const { isError } = this.props.users

    return (
      <div className={styles['form-wrapper']}>
        {isError && (
          <Alert
            type="error"
            message="Invalid email or password"
            banner
            className={styles['invalid-login']}
          />
        )}

        <Form onSubmit={this.handleSubmit} className={styles['login-form']}>
          <Form.Item
            validateStatus={emailError ? 'error' : ''}
            help={emailError || ''}
            hasFeedback
          >
            {getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email!' }]
            })(
              <Input
                prefix={
                  <Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />
                }
                placeholder="Email"
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
              className={styles['login-form-button']}
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

export default Form.create({ name: 'login' })(LoginForm)
