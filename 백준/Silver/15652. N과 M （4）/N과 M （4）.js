const fs = require('fs');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const arr = [];

for (let i = 1; i <= N; i++) arr.push(i);

const dfs = (start, result, depth) => {
  if (depth === M) {
    console.log(result.join(' '));
    return;
  }

  for (let i = start; i < arr.length; i++) {
    result.push(arr[i]);
    dfs(i, result, depth + 1);
    result.pop();
  }
};

dfs(0, [], 0);
