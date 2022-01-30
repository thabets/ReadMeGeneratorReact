import  React, {useState} from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../About/index"

function Home(props) {
  const navigate = useNavigate();
  return (
    <div>
      <Card className="text-center pd mar border">
        <Card.Body>
          <Card.Title>Read Me Generator</Card.Title>
          <Card.Text>
            This is an application that will allow you to generate a Read Me
            file for your projects on GitHub
          </Card.Text>
          <Button variant="primary" size="lg" onClick={() => navigate("/about")} active>
            Enter
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
