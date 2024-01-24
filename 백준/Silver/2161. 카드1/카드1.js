const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const arr = Array.from({ length: input }, (v, i) => i + 1);
const answer = [];

while (arr.length !== 1) {
  answer.push(arr.shift());
  arr.push(arr.shift());
}

answer.push(arr[arr.length - 1]);

console.log(answer.join(' '));
