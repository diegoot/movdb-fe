import * as actionTypes from '../constants/actionsTypes/modals'

export const showModal = (title, content) => ({
  type: actionTypes.SHOW_MODAL,
  payload: { title, content }
})

export const resetState = () => ({
  type: actionTypes.RESET_MODAL_STATE
})
