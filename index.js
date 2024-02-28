// const express = require('express');
// const path = require('path');
// const app = express();
// const rota = express.Router();

// rota.get("/",(req,res)=>{
//     res.sendFile(path.join(__dirname + "/home.html"))
// })
// rota.get("/contato",(req,res)=>{
//     res.sendFile(path.join(__dirname + "/contato.html"))
// })

// app.use(rota);
// const port = process.env.PORT || 3000;

// app.listen(port,(req,res)=>{
//     console.log("servidor rodando")
// })

const express = require('express');
const app = express();
const routes = require('./routes');

app.use('/', routes);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});