// Where actions represent “what happened” and where reducers update the state
// according to those actions.
//
// The Store is the object that brings them together. The store has the following
// responsibilities:
//
// Holds application state;
// Allows access to state via getState();
// Allows state to be updated via dispatch(action);
// Registers listeners via subscribe(listener);
// Handles unregistering of listeners via the function returned by subscribe(listener).

// It's important to note that you'll only have a single store in a Redux application.
// When you want to split your data handling logic, you'll use reducer composition
// instead of many stores.

// import { createStore } from 'redux';
// import todoApp from './reducers'
// import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'

// let store = createStore(todoApp, window.STATE_FROM_SERVER)

// // Log the initial state
// console.log('initial state: ', store.getState());
//
// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
//
// let unsubscribe = store.subscribe(() =>
//   console.log('unsub: ', store.getState())
// )
//
// // Dispatch some actions.
// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))
//
// // Stop listening to state updates
// unsubscribe()
