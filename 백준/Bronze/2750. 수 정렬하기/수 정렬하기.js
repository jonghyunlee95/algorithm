const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [T, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x);

console.log(input.sort((a, b) => a - b).join('\n'));
