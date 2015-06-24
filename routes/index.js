var express = require('express');
var router = express.Router();
var Page = require('../models').Page;


/* GET home page. */
router.get('/', function(req, res, next) {
    Page.find({},function(err, data){
        if(err) throw err;
        res.render('index', { title: 'Wikistack', docs: data});
    })

});





module.exports = router;
