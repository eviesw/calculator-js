class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }
  ratio(x, y, width) {
    return (y / x) * width;
  }
  percentage(x, y) {
    return y === 0 ? "Error: Divisor cannot be 0." : (x / y) * 100 + "%";
  }
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return y === 0 ? "Error: Divisor cannot be 0." : x / y;
  }
  remainder(x, y) {
    return y === 0 ? "Error: Divisor cannot be 0." : x % y;
  }
  elevate(x, y) {
    return Math.pow(x, y);
  }
  sqrt(x) {
    return x < 0
      ? "Error: Cannot calculate the square root of a negative number"
      : Math.sqrt(x);
  }
}

const calc = new Calculator();

console.log(calc.ratio(5, 7, 300)); // 420
console.log(calc.percentage(3, 12)); // 25%
console.log(calc.add(5, 7)); // 12
console.log(calc.subtract(5, 7)); // 2
console.log(calc.multiply(5, 7)); // 35
console.log(calc.divide(35, 7)); // 5
console.log(calc.remainder(7, 5)); // 2
console.log(calc.elevate(5, 3)); // 125
console.log(calc.sqrt(25)); // 5
console.log(calc.ratio(4, 6, 100)); //150
console.log(calc.percentage(30, 200)); // 15.00%
console.log(calc.add(5, 3)); // 8
console.log(calc.subtract(5, 3)); // -2
console.log(calc.multiply(5, 3)); // 15
console.log(calc.divide(5, 2)); // 2.5
console.log(calc.remainder(5, 2)); // 1
console.log(calc.elevate(2, 3)); // 8
console.log(calc.sqrt(9)); // 3
console.log(calc.sqrt(-9)); // "Error: Cannot calculate the square root of a negative number"
