//promise-based asynchronous function
function fetchData() 
{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const data = { message : "Practical-14(Part-1) data fetched successfully!" };
        resolve(data);
      }, 2000);
    });
}

//converting to async/await style
async function fetchDataAsync() 
{
    try 
    {
      const data = await fetchData();
      console.log('\nFetched Data (async/await) : ',data);
    } 
    catch(error) 
    {
      console.error('Error : ',error);
    }
  }

//using the async/await function
console.log('\nFetching data (async/await)...');
fetchDataAsync();
console.log('\nAsynchronous operation initiated. Program continues to execute...');
  