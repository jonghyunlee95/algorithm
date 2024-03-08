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

const visited = new Array(M).fill(false);

const dfs = (num, cnt) => {
  if (cnt === M) {
    console.log(num);
    return;
  }

  for (let i = 0; i < N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    const number = num + arr[i] + ' ';
    dfs(number, cnt + 1);
    visited[i] = false;
  }
};

dfs('', 0);
