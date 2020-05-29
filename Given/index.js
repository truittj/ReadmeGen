const inquirer = require('inquirer');
const axios = require ('axios');
const fs = require ('fs');  
const generateMarkdown = require('./utils/generateMarkdown')

const writeFileAsync = util.promisify(fs.writeFile);

function userPrompt () {
    inquirer
    .prompt([
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
            type: "editor",
            message: "Provide a discription to your project (once the editor launches, type your message followed by hitting the ESC key, then :wq):",
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
            choices: ["None", "Public domain", "GPL", "LGPL", "MIT/X11", "BSD", "Apache", "Eclipse", "Mozilla", "MS Premissive", "MS Community", "MS Reference"]
        },

        {
            type: "list",
            message: "Select the color of Badge:",
            choices: ["brightgreen", "green", "yellowgreen", "yellow", "orange", "red", "blue", "lightgrey", "blueviolet", "ff69b4", "9cf"],
            default: "blue",
            name: "badgeColor",
        }
        ])
    };



    function generate (answers) 
    {
      return `
            Alt-#${answers.userTitle} ${'![Badge](https://img.shields.io/badge/ReadMe${answers.userTitle}-${answers.version}-${answers.badgeColor})'}
            
            ###Description
                ${answers.disciption}

           ###Table of Contents
                * Installation
                * Installiation Instructions and Current Version 
                * License
                * Contributing
                * Tests
                * Questions
                * User GitHub profile picture
                * User GitHub email
                
            ###Installation
            ${answers.disciption}

            ###Installiation Instructions and Current Version 
            ${answers.disciption}

            ###License
            ${answers.license}

            ###Contributing
            ${answers.disciption}
            
            ###Tests
            ${answers.disciption}

            ###Questions
            ${answers.disciption}

            ###Contact Information
            ${answers.disciption} ${answers.disciption}


      `

function writeToFile(fileName, data) {


}

function init() {

}

init();
