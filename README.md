# Package-Publishing

# simple-calculator
Simple calculator package that includes the main arithmetic operations packed up in one place

## Installation
```sh 
npm i sino-calculator
```

## Usage
* The Supported Operators are '+' | '-' | '*' | '/'
* The function should accept an operator as the first param, and the second param is the operands with at least 2 numbers to calculate them & you can add as many numbers as you want
  
```sh
import { handleArithmeticOperation } from 'sino-calculator';

console.log("sumResult", handleArithmeticOperation("+", 1, 2, 3, 4, 5)); // Output: 15
console.log("subtractionResult", handleArithmeticOperation("-", 10, 5, 2)); // Output: 3
console.log("multiplicationResult", handleArithmeticOperation("*", 2, 4, 6)); // Output: 48
console.log("divisionResult", handleArithmeticOperation("/", 100, 5)); // Output: 20
```

## Author
**Vinh Nguyen (marsino)**

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.