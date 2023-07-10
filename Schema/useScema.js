const mongoose = require('mongoose')

const validateEmail = function(email) {
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regex.test(email);
};

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required."],
    validate: {
      validator: function (name) {
        return /^[a-zA-Z]+$/.test(name);
      },
      message: "Only alphabetic characters allowed.",
    },
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validateEmail, "Please enter a valid email"],
    unique: true,
  },
  
    subject:String,
    Message:String
})

module.exports = mongoose.model("users",usersSchema)


