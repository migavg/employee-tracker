const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");

const consoleTable = require("console.table");



const database = mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"Bootcamp2023!",
        database: "employees_db"

    },
);

const questions = [

    {
        type:"list",
        name:"commands",
        message:"What would you like to do?",
        choices: 
        ["View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department"]
    }
]

function startPrompt() {
    inquirer.prompt(questions)
    .then(function(answers){
        console.table(answers)
    });

};

startPrompt(database);