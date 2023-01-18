function solution(skill, skill_trees) {
    let answer = 0;
    const arr = skill.split('');
    
    for (let i = 0; i < skill_trees.length; i++) {
        let arr1 = [...arr];
        skill_trees[i] = skill_trees[i].split('').filter(x => arr.includes(x));
        
        
        while (arr1.length !== skill_trees[i].length) {
            arr1.pop();
        }
        
        if (arr1.join('') === skill_trees[i].join('')) {
            answer++;
        }
    }

    return answer;
}