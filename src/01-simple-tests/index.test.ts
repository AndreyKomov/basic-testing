// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const data = {
      a: 10,
      b: 10,
      action: Action.Add,
    };
    const result = simpleCalculator(data);
    expect(result).toBe(20);
  });

  test('should subtract two numbers', () => {
    const data = {
      a: 10,
      b: 10,
      action: Action.Subtract,
    };
    const result = simpleCalculator(data);
    expect(result).toBe(0);
  });

  test('should multiply two numbers', () => {
    const data = {
      a: 10,
      b: 10,
      action: Action.Multiply,
    };
    const result = simpleCalculator(data);
    expect(result).toBe(100);
  });

  test('should divide two numbers', () => {
    const data = {
      a: 100,
      b: 10,
      action: Action.Divide,
    };
    const result = simpleCalculator(data);
    expect(result).toBe(10);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
  });

  test('should return null for invalid action', () => {
    // Write your test here
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
  });
});
