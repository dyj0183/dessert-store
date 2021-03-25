// create menu model by using mongoose
const mongoose = require("mongoose");

// create a schema! Schema is like a blue print. In order to use it, we need to turn this into a model using mongoose.model
const menuSchema = mongoose.Schema({
  // id will be generated automatically by mongoose
  name: { type: String, required: true }, // you can just put the type here, but you can actually do more than that by adding another object
  description: { type: String, required: true },
  price: { type: String, required: true },
  imageUrl: { type: String }
});

// in order to use this model outside of this file, we need to export it using "module.exports"
module.exports = mongoose.model('Menu', menuSchema) // first argument should be the name of the model, second arguement is the schema you want to use

