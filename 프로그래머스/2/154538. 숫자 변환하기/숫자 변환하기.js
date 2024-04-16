function solution(x, y, n) {
    if (x === y) {
        return 0;
    }

    if (x > y) {
        return -1;
    }

    const dp = new Array(y + 1).fill(Number.MAX_SAFE_INTEGER);
    dp[x] = 0;

    for (let i = x; i <= y; i++) {
        if (dp[i] !== Number.MAX_SAFE_INTEGER) {
            if (i + n <= y) {
                dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
            }
            if (i * 2 <= y) {
                dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
            }
            if (i * 3 <= y) {
                dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
            }
        }
    }

    return dp[y] !== Number.MAX_SAFE_INTEGER ? dp[y] : -1;
}