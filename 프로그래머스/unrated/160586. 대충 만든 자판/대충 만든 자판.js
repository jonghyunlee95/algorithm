function solution(keymap, targets) {
    const answer = [];
    let arr1 = [];
    
    keymap = keymap.map(x =>x.split(''));
    targets = targets.map(x => x.split(''));
    
    for (let i = 0; i < targets.length; i++) {
        for (let j = 0; j < targets[i].length; j++) {
            const arr2 = [];
            for (let k = 0; k < keymap.length; k++) {         
                if (keymap[k].indexOf(targets[i][j]) > -1) {
                    arr2.push(keymap[k].indexOf(targets[i][j]) + 1);   
                }
            }
            arr1.push(Math.min(...arr2));
        }
        if (arr1.includes(Infinity)) {
            answer.push(-1);
            arr1 = [];
        } else {
        let sum = 0;
        
        for (let l = 0; l < arr1.length; l++) {
            sum += arr1[l];
        }
        
        answer.push(sum);
        
        arr1 = [];
        }
    }
    return answer;
}