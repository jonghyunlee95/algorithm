const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const button = input.shift().split(' ').map(Number);
const A = button[0];
const B = button[1];
const arr = [Math.abs(A - B)];
const favorite = +input.shift();

for (let i = 0; i < favorite; i++) {
  arr.push(Math.abs(input[i] - B) + 1);
}

console.log(Math.min(...arr));
