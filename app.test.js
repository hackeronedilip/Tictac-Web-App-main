// tests/app.test.js
const { add } = require('../app');

test('adds two numbers correctly', () => {
  expect(add(2, 3)).toBe(5);
});

test('handles negative numbers', () => {
  expect(add(-2, 3)).toBe(1);
});
test('handles zero', () => {
  expect(add(0, 5)).toBe(5);
});