var express = require('express');
var router = express.Router();
var Page = require('../models').Page;
//var marked = require('marked');
var swig = require('swig');
require('../filters')(swig);


router.get('/:url_name', function(req, res, next){
    var url = req.params.url_name;
    // var query = Page.where({url_name: url});
    // query.findOne(function(err, data){
    //     if(err) throw err;
    //     res.render('show', { postTitle: data.title, postContent: data.content});
    // })
    Page.findOne({url_name: url},function(err, data){
        if(err) throw err;
        res.render('show', { postTitle: data.title, postContent: data.content});
    })
})



module.exports = router;
