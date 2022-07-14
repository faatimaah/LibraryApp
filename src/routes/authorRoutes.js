const express = require('express');
const authorsRouter = express.Router();
const Authordata = require('../model/Authordata');//accessing authordata
function router(nav){
 
    authorsRouter.get('/',function(req,res){
        Authordata.find() //find all authors in db
        .then(function(authors){
            res.render("authors",{
                nav,
                title:'Library',
                authors
            });
        })
           
    });
    
    authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        Authordata.findOne({_id: id}) //find single author
        .then(function(author){
            res.render("author",{
                nav,
                title:'Library',
                author
            });
        })
    });

    return authorsRouter;
}


module.exports = router;