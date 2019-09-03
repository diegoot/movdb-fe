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
    const {
      getMostNRecentMovies,
      getAllGenres,
      flagActiveLink,
      users
    } = this.props

    if (users.isLoggedIn) {
      flagActiveLink(HEADER_LINKS.ADD_MOVIE)
    } else {
      flagActiveLink(HEADER_LINKS.LOGIN)
    }
    getMostNRecentMovies()
    getAllGenres()
  }

  componentWillUnmount() {
    const { flagHiddenLink, users } = this.props

    if (users.isLoggedIn) {
      flagHiddenLink(HEADER_LINKS.ADD_MOVIE)
    } else {
      flagHiddenLink(HEADER_LINKS.LOGIN)
    }
  }

  render() {
    const { movies, genres, updateDashboard } = this.props

    return (
      <Layout>
        <Sider className="sidebar" breakpoint="lg" collapsedWidth="0">
          <GenresList genres={genres.list} onSelectedGenre={updateDashboard} />
        </Sider>
        <Content className="content">
          <MoviesList movies={movies.list} />
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
  flagHiddenLink: link => dispatch(headerActions.flagHiddenLink(link))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
