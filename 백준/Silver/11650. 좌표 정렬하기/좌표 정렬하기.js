const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const sortedArr = input
  .map((item) => item.split(' ').map(Number))
  .sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return a[1] - b[1];
  })
  .map((item) => item.join(' '));

console.log(sortedArr.join('\n'));
