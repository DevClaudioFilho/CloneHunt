const express = require('express');
const cors =require('cors');
const mongoose =require('mongoose');
const requireDir = require('require-dir')

//INICIA O APP
const app = express();
app.use(express.json());
app.use(cors());

//INICIA O DB RESLACIONAL
mongoose.connect(
  "mongodb://localhost:27017/nodeapi",
  {useUnifiedTopology: true, useNewUrlParser:true}
);

//ACESSO AOS MEUS MODELS
requireDir('./src/models');

app.use('/api',require('./src/routes'));

//PORTA NA QUAL ESTA O APP
app.listen(3001);

