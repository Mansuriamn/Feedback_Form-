const mongoose = require("mongoose");

const feedSchema= new mongoose.Schema({
           name: String,
           email: String,
           message: String
         });

module.exports = mongoose.model("Userdata", feedSchema);