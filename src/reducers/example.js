import * as actionTypes from '../constants/actionsTypes/example'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SYNC_ACTION:
      return Object.assign({}, state, { syncMessage: action.payload.message })
    case actionTypes.ASYNC_ACTION_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        error: false
      })
    case actionTypes.ASYNC_ACTION_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        asyncMessage: action.payload.name
      })
    case actionTypes.ASYNC_ACTION_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: true,
        errorMessage: action.payload.message
      })
    default:
      return state
  }
}
