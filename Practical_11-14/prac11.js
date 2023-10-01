function fetchData(callback) 
{
    //simulate an asynchronous operation 
    setTimeout(() => {
      const data = { message : "The data has been fetched successfully!"};
  
      //invoke the callback with the fetched data
      callback(null, data);
    }, 2000); //simulating a 2-second delay
}
  
//callback function to handle the fetched data
function handleData(error, data) 
{
    if(error) 
    {
      console.error("\nError fetching data : ", error);
    } 
    else 
    {
      console.log("\nFetched Data : ",data);
    }
}
  
//using the fetchData function with the callback
console.log("\nFetching data...");
fetchData(handleData);
console.log("\nAsynchronous operation initiated. Program continues to execute...");
  