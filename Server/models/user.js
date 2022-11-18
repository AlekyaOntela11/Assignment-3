const users = [
    {
      userId: 12345,
      userName: "alekya",
      password: "ontela"
    },
    {
      userId: 1435,
      userName: "vinay",
      password: "reddy"
    },
    {
      userId: 20007,
      userName: "anvesh",
      password: "nani11"
    },
    {
        userId: 197214,
        userName: "srinivas",
        password: "uma143"
      }
  ];

  function allUsers() {
    return users;
  }
  function login(user) { 
    let newUser = users.filter( u => u.userName === user.userName);
    if(!newUser[0]) throw Error("Username not found");
    if(newUser[0].password !== user.password) throw Error("Password incorrect");
  
    return newUser[0];
  }
  
  module.exports = { allUsers, login };
  