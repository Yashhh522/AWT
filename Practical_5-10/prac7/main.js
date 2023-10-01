//importing the Calculator class from the calculatorModule
const Calculator = require('./calculator');
const myCalculator = new Calculator();

const sum = myCalculator.add(10,24);
console.log(`Sum : ${sum}`);

const difference = myCalculator.subtract(13,6);
console.log(`\nDifference : ${difference}`);

const product = myCalculator.multiply(3,5);
console.log(`\nProduct : ${product}`);

try 
{
  const quotient = myCalculator.divide(32,2);
  console.log(`\nQuotient : ${quotient}\n`);
} 
catch (error) 
{
  console.error(error.message);
}
