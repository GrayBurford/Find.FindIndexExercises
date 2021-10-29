/* 
Write a function called `findUserByUsername` which accepts an array of objects, each with a key of username, and a string. The function should return the first object with the key of username that matches the string passed to the function. If the object is not found, return undefined. 

const users = [
  {username: 'mlewis'},
  {username: 'akagen'},
  {username: 'msmith'}
];

findUserByUsername(users, 'mlewis') // {username: 'mlewis'}
findUserByUsername(users, 'taco') // undefined
*/


function findUserByUsername(users, username) {
    return users.find(function(el) {
      return el.username === username;
    })
    return undefined;
  }
   
  /*
  Write a function called `removeUser` which accepts an array of objects, each with a key of username, and a string. The function should remove the object from the array. If the object is not found, return undefined. 
  
  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  removeUser(users, 'akagen') // {username: 'akagen'}
  removeUser(users, 'akagen') // undefined
  */
  const users = [
    {username: 'mlewis'},
    {username: 'akagen'},
    {username: 'msmith'}
  ];
  
  function removeUser (users, username) {
    // let removedUser = {};
    let idxToRemove = users.findIndex(function (val) {
      return val['username'] === username;
    });
    if (idxToRemove === -1) return;
    // removedUser = users[idxToRemove];
    // delete users[idxToRemove];
    // return removedUser;
    return users.splice(idxToRemove, 1)[0];
  }