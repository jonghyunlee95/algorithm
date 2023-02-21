const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');
input.pop();

const pelindrome = (str) => {
  const arr = str.trim().split('');
  if (arr.length % 2 !== 0) {
    const a = arr.slice(0, Math.floor(arr.length / 2));
    const b = arr.slice(Math.floor(arr.length / 2) + 1);

    if (a.join('') === b.reverse().join('')) console.log('yes');
    else console.log('no');
  } else {
    const a = arr.slice(0, arr.length / 2);
    const b = arr.slice(arr.length / 2);

    if (a.join('') === b.reverse().join('')) console.log('yes');
    else console.log('no');
  }
};

for (let i = 0; i < input.length; i++) {
  pelindrome(input[i]);
}
