const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('');

const pelindrome = (arr) => {
  if (arr.length % 2 !== 0) {
    const mid = Math.floor(arr.length / 2);
    const begin = arr.splice(0, mid);
    const end = arr.splice(1).reverse();
    if (begin.join('') === end.join('')) console.log(1);
    else console.log(0);
  } else {
    const mid = arr.length / 2 - 1;
    const begin = arr.splice(0, mid + 1);
    arr.reverse();
    if (begin.join('') === arr.join('')) console.log(1);
    else console.log(0);
  }
};

pelindrome(input);
