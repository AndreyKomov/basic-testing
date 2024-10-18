// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 20, b: 10, action: Action.Subtract, expected: 10 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 20, b: 2, action: Action.Divide, expected: 10 },
  { a: 2, b: 2, action: Action.Exponentiate, expected: 4 },
];

describe('simpleCalculator', () => {
  testCases.forEach((testCase) => {
    const { a, b, action, expected } = testCase;

    test(`should return "${expected}" with "${a}" and "${b}" after "${action}"`, () => {
      const dataArgs = { a, b, action };

      simpleCalculator(dataArgs);

      expect(simpleCalculator(dataArgs)).toBe(expected);
    });
  });
});
