export type SupportedOperators = '+' | '-' | '*' | '/';

export const handleArithmeticOperation = (
  operator: SupportedOperators,
  ...operands: number[]
): number => {
  if (operands.length < 2) {
    throw new Error('At least 2 operands are required');
  }

  if (!['+', '-', '*', '/'].includes(operator)) {
    throw new Error('Unsupported arithmetic operation specified.');
  }

  let result = operands[0];
  for (let i = 1; i < operands.length; i++) {
    const operand = operands[i];
    switch (operator) {
      case '+':
        result += operand;
        break;
      case '-':
        result -= operand;
        break;
      case '*':
        result *= operand;
        break;
      case '/':
        if (operand === 0) {
          throw new Error('Division by zero');
        }
        result /= operand;
        break;
    }
  }

  return result;
};
