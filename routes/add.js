var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next){
    res.render('add_page', {title: 'Add Page'})
})


router.post('/submit', function(req, res, next) {
    var models = require('../models/');
    var postTitle = req.body.postTitle;
    // if the string is empty
    if(!postTitle){
        postTitle = Date.now().toString();
    }
    var postContent = req.body.postContent;
    var url_name = postTitle.replace(/\W/g, ' ').replace(/\s/g,'_').toLowerCase();
    var page = new models.Page({'title': postTitle, 'content': postContent, 'url_name': url_name})
    page.save().end();
    res.redirect('/');

});

module.exports = router;
