function renderLicenseBadge(data) {
  if (data.license === "Apache license 2.0") {
    return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
  } else if (data.license === "GNU General Public License v3.0") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)]";
  } else if (data.license === "Mozilla Public License 2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
  } else if (data.license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
  } else if (data.license === "None") {
    return "";
  }
}

function renderLicenseLink(data) {
  if (data.license === "Apache license 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "GNU General Public License v3.0") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "Mozilla Public License 2.0") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else if (data.license === "MIT License") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (data.license === "None") {
    return "";
  }
}

function renderLicenseSection(data) {
  if (data.license !== "None") {
    return `This project is licensed under the ${data.license}`;
  } else {
    return "N/A";
  }
}

function generateMarkdown(data) {
  return `# ${data.title} \n
  ${renderLicenseBadge(data)}${renderLicenseLink(data)}

  ## Description
  
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Contributions](#how-to-contribute)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${data.installation}
  
  ## Usage

  ${data.usage}

  ## Credits
  
  ${data.credits}

  ## License

  ${renderLicenseSection(data)}

  ## How to Contribute
  
  ${data.contributions}
  
  ## Tests
  
  ${data.tests}

  ## Questions
  
  My work can be found on Github at [${data.username}](https://www.github.com/${data.username})

  If you have any further questions you can contact me at my email at: [${
    data.email
  }](mailto:${data.email})


`;
}

module.exports = { generateMarkdown };
