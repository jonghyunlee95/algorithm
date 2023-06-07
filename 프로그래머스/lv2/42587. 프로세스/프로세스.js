function solution(priorities, location) {
    // 중요도와 해당 index를 담아둘 빈 배열을 선언 
    const arr = [];
    
    // 반복문을 돌며 arr배열에 [중요도, index]를 담아준다
    for (let i = 0; i < priorities.length; i++) {
        arr.push([priorities[i], i]);
    }
    
    // 중요도가 담긴 배열을 내림차순으로 정렬해준다.     
    priorities.sort((a, b) => b - a);
    let idx = 0;
    
    
    
    while(true) {
        // 무한 루프를 돌며 중요도와 arr[0][0]의 크기를 비교하고
        // 중요도가 더 클 시 맨앞에 위치했던 arr의 원소를 맨뒤로 위치시킨다. 
        if (arr[0][0] < priorities[idx]) {
            arr.push(arr.shift());
        } else {
						// 아닐 경우 arr를 cur변수에 저장한다.
            const cur = arr.shift();
            // cur변수의[1]과 location를 비교한다.
            // 동일할 경우 idx에 1을 더해주고 return 한다.
            if (cur[1] === location) return idx + 1;   
            // 아닐경우 idx에 1을 더해준다.
            idx++;
        }
    }
}