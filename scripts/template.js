const fs = require('fs')
let path_to_read = process.env.EXAMPLE_INPUT ? "ex.txt" : "input.txt"

const input = fs.readFileSync(path_to_read, 'utf8')

function part1() {

}

function part2() {

}

console.log(`Part 1`, part1())
console.log(`Part 2`, part2())