function solution(priorities, location) {
    let answer = 0;
    const priorities_index = [];
    
    for (let i = 0; i < priorities.length; i++) {
        priorities_index.push(i);
    }
    
    let print, print_index;
    
    while (priorities[0]) {
        print = priorities.shift();
        
        if (priorities.some((priorities) => priorities > print)) {
            priorities.push(print); 
            priorities_index.push(priorities_index.shift());  
        } else{
            answer++;
            print_index = priorities_index.shift();
            
            if (print_index === location) break;
        }
    }
    
    return answer;
}