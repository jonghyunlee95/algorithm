const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();

const arr = [1, 5, 10, 50];
const set = new Set();

const dfs = (sum, idx, cnt) => {
  if (cnt === input) {
    set.add(sum);
    return;
  }

  for (let i = idx; i < arr.length; i++) {
    dfs(sum + arr[i], i, cnt + 1);
  }
};

dfs(0, 0, 0);

console.log(set.size);
