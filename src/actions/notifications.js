import * as actionTypes from '../constants/actionsTypes/notifications'

export const showNotification = (type, message) => ({
  type: actionTypes.SHOW_NOTIFICATION,
  payload: { type, message }
})

export const resetState = () => ({
  type: actionTypes.RESET_NOTIFICATIONS_STATE
})
