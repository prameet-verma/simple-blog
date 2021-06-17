//register view engine (lecture 7)

//listen for requests
// this will handle view engine and node

const { render } = require("ejs");
const express = require("express");
const { result } = require("lodash");
const mongoose = require("mongoose");
const morgan = require("morgan");

const blogRoutes= require('./routes/blogRoutes');

// const morgan = require("morgan");

//a console logger 3rd party middleware
// const morgan = require("morgan");// 15th June using middleware packages
// app.use(morgan('dev'))

//express app
const app = express();
app.set("view engine", "ejs");

const dbURL =
  "mongodb+srv://prameet:prameet12345@nodemongolearning.qqbuf.mongodb.net/NodeMongoLearning?retryWrites=true&w=majority";
mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log("Connected to DB");
    app.listen(3000);
    console.log("Port COnnected");
  })
  .catch((err) => console.log(err));



// getting all blogs from DB
// app.get("/all-blogs", (req,res)=>{
//     Blog.find()
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// })

// // getting single blog
// app.get("/single-blog", (req,res)=>{
//     Blog.findById("60c874bb61ea89464c0a59ce")
//     .then((result)=>{
//         res.send(result)
//     })
//     .catch((err)=>{
//         console.log(err);
//     })

// })

// middleware and static files 15th June
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
// static public means that every file in public folder is accessible by the browser

app.get("/", (req, res) => {
  //     const blogs = [
  //         {title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  //         {title: 'Mario finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  //         {title: 'How to defeat bowser', snippet: 'Lorem ipsum dolor sit amet consectetur'},
  //       ];
  //   res.render("index",{title: 'Home', blogs});
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  // 14-06-21 we can also pass values/data from one file to another

  res.render("about", { title: "About" });
});
//blogs/create page



// redirects

app.get("/about-us", (req, res) => {
  res.redirect("/about", { title: "About" });
});
// blog routes
app.use("/blogs",blogRoutes);

//404 page
app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
