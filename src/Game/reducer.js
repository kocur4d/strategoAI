import { combineReducers } from 'redux-immutable'

import currentPlayerReducer from  './CurrentPlayer/reducer.js'

export default combineReducers({
  currentPlayer: currentPlayerReducer,
})
