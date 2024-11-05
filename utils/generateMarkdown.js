// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
  }
  if (license === 'GNU GPLv3.0') {
    return `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
  }
  if (license === 'Apache 2.0') {
    return `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`;
  }
  if (license === 'ISC') {
    return `![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)`;
  }
  return '';

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT](https://mit-license.org/?form=MG0AV3)`;
  }
  if (license === 'GNU GPLv3.0') {
    return `[GNU GPLv3.0](https://www.gnu.org/licenses/gpl-3.0.html?form=MG0AV3#license-text)`;
  }
  if (license === 'Apache 2.0') {
    return `[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.txt)`;
  }
  if (license === 'ISC') {
    return `[ISC](https://www.isc.org/licenses/?form=MG0AV3)`;
  }
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return '';
  }
  return `## License
  This project is under the ${license} license.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
${data.tests}

${renderLicenseSection(data.license)}
See more about this license here, ${renderLicenseLink(data.license)}

## Questions
For any questions or comments, please feel free to contact me at ${data.email}. You can also find more of my work at [${data.github}](https://github.com/${data.github}).`;
}

export default generateMarkdown;
