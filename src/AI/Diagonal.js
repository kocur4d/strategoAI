import _map from 'lodash/map'
import _range from 'lodash/range'
import _filter from 'lodash/filter'
import _reduce from 'lodash/reduce'

export default (matrix, diagCords) => {
  return _reduce(diagCords, (acc, diagonal) => {
    const values = _map(diagonal, coords => matrix[coords[0]][coords[1]])
    return [...acc, values]
  }, [])
}

export const getCoords = rank => {
  const k1 = _range(2 - rank, (2 - rank) + count_diagonals(rank) / 2)
  const k2 = _range(1, count_diagonals(rank) / 2 + 1)
  return [
    ..._map(k1, diagonalCoords(rank)),
    ..._map(k2, diagonalCoords(rank, {direction: -1})),
  ]
}

const count_diagonals = (rank) => {
  return 2*(2*rank - 3)
}

const diagonalCoords = (rank, {direction = 1} = {}) => k => {
  const rowIndexes = _range(rank)
  const coords = _map(rowIndexes, rowIndex => {
    const columnIndex = direction * rowIndex + k
    return columnIndex < 0 || columnIndex >= rank
      ? null
      : [rowIndex, columnIndex]
  })
  return _filter(coords)
}
