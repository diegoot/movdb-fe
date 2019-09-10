import * as actionTypes from '../constants/actionsTypes/header'
import { HEADER_LINKS } from '../constants/general'

const initialState = {}

Object.values(HEADER_LINKS).forEach(link => {
  initialState[link] = false
})

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FLAG_ACTIVE_LINK:
      return Object.assign({}, state, { [action.payload]: true })
    case actionTypes.FLAG_HIDDEN_LINK:
      return Object.assign({}, state, { [action.payload]: false })
    case actionTypes.RESET_LINKS:
      return initialState
    default:
      return state
  }
}
