const express = require('express');
const User = require('../models/user');
const router = express.Router();

router.get('/',  async (req,res)=> {
  try {

    const users =  await User.getUser();
    res.send(users);

  }
  catch(err){
    res.status(401).send({message: 'error'});
  }
}
);
module.exports=router;
