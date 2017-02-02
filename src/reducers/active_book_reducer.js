// state argument is not the application state, only the state this reducer is reponsible for
// see the key/value mapping of which reducer is responsible for which piece of state in combineReducers...
export default function(state = null, action) { // default state to null to avoid undefined state error (ES6 syntax)
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }
  return state; // When the app boots the state is undefined --> error --> a reducer must not return undefined...
}