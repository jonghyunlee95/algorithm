const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const alpabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];
const map = new Map();

for (let i = 0; i < alpabet.length; i++) {
  map.set(alpabet[i], num[i]);
}

const arr = input[0].split('');
let answer = 0;

for (let i = 0; i < arr.length; i++) {
  answer += map.get(arr[i]) * Math.pow(31, i);
}

console.log(answer);
