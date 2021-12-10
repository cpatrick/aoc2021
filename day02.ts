import * as fs from 'fs';

const contents = fs.readFileSync('input02.txt', 'utf-8');
const lines = contents.split('\n');
let horizontal = 0;
let depth = 0;
for (let line of lines) {
    const [instruction, num] = line.split(' ');
    if (instruction === 'forward') {
        horizontal += parseInt(num);
    } else if (instruction === 'up') {
        depth -= parseInt(num);
    } else if (instruction === 'down') {
        depth += parseInt(num);
    }
}
console.log(horizontal*depth);

horizontal = 0;
depth = 0;
let aim = 0;
for (let line of lines) {
    const [instruction, num] = line.split(' ');
    const n = parseInt(num);
    if (instruction === 'forward') {
        horizontal += n;
        depth += aim*n;
    } else if (instruction === 'up') {
        aim -= n;
    } else if (instruction === 'down') {
        aim += n;
    }
}
console.log(horizontal*depth);
