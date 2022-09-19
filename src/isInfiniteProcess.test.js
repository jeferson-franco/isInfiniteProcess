const solution = require('./isInfiniteProcess.js');

test('test 1', () => {
    expect(solution(2, 6)).toBe(false);
});

test('test 2', () => {
    expect(solution(2, 3)).toBe(true);
});

test('test 3', () => {
    expect(solution(2, 10)).toBe(false);
});

test('test 4', () => {
    expect(solution(0, 1)).toBe(true);
});

test('test 5', () => {
    expect(solution(3, 1)).toBe(true);
});

test('test 6', () => {
    expect(solution(10, 10)).toBe(false);
});

test('test 7', () => {
    expect(solution(5, 10)).toBe(true);
});

test('test 8', () => {
    expect(solution(6, 10)).toBe(false);
});

test('test 9', () => {
    expect(solution(10, 0)).toBe(true);
});

test('test 10', () => {
    expect(solution(5, 5)).toBe(false);
});
