import * as actionTypes from '../constants/actionsTypes/movies'
import { N_MOST_RECENT_MOVIES } from '../constants/api'

export const getMostNRecentMovies = () => async disptach => {
  disptach({
    type: actionTypes.MOST_N_RECENT_MOVIES_REQUEST
  })
  try {
    const response = await fetch(
      `http://localhost:3014/movies/${N_MOST_RECENT_MOVIES}/mostrecent`
    )
    const json = await response.json()
    disptach({
      type: actionTypes.MOST_N_RECENT_MOVIES_SUCCESS,
      payload: json
    })
  } catch (error) {
    disptach({
      type: actionTypes.MOST_N_RECENT_MOVIES_FAILURE,
      payload: error
    })
  }
}
