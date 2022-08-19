// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");

//in node type: npm init -y
//in node type: npm i inquirer@8.2.4

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
    console.info();
    let badge;
    switch (answers.license) {
      case "BSD":
        badge = "[BSD](https://en.wikipedia.org/wiki/BSD_licenses)";

        break;
      case "MIT":
        //DO ABOVE FOR LINK
        break;

      case "GPL":
        //DO ABOVE FOR LINK
        break;
      default:
        "No license specified";
    }
  });
// TODO: Create a function to write README file
//look at documentation fs write to file module
function writeToFile(fileName, data) {
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
