// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");

//in node type: npm init -y
//in node type: npm i inquirer@8.2.4
//in node, type: node index.js

//To install necessary dependencies, run the following command:
// npm i

const generateMarkdown = ({
  title,
  description,
  installation,
  usage,
  contributing,
  tests,
  license,
  githubUser,
  email,
}) =>
  //replace HTML with MARKDOWN language below
  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
<title>Document</title>
</head>
<body>
<div class="jumbotron jumbotron-fluid">
<div class="container">
  <h1 class="display-4">Hi! My name is ${title}</h1>
  <p class="lead">I am from ${description}.</p>
  <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
  <ul class="list-group">
    <li class="list-group-item">Installation Instructions: ${installation}</li>
    <li class="list-group-item">Usage Instructions: ${usage}</li>
    <li class="list-group-item">Contribution Guidelines: ${contributing}</li>
    <li class="list-group-item">Testing Instructions: ${tests}</li>
    <li class="list-group-item">License information ${license}</li>
    <li class="list-group-item">My GitHub username is ${githubUser}</li>
    <li class="list-group-item">Contact Email: ${email}</li>
  </ul>
</div>
</div>
</body>
</html>`;

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

  .then((response) => {
    const markdownPageContent = generateMarkdown(response);

    fs.writeFile("README.md", markdownPageContent, (err) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });
// .then(function (answers) {
//   console.log(answers);
//   let badge;
//   switch (answers.license) {
//     case "BSD":
//       badge = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
//       break;
//     case "MIT":
//       badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
//       break;
//     case "GPL":
//       badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
//       break;
//     case "Apache":
//       badge = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
//     default:
//       //do I put a "case" and "badge = " before the default?
("No license specified");
//   }
// });

// TODO: Create a function to write README file
//look at documentation fs write to file module
function writeToFile(fileName, data) {
  fs.writeFile();

  // Bonus using writeFileSync as a promise
  const init = () => {
    promptUser()
      // Use writeFile method imported from fs.promises to use promises instead of
      // a callback function
      .then((answers) => writeFile("README.md", generateMarkdown(answers)))
      .then(() => console.log("Successfully wrote to README.md"))
      .catch((err) => console.error(err));
  };
  // Function call to initialize app
  init();
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
