const express = require('express'); // import the express packages we just installed

const app = express(); // this will return an express app

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); // this is important because server can't communicate with client if they are on different hosts (3000 & 4200, will get the CORS error. The start* sign means allow all domains to access the resources
  res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept"); // even though we allow all the domains to access at the above line, here we can restrict the headers in the domains
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS"); // options are sent prior to POST, so we need it here
  next(); // so that it will call the next middleware
})

// we can pass as many as arguments as we want, the first argument is the path we want to filter down. only this path will lead to this middleware
app.use('/api/menus', (req, res, next) => {
  const menus = [
    {
      id: "3",
      name: "test1",
      description: "this is coming from the server test1",
      imageUrl: "test1",
    },
    {
      id: "4",
      name: "test2",
      description: "this is coming from the server test2",
      imageUrl: "test2",
    }
  ];
  // we can simply return desserts, but we can make it more complicated as well such as adding "message"
  res.status(200).json({
    message: 'Menus fetched successfully',
    menus: menus
  }) // return data in the json format
});

// export this entire express app, this will also return all the middlewares we created
module.exports = app;
