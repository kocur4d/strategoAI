import { TILE_CLICKED } from '../Board/reducer.js'

const PLAYER_ONE = 1
const PLAYER_TWO = 2

const initialState = PLAYER_ONE

export default (state = initialState, action) => {
  switch(action.type) {
    case TILE_CLICKED:
      return state === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE 
    default:
      return state
  }
}
