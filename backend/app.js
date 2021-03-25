const express = require('express'); // import the express packages
const bodyParser = require("body-parser"); // use this to parse the request
const mongoose = require("mongoose"); // import mongoose to connect backend with database

const Menu = require('./models/menu'); // import the Menu model
const app = express(); // this will return an express app

// put the database address you want to connect to, here we use localhost 27017
mongoose.connect('mongodb://localhost:27017/dessertStore')
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connections Failed!");
  });

app.use(bodyParser.json());

// set up this to avoid CORS errors
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // this is important because server can't communicate with client if they are on different hosts (3000 & 4200, will get the CORS error. The start* sign means allow all domains to access the resources
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); // even though we allow all the domains to access at the above line, here we can restrict the headers in the domains
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"); // options are sent prior to POST, so we need it here
  next(); // so that it will call the next middleware
});

// we run "npm install --save body-parser" first. it parses the incoming request
// POST will send data to MongoDB
app.post("/api/menus", (req, res, next) => {
  // create a new Menu by using the data sent from the users
  const menu = new Menu({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  });
  menu.save(); // by mongoose package

  res.status(201).json({
    message: "Menu added successfully"
  });
});

// we can pass as many as arguments as we want, the first argument is the path we want to filter down. only this path will lead to this middleware
// GET to retrieve data from MongoDB
app.get('/api/menus', (req, res, next) => {
  // grab all the documents in the "Menu" collection
  Menu.find()
    .then(documents => {
      // we can simply return menus, but we can make it more complicated as well such as adding "message"
      res.status(200).json({
        message: 'Menus fetched successfully',
        menus: documents,
      }) // return data in the json format

      console.log("Fetched data from MongoDB successfully!");
    }); // return all results from MongoDB
});

// export this entire express app, this will also return all the middlewares we created
module.exports = app;
