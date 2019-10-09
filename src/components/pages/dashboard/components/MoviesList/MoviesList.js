import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card, Icon, Popconfirm, Empty } from 'antd'

import './styles.css'

const { Meta } = Card

const MoviesList = props => {
  const { movies, showActions, deleteAction } = props

  return (
    <Row gutter={16} type="flex">
      {movies.list && movies.list.length === 0 && !movies.isFetching && (
        <Empty className="empty" />
      )}
      {movies.list &&
        movies.list.map(movie => {
          const actions = []

          if (showActions) {
            actions.push(
              <Popconfirm
                title="Are you sure to delete this movie?"
                onConfirm={() => deleteAction(movie._id)}
                onCancel={() => null}
                okText="Yes"
                cancelText="No"
              >
                <Icon type="delete" key="delete" />
              </Popconfirm>
            )
          }

          return (
            <Col lg={8} className="col" key={movie._id}>
              <Card
                hoverable
                cover={<img alt="movie-cover" src={movie.poster} />}
                className="card"
                bodyStyle={{ flex: 1 }}
                actions={actions}
              >
                <Meta title={movie.title} description={movie.synopsis} />
              </Card>
            </Col>
          )
        })}
    </Row>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.object,
  showActions: PropTypes.bool,
  deleteAction: PropTypes.func
}

MoviesList.defaultProps = {
  movies: {},
  showActions: false,
  deleteAction: () => null
}

export default MoviesList
