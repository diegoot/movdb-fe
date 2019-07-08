import React from 'react'
import { connect } from 'react-redux'
import * as moviesActions from '../../../actions/movies'
import * as genresActions from '../../../actions/genres'
import MoviesList from './components/MoviesList/MoviesList'
import { Layout } from 'antd'

import './styles.css'

const { Sider, Content } = Layout

class Dashboard extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props

    dispatch(moviesActions.getMostNRecentMovies())
    dispatch(genresActions.getAllGenres())
  }

  render() {
    const { movies, genres } = this.props

    return (
      <Layout>
        <Sider className="sidebar" breakpoint="lg" collapsedWidth="0">
          {genres.list &&
            genres.list.map(genre => {
              return (
                <div key={genre._id}>
                  <div>{genre.name}</div>
                </div>
              )
            })}
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

export default connect(mapStateToProps)(Dashboard)
