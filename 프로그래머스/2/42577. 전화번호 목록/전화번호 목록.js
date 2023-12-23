function solution(phone_book) {
    const phoneMap = new Map();
    
    phone_book.forEach(phoneNumber => {
        phoneMap[phoneNumber] = true
    })

    for(const phoneNumber of phone_book) {
        for(let i = 1 ; i < phoneNumber.length ; i ++) {
            const curStr = phoneNumber.slice(0, i)
            if(phoneMap[curStr]) return false
        }
    }
    
    return true
}