import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visiblityFilter.js'


const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp
