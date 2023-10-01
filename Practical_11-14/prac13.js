//function to simulate fetching data from an API asynchronously
function fetchData() 
{
    //simulate an asynchronous operation 
    return new Promise((resolve, reject) => {
      // Simulate success
    const success = true;
  
    setTimeout(() => 
    {
        if (success) 
        {
          const data = { message: "Data successfully fetched!" };
          resolve(data);
        } 
        else 
        {
          reject("\nFailed to fetch data from the API.");
        }
      }, 2000); 
    });
}
  
//using the fetchData function with Promises
console.log('Fetching data...');
fetchData()
    .then((data) => {
      console.log('Fetched Data : ',data);
    })
    .catch((error) => {
      console.error('Error : ',error);
    });
console.log('\nAsynchronous operation initiated. Program continues to execute...');
  