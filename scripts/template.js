const fs = require("fs");
let path_to_read = process.env.EXAMPLE_INPUT
  ? __dirname + "/ex.txt"
  : __dirname + "/input.txt";
const utils = require("../../utils");
const input = fs.readFileSync(path_to_read, "utf8");

function part1() {
  // super epik code here
  return 0;
}

function part2() {
  // pain and suffering here
  return 0;
}
console.log(`Part 1`, part1());
console.log(`Part 2`, part2());
