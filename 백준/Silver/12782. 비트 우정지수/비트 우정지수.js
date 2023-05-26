const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
const T = +input.shift();
const answer = [];

function validation(num1, num2) {
  let cnt1 = 0;
  let cnt0 = 0;

  for (let i = 0; i < num1.length; i++) {
    if (num1[i] !== num2[i]) {
      if (num2[i] === '1') cnt1++;
      else cnt0++;
    }
  }

  const min = Math.min(cnt0, cnt1);
  return min + cnt0 + cnt1 - min * 2;
}

for (let i = 0; i < T; i++) {
  const nums = input[i].split(' ');
  const a = nums[0];
  const b = nums[1];
  answer.push(validation(a, b));
}

console.log(answer.join('\n'));
