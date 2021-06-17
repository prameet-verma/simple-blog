const express = require('express');

//express app

const app= express();

//register view engine (lecture 7)
// it automaticlly loooks into views folder
app.set('view engine', 'ejs');


//listen for requests

app.listen(3000);

app.get('/', (req,res)=>{
    
    // res.send('<p>Express Homepage</p>')
    res.sendFile('./views/index.html', {root: __dirname});
    // the second argument is make the path realtive to the current directory
    // as Express takes absolute paths only
})

app.get('/about', (req,res)=>{
    res.sendFile('./views/about.html', {root: __dirname});
}) 

// redirects

app.get('/about-us', (req,res)=>{
    res.redirect('/about');
})

//404 page
app.use((req,res)=>{
    res.status(404).sendFile('./views/404.html', {root: __dirname});
})
