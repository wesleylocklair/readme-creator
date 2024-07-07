const fs = require('fs')
const inquirer = require('inquirer')
const colors = require('colors')

inquirer
    .prompt([
        {
        type:'input' ,
        message: "Howre you?" ,
        name: "answer"
        }     
    ])