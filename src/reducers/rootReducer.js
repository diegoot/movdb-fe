import { combineReducers } from 'redux'
import movies from './movies'
import genres from './genres'
import header from './header'
import users from './users'
import notifications from './notifications'
import modals from './modals'

export default combineReducers({
  movies,
  genres,
  header,
  users,
  notifications,
  modals
})
