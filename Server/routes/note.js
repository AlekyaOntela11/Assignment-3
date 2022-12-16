const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router
.get('/', async ( req,res )=> {
  try {
    const note = await Note.getNote();
    res.send(note);
  }
  catch(err){
    res.status(401).send({message: 'error in note'});
  }
})

.post('/noteTake', async (req, res) => {
  try {
    let note = await Note.noteTake(req.body);
    console.log(note);
    console.log("notetaking");
    res.send({...note,note_id,note_content: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})

.post('/read', async (req,res) => {
try {
let note =await Note.Read(req.body);
res.send(note);
}
catch(err) {
res. status(401).send ( {messages: err,message});
}
})
//put createpost read
.put('/edit', async (req, res) => {
  try {
    let note = await Note.editNote(req.body);
    res.send({...note,note_id,note_content: undefined});
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})
.delete('/delete', async (req, res) => {
  try {
    Note.deleteUser(req.body);
    res.send({success: "Deleted the note."})
  } catch(err) {
    res.status(401).send({message: err.message})
  }
})
module.exports=router;
