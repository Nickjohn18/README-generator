// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}
//let link = "https://img.shields.io/badge/license-" + license + "-brightgreen";
//return link;
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
   ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Credits
  ${data.collaborators}

  ## License
  ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
  ${data.license}

  ## Tests
  ${data.tests}

  ## Additional Info
  ${data.email}
`;
}

module.exports = generateMarkdown;
