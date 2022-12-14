//import { fetchData, setCurrentUser } from './main.js'

// user class
class User {
  constructor(userName, emailId,password) {
    this.userName = userName;
    this.password = password;
    this.emailId = emailId;
  }

  getUsername() {
    return this.userName;
  }
}
async function fetchData(route = '', data = {}, methodType) {
  const response = await fetch(`http://localhost:3000${route}`, {
    method: methodType, // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  if(response.ok) {
    return await response.json(); // parses JSON response into native JavaScript objects
  } else {
    throw await response.json();
  }
}
// login functionality
let loginform=document.getElementById("login");
if(loginform) loginform.addEventListener('submit', login)

function login(e){
    e.preventDefault();
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    let user = new User(username,'',password);
    console.log(user);
 
    fetchData("/users/login", user, "POST")
    .then((data) => {
      setCurrentUser(data);
      window.location.href = "Notemaking.html";
    })
    .catch((err) => {
      console.log(`Error!!! ${err.message}`)
    }) 
}
 
// register functionality
let registration=document.getElementById("formreg");
if(registration) registration.addEventListener('submit',register)

function register(e){
    e.preventDefault();
    let username=document.getElementById('uname').value;
    let emailids=document.getElementById('email').value;
    let passwrd=document.getElementById('pwd').value;

    let regi= new User(username,emailids,passwrd);
    console.log(regi);
  
    fetchData("/users/register", regi, "POST")
    .then((data)=>{
      setCurrentUser(data);
      window.location.href = "Notemaking.html";
    })
    .catch((err)=>{
      console.log(`Error!!! ${err.message}`)
    })
    document.getElementById("formreg").reset();
}
function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
