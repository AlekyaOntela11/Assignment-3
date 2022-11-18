const { response } = require('express');
const express = require('express');
const app = express();
const userRoutes = require('./Server/routes/user');
const noteRoutes=require('./Server/routes/note');

app.use(express.json());

//CORS middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");  
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");  
  next();
});

app.use("/user", userRoutes);
app.use("/note",noteRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT,()=>console.log('Server started on port',{PORT}));


