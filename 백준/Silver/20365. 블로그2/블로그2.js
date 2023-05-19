const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const str = input[0];
const R = str.split('B').filter((x) => x !== '').length;
const B = str.split('R').filter((x) => x !== '').length;
let arr = [];
let answer = 1;

if (R > B) {
  arr = str.split('R');
} else {
  arr = str.split('B');
}

arr.forEach((str) => {
  if (str) answer++;
});

console.log(answer);
