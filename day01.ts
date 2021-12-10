import * as fs from 'fs';

const contents = fs.readFileSync('input01.txt', 'utf-8');
const lines = contents.split('\n');
let prev = parseInt(lines[0]);
let total = 0;
for (let i = 1; i < lines.length; ++i) {
    let cur = parseInt(lines[i]);
    if (cur > prev) {
        total++;
    }
    prev = cur;
}
console.log(total);

prev = parseInt(lines[0]) + parseInt(lines[1]) + parseInt(lines[2]);
total = 0;
for (let i = 2; i < lines.length-1; ++i) {
    let cur = parseInt(lines[i-1]) + parseInt(lines[i]) + parseInt(lines[i+1]);
    if (cur > prev) {
        total++;
    }
    prev = cur;
}
console.log(total);
