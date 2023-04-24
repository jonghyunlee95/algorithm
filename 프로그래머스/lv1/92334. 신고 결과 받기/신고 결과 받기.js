function solution(id_list, report, k) {
    const answer = [];
    const map = new Map();
    
    for (let i = 0; i < id_list.length; i++) {
        map.set(id_list[i], new Set()); 
        answer.push(0);
    }
    
    for (let i = 0; i < report.length; i++) {
        const arr = report[i].split(' ');
        map.set(arr[0], map.get(arr[0]).add(arr[1]));
    }
    
    const people = [];
    
    for (const [key, value] of map) {
        people.push(...value);
    }
    
    const num = new Map();
    
    for (let i = 0; i < people.length; i++) {
        if (!num.has(people[i])) num.set(people[i], 1);
        else num.set(people[i], num.get(people[i]) + 1);
    }
    
    const arr1 = [];
    
    for (const [key, value] of num) {
        if (value >= k) arr1.push(key);
    }
    
    let idx = 0;
    
    for (const [key, value] of map) {
        const arr2 = [...value];
        for (let i = 0; i < arr2.length; i++) {
            if (arr1.includes(arr2[i])) answer[idx]++; 
        }
        idx++;
    }
    
    return answer;
}