const inquirer = require("inquirer");
const fs = require("fs");
const mysql = require("mysql2");
// const viewHandler = require("./promptHandler");
const consoleTable = require("console.table");



const database = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Bootcamp2023!",
        database: "employees_db"

    },
);

const questions = [

    {
        type: "list",
        name: "commands",
        message: "What would you like to do?",
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

        .then(function (answers) {
            // views commands used for debugging 
            console.log(answers);
            const { commands } = answers;

            if (commands === "View All Employees") {
                viewEmployee();
            }
            if (commands === "Add Employee") {
                addEmployee();
            }
            if (commands === "Update Employee Role") {
                updateEmployee();
            }
            if (commands === "View All Roles") {
                viewRoles();
            }
            if (commands === "Add Role") {
                addRoles();
            }
            if (commands === "View All Departments") {
                viewDepartments();
            }
            if (commands === "Add Department") {
                addDepartments();
            }



        });
};


function viewEmployee() {
    console.log("Here are Employees \n");
    startPrompt();
};

function addEmployee() {
    console.log("Add Employee Here \n");
    startPrompt();
};

function updateEmployee() {
    console.log("Updates to Employee Made Here \n");
    startPrompt();
};

function addRoles() {
    console.log("Add Roles Here \n");
    startPrompt();
};

function viewRoles() {
    console.log("Here you can view all Roles \n");
    startPrompt();
};

function viewDepartments() {
    console.log("Here are all the Departments \n");
    startPrompt();
};

function addDepartments() {
    console.log("Add Department Here \n");
    startPrompt();
};

startPrompt();


