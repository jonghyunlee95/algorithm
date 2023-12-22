function solution(nums) {
    const pocketmonMap = new Map();
    let answer = 0;
    
    for (let i = 0; i < nums.length; i++) {
        const pocketmon = nums[i];
        
        if (!pocketmonMap.get(pocketmon)) pocketmonMap.set(pocketmon, 1);
        else pocketmonMap.set(pocketmon, pocketmonMap.get(pocketmon) + 1);
    }

    pocketmonMap.forEach((value, key, idx) => {
        answer++;
    })

    return answer < nums.length / 2 ? answer : nums.length / 2
}