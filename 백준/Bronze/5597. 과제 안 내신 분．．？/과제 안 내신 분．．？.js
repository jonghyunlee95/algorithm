const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().split('\n');

const arr = input.map(x => Number(x));
const answer = [];

for (let i = 1; i <= 30; i++) {
    if (!arr.includes(i)) answer.push(i);
}

console.log(Math.min(...answer), Math.max(...answer));