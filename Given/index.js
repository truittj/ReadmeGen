const inquirer = require('inquirer');
const axios = require ('axios');
const fs = require ('fs');
const util = require("util");  
//const generateMarkdown = require('./utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

function userPrompt () {
    return inquirer.prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "userTitle"
        },

        {
            type: "input",
            message: "What is the version of this project",
            name: "version"
        },

        {
            type: "input",
            message: "What is your github userID?",
            name: "gitHubID"
        },

        {
            type: "input",
            message: "Provide a discription to your project:",
            name: "disciption"
        },

        {
            type: "input",
            message: "Provide specific instructions on how to install your product:",
            name: "install"   
        },

        {
            type: "input",
            message: "Provide a discription on how users can use your product:",
            name: "usage"
        },

        {
            type: "input",
            message: "Who else gets credit",
            name: "credits"
        },

        {
            type: "list",
            message: "Select your license:",
            name: "license",
            choices: ["None", "Public domain", "GPL", "LGPL", "MIT/X11", "BSD", "Apache", "Eclipse", "Mozilla", "MS Premissive", "MS Community", "MS Reference"],
            default: "None"
        },

        {
            type: "list",
            message: "Select the color of Badge:",
            choices: ["brightgreen", "green", "yellowgreen", "yellow", "orange", "red", "blue", "lightgrey", "blueviolet", "ff69b4", "9cf"],
            default: "blue",
            name: "badgeColor"
        }
        ]);
    }

    function badge (data) {
        return axios
    .get("https://img.shields.io/badge/ReadMe" + data.userTitle + "-" + data.version + "-" + badgeColor)
    .then(function(res) {
      console.log(res);
    })};

    function generate (answers) 
    {
        
      return `
# ${answers.userTitle} ${badge()}
## Description
${answers.disciption}

## Table of Contents
    * Installation
    * Current Version 
    * License
    * Contributing
    * User GitHub profile picture
    * User GitHub email
                
## Installation
${answers.install}

## Current Version 
${answers.version}

## License
${answers.license}

## Contributing
${answers.credits}

## Contact Information
${answers.disciption} @${answers.gitHubID}
`
    };

    userPrompt()
    .then(function(answers) {
      const md = generate(answers);
  
      return writeFileAsync("README.md", md);
    })
    .then(function() {
      console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
      console.log(err);
    });

    
// function writeToFile(fileName, data) {



// }

// function init() {

// }

// init();
