function generateMarkdown(data) {
  return `
# ${data.title}

Badges...

https://img.shields.io/endpoint?url=...&style=...

{
"schemaVersion": 1,
"label": "hello",
"message": "sweet world",
"color": "orange"
}


![Badge](https://img.shields.io/badge/ReadMe${data.userTitle}-${data.version}-${badgeColor})



`;
}

module.exports = generateMarkdown;
