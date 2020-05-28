const fs = require('fs');

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the title of your project?",
      name: "userTitle"
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

        /*
            Badges...

        https://img.shields.io/endpoint?url=...&style=...
        
        {
          "schemaVersion": 1,
          "label": "hello",
          "message": "sweet world",
          "color": "orange"
        }*/

      ])
      .then(function(response) {
            fs.appendFile("README.md", response.disciption + "/n", function(err) {
             if (err) {
                return console.log(err);
              }
              console.log("Your response has been logged to README.md");
            })
        });
    

        // At least one badge
        // * Project title
        // *Description
        // * Table of Contents
        // * Installation
        // * Usage
        // * License
        // * Contributing
        // * Tests
        // * Questions
        //   * User GitHub profile picture
        //   * User GitHub email


    //return `You passed ${args.length} arguments.`;