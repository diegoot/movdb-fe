import * as actionTypes from '../constants/actionsTypes/example'

export const syncAction = () => ({
  type: actionTypes.SYNC_ACTION,
  payload: { message: 'Hello from async action !!' }
})

export const asyncAction = () => async disptach => {
  disptach({
    type: actionTypes.ASYNC_ACTION_REQUEST
  })
  try {
    const response = await fetch('https://restcountries.eu/rest/v2/name/eesti')
    const json = await response.json()
    disptach({
      type: actionTypes.ASYNC_ACTION_SUCCESS,
      payload: json[0]
    })
  } catch (error) {
    disptach({
      type: actionTypes.ASYNC_ACTION_ERROR,
      payload: error
    })
  }
}
