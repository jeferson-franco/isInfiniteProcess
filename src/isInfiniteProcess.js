function solution(a, b) {
    return a > b || (a - b) % 2 !== 0;
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test isInfiniteProcess

// alternative solution
