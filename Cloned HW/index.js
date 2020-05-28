const inquirer = require('inquirer');

const questions = [
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
          }
          {
            type: "list",
            message: "Select the color of Badge:",
            choices: ["brightgreen", "green", "yellowgreen", "yellow", "orange", "red", "blue", "lightgrey", "blueviolet", "ff69b4", "9cf"],
            default: "blue",
            name: "badgeColoe",
          }


])];

function writeToFile(fileName, data) {


}

function init() {

}

init();
