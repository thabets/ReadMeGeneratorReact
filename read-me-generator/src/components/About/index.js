import React from "react";
import {  Card, Button } from "react-bootstrap";

function About() {
  return (
    <section className="my-5 mar">
      
      <Card>
        <Card.Header>About The Application</Card.Header>
        <Card.Body className="pd ">
          <blockquote className="blockquote mb-0 pd">
            <p>
              {" "}
              Hi my name is Sam, I'm a full-stack web developer based out of
              Toronto, Ontario. Initially I started of as an Industrial and
              Operations Engineer out of Portland, Oregon. I did this project because I enjoy optimizing and streamlining processes. 
              <br></br>
              <br></br>
              This application will function was developed utilizing React, Javascript and React Bootstrap to generate a full Read Me file for github. 
              <br></br>
              <br></br>
              Just fill in the information required and press the process button at the bottom and it will generate the file for you to swap with the file generated from github. The file will naturally have all the tags and structure for github. In the case you leave any sections empty the app will not fill it in and feel free to delete the header from your file.
              <br></br>
              <br></br>
              If you have any comments, questions or even recommendations for that might be missing and could be updated feel free to reach out to me on LinkedIn, Instagram or even Github found in the link bellow. I am leaving this as an open source project so feel free to use it as you wish.
              {" "}
            </p>
          </blockquote>
          <Button variant="primary" size="lg" href="#application" className=" center" > Go To Application</Button>
        </Card.Body>
      </Card>
    </section>
  );
}

export default About;
