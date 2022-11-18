class notemaking 
{
    constructor(uname,email,pwd,pwd1,textarea)
    {
    this.UN=uname;
    this.Email=email;
    this.Pwd=pwd;
    this.Password=pwd1;
    this.Note=textarea;

    }
    getUN(){
        return this.UN;
    }
    getEmail(){
        return this.Email;

    }
    getPwd()
    {
        return this.Pwd;
    }
    getPassword()
    {
        return this.Password;
    }
    getNote()
    
    {
        return this.Note;
    }
     getUser()
     {
        return this.User;
      }
    getLoginpwd()
    {
        return this.Loginpwd;
    }       
    setUN(uname){
        this.UN=uname;
    }
    
    setEmail(email){
        this.Email=email;

    }
    setPwd(pwd)
    {
        this.Pwd=pwd;
    }
    setPassword(pwd1)
    {
        this.Password=pwd1;
    }
    setNote(textarea)
    {
        this.Note=textarea;
    }
    setUser(user)
    {
        this.User=user;
    }
    setLoginpwd(password)
    {
        this.Loginpwd=password;
    }
}
const registration=document.getElementById("formreg");
if(registration) registration.addEventListener('submit',register)
function register(e){
    e.preventDefault();
    let username=document.getElementById('uname').value;
    let emailids=document.getElementById('email').value;
    let passwrd=document.getElementById('pwd').value;
    let Repasswrd=document.getElementById('pwd1').value;

    let regi= new notemaking(username,emailids,passwrd,Repasswrd);

    console.log(regi.UN)
    console.log(regi.Email)
    console.log(regi.Pwd)
    console.log(regi.Password)
}
const loginform=document.getElementById("login");
if(loginform) loginform.addEventListener('submit', loginuser)
function loginuser(l){
    l.preventDefault();
    let user=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    console.log(`${user}`);
    console.log(`${password}`);
}


const userbtn = document.getElementById("button_1");
if(userbtn) userbtn.addEventListener('click',getallUsers);

const notebtn = document.getElementById("button_2");
if(notebtn) notebtn.addEventListener('click',getallNotes);

function getallUsers(){
    fetch("http://localhost:3000/user/")
    .then((res)=> res.json())
    .then((data) => console.log(data))
    .catch((err)=> console.log(err))
}

function getallNotes(){
    fetch("http://localhost:3000/note/")
    .then((res)=> res.json())
    .then((data) => console.log(data))
    .catch((err)=> console.log(err))
}