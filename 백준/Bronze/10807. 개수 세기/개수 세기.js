const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const total = Number(input[0]);
const arr = input[1].split(' ').map(x => +x);
const item = Number(input[2]);
let cnt = 0;

for (let i = 0; i < total; i++) {
    if (arr[i] === item) cnt++;
}

console.log(cnt);