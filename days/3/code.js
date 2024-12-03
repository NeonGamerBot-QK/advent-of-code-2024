const fs = require('fs')
let path_to_read = process.env.EXAMPLE_INPUT ? __dirname + "/ex.txt" : __dirname +"/input.txt"
const utils = require('../../utils')
const input = fs.readFileSync(path_to_read, 'utf8')
const mul = /mul\((\d+),(\d+)\)/g
const mul2 =  /(mul\(\d+,\d+\))|(do\(\))|(don't\(\))/g;
function part1() {
    // super epik code here
    // utils.log(splits0)
    let n = 0
const matches= input.matchAll(mul)
for (const match of matches) {
    // console.log(match)
    let a = parseInt(match[1])
    let b = parseInt(match[2])
    n += a * b
}
    return n
}

function part2() {
    // pain and suffering here
   let n = 0;
   let e = true;
    // Loop through all matches of the regex
    const matches = [...input.matchAll(mul2)];

    matches.forEach(i => {
        // console.log(i)
        if (i[2] && i[2].includes("don't")) {  // i[2] corresponds to "don't()" group
            e = false;
        } else if (i[1] && i[1].includes("do")) {  // i[1] corresponds to "do()" group
            e = true;
        } else if (e && i[0]) {
            let mul = i[0].replace('mul(', '').replace(')', '');  // Removing "mul(" and ")"
        if(!mul.includes(','))return;
            const [num1, num2] = mul.split(',').map(num => parseInt(num));
            n += num1 * num2;
        }
    });

    return n;

}
console.log(`Part 1`, part1())
console.log(`Part 2`, part2())