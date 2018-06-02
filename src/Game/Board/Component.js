import React from 'react'
import _map from 'lodash/map'

import Tile from './Tile'

import './style.css'

const Board = ({
  board,
  onTileClick,
}) => (
  <div className='board'>
    {
      _map(
        board,
        (player, tileIndex) => <Tile key={tileIndex}
          owner={player}
          onClick={() => onTileClick(tileIndex)}
        />
      )
    }
  </div>
)

export default Board
