const express = require('express');
const addbookRouter = express.Router();
const Bookdata = require('../model/Bookdata')


function router(nav){
addbookRouter.get('/',function(req,res){
    res.render("addBook",
{
    nav,
    title:'Library',
});
});

addbookRouter.post('/add',function(req,res){
    var item = {
    name: req.body.name,
    author: req.body.author,
    genre: req.body.genre,
    image: req.body.image
   }
    var book = Bookdata(item);
    book.save(); //save to database
    res.redirect('/books');
});

     return addbookRouter;

}

module.exports = router;