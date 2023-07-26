"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleArithmeticOperation = void 0;
const handleArithmeticOperation = (operator, ...operands) => {
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
exports.handleArithmeticOperation = handleArithmeticOperation;
