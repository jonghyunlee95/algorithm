function solution(want, number, discount) {
  let answer = 0;
    
  const isMatch = (discount) => {
    const map = new Map();
      
    discount.forEach((x) => map.set(x, (map.get(x) || 0) + 1));
      
    for (let i = 0; i < want.length; i++) {
      
      if (map.get(want[i]) !== number[i]) return false;
    }
    return true;
  };
    
  for (let j = 0; j <= discount.length - 10; j++) {
    const arr = discount.slice(j, j + 10);
      
    if (isMatch(arr)) answer++;
  }
    
  return answer;
}