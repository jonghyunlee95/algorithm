const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = +require('fs').readFileSync(filePath).toString().trim();
const star1 = [];
const star2 = [];

for (let i = 1; i <= input; i++) {
  star1.push('*'.repeat(i) + ' '.repeat(input - i));
  star2.push(' '.repeat(input - i) + '*'.repeat(i));
}

const arr1 = [];

for (let i = 0; i < star1.length; i++) {
  arr1[i] = star1[i] + star2[i];
}

const arr2 = [];

for (let i = arr1.length - 2; i >= 0; i--) {
  arr2.push(arr1[i]);
}

for (let i = 0; i < arr2.length; i++) {
  arr1.push(arr2[i]);
}

console.log(arr1.join('\n'));
