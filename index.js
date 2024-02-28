const express = require('express');
const path = require('path');
const app = express();
const rota = express.Router();

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/pages/home.html"))
})
app.get("/contato",(req,res)=>{
    res.sendFile(path.join(__dirname + "/pages/contato.html"))
})




app.listen(process.env.PORT || 3000,(req,res)=>{
    console.log("servidor rodando")
})