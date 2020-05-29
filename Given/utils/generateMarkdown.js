const index = require('../index')

function generateMarkdown(data) {
  return 
# ${data.title}




![Badge](https://img.shields.io/badge/ReadMe${data.userTitle}-${data.version}-${badgeColor})



;
console.log($data.title)


}

module.exports = generateMarkdown;
