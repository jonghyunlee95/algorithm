const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
if (input === 'A+') console.log('4.3');
if (input === 'A0') console.log('4.0');
if (input === 'A-') console.log('3.7');
if (input === 'B+') console.log('3.3');
if (input === 'B0') console.log('3.0');
if (input === 'B-') console.log('2.7');
if (input === 'C+') console.log('2.3');
if (input === 'C0') console.log('2.0');
if (input === 'C-') console.log('1.7');
if (input === 'D+') console.log('1.3');
if (input === 'D0') console.log('1.0');
if (input === 'D-') console.log('0.7');
if (input === 'F') console.log('0.0');
