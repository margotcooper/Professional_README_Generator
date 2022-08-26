// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

//in node type: npm init -y
//in node type: npm i inquirer@8.2.4
//in node, type: node index.js

// TODO: Create an array of questions for user input

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "What is the description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What are the installation instructions?",
    },
    {
      type: "input",
      name: "usage",
      message: "What is the usage information for your project?",
    },
    {
      type: "input",
      name: "contributing",
      message: "What are the contribution guidelines?",
    },
    {
      type: "input",
      name: "tests",
      message: "What are the test instructions?",
    },
    {
      type: "list",
      name: "license",
      message: "Which of these options describe your licensing?",
      choices: [
        { value: "BSD", name: "BSD" },
        { value: "MIT", name: "MIT" },
        { value: "GPL", name: "GPL" },
        { value: "Apache", name: "Apache" },
      ],

      //do another set of objects, name and value for each choice value 'BSD' name 'BSD license'
    },
    {
      type: "input",
      name: "githubUser",
      message: "What is your Github username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ])

  .then(function (answers) {
    console.log(answers);
    let badge;
    switch (answers.license) {
      case "BSD":
        badge = "[BSD](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      case "MIT":
        badge = "[MIT](https://opensource.org/licenses/MIT)";
        break;
      case "GPL":
        badge = "[GPL](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "Apache":
        badge = "[Apache](https://opensource.org/licenses/Apache-2.0)";
      default:
        //do I put a "case" and "badge = " before the default?
        "No license specified";
    }
  });
// TODO: Create a function to write README file
//look at documentation fs write to file module
function writeToFile(fileName, data) {
  fs.writeFile();

  //this creates the readme file part of fs module
  // return `# ${}`
}
// THIS PROJECT DOESN'T REQUIRE ARGV
// fs.appendFile("log.txt", `${process.argv[2]}\n`, (err) =>
//   // TODO: Describe how this ternary operator works
//   //if there is an error, then console log "error", else log "Commit logged"
//   err ? console.error(err) : console.log("Commit logged!")
// );
// // TODO: Create a function to initialize app
// function init() {
//     //
// }

// // Function call to initialize app
// init();
