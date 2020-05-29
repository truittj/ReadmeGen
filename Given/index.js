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
            message: "Contributors",
            name: "credits"
        },

        {
            type: "list",
            message: "Select your license:",
            name: "license", 
            choices: ["None", "Public domain", "GPL", "LGPL", "MIT/X11", "BSD", "Apache", "Eclipse", "Mozilla", "MS Premissive", "MS Community", "MS Reference"],
            default: " "
        },
        {
            type: "input",
            message: "Other Licenses:",
            name: "oL",
            default: " "
        },
        {
        type: "input",
        message: "Questions:",
        name: "questions",
        default: " "
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


    function generate (answers) {
      return `
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-v2.0%20adopted-ff69b4.svg)](code_of_conduct.md)
![Badge](https://img.shields.io/badge/ReadMe${answers.userTitle}-${answers.version}-${answers.badgeColor})
# ${answers.userTitle}

## Description

${answers.disciption}

## Current Version 

${answers.version}

## Table of Contents

    * Installation
    * Usage
    * License
    * Contributing
    * User GitHub profile picture
    * User GitHub email
                
## Installation

${answers.install}

## Usage

${answers.usage}

## License

${answers.license} ${answers.oL}

## Contributing

${answers.credits}

##Questions
${answers.questions}

## Contact Information

https://github.com/${answers.gitHubID}
[! gitHub Avatar] (${answers.avatar_url})

`
    };
//0. grab inquirer response
    userPrompt()
    .then(function({gitHubID, install, credits, questions, oL, license, usage, version, description, userTitle}) {
       
        //1. get github via axios
        const queryUrl = `https://api.github.com/users/${gitHubID}/repos?per_page=100`;
        //pass everything thorugh the answers obj
        var answers = {
            userTitle : userTitle,
            description : description,
            verion : version,
            usage : usage,
            license : license,
            oL : oL,
            quetions : questions, 
            credits : credits, 
            install : install,
            gitHubID : gitHubID,
            queryUrl : queryUrl
        };
        axios.get(queryUrl).then(function(res) {
            answers.avatar_url=res.data[0].owner.avatar_url;
            return answers
        })
        .then(function(answers) {
             //2. generate template
           const md = generate(answers);
           //3. write the file
             return writeFileAsync("README.md", md);
        }); 
    })
    .then(function() {
      console.log("Successfully wrote to README.md");
    })
    .catch(function(err) {
      console.log(err);
    });

