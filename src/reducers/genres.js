import * as actionTypes from '../constants/actionsTypes/genres'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.ALL_GENRES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        list: []
      })
    case actionTypes.ALL_GENRES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        list: action.payload
      })
    case actionTypes.ALL_GENRES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        list: []
      })
    case actionTypes.SET_SELECTED_GENRE:
      return Object.assign({}, state, {
        selectedGenre: action.payload
      })
    default:
      return state
  }
}
