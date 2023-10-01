//ssync/await functions to fetch data from different APIs
async function fetchDataFromApi1() 
{
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { api1 : "Data from API-1" };
        resolve(data);
      }, 1500);
    });
}
  
async function fetchDataFromApi2() 
{
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { api2: "Data from API-2" };
        resolve(data);
      }, 1000);
    });
}
  
async function fetchDataFromApi3() 
{
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = { api3: "Data from API-3" };
        resolve(data);
      },1600);
    });
}

//main async/await function to fetch data sequentially
async function fetchDataSequentially() 
{
    try 
    {
      const data1 = await fetchDataFromApi1();
      console.log('\nFetched Data from API-1 : ',data1);
  
      const data2 = await fetchDataFromApi2();
      console.log('\nFetched Data from API-2 : ',data2);

      const data3 = await fetchDataFromApi3();
      console.log('\nFetched Data from API-3 : ',data3);
  
      const combinedData = { ...data1, ...data2, ...data3 };
      console.log('\nCombined Data : ',combinedData);
    } 
    catch (error) 
    {
      console.error('Error : ',error);
    }
}
  
//using the main async/await function
console.log('\nFetching data sequentially (async/await)...');
fetchDataSequentially();
console.log('\nAsynchronous operation initiated. Program continues to execute...');
  