import {combineReducers} from 'redux'
import users from './users'
import auth from './auth'
import games from './games'
import results from './results'
import form from './form'
import teams from './teams'
export default combineReducers({
  users,
  games,
  form,
  results,
  auth,
  teams
});
