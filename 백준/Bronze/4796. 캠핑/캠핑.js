const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.trim().split(' ').map(Number));
input.pop();

for (let i = 0; i < input.length; i++) {
  const A = input[i][0];
  const B = input[i][1];
  let vacation = input[i][2];
  let answer = 0;

  while (vacation > B) {
    vacation -= B;
    answer += A;
  }

  if (vacation < A) {
    answer += vacation;
  } else {
    answer += A;
  }
  console.log(`Case ${i + 1}: ${answer}`);
}
