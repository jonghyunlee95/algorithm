const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const arr1 = input[0].split(' ').map(Number);
const arr2 = input[1].split(' ').map(Number);
let high = arr1[1];
let answer = 0;

for (let i = 0; i < arr2.length; i++) {
  if (arr2[i] === high) {
    answer++;
    high += arr1[2];
  }
}

console.log(answer);
