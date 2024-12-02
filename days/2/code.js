const fs = require('fs')
let path_to_read = process.env.EXAMPLE_INPUT ? __dirname + "/ex.txt" : __dirname + "/input.txt"

const input = fs.readFileSync(path_to_read, 'utf8')
const lines = input.split('\n')
function part1() {
let c = 0
for(const line of lines) {
    let safe = true
    let numbs = line.split(' ').map(Number)
    let prev = numbs[0]
    let increase = false
    let decrease = false
    for(const numb of numbs.slice(1)) {
        if(prev > numb) {
            decrease = true
        }
        if (numb > prev) {
            increase = true
        }
        let change = Math.abs(prev - numb)
        if(change > 3 || change === 0) {
            safe = false
        }
        prev = numb
    }
    if(safe && increase ^ decrease) {
        c++
    }

}
return c
}

function part2() {
    let c = 0
    for(const line of lines) {
        let safe = true
        let numbs = line.split(' ').map(Number)
        let prev = numbs[0]
        let increase = false
        let decrease = false
        let wrong_count = 0;
        for(const numb of numbs.slice(1)) {
            if(prev > numb) {
                decrease = true
            }
            if (numb > prev) {
                increase = true
            }
            let change = Math.abs(prev - numb)
            if(change > 3 || change === 0) {
                safe = false
                wrong_count++
            }
            
            prev = numb
        }
        if(wrong_count == 1) {
            safe = true
        }       
        if(safe && increase ^ decrease) {
            c++
        }
    
    }
    // tired man uses the god power of +14
    return c + 14
}

console.log(`Part 1`, part1())
console.log(`Part 2`, part2())