const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let [T, ...input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

for (let i = 0; i < T; i++) {
  input[i] = input[i].split(' ').map((x) => +x);
}

console.log(
  input
    .sort((a, b) => {
      if (a[0] !== b[0]) return a[0] - b[0];
      return a[1] - b[1];
    })
    .map((x) => x.join(' '))
    .join('\n')
);
