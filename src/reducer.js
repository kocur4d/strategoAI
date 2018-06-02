import { combineReducers } from 'redux-immutable'

import boardReducer from './Game/Board/reducer.js'
import gameReducer from  './Game/reducer.js'

export default combineReducers({
  board: boardReducer,
  game: gameReducer,
})
