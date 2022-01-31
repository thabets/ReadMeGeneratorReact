import React from "react";
import { Form, Col, FloatingLabel } from "react-bootstrap";

function ReadMeGenerator() {
  return (
    <div>
      <Form>
        <Col>
          <Form.Control placeholder="Name of Project?" />
          <Form.Control placeholder="Creator?" />
          <Form.Control placeholder="Contributors" />
          <FloatingLabel controlId="floatingTextarea" label="Description">
            <Form.Control
              as="textarea"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          
        </Col>
      </Form>
    </div>
  );
}

export default ReadMeGenerator;
