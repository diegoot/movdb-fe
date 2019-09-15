import jwtDecode from 'jwt-decode'
import * as actionTypes from '../constants/actionsTypes/users'
import { HEADER_LINKS } from '../constants/general'

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
    localStorage.setItem('jwt', json.token)
    dispatch({
      type: actionTypes.LOGIN_USER_SUCCESS
    })
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_USER_FAILURE,
      payload: error
    })
  }
}

export const logoutUser = history => {
  localStorage.removeItem('jwt')

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
