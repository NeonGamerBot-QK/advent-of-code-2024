const fs = require('fs');
const input = fs.readFileSync(__dirname+ '/input.txt', 'utf8');
const lines = input.split('\n').filter(Boolean);
let aCol = lines.map(x=>x.split(' ')[0]).map(Number)
let bCol = lines.map(x=>x.split(/ +/)[1]).map(Number)
let total = 0;
for(let i = 0; i < aCol.length; i++) {
console.log(aCol[i], bCol[i])
    if(bCol.includes(aCol[i])) {
    total += aCol[i] * bCol.filter(x => x==aCol[i]).length
 }
}
console.log(total)