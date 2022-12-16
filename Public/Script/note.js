class Note {
    constructor(noteContent) {
      this.noteContent = noteContent; 
    }
  
    getNotename() {
      return this.noteContent;
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
  // note functionality
  let user=getCurrentUser();
  let notetaking=document.getElementById("note");
  if(notetaking) notetaking.addEventListener('submit',displayNote)
  
  function displayNote(e){
      e.preventDefault();
      let notes=document.getElementById('textarea').value;
      let note= new Note(notes);
      console.log(note);
      console.log("note taking");

      fetchData("/notes/noteTake", notes, "POST")
      .then((data)=>{
        console.log(note);
        setCurrentUser(data);
        window.location.href = "Notemaking.html";
      })
      .catch((err)=>{
        console.log(`Error!!! ${err.message}`)
      })
  }
  function setCurrentUser(note) {
    localStorage.setItem('note', JSON.stringify(note));
  }
  function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
  
  // logout function for current user
  function removeCurrentUser() {
    localStorage.removeItem('user');
    window.location.href = "Login.html";
  }
  let logout = document.getElementById("Logout");
if(logout) logout.addEventListener('click', removeCurrentUser);