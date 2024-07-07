const fs = require('fs')
const inquirer = require('inquirer')
const colors = require('colors')

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Whats the title of your README?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Whats your project about?',
      name: 'description1',
    },
    {
        type: 'input',
        message: 'What inspired you to make this?',
        name: 'description2',
      },
      {
        type: 'input',
        message: 'Any plans for future development?',
        name: 'description3',
      },
    {
      type: 'input',
      message: 'Please list outside source names if you used any. Type N/A if none:',
      name: 'credits1',
    },
    {
        type: 'input',
        message: 'Please copy/paste urls for credits here.(RC to paste):',
        name: 'credits2',
      },
     {
      type: 'list',
      message: 'what license did you use?',
      choices: ["MIT License",'Apache License 2.0','BSD 2-Clause "Simplified" License','The Unlicense',"Mozilla Public License 2.0", "None"], 
      name: 'license',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
      },
      {
        type: 'input',
        message: 'What is your best contact email?',
        name: 'email',
      },
  ])
  .then((response) => {
    const myreadme = `
# ${response.title}
## Description
${response.description1}.${response.description2}.${response.description3}
## Credits
Website Name:${response.credits1}-

URL:${response.credits2}

## License
${response.license}
## Contact Me:

My GitHub Account:
https://github.com/${response.github}

My Email Address:
${response.email}
    `
        fs.writeFile('README.md', myreadme, (err) => { 
            err ? console.error(err) : console.log('README.md Generated!')})
       
  });

 


