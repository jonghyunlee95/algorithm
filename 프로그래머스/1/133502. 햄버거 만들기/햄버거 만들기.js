function solution(ingredient) {
  const stack = [];
  let answer = 0;
  

  for (let item of ingredient) {
    stack.push(item);

    if (stack.slice(-4).join('') == '1231') {
      stack.splice(-4);
      answer++;
    }
  }
  return answer;
}