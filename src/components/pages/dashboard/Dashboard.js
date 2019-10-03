import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import * as moviesActions from '../../../actions/movies'
import * as genresActions from '../../../actions/genres'
import * as headerActions from '../../../actions/header'
import MoviesList from './components/MoviesList/MoviesList'
import GenresList from './components/GenresList/GenresList'
import { HEADER_LINKS } from '../../../constants/general'

import './styles.css'

const { Sider, Content } = Layout

class Dashboard extends React.Component {
  componentDidMount() {
    const { getMostNRecentMovies, getAllGenres } = this.props

    getMostNRecentMovies()
    getAllGenres()
  }

  componentDidUpdate() {
    const { flagActiveLink, users } = this.props

    if (users.isLoggedIn) {
      flagActiveLink(HEADER_LINKS.ADD_MOVIE.KEY)
    } else {
      flagActiveLink(HEADER_LINKS.LOGIN.KEY)
    }
  }

  componentWillUnmount() {
    const { flagHiddenLink, users } = this.props

    if (users.isLoggedIn) {
      flagHiddenLink(HEADER_LINKS.ADD_MOVIE.KEY)
    } else {
      flagHiddenLink(HEADER_LINKS.LOGIN.KEY)
    }
  }

  deleteMovie = id => {
    const { deleteMovie } = this.props

    deleteMovie(id)
  }

  render() {
    const { movies, genres, updateDashboard, users } = this.props

    return (
      <Layout>
        <Sider className="sidebar" breakpoint="lg" collapsedWidth="0">
          <GenresList genres={genres.list} onSelectedGenre={updateDashboard} />
        </Sider>
        <Content className="content">
          <MoviesList
            movies={movies.list}
            showActions={users.isLoggedIn}
            deleteAction={this.deleteMovie}
          />
        </Content>
      </Layout>
    )
  }
}

const mapStateToProps = state => ({
  movies: state.movies,
  genres: state.genres,
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  getMostNRecentMovies: () => dispatch(moviesActions.getMostNRecentMovies()),
  getAllGenres: () => dispatch(genresActions.getAllGenres()),
  updateDashboard: genre => {
    dispatch(moviesActions.getMoviesForGenre(genre.name))
  },
  flagActiveLink: link => dispatch(headerActions.flagActiveLink(link)),
  flagHiddenLink: link => dispatch(headerActions.flagHiddenLink(link)),
  deleteMovie: id => dispatch(moviesActions.deleteMovie(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
