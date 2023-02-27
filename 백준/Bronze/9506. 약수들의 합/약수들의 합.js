const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => +x.trim());
input.pop();

for (let i = 0; i < input.length; i++) {
  perfect(input[i]);
}

function perfect(num) {
  const arr = [];

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }

  const sum1 = arr.pop();
  let sum2 = 0;

  for (let i = 0; i < arr.length; i++) {
    sum2 += arr[i];
  }

  if (sum1 !== sum2) {
    console.log(`${num} is NOT perfect.`);
  } else {
    let str = `${num} = 1`;

    for (let i = 1; i < arr.length; i++) {
      str += ` + ${String(arr[i])}`;
    }

    console.log(str);
  }
}
