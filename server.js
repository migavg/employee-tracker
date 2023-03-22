const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");

const db = mysql.createConnection(
    {
        host:"local host",
        user:"root",
        password:"",
        database: "employees"

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
    .then()

}

startPrompt();