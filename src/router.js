const express = require('express');

const router = express.Router();

router.route('/test/:id').get( (req, res) => {
  let id = req.params.id;
  console.log(id);

  res.set('Content-Type', 'application/json');
  res.send({"id":id});
});

module.exports = router;
