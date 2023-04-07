const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
console.log(
  input
    .map((x) =>
      x
        .split(' ')
        .map((x) => x.trim().split('').reverse().join(''))
        .join(' ')
    )
    .join('\n')
);
