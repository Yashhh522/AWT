async function fetchUserData(username) 
{
    const url = `https://api.github.com/users/${username}`;
    try 
    {
      const response = await fetch(url);
      if (!response.ok) 
      {
        throw new Error(`\nFailed to fetch user data for ${username}`);
      }
      const userData = await response.json();
      return userData;
    } 
    catch (error) 
    {
      console.error(error.message);
      return null;
    }
}
  
async function getUsers(usernames) 
{
    const userPromises = usernames.map(username => fetchUserData(username));
    const userDataArray = await Promise.all(userPromises);
    return userDataArray;
}
  
module.exports = getUsers;
  