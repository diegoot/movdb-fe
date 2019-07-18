import * as actionTypes from '../constants/actionsTypes/movies'
import { N_MOST_RECENT_MOVIES } from '../constants/api'

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
