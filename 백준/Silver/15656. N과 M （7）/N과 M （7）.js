const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, M] = input[0].split(' ').map(Number);
const arr = input[1]
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);
const answer = [];

const dfs = (num, cnt) => {
  if (cnt === M) {
    answer.push(num);
    return;
  }

  for (let i = 0; i < N; i++) {
    dfs(num + arr[i] + ' ', cnt + 1);
  }
};

dfs('', 0);

console.log(answer.join('\n'));
