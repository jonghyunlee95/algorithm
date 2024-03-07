const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [N, M] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const arr = [];
const answer = [];

for (let i = 1; i <= N; i++) arr.push(i);

const dfs = (num, cnt) => {
  if (cnt === M) {
    answer.push(num);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    dfs(num + arr[i], cnt + 1);
  }
};

dfs('', 0);
console.log(answer.map((item) => item.split('').join(' ')).join('\n'));
