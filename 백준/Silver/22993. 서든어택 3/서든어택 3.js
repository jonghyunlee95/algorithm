const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
let arr = input[0].split(' ').map(Number);
let junwon = arr.shift();
let answer = 'Yes';

arr = arr.sort((a, b) => a - b);

for (let i = 0; i < T - 1; i++) {
  if (junwon > arr[i]) {
    junwon += arr[i];
  } else {
    answer = 'No';
    break;
  }
}

console.log(answer);
