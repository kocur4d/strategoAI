import React from 'react';

import './style.css'

const className = {
  1: 'player1',
  2: 'player2',
}

const Tile = ({
  owner,
  onClick,
}) => (
  <button className={['tile', className[owner]].join(' ')}
    onClick={onClick}
    disabled={owner !== 0}
  >
  </button>
)

export default Tile
