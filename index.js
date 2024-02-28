const express = require('express');
const path = require('path');
const app = express();
const rota = express.Router();

rota.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})
rota.get("/contato",(req,res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})

app.use(rota)
const port = process.env.PORT || 3000;

app.listen(port,(req,res)=>{
    console.log("servidor rodando")
})