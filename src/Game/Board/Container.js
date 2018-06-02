import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import Board from './Component.js'

import { onTileClick } from './reducer.js'

const mapStateToProps = createStructuredSelector({
  board: state => state.getIn(['board']).toJS(),
  currentPlayer: state => state.getIn(['game', 'currentPlayer'])
})

const mapDispatchToProps = dispatch => ({
  onTileClick: (player) => (tileIndex) => dispatch(onTileClick({player, tileIndex}))
})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  board: stateProps.board,
  onTileClick: dispatchProps.onTileClick(stateProps.currentPlayer),
  ...ownProps,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(Board)
