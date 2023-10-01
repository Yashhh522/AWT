const getUsers = require('./API');

const githubUsernames = ['abc','pqr','xyz'];
getUsers(githubUsernames)
  .then(usersData => {
    console.log('Users Data : ', usersData);
  })
  .catch(error => {
    console.error('\nError : ', error);
  });
