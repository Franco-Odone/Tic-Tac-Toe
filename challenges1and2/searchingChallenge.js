// Depth First Search function
function dfs(matrix, row, col) {
  if (
    row < 0 ||
    row >= matrix.length ||
    col < 0 ||
    col >= matrix[0].length ||
    matrix[row][col] === "1"
  ) {
    return;
  }

  matrix[row][col] = "1";

  // recursividad
  dfs(matrix, row - 1, col);
  dfs(matrix, row + 1, col);
  dfs(matrix, row, col - 1);
  dfs(matrix, row, col + 1);
}

function SearchingChallenge(strArr) {
  const matrix = strArr.map((row) => row.split(""));
  let holes = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[0].length; col++) {
      if (matrix[row][col] === "0") {
        dfs(matrix, row, col);
        holes++;
      }
    }
  }

  return holes;
}

const input = ["10111", "10101", "11101", "11111"];
console.log(SearchingChallenge(input)); // Output: 2
