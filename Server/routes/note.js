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
// .post('/login', async (req, res) => {
//   try {
//     let note = await Note.login(req.body);
//     res.send({...note_id,note_content: undefined})
//   } catch(err) {
//     res.status(401).send({message: err.message});
//   }
// })

.post('/register', async (req, res) => {
  try {
    let note = await Note.register(req.body);
    res.send({...note_id,note_content: undefined})
  } catch(err) {
    res.status(401).send({message: err.message});
  }
})
.put('/edit', async (req, res) => {
  try {
    let note = await Note.editUser(req.body);
    res.send({...note_id,note_content: undefined});
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
