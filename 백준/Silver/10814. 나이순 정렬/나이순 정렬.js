const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const arr = input
  .map((item) => item.split(' '))
  .sort((a, b) => {
    if (Number(a[0]) > Number(b[0])) return 1;
    if (Number(a[0]) === Number(b[0])) return 0;
    if (Number(a[0]) < Number(b[0])) return -1;
  })
  .map((item) => item.join(' '));

console.log(arr.join('\n'));
