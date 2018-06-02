import Immutable from 'immutable'

export const TILE_CLICKED = 'TILE_CLICKED'

export const onTileClick = (params) => ({
  type: TILE_CLICKED,
  ...params
})

const initialState = Immutable.fromJS([
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
])

export default (state = initialState, action) => {
  switch(action.type) {
    case TILE_CLICKED:
      return state.setIn([action.tileIndex], action.player)
    default:
      return state
  }
}
