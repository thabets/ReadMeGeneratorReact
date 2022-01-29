import React from "react";
import {  Card } from "react-bootstrap";

function About() {
  return (
    <section className="my-5">
      
      <Card>
        <Card.Header>About Me</Card.Header>
        <Card.Body className="pd">
          <blockquote className="blockquote mb-0 pd">
            <p>
              {" "}
              Hi my name is Sallam, I'm a full-stack web developer based out of
              Toronto, Ontario. Initially I started of as an Industrial and
              Operations Engineer out of Portland, Oregon. When I moved to
              Canada almost three years ago I looked towards changing my field
              of work. I worked in different environments from customer service
              for the largest telecom company in the U.S. to working as an
              customs operations engineer for one of the largest logistics
              company in the world. With all these changes I came to the
              realization that I would like to work on computers, particularly
              software.
              <br></br>
              <br></br>
              Given my passion for electronics and the fact that I have built
              countless machines, I looked for different programs that would
              help further my education and found web development. I enrolled at
              the University of Toronto in their SCS Full-Stack Web Development
              Program and fell in love. I have built a good understanding for
              the different technologies involved withing Web Development. The
              program also helped me build a strong foundation in JavaScript,
              HTML, CSS with a wide range of associated technologies such as
              React.js, Node.js, MongoDB, Express.js and the (MERN) technology
              stack.
              <br></br>
              <br></br>
              On my off days when I choose to take some time to myself I enjoy
              traveling and photography. I have a goal to visit as many
              countries as I possibly can but in the meantime I have focused on
              photography. I have made a hobby of it given I have always enjoyed
              the accompanied adventure and what captures your story than that
              perfect image. I have went ahead and uploaded a few pictures from
              my portfolio and I would encourage you to take a look.{" "}
            </p>
          </blockquote>
        </Card.Body>
      </Card>
    </section>
  );
}

export default About;
