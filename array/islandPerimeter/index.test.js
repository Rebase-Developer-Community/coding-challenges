const islandPerimeter = require(".")

describe('Testing #463 Island Perimeter ', () => {
  test('The First Test with Input: grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]], output = 16', () => {
    const grid = [[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]], output = 16
    const res = islandPerimeter(grid)
    expect(res).not.toBe(5)
    expect(res).toEqual(output)
  });

  test('The Second Test with input: grid = [[1]],  output = 4', () => {
    const grid = [[1]], output = 4
    const res = islandPerimeter(grid)
    expect(res).not.toBe(1)
    expect(res).toEqual(output)
  });

  test('The Third Test with Input: grid = [[1,0]],  output = 4', () => {
    const grid = [[1, 0]], output = 4
    const res = islandPerimeter(grid)
    expect(res).not.toBe(2)
    expect(res).toEqual(output)
  });

})