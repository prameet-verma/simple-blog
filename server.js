// const http= require('http');
// const server= http.createServer((req,res)=>{
//     console.log('request made');
// })

// server.listen(3000,'localhost',()=>{
//     console.log('listening for requests on port 3000')
// });

// Using response object

// const http= require('http');
// const server= http.createServer((req,res)=>{
//     console.log(req.url, req.method);
// })

// server.listen(3000,'localhost',()=>{
//     console.log('listening for requests on port 3000')
// });

// Using response

const http= require('http');
const fs= require('fs');
const _= require('lodash'); // we can use anything insetad of _
console.log(_.random(1,50));

const server= http.createServer((req,res)=>{ 
    // console.log(req.url, req.method);


    //set header content type
    // res.setHeader('Content-Type', 'text/plain')
    // res.write('Hello Prameet');

    // Returning a HTML
    // res.setHeader('Content-Type', 'text/html')
    // res.write('<p>Hello Prameet</p>')
    // res.end();

    // Returning HTML files
    res.setHeader('Content-Type', 'text/html')
    // implementing routing 
    let path = './views/';
    switch(req.url){
        case '/':
            path+='index.html';
            res.statusCode=200;
            break;
        case '/about':
            path+='about.html';
            res.statusCode=200;
            break;
        case '/about-us':
            res.statusCode=301;// for redirection
            res.setHeader('Location', '/about')
            res.end();

        default:
            path+='404.html';
            res.statusCode=404;
            break;
    } 

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err)
            res.end();
        }else{
            res.write(data);
            res.end();
        }
    })
});

server.listen(3000,'localhost',()=>{
    console.log('listening for requests on port 3000')
}); 

