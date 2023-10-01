const fs = require('fs');

//function to read a file asynchronously
function readFileAsync(filePath, callback) 
{
  fs.readFile(filePath, 'utf8', (error,data) => {
    if (error) 
    {
      callback(error,null);
    } 
    else 
    {
      callback(null,data);
    }
  });
}

//callback function to display file contents
function displayFileContents(error, data) 
{
  if(error) 
  {
    console.error('\nError reading file : ',error);
  } 
  else 
  {
    console.log('\nFile Contents : ',data);
  }
}

//specifing the file path
const filePath = 'C:/Users/Administrator/Desktop/Changa/AWT/Practical_11-14/prac12.txt';

//reading the file asynchronously
console.log('\nReading file asynchronously...');
readFileAsync(filePath, displayFileContents);
console.log('\nAsynchronous file reading initiated. Program continues to execute...');
