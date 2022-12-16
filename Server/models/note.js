const con= require("./db_connect");

// Table Creation 
  async function createTable() {
    let sql='create table IF NOT EXISTS notes ( note_id INT NOT NULL AUTO_INCREMENT, note_content VARCHAR(150) NOT NULL,user_id INT,CONSTRAINT note_pk PRIMARY KEY(note_id),CONSTRAINT user_fk FOREIGN KEY(user_id) REFERENCES users(user_id));'
    await con.query(sql);
  }
createTable();

// grabbing all notes in database
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  console.log(notes);
  return notes;
}

// Create  Note
async function noteTake(note){
  const sql = `INSERT INTO notes (note_id,note_content,user_id)
    VALUES ("${note.note_content}", "${note.note_id}","${note.userID}");
  `
  await con.query(sql);
  return {message:"Successfully added notes"}
}
async function fetch(note){
  let cNote = await getNote(note);
let sql = "SELECT users.userName, notes.notecontent FROM users,notes WHERE users.userrD-notes.usertd;";
if(!cNote[e]) throw Error ( "Note not found");
}

//Useful function
async function getNote(note){
  let sql;
if(note.userID){
  sql = `
  SELECT * FROM notes
   WHERE user_id = ${note.userID}
`;
}
else
{
  sql = `
  SELECT * FROM notes
   WHERE note_id = ${note.noteID}
`;
}
}
// Update Note function
async function editNote(note) {
  let sql = `UPDATE notes 
    SET note_contentt = "${note.note_content}"
    WHERE note_id = ${note.noteID}`;

  await con.query(sql);

  let updateduser = await getNote(note);
  return updateduser[0];
}

// Delete Note function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE user_id  = ${note.noteId}`;

 await con.query(sql);
}
module.exports = { getAllNotes,noteTake,editNote, deleteNote};
