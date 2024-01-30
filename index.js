const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the name of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Short description",
  },
  {
    type: "input",
    name: "installation",
    message: "Installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this application?",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project",
    choices: [
      "Apache license 2.0",
      "MIT License",
      "GNU General Public License v3.0",
      "Boost Software License v 1.0",
      "Eclipse Public License 2.0",
    ],
  },
  {
    type: "input",
    name: "motivation",
    message: "Why did you build this project?",
  },
  {
    type: "input",
    name: "features",
    message: "What makes your project unique?",
  },
  {
    type: "input",
    name: "tests",
    message: "What problem did it solve?",
  },
];
// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFileSync(fileName, data);
}

// Function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    // License badge based on user's choice
    console.log(response);

    const markdown = generateMarkdown(response);
    writeToFile("README.md", markdown);
    console.log("README.md successfully generated!");
  });
}

// Function call to initialize program
init();
