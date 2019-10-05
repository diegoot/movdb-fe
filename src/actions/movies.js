import * as actionTypes from '../constants/actionsTypes/movies'
import { N_MOST_RECENT_MOVIES } from '../constants/api'
import { showNotification } from './notifications'

export const getMostNRecentMovies = () => async dispatch => {
  dispatch({
    type: actionTypes.MOST_N_RECENT_MOVIES_REQUEST
  })
  try {
    const response = await fetch(
      `http://localhost:3014/movies/${N_MOST_RECENT_MOVIES}/mostrecent`
    )
    const json = await response.json()
    dispatch({
      type: actionTypes.MOST_N_RECENT_MOVIES_SUCCESS,
      payload: json
    })
  } catch (error) {
    dispatch({
      type: actionTypes.MOST_N_RECENT_MOVIES_FAILURE,
      payload: error
    })
  }
}

export const getMoviesForGenre = genre => dispatch =>
  new Promise(async (resolve, reject) => {
    dispatch({
      type: actionTypes.MOVIES_FOR_GENRE_REQUEST
    })
    try {
      const response = await fetch(
        `http://localhost:3014/movies/forgenre/${genre}`
      )
      const json = await response.json()
      dispatch({
        type: actionTypes.MOVIES_FOR_GENRE_SUCCESS,
        payload: json
      })
      resolve()
    } catch (error) {
      dispatch({
        type: actionTypes.MOVIES_FOR_GENRE_FAILURE,
        payload: error
      })
      reject()
    }
  })

export const createMovie = (
  title,
  year,
  director,
  poster,
  genre,
  synopsis
) => async dispatch => {
  dispatch({
    type: actionTypes.CREATE_MOVIE_REQUEST
  })
  try {
    const jwt = localStorage.getItem('jwt')
    const response = await fetch('http://localhost:3014/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: jwt
      },
      body: JSON.stringify({ title, year, director, poster, genre, synopsis })
    })
    if (response.status !== 201) {
      throw new Error()
    }
    dispatch({
      type: actionTypes.CREATE_MOVIE_SUCCESS
    })
    dispatch(showNotification('success', 'Movie saved'))
  } catch {
    dispatch({
      type: actionTypes.CREATE_MOVIE_FAILURE
    })
    dispatch(showNotification('error', 'We could not save the movie'))
  }
}

export const deleteMovie = movieId => async dispatch => {
  dispatch({
    type: actionTypes.DELETE_MOVIE_REQUEST
  })
  try {
    const jwt = localStorage.getItem('jwt')
    const response = await fetch(`http://localhost:3014/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        Authorization: jwt
      }
    })
    if (response.status !== 200) {
      throw new Error()
    }
    dispatch({
      type: actionTypes.DELETE_MOVIE_SUCCESS,
      payload: movieId
    })
    dispatch(showNotification('success', 'Movie deleted'))
  } catch {
    dispatch({
      type: actionTypes.DELETE_MOVIE_FAILURE
    })
    dispatch(showNotification('error', 'We could delete the movie'))
  }
}
