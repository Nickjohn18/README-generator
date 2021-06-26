// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = inquirer.prompt([
  //prompt for username
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username.",
  },
  //prompt for repository name
  {
    type: "input",
    name: "repository",
    message: "Please enter the name of your GitHub repository name.",
  },
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Explain how user would implement installation.",
  },
  {
    type: "input",
    name: "usage",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "contribution",
    message: "What is your name?",
  },
  {
    type: "input",
    name: "tests",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license for your project.",
    choices: "",
  },
]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, JSON.stringify(data, null, "\t"), function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Your file has been created!");
  });
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
