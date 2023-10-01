Array.prototype.sum = function(){
    console.log("Created Array : ")
    console.log(this)
    let total = 0;
    for(let i=0;i<this.length;i++) 
    {
      total += this[i];
    }
    return total;
  };

String.prototype.reverse = function() {
    return this.split('').reverse().join('');
  };
  
  
const numbers = [1, 2, 3, 4, 5];
const sumResult = numbers.sum();
console.log(`Sum of the array elements: ${sumResult}`);

const myString = 'Hello, World!';
const reversedString = myString.reverse();
console.log(`\nOriginal String: ${myString}`);
console.log(`Reversed String: ${reversedString}\n`);
  
  