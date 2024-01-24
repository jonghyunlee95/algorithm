const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, b] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ');

console.log(
  Number(
    String(
      Number(a.split('').reverse().join('')) +
        Number(b.split('').reverse().join(''))
    )
      .split('')
      .reverse()
      .join('')
  )
);
