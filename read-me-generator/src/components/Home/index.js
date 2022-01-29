import React from "react";
import { Card, Button } from "react-bootstrap";

function Home() {
  return (
    <Card className="text-center">
      <Card.Body>
        <Card.Title>Read Me Generator</Card.Title>
        <Card.Text>
          This is an application that will allow you to generate a Read Me file
          for your projects on GitHub
        </Card.Text>
        <Button variant="primary"size="lg">Enter</Button>
      </Card.Body>
    </Card>
  );
}

export default Home;
