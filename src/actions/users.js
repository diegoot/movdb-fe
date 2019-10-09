import jwtDecode from 'jwt-decode'
import * as actionTypes from '../constants/actionsTypes/users'
import { HEADER_LINKS } from '../constants/general'
import { showModal } from './modals'

let timeoutId

export const loginUser = (email, password) => async dispatch => {
  dispatch({
    type: actionTypes.LOGIN_USER_REQUEST
  })
  try {
    const response = await fetch('http://localhost:3014/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    const json = await response.json()
    const token = json.token
    const decoded = jwtDecode(token)
    localStorage.setItem('jwt', token)
    dispatch({
      type: actionTypes.LOGIN_USER_SUCCESS
    })
    const deadTime = new Date(decoded.exp * 1000) - Date.now()
    timeoutId = setTimeout(() => {
      dispatch(showModal('Session expired', 'Please log in back'))
    }, deadTime)
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_USER_FAILURE,
      payload: error
    })
  }
}

export const logoutUser = history => {
  localStorage.removeItem('jwt')

  if (timeoutId) {
    clearTimeout(timeoutId)
    timeoutId = undefined
  }

  history.push(HEADER_LINKS.DASHBOARD.PATH)

  return {
    type: actionTypes.LOGOUT_USER
  }
}

export const checkLoggedInUser = () => {
  const jwt = localStorage.getItem('jwt')
  let isLoggedInUser = false

  if (jwt) {
    const decoded = jwtDecode(jwt)
    const now = Date.now() / 1000

    if (decoded.exp <= now) {
      localStorage.removeItem('jwt')
    } else {
      isLoggedInUser = true
    }
  }

  return {
    type: actionTypes.CHECK_LOGGED_IN_USER,
    payload: isLoggedInUser
  }
}
