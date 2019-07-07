import * as actionTypes from '../constants/actionsTypes/genres'

export const getAllGenres = () => async disptach => {
  disptach({
    type: actionTypes.ALL_GENRES_REQUEST
  })
  try {
    const response = await fetch('http://localhost:3014/genres')
    const json = await response.json()
    disptach({
      type: actionTypes.ALL_GENRES_SUCCESS,
      payload: json
    })
  } catch (error) {
    disptach({
      type: actionTypes.ALL_GENRES_FAILURE,
      payload: error
    })
  }
}
