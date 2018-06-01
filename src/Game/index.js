import React, { Component } from 'react';
import Tile from './Tile'
import _map from 'lodash/map'

import './style.css'

const initialBoard = [
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
  0,0,0,0,0,0,0,0,
]

const updateBoard = (board, player, index) => [
  ...board.slice(0, index),
  player,
  ...board.slice(index+1)
]

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPlayer: 1,
      board: initialBoard
    }
  }

  onTileClick(index) {
    this.setState({
      currentPlayer: this.state.currentPlayer == 1 ? 2 : 1,
      board: updateBoard(this.state.board, this.state.currentPlayer, index),
    })
  }

  render() {
    return (
      <div className="game">
        {
          _map(this.state.board, (player, index) => <Tile key={index}
            owner={player}
            onClick={this.onTileClick.bind(this, index)}
          />)
        }
      </div>
    )
  }
}

export default Game
