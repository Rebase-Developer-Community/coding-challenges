/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  let count = 0
  const lookLeft = (i, j) => {
    if (j === 0) return true
    return !grid[i][j - 1]
  }

  const lookUp = (i, j) => {
    if (i === 0) return true
    return !grid[i - 1][j]
  }

  const lookRight = (i, j) => {
    if (j === grid[i].length - 1) return true
    return !grid[i][j + 1]
  }

  const lookBottom = (i, j) => {
    if (i === grid.length - 1) return true
    return !grid[i + 1][j]
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j]) {
        //look left
        lookLeft(i, j) && count++
        //look up
        lookUp(i, j) && count++
        //look right
        lookRight(i, j) && count++
        //look bottom
        lookBottom(i, j) && count++
      }

    }
  }
  return count
};

module.exports = islandPerimeter