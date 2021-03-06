const express = require('express');
const bodyParser = require ('body-parser');
const app = express();
const Post = require('./models/post');
const mongoose = require ('mongoose');
const postsRoutes = require ('./routes/posts');
const { readBufferWithDetectedEncoding } = require('tslint/lib/utils');
mongoose.connect("mongodb://localhost:27017/instad")
.then(()=>{
  console.log('Connected to database');
})
.catch(()=>{
  console.log('Connection failed');
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
app.use((req, res, next)=>{
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, PUT, POST, PATCH, DELETE, OPTIONS");
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;

//DYe7tkZHmDrdEFw8
