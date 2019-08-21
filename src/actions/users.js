import * as actionTypes from '../constants/actionsTypes/users'

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
