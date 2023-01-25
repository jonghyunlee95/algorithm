const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [[m, n], ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .split('\n')
  .map((x) => x.split(' ').map((x) => Number(x)));

const arr1 = input.slice(0, m);
const arr2 = input.slice(m);

for (let i = 0; i < m; i++) {
  for (let j = 0; j < n; j++) {
    arr1[i][j] += arr2[i][j];
  }
}

const answer = [];

for (let i = 0; i < arr1.length; i++) {
  answer.push(arr1[i].join(' '));
}

console.log(answer.join('\n'));
