import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function handleSubmit() {
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
  const license = document.getElementById('11').value;
  return (
    <div>
      <Card className="pd mar border">
        <Card.Body>
          <Card.Title>Your Generated ReadMe</Card.Title>
          <Card.Text>
            ${renderLicenseBadge(data.license)}

# Table of Content
## [Project Name](#project-name)
## [Project Creator](#project-creator)
## [Description](#description)
## [Prerequisites for Use](#prerequisites)
## [Installation](#installing)
## [Screenshot](#screenshot)
## [Active Url](#active-url)
## [Repository Link](#repository-link)
## [Contributing To](#contributing-to)
## [Contributors](#contributors)
## [Contact](#contact)
## [license](#license)

# Project name
${data.title}
# Project Creator
${data.name}

# Description
Project name is \`${data.title}\` This application allows the user to ${
    data.description
  }.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* You have installed the latest version of Node.js
* You have a Windows/Linux/Mac machine.
* You have read guide/documentation_related_to_project>.

## Installing

To install <${data.title}>, follow these steps:

${data.install}

## Screenshot
![Screenshot](${data.screenshot})

## Active Url

Here is the link to the active site: ${data.activeURL}

## Repository Link

Here is the link to the Github Repository: ${data.repository}

## Contributing to
To contribute to <${data.title}>, follow these steps:

1. Fork this repository.
2. Create a branch: \`git checkout -b <branch_name>\`.
3. Make your changes and commit them: \`git commit -m '<commit_message>'\`
4. Push to the original branch: \`git push origin <project_name>/<location>\`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).

## Contributors

Thanks to the following people who have contributed to this project:

<${data.contributor}>

## Contact

If you want to contact me you can reach me at <${data.email}>.

## License

This project uses the following license: [${data.license}]${renderLicenseLink(
    data.license
  )}.

        </Card.Text>
        
        
        
        </Card.Body>







</Card>





    </div>
  );
}

export default handleSubmit;
