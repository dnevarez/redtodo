// Actions describe the fact that something happened, but don't specify how the
// application's state changes in response. This is the job of reducers.

import { combineReducers } from 'redux'
import { VisibilityFilters, addTodo, toggleTodo } from './actions';

const { SHOW_ALL } = VisibilityFilters;

const initialState = {
  visibilityFilter: VisibilityFilters.SHOW_ALL,
  todo: []
}



// function todoApp(state, action){
//   if (typeof state === undefined){
//     return initialState;
//   }
//
//   return state
// }

// or more compact

// function todoApp(state = [], action) {
//   return state;
// }

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos
})

export default todoApp
