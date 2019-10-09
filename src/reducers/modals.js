import * as actionTypes from '../constants/actionsTypes/modals'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.SHOW_MODAL:
      return Object.assign({}, state, {
        isVisible: true,
        title: action.payload.title,
        content: action.payload.content
      })
    case actionTypes.RESET_MODAL_STATE:
      return Object.assign({}, state, {
        isVisible: false,
        title: '',
        content: ''
      })
    default:
      return state
  }
}
