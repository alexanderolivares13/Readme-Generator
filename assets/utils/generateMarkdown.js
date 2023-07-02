// TODO: Create a function that returns a license badge based on which license is passed in

// If there is no license, return an empty string
function renderLicenseBadge({license , username, repo}) {
  if(license){
    return `https://img.shields.io/github/license/${username}/${repo}`
  } else {
    return "";
  }
}

function renderLicenseLink({license}) {
  if (license === "Apache license 2.0") {
    return "(https://opensource.org/licenses/Apache-2.0)"
  } else if (license === "GNU General Public License v3.0") {
    return "(https://www.gnu.org/licenses/gpl-3.0)";
  } else if (license === "Open Software License 3.0") {
    return "(https://opensource.org/license/osl-3-0-php)";
  } else if (license === "Mozilla Public License 2.0") {
    return "(https://opensource.org/licenses/MPL-2.0)";
  } else if (license === "MIT") {
    return "(https://opensource.org/licenses/MIT)";
  } else if (license === "None") {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection({license}) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const link = renderLicenseLink(data);
  const badge = renderLicenseBadge(data);
  const licenseSection = renderLicenseSection(data)
  return `# ${data.title}

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

  ${licenseSection}

  ## How to Contribute
  
  ${data.contributions}
  
  ## Tests
  
  ${data.tests}

  ## Questions
  What is your Github?
  
  My Github can be found at [${data.username}]

  If you have any further questions you can contact me at my email at: [${data.email}](mailto:${data.email})


`;
}

module.exports = {
  badges,
  generateMarkdown,

}
