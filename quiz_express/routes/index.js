var express = require('express');
var router = express.Router();

const controllerquizzes = require('../controllers/quiz');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/credits', function(req,res,next){
  res.render('credits');
});

router.get('/quizzes', controllerquizzes.index);
module.exports = router;
