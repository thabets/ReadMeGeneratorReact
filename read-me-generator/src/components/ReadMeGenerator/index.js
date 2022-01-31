import React from "react";
import { Form, Col,Row, FloatingLabel,Button, FormLabel } from "react-bootstrap";

function ReadMeGenerator() {
  return (
    <div>
      <Form>
        <Row>
          <Col>
            <FormLabel>
              Please Insert The Name Of The Project/Application
            </FormLabel>
            <Form.Control placeholder="Project Name"></Form.Control>
            <FormLabel>
              Please Insert The Name Of The Project/Application
            </FormLabel>
            <Form.Control placeholder="Creator" />
            <FormLabel>
              Please Insert The Name Of The Project/Application
            </FormLabel>
            <Form.Control placeholder="Contributors" />
            <FormLabel>
              Please Insert The Name Of The Project/Application
            </FormLabel>
            <FloatingLabel controlId="floatingTextarea" label="Description">
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </FloatingLabel>
            <FormLabel>
              Please Insert The Name Of The Project/Application
            </FormLabel>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Installation Requirements"
            >
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel controlId="floatingTextarea" label="Image Path">
              <Form.Control as="textarea" style={{ height: "100px" }} />
            </FloatingLabel>
            <Form.Control placeholder="Active Link" />
            <Form.Control placeholder="Repository Link" />
            <Form.Control placeholder="Contact Email" />
            <Form.Control placeholder="Contact #" />
            <Form.Select aria-label="License">
              <option>Please Select a License for this Project</option>
              <option value="1">MIT</option>
              <option value="2">IBM</option>
              <option value="3">ISC</option>
              <option value="4">Mozilla</option>
              <option value="5">Apache 2.0</option>
              <option value="6">Boost</option>
              <option value="7">BSD</option>
              <option value="8">None</option>
            </Form.Select>
          </Col>
        </Row>
      </Form>
      <Button variant="dark" className="center">
        Submit
      </Button>
    </div>
  );
}

export default ReadMeGenerator;
