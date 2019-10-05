import * as actionTypes from '../constants/actionsTypes/notifications'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SHOW_NOTIFICATION:
      return Object.assign({}, state, {
        isVisible: true,
        message: action.payload.message,
        type: action.payload.type
      })
    case actionTypes.RESET_NOTIFICATIONS_STATE:
      return Object.assign({}, state, {
        isVisible: false,
        message: '',
        type: undefined
      })
    default:
      return state
  }
}
