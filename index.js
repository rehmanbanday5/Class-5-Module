"use strict";
//                      Module Node.js
Object.defineProperty(exports, "__esModule", { value: true });
// 1) Common Js :                            2) ES Modules :
//   Import=> require("")                        Import=>Import
//   Export=> module.exports                     Export=>Export
//   Syncprogramming                          Asyncprogramming
//   Cts.js                                      
// -----------------------------------------------------------------------------------
// import inquirer from "inquirer"
// let answers = async () => await  inquirer.prompt([{
//     name:"username",
//     type: "String",
//     message: "What is your name?",
//     },
//     {
//     name :"email",
//     type: "String",
//     message :"What is your email?",
//     },
//     {
//     name: "contact",
//     type: "number",
//     message: "What is your number?",
// }])
// console.log(answers)
var chalk_1 = require("chalk");
console.log(chalk_1.default.red("hello world"));
