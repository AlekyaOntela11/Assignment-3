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
}

);

module.exports=router;