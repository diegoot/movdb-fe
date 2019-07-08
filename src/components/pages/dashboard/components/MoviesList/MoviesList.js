import React from 'react'
import PropTypes from 'prop-types'
import { Row, Col, Card } from 'antd'

import './styles.css'

const { Meta } = Card

const MoviesList = props => {
  const { movies } = props

  return (
    <Row gutter={16}>
      {movies.map(movie => (
        <Col lg={8} className="col" key={movie._id}>
          <Card hoverable cover={<img alt="movie-cover" src={movie.poster} />}>
            <Meta title={movie.title} description={movie.synopsis} />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

MoviesList.propTypes = {
  movies: PropTypes.array
}

MoviesList.defaultProps = {
  movies: []
}

export default MoviesList
