const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ');
const arr = [];

for (let i = 1; i <= +N; i++) arr.push(i);

const visited = new Array(+N).fill(false);
const set = new Set();

const dfs = (num, cnt) => {
  if (cnt === +M) {
    set.add(
      num
        .split('')
        .map(Number)
        .sort((a, b) => a - b)
        .join(' ')
    );
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    dfs(num + arr[i], cnt + 1);
    visited[i] = false;
  }
};

dfs('', 0);
console.log([...set].join('\n'));
