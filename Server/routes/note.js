const express = require('express');
const User = require('../models/user');
const Note = require('../models/note');
const router = express.Router();

router
  .get('/', async (req, res) => {
    try {
      const note = await User.allUsers();
      res.send(note);
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })

  .post('/Note', async (req, res) => {
    try {
      let note = await Note.login(req.body);
      res.send({...note,noteId,noteContent: undefined})
    } catch(err) {
      res.status(401).send({message: err.message});
    }
  })
  module.exports = router;