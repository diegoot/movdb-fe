import { combineReducers } from 'redux'
import movies from './movies'
import genres from './genres'
import headerLinks from './headerLinks'

export default combineReducers({
  movies,
  genres,
  headerLinks
})
