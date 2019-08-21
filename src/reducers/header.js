import * as actionTypes from '../constants/actionsTypes/header'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FLAG_ACTIVE_LINK:
      return Object.assign({}, state, { [action.payload]: true })
    case actionTypes.FLAG_HIDDEN_LINK:
      return Object.assign({}, state, { [action.payload]: false })
    default:
      return state
  }
}
