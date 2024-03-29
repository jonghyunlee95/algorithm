const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
let result = [];

for (let i = 0; i < input.length; i++) {
  let number = Number(input[i]);
  let changeTwo = number.toString(2);
  if (i !== 0) {
    if (changeTwo.length < 3) {
      changeTwo = '0'.repeat(3 - changeTwo.length) + changeTwo;
      result.push(changeTwo);
    } else {
      result.push(changeTwo);
    }
  } else {
    result.push(changeTwo);
  }
}

console.log(result.join(''));
