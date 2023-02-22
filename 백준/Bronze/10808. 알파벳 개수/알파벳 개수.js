const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');
const alpabet = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];
const arr = Array(alpabet.length).fill(0);

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < alpabet.length; j++) {
    if (input[i] === alpabet[j]) arr[j]++;
  }
}
console.log(arr.join(' '));
