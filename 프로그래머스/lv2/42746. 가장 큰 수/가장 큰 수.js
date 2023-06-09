function solution(numbers) {
    // numbers의 모든 원소가 0일 경우 '0000'이 아니라 '0'을 return
    // 테스트 케이스 하나에서 자꾸 틀렸다해서 검색(예외 케이스)
    if (numbers.reduce((a, b) => a + b, 0) === 0) return '0';
    return numbers
        // numbers의 모든 원소를 문자열로 변환해준다.
        .map(String) 
        // 예를 들어 '6' + '10'(a + b) 와 '10' + '6'(b + a)을 비교하면 610 > 106
        // 106 - 610 으로 음수가 되어야 내림차순으로 정렬되기 때문에 (b + a) - (a + b)를 해준다. 
        .sort((a, b) => (b + a) - (a + b))  
        // 문자열로 return 해야하는 제한사항 때문에 배열을 모두 합쳐 문자열로 바꿔주는 join사용  
        .join('');
}