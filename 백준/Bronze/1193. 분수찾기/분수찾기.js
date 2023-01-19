const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString();
let num = Number(input);
let cnt = 0;

while (num > 0) {
    cnt++;
    num = num - cnt;
}

if (cnt % 2 === 0) {
    console.log(`${cnt + num}/${1 + -num}`);
} else {
    console.log(`${1 + -num}/${cnt + num}`);
}