const express = require('express');
const Note = require('../models/note');
const router = express.Router();

router.get('/', async (req,res)=> {
  try {
    const notes = await Note.getNote();
    res.send(notes);
  }
  catch(err){
    res.status(401).send({message: 'error in note'});
  }
})

.post('/noteTake', async (req, res) => {
  try {
    let note = await Note.noteTake(req.body);
    res.send({...note,note_id,note_content: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})
//ost createpost read
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
