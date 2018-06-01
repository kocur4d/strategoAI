import _chunk from 'lodash/chunk'

import getDiagonals, {
  getCoords,
} from './Diagonal.js'

describe('getCords', () => {
  it('returns array of diagonals for rank 3', () => {
    const rank = 3
    const array = [1,2,3,4,5,6,7,8,9]
    const matrix = _chunk(array, rank)
    const coords = getCoords(rank)
    const expected = [[4,8],[1,5,9],[2,6],[2,4],[3,5,7],[6,8]]
    const result = getDiagonals(matrix, coords)

    expect(result).toEqual(expected)
  })

  it('returns array of diagonals for rank 4', () => {
    const rank = 4
    const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
    const matrix = _chunk(array, rank)
    const coords = getCoords(rank)
    const expected = [[9, 14], [5, 10, 15], [1, 6, 11, 16], [2, 7, 12], [3, 8], [2, 5], [3, 6, 9], [4, 7, 10, 13], [8, 11, 14], [12, 15]]
    const result = getDiagonals(matrix, coords)

    expect(result).toEqual(expected)
  })
})
