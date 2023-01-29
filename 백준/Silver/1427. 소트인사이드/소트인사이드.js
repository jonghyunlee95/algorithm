const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('')
  .map((x) => +x)
  .sort((a, b) => b - a)
  .join('');
console.log(input);
