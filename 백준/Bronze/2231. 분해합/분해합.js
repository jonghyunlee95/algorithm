const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString();
const arr1 = [];

function calculate(num) {
  const arr2 = String(num)
    .split('')
    .map((x) => +x);
  let sum = 0;

  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
  }

  return num + sum;
}

for (let i = 1; i < input; i++) {
  if (input === calculate(i)) arr1.push(i);
}

if (arr1.length === 0) {
  console.log(0);
} else {
  console.log(Math.min(...arr1));
}
