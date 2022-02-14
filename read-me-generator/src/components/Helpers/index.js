import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

//Submit handler to render the final product for copy purposes
function HandleSubmit() {
  //Navigating function using react router dom
  let navigate = useNavigate();

  //Setting variable to extract the information from the webpage to display on the readme
  const projectName = document.getElementById("1").value;
  const creator = document.getElementById("2").value;
  const contributors = document.getElementById("3").value;
  const description = document.getElementById("4").value;
  const installReq = document.getElementById("5").value;
  const imagePath = document.getElementById("6").value;
  const ActiveLink = document.getElementById("7").value;
  const repositoryLink = document.getElementById("8").value;
  const contactEmail = document.getElementById("9").value;
  const contactNum = document.getElementById("10").value;
  const license = document.getElementById("11").value;
  const version = document.getElementById("12").value;
  const technology = document.getElementById("13").value;

  //Function to render the license link
  function renderLicenseLink(license) {
    if (license == "MIT") {
      return "MIT, please click on link for how to use: https://opensource.org/licenses/MIT";
    } else if (license == "IBM") {
      return "IBM, please click on link for how to use: https://opensource.org/licenses/IPL-1.0";
    } else if (license == "ISC") {
      return "ISC, please click on link for how to use: https://opensource.org/licenses/ISC";
    } else if (license == "Mozilla") {
      return "Mozilla, please click on link for how to use: https://opensource.org/licenses/MPL-2.0";
    } else if (license == "Apache 2.0") {
      return "Apache 2.0, please click on link for how to use: https://opensource.org/licenses/Apache-2.0";
    } else if (license == "Boost") {
      return "Boost, please click on link for how to use: https://www.boost.org/LICENSE_1_0.txt";
    } else if (license == "BSD") {
      return "BSD, please click on link for how to use: https://opensource.org/licenses/BSD-3-Clause";
    } else {
      return "The user chooses not provide a license for this project, please contact the user in case";
    }
  }
  let licenseLink = renderLicenseLink(license);

  //Function to provide with the license badge
  function renderLicenseBadge(license) {
    if (license == "MIT") {
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    } else if (license == "IBM") {
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    } else if (license == "ISC") {
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    } else if (license == "Mozilla") {
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    } else if (license == "Apache 2.0") {
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    } else if (license == "Boost") {
      return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license == "BSD") {
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    } else {
      return " ";
    }
  }
  let licenseBadge = renderLicenseBadge(license);

  //Function to render the technologies utilized
  function techFunc(technology) {
    // Spliting the items of technologies in an array
    let tech = technology.split(",");
    //Setting text variable for technologies used to be put into
    let technologies = "";
    //For loop to go through all elements in array
    for (let i = 0; i < tech.length; i++) {
      technologies += "*" + tech[i] + " ";
    }
    //Returning the text put into technologies to be fed to the document
    return technologies;
  }
  // Setting the variable for the function to run in to be fed back to document.
  let techFunction = techFunc(technology);

  // Below is the return of the submit handler that will display the readme to be copied
  return (
    <div>
      <Card className="pd mar border">
        <Card.Body className="text-center">
          Please Copy Your Generated ReadMe Below for {projectName} and paste it
          to your README.md or into github read me editor
        </Card.Body>
        <Card.Text>
          <br></br>
          {licenseBadge}
          ![CurrentVersion](https://img.shields.io/badge/version-
          {version}-green.svg)
          <br></br>
          <br></br>
          ---
          <br></br># Project name <br></br>
          {projectName}
          <br></br>
          <br></br># Project Creator<br></br>
          {creator}
          <br></br>
          <br></br># Description<br></br>
          {description}
          <br></br>
          <br></br>
          ## Prerequisites
          <br></br>
          Before you begin, ensure you have met the following requirements:
          <br></br>* You have installed the latest version of Node.js
          <br></br>* You have a Windows/Linux/Mac machine.
          <br></br>* You have read guide/documentation_related_to_project.
          <br></br>
          <br></br>
          ## Installing
          <br></br>
          <br></br>To install {projectName}, follow these steps:
          <br></br>
          {installReq}
          <br></br>
          <br></br>
          ## Technologies <br></br>
          <br></br>Technologies used are {techFunction}
          <br></br>
          <br></br>
          ## Screenshot<br></br>
          <br></br>
          ![Screenshot]({imagePath})<br></br>
          <br></br>
          ## Active Url<br></br>
          <br></br> Here is the link to the active site: <br></br>
          <br></br>
          {ActiveLink}
          <br></br>
          <br></br>
          ## Repository<br></br>
          <br></br> Here is the link to the Github Repository: <br></br>
          <br></br>
          {repositoryLink}
          <br></br>
          <br></br>
          ## Contributing to<br></br>
          <br></br> To contribute to {projectName}, follow these steps:
          <br></br>1. Fork this repository.
          <br></br>2. Create a branch: \`git checkout -b branch_name\`.
          <br></br>3. Make your changes and commit them: \`git commit -m
          'commit_message'\`
          <br></br>4. Push to the original branch: \`git push origin{" "}
          {projectName}/location\`
          <br></br>5. Create the pull request.
          <br></br>
          <br></br>Alternatively see the GitHub documentation on [creating a
          pullrequest](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
          <br></br>
          <br></br>
          ## Contributors<br></br>
          <br></br>
          Thanks to the following people who have contributed to this project:
          <br></br>
          <br></br>
          {contributors}
          <br></br>
          <br></br>## License<br></br>
          <br></br> This project is licensed under the following license:
          <br></br>
          <br></br> {licenseLink}
          <br></br>
          <br></br>
          ## Contact
          <br></br>
          <br></br>
          If you want to contact me you can reach me at {contactEmail} or{" "}
          {contactNum}.<br></br>
          <br></br>
        </Card.Text>
      </Card>

      {/* A return button incase there are changes that need to be done */}
      <Card className="mar3">
        <Button variant="primary" onClick={() => navigate("/readMeGenerator")}>
          Return
        </Button>
      </Card>
    </div>
  );
}

export default HandleSubmit;
