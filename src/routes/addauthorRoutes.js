const express = require('express');
const addauthorRouter = express.Router();
const Authordata = require('../model/Authordata')

function router(nav){
    addauthorRouter.get('/',function(req,res){
        res.render("addAuthor",
    {
        nav,
        title:'Library',
    });
    });
    
    addauthorRouter.post('/add',function(req,res){
    var item = {
    name: req.body.name,
    image: req.body.image,
    about: req.body.about
   }
    var author = Authordata(item);
    author.save(); //save to database
    res.redirect('/authors');
});

     return addauthorRouter;
}

module.exports = router;