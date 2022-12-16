const con= require("./db_connect");

// Table Creation 
  async function createTable() {
    let sql='create table IF NOT EXISTS users (user_id INT NOT NULL AUTO_INCREMENT,username VARCHAR(50) NOT NULL, email VARCHAR(50) NOT NULL UNIQUE,password VARCHAR(10) NOT NULL,CONSTRAINT user_pk PRIMARY KEY(user_id));'
    await con.query(sql);
  }
createTable();

// grabbing all users in database
async function getAllUsers() {
  const sql = `SELECT * FROM users;`;
  let users = await con.query(sql);
  console.log(users)
}
// Create  User - Registering
async function register(user) {
  let cuser = await getUser(user);
  if(cuser.length > 0) throw Error("Username already in exist");
  const sql = `INSERT INTO users (username,email,password)
    VALUES ("${user.userName}", "${user.password}","${user.emailId}");
  `
  await con.query(sql);
  return await login(user);
}

// Read User -- login user
async function login(user) { 
  let cuser = await getUser(user);
  // if(!cuser[0]) throw Error("Username not found");
  // if(cuser[0].password !== user.password) throw Error("Password incorrect");
  return cuser[0];
}

// Update User function
async function editUser(user) {
  let sql = `UPDATE users 
    SET username = "${user.userName}"
    WHERE user = ${user.user_id}`;

  await con.query(sql);

  let updateduser = await getUser(user);
  return updateduser[0];
}

// Delete User function
async function deleteUser(user) {
  let sql = `DELETE FROM users
    WHERE user_id  = ${user.user_id}`;

 await con.query(sql);
}

async function getUser(user) {
  let sql;
  if(user.userID) {
    sql = `
      SELECT * FROM users
       WHERE user_id = ${user.userID}
    `;
  } else {
    sql = `
    SELECT * FROM users 
      WHERE username = "${user.userName}"
  `;
  }
    return await con.query(sql);  
}
module.exports = { getAllUsers, login, register, editUser, deleteUser,getUser};
