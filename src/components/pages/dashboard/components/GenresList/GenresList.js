import React from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'

import './styles.css'

const GenresList = props => {
  const { genres, onSelectedGenre, selectedGenre } = props

  const onClick = ({ item, key }) => {
    const selectedGenre = genres.find(genre => genre._id === key)
    onSelectedGenre(selectedGenre)
  }

  return (
    <Menu theme="dark" onClick={onClick} defaultSelectedKeys={[selectedGenre]}>
      {genres.map(genre => (
        <Menu.Item key={genre._id}>{genre.name}</Menu.Item>
      ))}
    </Menu>
  )
}

GenresList.propTypes = {
  genres: PropTypes.array,
  onSelectedGenre: PropTypes.func,
  selectedGenre: PropTypes.string
}

GenresList.defaultProps = {
  genres: [],
  onSelectedGenre: () => null,
  selectedGenre: ''
}

export default GenresList
