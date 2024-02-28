const express = require('express');
const router = express.Router();
const path = require('path');
router.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname + "/home.html"))
})

router.get("/contato",(req,res)=>{
    res.sendFile(path.join(__dirname + "/contato.html"))
})
module.exports = router;