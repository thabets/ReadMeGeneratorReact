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

  //Function to render the license link
  function renderLicenseLink(license) {
    if (license == "MIT") {
      return "(https://opensource.org/licenses/MIT)";
    } else if (license == "IBM") {
      return "(https://opensource.org/licenses/IPL-1.0)";
    } else if (license == "ISC") {
      return "(https://opensource.org/licenses/ISC)";
    } else if (license == "Mozilla") {
      return "(https://opensource.org/licenses/MPL-2.0)";
    } else if (license == "Apache 2.0") {
      return "(https://opensource.org/licenses/Apache-2.0)";
    } else if (license == "Boost") {
      return "(https://www.boost.org/LICENSE_1_0.txt)";
    } else if (license == "BSD") {
      return "(https://opensource.org/licenses/BSD-3-Clause)";
    } else {
      return "None";
    }
  }
  let licenseLink = renderLicenseLink(license);

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
          <br></br># Table of Content
          <br></br>
          <br></br>## [Project Name](#project-name)
          <br></br>## [Project Creator](#project-creator)
          <br></br>## [Description](#description)
          <br></br>## [Prerequisites for Use](#prerequisites)
          <br></br>## [Installation](#installing)
          <br></br>## [Screenshot](#screenshot)
          <br></br>## [Active Url](#active-url)
          <br></br>## [Repository Link](#repository-link)
          <br></br>## [Contributing To](#contributing-to)
          <br></br>## [Contributors](#contributors)
          <br></br>## [Contact](#contact)
          <br></br>## [license](#license)
          <br></br>
          <br></br># Project name
          {projectName}
          <br></br>
          <br></br># Project Creator
          {creator}
          <br></br>
          <br></br># Description
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
          ## Screenshot<br></br>
          <br></br>
          ![Screenshot]({imagePath})<br></br>
          <br></br>
          ## Active Url<br></br>
          <br></br> Here is the link to the active site: {ActiveLink}
          <br></br>
          <br></br>
          ## Repository<br></br>
          <br></br> Link Here is the link to the Github Repository: <br></br>
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
          <br></br>
          ## Contact
          <br></br>
          <br></br>
          If you want to contact me you can reach me at {contactEmail} or{" "}
          {contactNum}.<br></br>
          <br></br>## License<br></br>
          <br></br> This project uses the following license: {licenseLink}
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
