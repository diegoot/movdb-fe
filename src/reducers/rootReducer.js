import { combineReducers } from 'redux'
import movies from './movies'
import genres from './genres'
import headerLinks from './headerLinks'
import users from './users'

export default combineReducers({
  movies,
  genres,
  headerLinks,
  users
})
