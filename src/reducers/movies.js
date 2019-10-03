import * as actionTypes from '../constants/actionsTypes/movies'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.MOST_N_RECENT_MOVIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        list: []
      })
    case actionTypes.MOST_N_RECENT_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        list: action.payload
      })
    case actionTypes.MOST_N_RECENT_MOVIES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        list: []
      })
    case actionTypes.MOVIES_FOR_GENRE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false,
        list: []
      })
    case actionTypes.MOVIES_FOR_GENRE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        list: action.payload
      })
    case actionTypes.MOVIES_FOR_GENRE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true,
        list: []
      })
    case actionTypes.CREATE_MOVIE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false
      })
    case actionTypes.CREATE_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false
      })
    case actionTypes.CREATE_MOVIE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true
      })
    case actionTypes.DELETE_MOVIE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isError: false
      })
    case actionTypes.DELETE_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: false,
        list: state.list.filter(movie => movie._id !== action.payload)
      })
    case actionTypes.DELETE_MOVIE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isError: true
      })
    default:
      return state
  }
}
