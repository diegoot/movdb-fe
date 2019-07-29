import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'

import './styles.css'

const GenresList = props => {
  const { genres, onSelectedGenre } = props

  const onClick = ({ item, key }) => {
    const selectedGenre = genres.find(genre => genre._id === key)
    onSelectedGenre(selectedGenre)
  }

  return (
    <Menu theme="dark" onClick={onClick} className="menu">
      {genres.map(genre => (
        <Menu.Item key={genre._id}>{genre.name}</Menu.Item>
      ))}
    </Menu>
  )
}

GenresList.propTypes = {
  genres: PropTypes.array,
  onSelectedGenre: PropTypes.func
}

GenresList.defaultProps = {
  genres: [],
  onSelectedGenre: () => null
}

export default GenresList
