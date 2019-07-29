import * as actionTypes from '../constants/actionsTypes/headerLinks'

export const flagActiveLink = link => ({
  type: actionTypes.FLAG_ACTIVE_LINK,
  payload: link
})

export const flagHiddenLink = link => ({
  type: actionTypes.FLAG_HIDDEN_LINK,
  payload: link
})
