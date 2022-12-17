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
  const sql = `INSERT INTO notes (note_content)
    VALUES ("${note.note_content}");
  `
  await con.query(sql);
 return {message:"Sucessfully added note"};
}
async function readNote(note){
  let cNote = await getNote(note);
if(!cNote[e]) throw Error ( "Note not found");
return cNote;
}

//Useful function
async function getNote(note){
  let sql;
if(note.user_id){
  sql = `
  SELECT * FROM notes
   WHERE user_id = ${note.user_id}
`;
console.log(sql);
}
else
{
  sql = `
  SELECT * FROM notes
   WHERE note_id = ${note.note_id}
`;
}
}
// Update Note function
async function editNote(note) {
  let sql = `UPDATE notes 
    SET note_contentt = "${note.note_content}"
    WHERE note_id = ${note.note_id}`;

  await con.query(sql);

  let updateduser = await getNote(note);
  return updateduser[0];
}

// Delete Note function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE user_id  = ${note.note_id}`;

 await con.query(sql);
}
module.exports = { getAllNotes,readNote,noteTake,editNote, deleteNote};
