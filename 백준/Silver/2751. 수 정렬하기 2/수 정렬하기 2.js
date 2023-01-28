const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');
console.log(
  input
    .map((x) => +x)
    .sort((a, b) => a - b)
    .join('\n')
);
