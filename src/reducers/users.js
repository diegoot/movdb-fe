import * as actionTypes from '../constants/actionsTypes/users'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_USER_REQUEST:
      return Object.assign({}, state, {
        isLoginIn: true,
        isError: false,
        isLoggedIn: false
      })
    case actionTypes.LOGIN_USER_SUCCESS:
      return Object.assign({}, state, {
        isLoginIn: false,
        isError: false,
        isLoggedIn: true
      })
    case actionTypes.LOGIN_USER_FAILURE:
      return Object.assign({}, state, {
        isLoginIn: false,
        isError: true,
        isLoggedIn: false
      })
    case actionTypes.LOGOUT_USER:
      return Object.assign({}, state, { isLoggedIn: false })
    case actionTypes.CHECK_LOGGED_IN_USER:
      return Object.assign({}, state, { isLoggedIn: action.payload })
    default:
      return state
  }
}
