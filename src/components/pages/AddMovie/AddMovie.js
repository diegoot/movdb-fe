import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddMovieForm from './components/AddMovieForm/AddMovieForm'

import * as headerActions from '../../../actions/header'
import { getAllGenres } from '../../../actions/genres'
import { createMovie } from '../../../actions/movies'
import { HEADER_LINKS } from '../../../constants/general'

class AddMovie extends Component {
  componentDidMount() {
    const { activeDashboardLink, genres, getAllGenres } = this.props

    activeDashboardLink()
    // The following could be true if we refresh the add-movie route
    if (!genres.list || genres.list.length === 0) {
      getAllGenres()
    }
  }

  componentWillUnmount() {
    const { hideDashboardLink } = this.props

    hideDashboardLink()
  }

  render() {
    const { genres, createMovie, movies } = this.props

    return (
      <AddMovieForm genres={genres} submitMovie={createMovie} movies={movies} />
    )
  }
}

const mapStateToProps = state => ({
  genres: state.genres,
  movies: state.movies
})

const mapDispatchToProps = dispatch => ({
  activeDashboardLink: () =>
    dispatch(headerActions.flagActiveLink(HEADER_LINKS.DASHBOARD.KEY)),
  hideDashboardLink: () =>
    dispatch(headerActions.flagHiddenLink(HEADER_LINKS.DASHBOARD.KEY)),
  getAllGenres: () => dispatch(getAllGenres()),
  createMovie: (title, year, director, poster, genre, synopsis) =>
    dispatch(createMovie(title, year, director, poster, genre, synopsis))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddMovie)
