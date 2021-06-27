// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  //prompt for username
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username.",
  },
  //prompt for user's email
  {
    type: "input",
    name: "email",
    message: "Enter your email.",
  },

  //prompt for repository name
  {
    type: "input",
    name: "repository",
    message: "Please enter the name of your GitHub repository name.",
  },
  //prompt user for project title
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project.",
  },
  //prompt for project description
  {
    type: "input",
    name: "description",
    message: "Enter a description for your project.",
  },
  //prompt for project installation
  {
    type: "input",
    name: "installation",
    message: "Explain the installation process(if any).",
  },
  //prompt for project usage
  {
    type: "input",
    name: "usage",
    message: "What is the main usage for the project?",
  },

  {
    type: "input",
    name: "collaborators",
    message: "Describe or list the contributors for this project. ",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide test, if there's any included.",
  },
  {
    type: "list",
    name: "license",
    message: "Choose your license for your project.",
    choices: [
      "afl-3.0",
      "apache-2.0",
      "artistic-2.0",
      "bsl-1.0",
      "bsd-2-clause",
      "bsd-3-clause",
      "bsd-3-clause-clear",
      "cc",
      "cc0-1.0",
      "cc-by-4.0",
      "wtfpl",
      "ecl-2.0",
      "epl-1.0",
      "epl-2.0",
      "eupl-1.1",
      "agpl-3.0",
      "gpl",
      "gpl-2.0",
      "gpl-3.0",
      "lgpl",
      "lgpl-2.1",
      "lgpl-3.0",
      "isc",
      "lppl-1.3c",
      "ms-pl",
      "mit",
      "mpl-2.0",
      "osl-3.0",
      "postgresql",
      "ofl-1.1",
      "ncsa",
      "unlicense",
      "zlib",
    ],
  },
  {
    type: "input",
    name: "questions",
    message: "Describe your questions(if any).",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Your file has been created!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(function (data) {
    const generate = generateMarkdown(data);
    const title = data.title.toLowerCase().split(" ").join("") + ".md";
    writeToFile(title, generate);
  });
}

// Function call to initialize app
init();
