function solution(s){
    // 스택에 이용할 빈 배열 선언
    const stack = [];
    
    // 문자열 s를 반복문을 이용해 확인합니다.
    for (let i = 0; i < s.length; i++) {
      // 배열의 마지막 값과 현재 s[i]의 값을 비교하고 같지 않다면 
      // stack에 s[i]값을 push해줍니다.
      // 같다면 stack의 마지막값을 pop해줍니다.
		  if (stack[stack.length - 1] !== s[i]) stack.push(s[i]);
      else stack.pop();
    }
    
    // 모든 과정을 끝낸 후 stack배열의 길이를 확인하고
    // 0이라면 1을 0이 아니라면 0을 return 해줍니다.
    // if (!stack.length) return 1;
    // else return 0;
    return !stack.length ? 1 : 0
}