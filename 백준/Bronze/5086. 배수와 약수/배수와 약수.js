const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();
const numArr = input.map((x) =>
  x
    .trim()
    .split(' ')
    .map((x) => +x)
);
for (let i = 0; i < numArr.length; i++) {
  if (numArr[i][1] % numArr[i][0] === 0) console.log('factor');
  else if (numArr[i][0] % numArr[i][1] === 0) console.log('multiple');
  else console.log('neither');
}
