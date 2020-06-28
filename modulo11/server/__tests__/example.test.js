function sum(a, b) {
  return a + b;
}

test('if sum function is called with 4 and 5 it must return 9 as result', () => {
  const result = sum(4, 5);

  expect(result).toBe(9);
});
