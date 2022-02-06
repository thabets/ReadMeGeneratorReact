import  React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";

//Home Page function/content
function Home() {
  //Navigational function to navigate the button to the next page
  const navigate = useNavigate();
  return (
    <div>
      <Card className="text-center pd mar border">
        <Card.Body>
          <Card.Title>Read Me Generator</Card.Title>
          {/* Description of project */}
          <Card.Text>
            This is an application that will allow you to generate a Read Me
            file for your projects on GitHub
          </Card.Text>
          {/* Entry button to the about page */}
          <Button variant="primary" size="lg" onClick={() => navigate("/about")} active>
            Enter
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
