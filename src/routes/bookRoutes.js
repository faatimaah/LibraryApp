const express = require('express');
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');//accessing bookdata
function router(nav){
 
    booksRouter.get('/',function(req,res){
        Bookdata.find() //find all books in db
        .then(function(books){
            res.render("books",{
                nav,
                title:'Library',
                books
            });
        })
           
    });
    
    booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        Bookdata.findOne({_id: id}) //find single book
        .then(function(book){
            res.render("book",{
                nav,
                title:'Library',
                book
            });
        })
    });

    return booksRouter;
}


module.exports = router;