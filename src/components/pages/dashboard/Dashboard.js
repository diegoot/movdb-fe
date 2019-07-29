import React from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
import * as moviesActions from '../../../actions/movies'
import * as genresActions from '../../../actions/genres'
import * as headerLinkActions from '../../../actions/headerLinks'
import MoviesList from './components/MoviesList/MoviesList'
import GenresList from './components/GenresList/GenresList'
import { HEADER_LINKS } from '../../../constants/general'

import './styles.css'

const { Sider, Content } = Layout

class Dashboard extends React.Component {
  componentDidMount() {
    const { getMostNRecentMovies, getAllGenres, flagActiveLink } = this.props

    flagActiveLink()
    getMostNRecentMovies()
    getAllGenres()
  }

  componentWillUnmount() {
    const { flagHiddenLink } = this.props

    flagHiddenLink()
  }

  render() {
    const { movies, genres, updateDashboard, selectedGenre } = this.props

    return (
      <Layout>
        <Sider className="sidebar" breakpoint="lg" collapsedWidth="0">
          <GenresList
            genres={genres.list}
            onSelectedGenre={updateDashboard}
            selectedGenre={selectedGenre}
          />
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
  genres: state.genres
})

const mapDispatchToProps = dispatch => ({
  getMostNRecentMovies: () => dispatch(moviesActions.getMostNRecentMovies()),
  getAllGenres: () => dispatch(genresActions.getAllGenres()),
  updateDashboard: genre => {
    dispatch(moviesActions.getMoviesForGenre(genre.name)).then(() => {
      dispatch(genresActions.setSelectedGenre(genre.id))
    })
  },
  flagActiveLink: () =>
    dispatch(headerLinkActions.flagActiveLink(HEADER_LINKS.LOGIN)),
  flagHiddenLink: () =>
    dispatch(headerLinkActions.flagHiddenLink(HEADER_LINKS.LOGIN))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)
