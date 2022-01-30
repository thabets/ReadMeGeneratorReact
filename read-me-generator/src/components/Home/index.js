import  React, {useState } from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "../About/index"

function Home(props) {
  const [ home, setHome ] = useState('home');
  return (
    <div>
      <Card className="text-center pd mar border">
        <Card.Body>
          <Card.Title>Read Me Generator</Card.Title>
          <Card.Text>
            This is an application that will allow you to generate a Read Me
            file for your projects on GitHub
          </Card.Text>
          <Button variant="primary" size="lg" href="#about" onClick={() => setHome("about")}>
            Enter
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;
