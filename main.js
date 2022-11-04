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

    setFN(uname){
        this.UN=uname;
    }
    
    setemail(email){
        this.Email=email;

    }
    setPWD(pwd){
        this.Pwd=pwd;
    }
    setPassword(pwd1){
        this.Password=pwd1;
    }
    setNts(textarea){
        this.Note=textarea;
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
    console.log(`${username}`)
    console.log(`${emailids}`)
    console.log(`${passwrd}`)
    console.log(`${Repasswrd}`)
    registration.reset();
}
const loginform=document.getElementById("login");
if(loginform) loginform.addEventListener('submit', login)
function login(e){
    e.preventDefault();
    let user=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    console.log(`${user}`)
    console.log(`${password}`)
    loginform.reset();
}

const noteform=document.getElementById("note");
if(noteform) noteform.addEventListener('submit',note)
function note(e){
    e.preventDefault();
    let notefield=document.getElementById('textarea').value;
    console.log(`${notefield}`)
    noteform.reset();
}
