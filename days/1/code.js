const fs = require('fs');
const input = fs.readFileSync(__dirname+ '/input.txt', 'utf8');
let total = 0;
let aa = [];
let bb = [];
for(const line of input.split('\n').filter(Boolean)) {
let [a, b] = line.split(/ +/);
aa.push(a)
bb.push(b)
}
aa = aa.sort((a, b) => a - b)
bb = bb.sort((a, b) => a - b)
let t = 0;
for(let i = 0; i < aa.length; i++) {
    t += Math.abs(aa[i] - bb[i])
}
console.log(t)
for(const i of aa) {
    t += i * bb.filter(x => x==i).length
}
console.log(t)
// console.log(Math.abs(total), total)