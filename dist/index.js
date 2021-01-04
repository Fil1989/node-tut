"use strict";

// const message = "Node.js in amazing!";
// console.log(message);
var validator = require("validator"); // import validator from "validator";


var validateEmail = function validateEmail(email) {
  return validator.isEmail(email);
};

console.log("Is mango@mail.com a valid email?: ", validateEmail("mango@mail.com"));
console.log("Is Mangozedog.com a valid email?: ", validateEmail("Mangozedog.com"));