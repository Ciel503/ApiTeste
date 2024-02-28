const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
  res.send('Rota 1');
});

router.get('/rota2', function(req, res) {
  res.send('Rota 2');
});

module.exports = router;