import React from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  notification
} from 'antd'

import './styles.css'

const { Option } = Select
const { TextArea } = Input

class AddMovieForm extends React.Component {
  componentDidUpdate(prevProps) {
    const { movies, form } = this.props

    if (prevProps.movies.isFetching && !movies.isFetching) {
      if (!movies.isError) {
        form.resetFields()
        this.openNotification('success', 'Movie saved')
      } else {
        this.openNotification('error', 'We could not save the movie')
      }
    }
  }

  openNotification = (type, message) => {
    notification[type]({ message })
  }

  handleSubmit = e => {
    const { form, submitMovie } = this.props

    e.preventDefault()
    form.validateFields((err, values) => {
      if (!err) {
        const { title, year, director, poster, genre, synopsis } = values
        submitMovie(title, year, director, poster, genre, synopsis)
      }
    })
  }

  render() {
    const {
      form: { getFieldDecorator },
      genres,
      movies
    } = this.props

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 3 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21 }
      }
    }
    const formSubmitLayout = {
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 21, offset: 3 }
      }
    }

    return (
      <div className="add-movie-form-wrapper">
        <Row type="flex" justify="center">
          <Col xs={{ span: 22 }} md={{ span: 18 }} lg={{ span: 14 }}>
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
              <Form.Item label="Title" colon={false}>
                {getFieldDecorator('title', {
                  rules: [{ required: true, message: 'Please enter a title' }]
                })(<Input placeholder="Title" />)}
              </Form.Item>
              <Form.Item label="Year" colon={false}>
                {getFieldDecorator('year', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter a year'
                    }
                  ]
                })(<InputNumber min={1800} placeholder="1800" />)}
              </Form.Item>
              <Form.Item label="Director" colon={false}>
                {getFieldDecorator('director', {
                  rules: [
                    { required: true, message: 'Please enter a director' }
                  ]
                })(<Input placeholder="Director" />)}
              </Form.Item>
              <Form.Item label="Poster" colon={false}>
                {getFieldDecorator('poster', {
                  rules: [
                    {
                      pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
                      message:
                        "Movie's poster must be a valid http or https URL"
                    },
                    {
                      required: true,
                      message: "Please enter the URL of the movie's poster"
                    }
                  ]
                })(<Input placeholder="Movie poster URL" />)}
              </Form.Item>
              <Form.Item label="Genre" colon={false}>
                {getFieldDecorator('genre', {
                  rules: [
                    {
                      required: true,
                      message: 'Please select at least one genre'
                    }
                  ]
                })(
                  <Select mode="multiple">
                    {genres &&
                      genres.list &&
                      genres.list.map(genre => {
                        return (
                          <Option value={genre.name} key={genre._id}>
                            {genre.name}
                          </Option>
                        )
                      })}
                  </Select>
                )}
              </Form.Item>
              <Form.Item label="Synopsis" colon={false}>
                {getFieldDecorator('synopsis', {
                  rules: [
                    {
                      required: true,
                      message: 'Please enter a synopsis for the movie'
                    }
                  ]
                })(<TextArea placeholder="Synopsis for movie" rows={6} />)}
              </Form.Item>
              <Form.Item {...formSubmitLayout}>
                <Row type="flex" justify="center">
                  <Col>
                    <Button
                      type="primary"
                      htmlType="submit"
                      disabled={movies.isFetching}
                    >
                      Add
                    </Button>
                  </Col>
                </Row>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    )
  }
}

AddMovieForm.propTypes = {
  genres: PropTypes.object,
  movies: PropTypes.object,
  submitMovie: PropTypes.func
}

export default Form.create({ name: 'AddMovieForm' })(AddMovieForm)
