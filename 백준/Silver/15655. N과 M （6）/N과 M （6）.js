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

function dfs(selected, index, cnt) {
  if (cnt === M) {
    answer.push(selected.join(' '));
    return;
  }

  for (let i = index; i < N; i++) {
    selected.push(arr[i]);
    dfs(selected, i + 1, cnt + 1);
    selected.pop();
  }
}

dfs([], 0, 0);

console.log(answer.join('\n'));
