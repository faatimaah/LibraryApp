const express = require('express');
const app = express();
const nav = [
    {
        link:'/books',
        name:'Books'
    },
    {
        link:'/authors',
        name:'Authors'
    },
    {
        link:'/addbook',
        name:'Add Book'
    },
    {
        link:'/addauthor',
        name:'Add Author'
    }
]
        
const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const addbookRouter = require('./src/routes/addbookRoutes')(nav)
const addauthorRouter = require('./src/routes/addauthorRoutes')(nav)
const signupRouter=require('./src/routes/signupRoutes');

app.use(express.urlencoded({extended:true}));//middleware
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');

app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/signup',signupRouter);



app.get('/',function(req,res){
    // res.render("index",
    // {
    //     nav,
    //     title:'Library'
    // });
});
app.get('/home',(req,res)=>{
    res.render("home",
    {
        nav,
        title:'Library'
    });
})


app.get('/login',(req,res)=>{
    res.render("login");
})


app.listen(5000);