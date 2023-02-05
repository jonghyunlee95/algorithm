const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const A = new Set(input[0].split(' ').map((x) => +x));
const B = new Set(input[1].split(' ').map((x) => +x));
const answer = new Set([...A, ...B]);

A.forEach((el) => {
  if (B.has(el)) answer.delete(el);
});

console.log(answer.size);
