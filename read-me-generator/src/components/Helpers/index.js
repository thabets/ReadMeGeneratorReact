import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import ReadMeGenerator from "../ReadMeGenerator";

function handleSubmit(ReadMeGenerator) {
  const license = document.getElementById("11").value;
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
  
  return (
    <div>
      <Card className="pd mar border">
        <Card.Body className="text-center">
          Please Copy Your Generated ReadMe Below for { projectName }
        </Card.Body>
        <Card.Text>
          { license }# Table of Content ## [Project Name](#project-name) ##
          [Project Creator](#project-creator) ## [Description](#description) ##
          [Prerequisites for Use](#prerequisites) ## [Installation](#installing)
          ## [Screenshot](#screenshot) ## [Active Url](#active-url) ##
          [Repository Link](#repository-link) ## [Contributing
          To](#contributing-to) ## [Contributors](#contributors) ##
          [Contact](#contact) ## [license](#license) # Project name
          { projectName }# Project Creator
          { creator }# Description
          { description }
          ## Prerequisites Before you begin, ensure you have met the following
          requirements: * You have installed the latest version of Node.js * You
          have a Windows/Linux/Mac machine. * You have read
          guide/documentation_related_to_project. ## Installing To install{" "}
          { projectName }, follow these steps:
          { installReq }
          ## Screenshot
          {/* ![Screenshot](${data.screenshot}) */}
          ## Active Url Here is the link to the active site: { ActiveLink }
          ## Repository Link Here is the link to the Github Repository:{" "}
          { repositoryLink }
          ## Contributing to To contribute to { projectName }, follow these
          steps: 1. Fork this repository. 2. Create a branch: \`git checkout -b
          branch_name\`. 3. Make your changes and commit them: \`git commit -m
          'commit_message'\` 4. Push to the original branch: \`git push origin{" "}
          { projectName }/location\` 5. Create the pull request. Alternatively
          see the GitHub documentation on [creating a pull
          request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
          ## Contributors Thanks to the following people who have contributed to
          this project:
          { contributors }
          ## Contact If you want to contact me you can reach me at{" "}
          { contactEmail } or { contactNum }. ## License This project uses
          the following license: { license }
        </Card.Text>
      </Card>
    </div>
  );
}

export default handleSubmit;
