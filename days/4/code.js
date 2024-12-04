const fs = require("fs");
let path_to_read = process.env.EXAMPLE_INPUT
  ? __dirname + "/ex.txt"
  : __dirname + "/input.txt";
const utils = require("../../utils");
const input = fs.readFileSync(path_to_read, "utf8");

function part1() {
  // super epik code here
  let lines = input.split("\n");
  const grid = lines
    .map((line) => line.split(""))
    .map((l) => l.filter((e) => e !== "\r"));
  const numRows = grid.length;
  const numCols = grid[0].length;
  let n = 0;
  const directions = [
    [-1, 0], // Up
    [1, 0], // Down
    [0, -1], // Left
    [0, 1], // Right
    [-1, -1], // T-left to b-right
    [-1, 1], // T-right to b-left
    [1, -1], // B-left to t-right
    [1, 1], // B-right to t-left
  ];
  console.log(grid);
  for (let ri = 0; ri < numRows; ri++) {
    for (let c = 0; c < numCols; c++) {
      for (let [dRow, dCol] of directions) {
        let is_v = true;
        for (let i = 0; i < 4; i++) {
          const nRow = ri + dRow * i;
          const nCol = c + dCol * i;
          // oob check
          let oob = false;
          if (nRow < 0 || nRow >= numRows || nCol < 0 || nCol >= numCols) {
            oob = true;
            is_v = false;
          }
          if (!oob) {
            if (grid[nRow][nCol] !== "XMAS"[i]) is_v = false;
          }
        }
        if (is_v) {
          n++;
        }
      }
    }
  }
  return n;
}

function part2() {
  // pain and suffering here
  const ms = ["M", "S"];
  let total = 0;
  let horizontalLines = input.split("\n");
  for (let i = 0; i < horizontalLines.length; i++) {
    // Break if we are near the end of the lines and can't check a full pattern
    if (i >= horizontalLines.length - 2) {
      break;
    }

    let index = -1;
    while (true) {
      // Find the next "M" or "S" in the line
      const indexM = horizontalLines[i].indexOf("M", index + 1);
      const indexS = horizontalLines[i].indexOf("S", index + 1);

      if (indexM === -1 && indexS === -1) {
        break;
      }

      if (indexM === -1) {
        index = indexS;
      } else if (indexS === -1) {
        index = indexM;
      } else {
        index = Math.min(indexM, indexS);
      }

      // Break if there's not enough space to check a pattern
      if (index >= horizontalLines[i].length - 2) {
        break;
      }
      // Check other corners (top-left, top-right, bottom-left, bottom-right)
      if (
        !ms.includes(horizontalLines[i][index + 2]) ||
        !ms.includes(horizontalLines[i + 2][index]) ||
        !ms.includes(horizontalLines[i + 2][index + 2])
      ) {
        continue;
      }

      // Check the center of the pattern
      if (horizontalLines[i + 1][index + 1] !== "A") {
        continue;
      }

      // Make sure diagonals are not equal
      if (
        horizontalLines[i + 2][index] === horizontalLines[i][index + 2] ||
        horizontalLines[i + 2][index + 2] === horizontalLines[i][index]
      ) {
        continue;
      }

      total++;
    }
  }

  return total;
  // return 0;
}
console.log(`Part 1`, part1());
console.log(`Part 2`, part2());
